import './Icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck, faEdit, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

export const Icons = function () {

    return(
        <div className="Icons">
            <FontAwesomeIcon className="iCheck" icon={faCircleCheck}/>
            <FontAwesomeIcon className="iEdit" icon={faEdit}/>
            <FontAwesomeIcon icon={faTimesCircle}/>
        </div>
    );
}