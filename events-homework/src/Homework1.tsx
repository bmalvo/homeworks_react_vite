import { Homework1Button } from "./Homework1Button"
import { Homework1ButtonSecondary } from "./HomeworkButton1Secondary"

const Homework1 = () => {
    const handleClick = (which: string) => {
        console.log(`clicked ${which}`)
    }

    return (<>
        <button onClick={() => handleClick('first')}>First</button>
        <button onClick={() => handleClick('second')}>Second</button>
        <button onClick={() => handleClick('third')}>Third</button>
        <Homework1Button label='First' onClick={ handleClick} />
        <Homework1Button label='Second' onClick={ handleClick} />
        <Homework1Button label='Third' onClick={handleClick} />
        <Homework1ButtonSecondary label='First' onClick={() => handleClick('first')} />
        <Homework1ButtonSecondary label='Second' onClick={() => handleClick('second')} />
        <Homework1ButtonSecondary label='Third' onClick={() => handleClick('third')} />
    </>)
}

export { Homework1 }
