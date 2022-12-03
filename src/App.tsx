import React, {useState} from 'react';
import './App.css';

type MessageType = {
    message: string
}

function App() {

    let [message, setMessage] = useState<Array<MessageType>>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    return (
        <div className="App">
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            {message.map((el, index) => {
                return <div key={index}>{el.message}</div>
            })}
        </div>
    );
}

export default App;
