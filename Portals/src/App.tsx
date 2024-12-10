import { Foo } from "./Foo"
import { FooPortal } from "./FooPortal"
import { LabelWithTiiltip } from "./LabelWithTooltip"
import { Section } from "./Section"

export const App = () => {

  return <>
    {/* <Foo><h1>Not in portal</h1></Foo>
    <FooPortal>In the portal </FooPortal> */}

    <Section>
      <LabelWithTiiltip text="lorem Ipsum" tooltip="Dolor sit amet"/>
    </Section>
  </>
}