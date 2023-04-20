import { NextPageWithLayout } from "@/features/app/types"
import { ReactElement, useState } from "react"
import { GetServerSideProps } from "next"
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import Layout from "@/features/app/layout"
import Card from "@/common/components/card"
import Button from "@/common/components/button"
import { useRouter } from "next/router"

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
  const [status, setStatus] = useState<"idle" | "loading">("idle")

  const router = useRouter()
  const supabase = useSupabaseClient()

  const logout = async () => {
    setStatus("loading")
    const result = await supabase.auth.signOut()

    setStatus("idle")
    if (!result.error) {
      router.replace("/")
    }
  }

  return (
    <main id="id">
      <h2 className="uppercase text-3xl text-black-10 tracking-tight">
        Logout
      </h2>
      <Card className="flex flex-col gap-6">
        <div className="mb-12">logo</div>
        <div className="flex gap-4 items-center">
          <p className="grow text-base text-black-2 font-medium text-center ">
            Logging out, but
            <br /> don&apos;t be a stranger!
          </p>
          <div className="text-2xl">👋</div>
        </div>
        <div className="flex flex-col gap-4">
          <Button as="a" href="/dashboard" size="lg">
            No, keep me logged in
          </Button>
          <Button
            theme="secondary"
            size="lg"
            onClick={logout}
            disabled={status === "loading"}
          >
            Yes, log me out
          </Button>
        </div>
      </Card>
    </main>
  )
}

Logout.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout bgColor="bg-page-bg-red" key="logout">
      {page}
    </Layout>
  )
}

export default Logout
