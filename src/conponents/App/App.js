import './App.css';
import {Container} from "../Container/Container";
import {List} from "../List/List";
import {useState} from "react";
import React from "react";
import Confetti from "react-confetti";

function App() {

    const ListsItem = [
        {id: 1, name: "Read a manga", checked: false},
        {id: 2, name: "Listen to music", checked: false},
        {id: 3, name: "call the doctor", checked: false},
    ];

    const [lists, setLists] = useState([...ListsItem]);
    const [isListUpdated, setIsListUpdated] = useState(false);

    if (isListUpdated) {
        setLists(lists);
        setIsListUpdated(false);
    }

    // Display confetti
    if(ListsItem.checked === true) {
        <Confetti/>
    }

    return (
        <>
            <Container/>
                <List lists={lists} setIsListUpdated={setIsListUpdated}/>
            <div className="container_confetti">
                <div className="confetti_wrapper">
                    <h3>Congratulations Todolist finish !</h3>
                     <Confetti
                        width={600}
                        height={300}
                     />
                </div>
            </div>
        </>
  );
}

export default App;
