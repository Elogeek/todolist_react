import './ListItem.css';
import {Icons} from "../Icons/Icons";


export const ListItem = function ({list, setIsListUpdated, lists}) {

    function handleAddCheckedClick() {
        list.checked = true;
        setIsListUpdated(true);
    }

    return(
        <div className="ListItem">
            <div>
                {list.checked === false ? <input className="inputCheck" type="checkbox" onClick={handleAddCheckedClick} /> : <input className="inputCheck" type="checkbox" checked />}
                <p className={"nameList" + (list.checked === true ? " line_through" : "")}>{list.name}</p>
            </div>
            <Icons key={list.id} list={list} lists={lists} setIsListUpdated={setIsListUpdated} />
        </div>
    );
}
