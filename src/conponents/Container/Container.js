import './Container.css';

export const Container = function () {
    
return(
    <div className="Container">
        <h1>to do list</h1>
        <div>
            <form className="todoForm">
                <div>
                    <input type="text" placeholder="Name..." />
                    <input type="submit" name="submit" value="Add item" />
                </div>
            </form>
        </div>
    </div>
);
}