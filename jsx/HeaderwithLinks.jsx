var HeaderwithLink = React.createClass({
    render: function () {
        return (
            <ul className="nav nav-tabs small">
                <li>
                    <a href="#" className="active"><span className="glyphicon glyphicon-list-alt"></span> Overview</a>
                </li>
                <li><a href="#"><span className="glyphicon glyphicon-inbox"></span> Open Offers</a>
                </li>
                <li><a href="#"><span className="glyphicon glyphicon-calendar"></span> Forthcoming Offers</a>
                </li>
                <li><a href="#"><span className="glyphicon glyphicon-check"></span> Closed Offers</a>
                </li>
            </ul>
        )
    }
});

ReactDOM.render(<HeaderwithLink />, document.getElementById('content'));
var HighLight = React.createClass({
    render: function () {
        return (
            <div  className="alert alert-default">{this.props.data}</div>
        );
    }
});
var Panel = React.createClass({
    render: function () {
        return (
            <div className="panel panel-alert">
                <div className="panel-heading ">
                    <strong className="sub-heading">HIGHLIGHTS (KEY ISSUES)</strong>
                </div>
                <div className="panel-body">
                        {this.props.data.map(function (d,i) {
                            return <HighLight key={i} data={d.data}/>
                        })}
                </div>
            </div>
        );
    }
});
var Calender = React.createClass({
    render: function () {
        var headerComponents = this.generateHeaders(),
            rowComponents = this.generateRows();

        return (
            <table className="table table-bordered" data-toggle="table">
                <thead><tr>{headerComponents}</tr></thead>
                <tbody>{rowComponents}</tbody>
            </table>
        );
    },

    generateHeaders: function () {
        var cols = Object.keys(this.props.data[0]);
        return cols.map(function (key, i) {
            return <th className="sub-heading" data-sortable="true" key={i}>{key}</th>;

        });
    },

    generateRows: function () {
        var data = this.props.data;
        var cols = Object.keys(this.props.data[0]);
        return data.map(function (item, i) {
            var cells = cols.map(function (colData, i) {
                return <td key={i} > {item[colData]} </td>;
            });
            return <tr key={i}>{cells}</tr>;
        });
    }
});
var Pills = React.createClass({
    render: function () {
        var generateTabs = this.generateTabs(),
            generateTabContent = this.generateTabContent();
        return (
            <div className="well">
                <ul className="nav nav-pills small" id="tabs">
                    { generateTabs}
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
    { name: 'IPO', class: 'active', content: 'Calender' },
    { name: 'RBI', class: '', content: 'Calender' }];
//ReactDOM.render(<Pills cols={cols} />, document.getElementById('content'));
var dates = [
    { "monday": "2", "tuesday": "3", "wednesday": "4", "thursday": "5", "friday": "6" }, { "monday": "9", "tuesday": "10", "wednesday": "11", "thursday": "12", "friday": "13" }, { "monday": "16", "tuesday": "17", "wednesday": "18", "thursday": "19", "friday": "20" }, { "monday": "23", "tuesday": "24", "wednesday": "25", "thursday": "26", "friday": "27" }, { "monday": "30", "tuesday": "31", "wednesday": "", "thursday": "", "friday": "" }
];
var data = [
    { data: 'Power Finance Corp raised Rs 1,000 crore via 5-year bond at 0.45% coupon' },
    { data: 'Power Finance Corp raised Rs 1,000 crore via 5-year bond at 9.45% coupon' }
];
//ReactDOM.render(<Panel data={data} />, document.getElementById('content'));
//ReactDOM.render(<Calender  data={dates} />, document.getElementById('content'));
