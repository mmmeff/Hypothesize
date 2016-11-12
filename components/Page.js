import React    from 'react';
import css      from 'next/css';
import Link     from 'next/link';
import Head     from 'next/head';

import { NavBar, colors } from '../lib/hypo-ui';
import { insertRule } from 'glamor';

require('glamor/reset');
insertRule('*, *:before, *:after { box-sizing: border-box; }');

export default class Page extends React.Component {
    getInitialProps() {
    }

    constructor(props) {
        super(props);
    }

    render(children) {
        const navItems = [
            <Link href="/style-guide">style guide</Link>,
            <Link href="/style-guide">style guide</Link>
        ];

        return (
            <page className={ styles }>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700" rel="stylesheet" />
                </Head>

                <NavBar titleElement={ <Link href="/">hypothesize</Link> } navItems={ navItems } />

                { children }
            </page>
        );
    }
}

const styles = css({
    background: colors.grey[50],
    display: 'block',
    fontFamily: 'Space Mono, monospace',
    fontSize: '14px',
    minHeight: '100vh',
    overflow: 'hidden'
});
