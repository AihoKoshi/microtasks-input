import React from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {

    const buttonOnclickHandler = () => {
        return props.callBack()
    }
    return (
        <div>
            <button onClick={buttonOnclickHandler}>{props.name}</button>
        </div>
    );
};