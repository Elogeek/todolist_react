import './Container.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

export const Container = function ({lists, setIsListUpdated}) {

    /**
     * Add item of the list
     */
    function handleAddListClick() {
        let newList = document.getElementById("inputList").value;
        lists.push({id: lists.length + 1, name: newList, checked: false});
        setIsListUpdated(true);
        document.getElementById("inputList").value = "";
    }

    return(
    <div className="Container">
        <h1>to do list</h1>
        <div>
            <form className="todoForm">
                <div>
                    <input type="text" placeholder="Name..." name="list" id="inputList"/>
                    <button type="submit" className="addList" onClick={handleAddListClick}><FontAwesomeIcon icon={faPlus}/></button>
                </div>
            </form>
        </div>
    </div>
);
}