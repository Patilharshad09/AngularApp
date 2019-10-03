var Login = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <a className="btn big-login" data-toggle="modal" href="javascript:void(0)" onclick="openLoginModal();">Log in</a>
                        <a className="btn big-register" data-toggle="modal" href="javascript:void(0)" onclick="openRegisterModal();">Register</a></div>
                    <div className="col-sm-4"></div>
                </div>
                <div className="modal fade login" id="loginModal">
                    <div className="modal-dialog login animated">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                <h4 className="modal-title">Login with</h4>
                            </div>
                            <div className="modal-body">
                                <div className="box">
                                    <div className="content">
                                        <div className="social">
                                            <a className="circle github" href="#">
                                                <i className="fa fa-github fa-fw"></i>
                                            </a>
                                            <a id="google_login" className="circle google" href="#">
                                                <i className="fa fa-google-plus fa-fw"></i>
                                            </a>
                                            <a id="facebook_login" className="circle facebook" href="#">
                                                <i className="fa fa-facebook fa-fw"></i>
                                            </a>
                                        </div>
                                        <div className="division">
                                            <div className="line l"></div>
                                            <span>or</span>
                                            <div className="line r"></div>
                                        </div>
                                        <div className="error"></div>
                                        <div className="form loginBox">
                                            <form method="" action="" accept-charset="UTF-8">
                                                <input id="email" className="form-control" type="text" placeholder="Email" name="email">
                                                    <input id="password" className="form-control" type="password" placeholder="Password" name="password">
                                                        <input className="btn btn-default btn-login" type="button" value="Login" onclick="loginAjax()">
                                    </form>
                                </div>
                             </div>
                        </div>
                                            <div className="box">
                                                <div className="content registerBox" style="display:none;">
                                                    <div className="form">
                                                        <form method="" html="{:multipart=>true}" data-remote="true" action="" accept-charset="UTF-8">
                                                            <input id="email" className="form-control" type="text" placeholder="Email" name="email">
                                                                <input id="password" className="form-control" type="password" placeholder="Password" name="password">
                                                                    <input id="password_confirmation" className="form-control" type="password" placeholder="Repeat Password" name="password_confirmation">
                                                                        <input className="btn btn-default btn-register" type="button" value="Create account" name="commit">
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                                                        <div className="modal-footer">
                                                            <div className="forgot login-footer">
                                                                <span>Looking to
                                 <a href="javascript: showRegisterForm();">create an account</a>
                                                                    ?</span>
                                                            </div>
                                                            <div className="forgot register-footer" style="display:none">
                                                                <span>Already have an account?</span>
                                                                <a href="javascript: showLoginForm();">Login</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    );
    }
});