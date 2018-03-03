import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

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
                return [
                    <li key="payments"><Payments /></li>,
                    <li key="credits" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="logout"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'}
                          className="brand-logo"
                          style={{left: '20%'}}
                    >
                        Emaily
                    </Link>
                    <ul className="right">
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