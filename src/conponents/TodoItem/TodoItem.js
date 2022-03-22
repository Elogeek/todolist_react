import './TodoItem.css';
import {Icons} from "../Icons/Icons";

export const TodoItem = function (props) {

    return(
        <div className="TodoItem" id={props.id}>
            <div className="list_item">
                <p>
                    name={props.name}
                </p>
                <Icons/>
            </div>
            <div className="lineHorizontal"></div>
        </div>

    );
}