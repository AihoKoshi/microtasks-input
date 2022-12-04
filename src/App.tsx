import React, {useState} from 'react';
import './App.css';
import {Input} from './components/Input';
import {Button} from './components/Button';


function App() {

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [inputState, setInputState] = useState('');
    console.log(inputState)


    const addMessage = (inputState: string) => {
        let newMessage = {message: inputState}
        setMessage([newMessage, ...message])
    }

    const buttonCallBackHandler = () => {
        addMessage(inputState)
        setInputState('')
    }

    return (
        <div className="App">
            <Input inputState={inputState} setInputState={setInputState}/>
            <Button name={'+'} callBack={buttonCallBackHandler} />
            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return <div key={index}>{el.message}</div>
            })}
        </div>
    );
}

export default App;
