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
      <InfoCard.Title/>
      <InfoCard.Description />
      <InfoCard.Actions />
    </InfoCard>
    <InfoCard item={data} >
      <InfoCard.Title  />
      <InfoCard.Description />
    </InfoCard>
    <InfoCard item={data} >
      <InfoCard.Description />
    </InfoCard>
    <InfoCard item={data} >
      <InfoCard.Title />
      <InfoCard.Actions />
    </InfoCard>
  </>
}