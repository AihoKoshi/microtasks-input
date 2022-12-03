import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    addMessage: (localState: string)=>void
}

const FullInput = (props: FullInputType) => {
    let [inputState, setInputState] = useState('')
    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputState(event.currentTarget.value)
    }
    const buttonOnClickHandler = () => {
        props.addMessage(inputState)
        setInputState('')
    }
    return (
        <div>
            <input value={inputState} onChange={inputOnChangeHandler}/>
            <button onClick={buttonOnClickHandler}>+</button>
        </div>
    );
};

export default FullInput;