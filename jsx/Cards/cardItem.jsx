
var Card = React.createClass({
    render: function () {
        var row;
        row = this.props.data.map(function (d, i) {
            var addon = '';
            if (d.isshowmore) {
                addon = <small className="text-muted"><a href="#">{d.showmoretext}</a></small>
            }
            if (d.islogin) {
                addon = <span className="card-text"><small className="text-muted"><a href="#">{d.logintext}</a></small></span>
            }
            if (d.contentwithheader) {
                return <div key={i} className={`card ${d.inverse} ${d.style}`}>
                    <div className="card-block">
                        <h4 className="card-title">{d.title}</h4>
                        <p className="card-text">{d.text} {addon}</p> </div>
                </div>
            }
            else if (d.contentwithoutheader) {
                return <div key={i} className={`card text-center ${d.inverse} ${d.style}`}>
                    <div className="card-block">
                        <p className="card-text">{d.text}</p> </div>
                </div>
            }
            else if (d.contentwithlogo) {

                return <div key={i} className={`card text-center ${d.inverse} ${d.style}`}>
                    <div className="card-block">
                        <h1><span className={`glyphicon glyphicon-${d.logo}`}></span></h1>
                        <p className="card-text">{d.text} {addon}</p> </div>
                </div>
            }
            else if (d.isflip) {
                return <div key={i} className={`card text-center card-inverse ${d.style}`}>
                    <div className="card-block">
                        <h1><span className={`glyphicon glyphicon-${d.logo}`}></span></h1>
                        <p className="card-text">{d.text} {addon}</p>
                    </div>
                </div>
            }
            else if (d.isSearch) {
                return <div key={i} className={`card ${d.inverse} ${d.style}`}>
                    <div className="card-block">
                        <h4 className="card-title">{d.title}</h4>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter your Email-Id" />
                            <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <i className="glyphicon glyphicon-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            }
        }.bind(this));

        return (
            <div className="card-columns">
                {row}
            </div>
        );
    }
});


var data = [
    { inverse: "", style: "red col-sm-8", title: 'New to bonds?', text: 'View bond basics and learn about bonds from start', contentwithheader: true },
    { inverse: "", style: "red col-sm-8", title: 'Bond Center', text: 'View reports & compare bonds before investing.', contentwithheader: true },
    { inverse: "", style: "sky col-sm-8", title: 'Research', text: 'Keep track of new reports and media', contentwithheader: true },
    { inverse: "", style: "red col-sm-4", contentwithlogo: true, logo: "briefcase", text: "Manage Portfolio" },
    { inverse: "", style: "sky col-sm-4", contentwithlogo: true, logo: "comment", text: "Bid & Ask" },
    { inverse: "", style: "col-sm-8", title: "Trending now >", text: "", contentwithheader: true },
    { inverse: "", style: "red col-sm-6", title: "Are you an Investor?", text: "Build your profile & start now>", contentwithheader: true },
    { inverse: "", style: "sky col-sm-6", contentwithlogo: true, logo: "book", text: "IM Directory" },
    { inverse: "", style: "col-sm-8", text: "RBI cuts Repo Rate by 25 basis points to 7.25%", contentwithoutheader: true },
    {
        inverse: "", style: "col-sm-8", isshowmore: true, showmoretext: 'know more', title: 'About IndiaBonds', text: 'IndiaBonds is India’s first portal dedicated to debt markets. Learn about debt markets, track primary and secondary bond market data and much more. IndiaBonds provides a platform for institutions and individual investors, sovereign and corporate issuers, financial intermediaries to easily access details of various bonds and debt instruments available in the market', contentwithheader: true
    },
    { inverse: "", style: "col-sm-6", islogin: true, logintext: "Login here", contentwithlogo: true, logo: "user", text: "Have an account ?" },
    { inverse: "inverse", style: "col-sm-8 darkgrey", title: "Subscribe updates by email", isSearch: true, },
    { inverse: "", style: "red col-sm-6" , contentwithlogo: true, logo: "ruble", text: "facebook" },
    { inverse: "", style: "sky col-sm-6", contentwithlogo: true, logo: "yen", text: "@indiabonds" },
    { inverse: "", style: "sky col-sm-6", contentwithlogo: true, logo: "envelope", text: "contact@indiabonds.in" },
];

var Container = React.createClass({
    render: function () {
        return (
            <div className="row">
                <Card data={this.props.data} />
            </div>
        );
    }
});

ReactDOM.render(<Container data={data} />, document.getElementById('content'));