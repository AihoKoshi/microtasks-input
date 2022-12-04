import React, {ChangeEvent} from 'react';


type InputPropsType = {
    inputState: string
    setInputState: (inputState: string)=>void
}

export const Input = (props: InputPropsType) => {

    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputState(event.currentTarget.value)
    }
    return (
        <div>
            <input value={props.inputState} onChange={inputOnChangeHandler} />
        </div>
    );
};