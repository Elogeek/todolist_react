import './List.css';
import {ListItem} from "../ListItem/ListItem";
import {faClose} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const List = function ({lists, setIsListUpdated}) {

    /**
     *  Check click of the checkbox item list
     *  fr: check si une case (item de la list) est cliquée
     * @returns {number}
     */
    function countChecked() {
        let checkedList = [];
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].checked === true) {
                checkedList.push(lists[i].id);
            }
        }
        return checkedList.length;
    }

    /**
     * Remove click of the checkbox item list
     */
    function handleRemoveCheckedClick() {
        lists.map(list => list.checked = false);
        setIsListUpdated(true);
    }

    return(
    <div className="todo">
        <div className="List">
           <p>
               {lists.map(list =>
                <ListItem key={list.id} list={list} lists={lists} setIsListUpdated={setIsListUpdated}/>)}
           </p>
            <div>
               <div className="tasks">
                   <span>{countChecked()}</span> of <span>{lists.length}</span> tasks done</div>
                <button id="remove" onClick={handleRemoveCheckedClick}>Remove checked <span><FontAwesomeIcon icon={faClose}/></span></button>
            </div>
        </div>
    </div>
    );
}