import { Actions } from "./components/InfoCard/components/Actions"
import { Description } from "./components/InfoCard/components/Description"
import { Title } from "./components/InfoCard/components/Title"
import { InfoCard } from "./components/InfoCard/InfoCard"
import { InfoData } from "./types"

const data: InfoData = {
  title: 'Lorem ipsum',
  description: 'dolor sit amet',
  label: 'click me! 🍌'
}

export const App = () => {

  return <>
    <InfoCard item={data}>
      <Title/>
      <Description />
      <Actions />
    </InfoCard>
    <InfoCard item={data} >
      <Title  />
      <Description />
    </InfoCard>
    <InfoCard item={data} >
      <Description />
    </InfoCard>
    <InfoCard item={data} >
      <Title />
      <Actions />
    </InfoCard>
  </>
}