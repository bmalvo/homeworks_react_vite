import { Section } from "./Section/Section"
import { SecondTooltip } from "./Tooltip/SecondTooltip"
import { Tooltip } from "./Tooltip/Tooltip"

export const App = () => {
  
  return <>
    <Section>
    <Tooltip  text='lorem kalafiorem'>
      <div>element 1</div>
      </Tooltip>
      <SecondTooltip text='lorem kalafiorem'>
      <div>element 2</div>
    </SecondTooltip>
    </Section>
  </>
}