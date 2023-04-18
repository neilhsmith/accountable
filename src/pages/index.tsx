import { NextPageWithLayout } from "@/features/app/types"
import { ReactElement } from "react"
import { GetServerSideProps } from "next"
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"
import Layout from "@/features/app/layout"
import Button from "@/common/components/button"
import { HiPlus } from "react-icons/hi"

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

const Home: NextPageWithLayout = () => {
  return (
    <main id="id">
      <p>small</p>
      <Button size="sm">Button</Button>
      <Button size="sm" theme="secondary">
        Button
      </Button>
      <Button size="sm" rounded>
        <HiPlus />
      </Button>
      <p>md</p>
      <Button size="md">Button</Button>
      <Button size="md" theme="secondary">
        Button
      </Button>
      <br />
      <br />
      <br />
      <Button size="md" rounded>
        <HiPlus />
      </Button>
      <br />
      <br />
      <br />
      <p>lg</p>
      <Button size="lg">Button</Button>
      <Button size="lg" theme="secondary">
        Button
      </Button>
      <br />
      <br />
      <br />
      <Button size="lg" rounded>
        <HiPlus />
      </Button>
      <br />
      <br />
      <br />
      <Button>idk</Button>
    </main>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout bgColor="bg-page-bg-tan" key="home">
      {page}
    </Layout>
  )
}

export default Home
