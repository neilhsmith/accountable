/**
 * A Tailwind plugin which changes the way containers work. This sets itself at 100% width and with a tiny gutter up
 * to 800px and then locks its width there and centers itself. Useful for building a mobile only UI.
 */

// FIXME: i'm just making TS happy here but there's probably an
// actual type included w/ tailwind or a DefinitelyTyped project
type TailwindPluginProps = {
  addComponents: (_: Record<string, unknown>) => void
}

export default ({ addComponents }: TailwindPluginProps) => {
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
