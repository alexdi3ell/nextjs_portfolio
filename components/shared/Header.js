import React from 'react';
import Link from 'next/link';

import '../../styles/main.scss';

class Header extends React.Component {

    render() {

        return (
            <React.Fragment>
                <Link href="/">
                    <a style={{'fontSize': '20px'}}>Home</a>
                </Link>

                <Link  href="/about">
                    <a>About</a>
                </Link>

                <Link href="/Portfolios">
                    <a>Portfolios</a>
                </Link>

                <Link href="/about">
                    <a>About</a>
                </Link>

                <Link href="/cv">
                <a>CV</a>
                </Link>
                <style jsx>
                {`
                    a {
                        font-size: 20px;
                    } 
                    .customClass {
                        color: red;
                    }
                `}
                </style>
            </React.Fragment>
        );
    }
}

export default Header;
