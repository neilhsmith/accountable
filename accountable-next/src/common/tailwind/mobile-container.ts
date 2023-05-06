// FIXME: i'm just making TS happy here but there's probably an
// actual type included w/ tailwind or a DefinitelyTyped project
type TailwindPluginProps = {
  addComponents: (_: Record<string, unknown>) => void
}

const container = ({ addComponents }: TailwindPluginProps) => {
  addComponents({
    ".container": {
      maxWidth: "100%",
      paddingLeft: "6px",
      paddingRight: "6px",
      marginLeft: "auto",
      marginRight: "auto",
      "@screen lg": {
        maxWidth: "764px",
        paddingLeft: "0",
        paddingRight: "0",
      },
    },
  })
}

export default container
