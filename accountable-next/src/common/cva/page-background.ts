import { cva, type VariantProps } from "class-variance-authority"

const pageBackgroundCVA = cva("", {
  variants: {
    pathname: {
      "/": "bg-page-home",
      "/login": "bg-page-login",
      "/register": "bg-page-register",
    },
  },
})

// TODO: is there an alt for this type? i need it so that usePathname's result can be given to the cva
export type AppRoute = "/" | "/login" | "/register"

export type PageBackgroundVariant = VariantProps<typeof pageBackgroundCVA>
export default pageBackgroundCVA
