var Pills = React.createClass({
    render: function () {
        var generateTabs = this.generateTabs(),
            generateTabContent = this.generateTabContent();
        return (
            <div className="well">
                <ul className="nav nav-pills small" id="tabs">
                    {generateTabs}
                </ul>

                <div className="tab-content">
                    {generateTabContent}
                </div>
            </div>
        );
    },
    generateTabs: function () {
        var data = this.props.cols;
        return data.map(function (key, i) {
            return <li key={i} className={key.class} >
                <a href={"#tab" + i} data-toggle="pill">{key.name}</a>
            </li>

        });

    },
    generateTabContent: function () {
        var data = this.props.cols;
        return data.map(function (key, i) {
            return <div key={i} className={`tab-pane ${key.class}`} id={"tab" + i}>{key.content}</div>

        });
    }
});
var cols = [
    { name: 'Menu 1', class:'active', content: '1. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' },
    { name: 'Menu 2', class: '', content: '2. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' },
    { name: 'Menu 3', class: '', content: '3. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' },
    { name: 'Menu 4', class: '', content: '4. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.' }];
ReactDOM.render(<Pills cols={cols} />, document.getElementById('content'));