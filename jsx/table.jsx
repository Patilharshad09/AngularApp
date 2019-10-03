
var data = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Clark', lastName: 'Kent' }
];

var Table = React.createClass({

    render: function () {
        var headerComponents = this.generateHeaders(),
            rowComponents = this.generateRows();

        return (
            <table className="table table-hover" data-toggle="table">
                <thead><tr>{headerComponents}</tr></thead>
                <tbody>{rowComponents}</tbody>
            </table>
        );
    },

    generateHeaders: function () {
        var cols = Object.keys(data[0]);
        return cols.map(function (key, i) {
            return <th data-sortable="true" key={i}>{key}</th>;
            
        });
    },

    generateRows: function () {
        var data = this.props.data;
        var cols = Object.keys(data[0]);
        return data.map(function (item,i) {
            var cells = cols.map(function (colData,i) {
                return <td key={i}> {item[colData]} </td>;
            });
            return <tr key={i}>{cells}</tr>;
        });
    }
});

ReactDOM.render(<Table cols={data[0]} data={data} />, document.getElementById('content'));
    