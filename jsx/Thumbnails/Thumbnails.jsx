
var Thumbnail = React.createClass({
    getInitialState: function () {
        return {
            data: [],
            keys: [],
            news: []
        }
    },
    componentDidMount: function () {
        var self = this;
        $.ajax({
            type: 'GET',
            url: 'data/updates',
            success: function (d) {
                self.setState({
                    data: JSON.parse(d)
                });

                keys = $.grep(self.state.data, function (v) {
                    return v.ContentType === "Key Developments";
                });
                news = $.grep(self.state.data, function (v) {
                    return v.ContentType !== "Key Developments";
                });
                self.setState({
                    keys: keys,
                    news: news
                });
            }.bind(this)
        });
    },
    render: function () {
        var cards = this.state.news.map(function (d, i) {
            return
            <li key={i}>
                <span className="glyphicon glyphicon-calendar"></span> <small>{d.postedon}</small>
                <h4>{d.heading}</h4>
                <small>{d.source}</small>
                <span>{d.content}</span>
                <a href="#"><u>read more...</u></a>
            </li>
        });
        return (
            <ul>
                {cards}
            </ul>
        );
    }
});

ReactDOM.render(<Thumbnail />, document.getElementById('carousel'));