import { Auth } from "@supabase/auth-ui-react"
import { NextPageWithLayout } from "@/features/app/types"
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import { ReactElement } from "react"
import Layout from "@/features/app/layout"
import { GetServerSideProps } from "next"
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx)
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return {
    props: {
      initialSession: session,
    },
  }
}

const Login: NextPageWithLayout = () => {
  const session = useSession()
  const supabase = useSupabaseClient()

  return (
    <main id="id">
      {session ? (
        <div>already logged in</div>
      ) : (
        <Auth providers={["discord"]} supabaseClient={supabase} />
      )}
    </main>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <Layout bgColor="bg-page-bg-green">{page}</Layout>
}

export default Login
