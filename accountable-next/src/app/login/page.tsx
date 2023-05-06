"use client"

import theme from "@/app/theme"

const Login = () => {
  return (
    <>
      <style global jsx>{`
        body {
          background-color: ${theme.colors.page.login};
        }
      `}</style>
      <div>login page</div>
    </>
  )
}

export default Login
