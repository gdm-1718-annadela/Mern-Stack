import React from 'react';

/*
Import styling
*/
import logo from '../assets/images/logo.svg';
import './Page.scss';

class PageLayout extends React.Component {
    render() {
        const { children, classes } = this.props;

        return (
            <div className="page">
                <header role="header">
                    <nav className="nav">
                        <ul>
                            <a href="/home"><li className="nav__item">Home</li></a>
                            <a href="/musea"><li className="nav__item">Musea</li></a>
                            <a href="/collections"><li className="nav__item">Collections</li></a>
                            <a className="order-btn actioncall" href="/order-ticket"><li className="nav__item">Tickets bestellen</li></a>

                            {/* <a href="login/local"><li className="nav__item">Login</li></a>
                            <a href="signup/local"><li className="nav__item">Signup</li></a> */}
                        </ul>
                    </nav>
                </header>
                <main className="main" role="main">
                    { children }
                </main>
                <footer className="footer" role="footer">
                    <div className="hidden"></div>
                </footer>
            </div>
        )
    }
}
 
export default PageLayout;