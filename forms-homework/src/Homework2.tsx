import { ChangeEvent, useState } from "react";
import { TextStats } from "./TextStats";

export const Homework2 = () => {

    const [text, setText] = useState('');
    const [stats, setStats] = useState('hide');

    const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleStatsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStats(e.target.value);
    }

    return <>
        
        <div>
        <label htmlFor="text">Text</label>
        <textarea name='text' id='text' value={text}  onChange={handleTextChange}/>
        </div>

        <div>
          <label htmlFor="show">Show stats</label>
          <input type="radio" name='stats' value='show' id='show'
                   checked={stats === 'show'} onChange={handleStatsChange}/>
        </div>

        <div>
        <label htmlFor="hide">Hide stats</label>
            <input type="radio" name='stats' value='hide' id='hide'
                checked={stats === 'hide'} onChange={handleStatsChange}/>
        </div>
        {stats === 'show' && <TextStats text={ text} />}
    </>
};