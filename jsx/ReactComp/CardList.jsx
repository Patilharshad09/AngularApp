const Card = (props) => {
    return (
        <div className='col-sm-1'>
            <img width='50' src={props.avatar_url} />
            <div><strong>{props.login}</strong></div>
        </div>
    );
};

const CardList = (props) => {
    return (
        <div>
            {props.cards.map((card, i) => <Card key={i} {...card} />)}
        </div>
    );
};

class Form extends React.Component {
    state = {
        userName: ''
    };
    handleSubmit = (event) => {
        event.preventDefault();
        $.ajax({
            dataType: 'json',
            type: 'GET',
            url: 'https://api.github.com/users/' + this.state.userName,
            success: function (data) {
                this.props.onSubmit(data);
            }.bind(this)
        });
    };
    inputchanged = (event) =>  {
        this.setState({
            userName: event.target.value
        });
    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.inputchanged} />
                <button type="submit">Add Card</button>
            </form>
        );
    }
};

class App extends React.Component {
    state = {
        cards: []
    };
    addnewcard = (data) => {
        this.setState(prevState=>({
            cards: prevState.cards.concat(data)
        }));
    };
    render() {
        return (
            <div>
                <Form onSubmit={this.addnewcard} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
};
ReactDOM.render(<App />, document.getElementById('content'));