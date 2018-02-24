import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return "still decinding";
            case false:
                return(
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:
                return (
                    <li><a href="/api/logout">Logout</a></li>
                );
        }
    }
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'}
                          className="brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
//state object in redux store
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Header);