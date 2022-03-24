import './Icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export const Icons = function ({list, setIsListUpdated, lists}) {

    function isLists(value) {
        return value.name === list.name;
    }

    /**
     *  Remove item of the list
     */
    function handleDeleteListClick() {
        let find = lists.find(isLists)
        let index = lists.indexOf(find);
        lists.splice(index, 1);
        setIsListUpdated(true);
    }

    /**
     *  Display le champ update item of the list
     */
    function handleDisplayContainerEditClick() {
        document.getElementById("containerEditList" + list.id).style.display = "flex";
    }

    /**
     *  Cache le champs update of the item list
     */
    function handleDisplayNoneContainerEditClick() {
        document.getElementById("containerEditList" + list.id).style.display = "none";
    }

    /**
     * Update value of the item list
     */
    function handleEditListClick() {
        list.name = document.getElementById("editList" + list.id).value;
        setIsListUpdated(true);
    }

    return(
        <div className="Icons">
            <div>
                {/* eslint-disable-next-line react/style-prop-object */}
                <button className="edit" onClick={handleDisplayContainerEditClick}><FontAwesomeIcon icon={faEdit} /></button>
                <button className="delete" onClick={handleDeleteListClick}><FontAwesomeIcon icon={faTimesCircle} /></button>
            </div>
            <div className="editList" id={"containerEditList" + list.id}>
                <input type="text" id={"editList" + list.id}/>
                <button className="button" onClick={handleEditListClick}>Yes</button>
                <button className="button" onClick={handleDisplayNoneContainerEditClick}><FontAwesomeIcon icon={faTimesCircle} /></button>
            </div>
        </div>
    );

}
