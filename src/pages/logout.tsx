import { NextPageWithLayout } from "@/features/app/types"
import { ReactElement } from "react"
import { GetServerSideProps } from "next"
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import Layout from "@/features/app/layout"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx)
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  }
}

const Logout: NextPageWithLayout = () => {
  const supabase = useSupabaseClient()

  return (
    <main id="id">
      <div className="flex flex-col items-start gap-2 text-base">
        <h2 className="text-2xl">Logout</h2>
        <p>Are you sure you want to logout?</p>
        <button
          className="underline mt-8"
          onClick={() => supabase.auth.signOut()}
        >
          Yes, sign me out
        </button>
      </div>
    </main>
  )
}

Logout.getLayout = function getLayout(page: ReactElement) {
  return <Layout bgColor="bg-page-bg-red">{page}</Layout>
}

export default Logout
