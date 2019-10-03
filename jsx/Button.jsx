const Button = (props) => {
    return <button className={props.class}> <span className={props.logo}></span>{props.text}</button>
};

const Buttongroup = (props) => {
    return
    <div className="btn-group" data-toggle="buttons">
        <label className="btn btn-default">
            <input type="radio" name="options" id="option1" /> Option 1
                </label>
        <label className="btn btn-default">
            <input type="radio" name="options" id="option2" /> Option 2
                 </label>
        <label className="btn btn-default">
            <input type="radio" name="options" id="option3" /> Option 3
                 </label>
    </div>
};

ReactDOM.render(<Button class="btn btn-dafault btn-xs" text="Clck" logo="glyphicon glyphicon-search" />, document.getElementById('content'));