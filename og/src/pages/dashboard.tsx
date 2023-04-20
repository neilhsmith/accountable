import { GetServerSideProps } from "next"
import { NextPageWithLayout } from "@/features/app/types"
import { ReactElement } from "react"
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs"
import Layout from "@/features/app/layout"
import Hero from "@/features/dashboard/hero"

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

const Dashboard: NextPageWithLayout = () => {
  return (
    <main id="main">
      <Hero />
    </main>
  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Dashboard

// const Dashboard: NextPageWithLayout = () => {
//   // using state so we can transition the UI if left open past end of day
//   const [todayInfo, setTodayInfo] = useState<DateInfo>(getDateInfo(new Date()))
//   console.log(todayInfo)
//   // TODO: listen for date change? setTodayInfo, update backend of uncomplete tasks, animate to next day

//   return (
//     <>
//       <div className="flex items-end px-2 mb-20 text-black-20">
//         <div className="grow">
//           <VerticalDateLabel dateInfo={todayInfo} />
//         </div>
//         <div className="w-[40%] sm:w-[40%] md:w-[44%] relative pl-4 sm:pl-6 md:pl-12 pr-2 before:absolute before:w-[2px] before:top-[11%] before:h-[80%] before:left-0 before:bg-black-20">
//           <p>asdfsad</p>
//           <p>asdfsad</p>
//           <p>asdfsad</p>
//           <p>asdfsad</p>
//           <p>asdfsad</p>
//         </div>
//       </div>
//       <div className="m-1">
//         <TaskList />
//       </div>
//     </>
//   )
// }
