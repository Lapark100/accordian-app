import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

const Questions = ({title, info}) => {
    const [isShown, setShown] = useState(false);
    return <article className='question'>
    <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShown(!isShown)}>
        {isShown? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
    </header>
    {isShown && <p>{info}</p>}
    </article>
}

export default Questions;