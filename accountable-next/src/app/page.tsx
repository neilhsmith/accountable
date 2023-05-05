import Button from "@/common/components/button"

export default function Home() {
  return (
    <main id="main">
      <p className="text-black text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus
        porro in dolores ut asperiores, officia cumque expedita obcaecati
        explicabo minus aut facere et, ad quam nam adipisci sit labore.
      </p>
      <div className="flex gap-2 items-center px-10">
        <Button size="sm">hi</Button>
        <Button size="md">hi</Button>
        <Button size="lg">hi</Button>
        <Button size="lg" round>
          hi
        </Button>
      </div>
      <div className="flex gap-2 items-center px-10">
        <Button intent="secondary" size="sm">
          hi
        </Button>
        <Button intent="secondary" size="md">
          hi
        </Button>
        <Button intent="secondary" size="lg">
          hi
        </Button>
        <Button intent="secondary" size="lg" round>
          hi
        </Button>
      </div>
      <div className="flex gap-2 items-center px-10">
        <Button intent="tertiary" size="sm">
          hi
        </Button>
        <Button intent="tertiary" size="md">
          hi
        </Button>
        <Button intent="tertiary" size="lg">
          hi
        </Button>
        <Button intent="tertiary" size="lg" round>
          hi
        </Button>
      </div>
      <div>
        <Button fullWidth>wide boy</Button>
      </div>
    </main>
  )
}
