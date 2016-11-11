require('glamor/reset');
import React    from 'react';
import css      from 'next/css';
import Link     from 'next/link';
import Head     from 'next/head';

import { NavBar, colors } from '../lib/hypo-ui';


export default class Page extends React.Component {
    getInitialProps() {

    }

    constructor(props) {
        super(props);

        this.navItems = [
            // TODO: Figure out styling of Link elements (open PR to Next)
            // <Link href="/style-guide">style guide</Link>,
            <a href="/tests">tests</a>,
            <a href="/style-guide">style guide</a>
        ];
    }

    render(children) {
        return (
            <page className={ styles }>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700" rel="stylesheet" />
                </Head>

                <NavBar
                    title="hypothesize"
                    navItems={ this.navItems } />

                { children }
            </page>
        );
    }
}

const styles = css({
    background: colors.grey[50],
    display: 'block',
    fontFamily: 'Space Mono, monospace',
    fontSize: '14px'
});
