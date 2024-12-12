import { InfoCard } from "./components/InfoCard/InfoCard"
import { Tabs } from "./components/InfoCard/Tabs"
import { Tab } from "./components/InfoCard/Tabs/components/Tab"
import { InfoData } from "./types"

const data: InfoData = {
  title: 'Lorem ipsum',
  description: 'dolor sit amet',
  label: 'click me! 🍌'
}

export const App = () => {

  return <>
    
    <Tabs>
      <Tab label="first">
        <p>1</p>
      </Tab>
      <Tab label="Second">
        <p>2</p>
      </Tab>
      <Tab label="Second">
        <p>3</p>
      </Tab>
    </Tabs>

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