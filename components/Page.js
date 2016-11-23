import React    from 'react';
import css      from 'next/css';
import Link     from 'next/link';
import Head     from 'next/head';

import {
    NavBar,
    colors,
    fonts
} from '../lib/hypo-ui';
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
        const leftNavItems = [
            <Link href="/tests">tests</Link>,
            <Link href="/apis">apis</Link>,
            <Link href="/style-guide">style guide</Link>
        ];

        const rightNavItems = [
            <Link href="/settings">settings</Link>,
            <Link href="/profile">profile</Link>
        ];

        return (
            <page className={ styles }>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans" rel="stylesheet" />
                    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                </Head>

                <NavBar
                    titleElement={ <Link href="/">hypothesize</Link> }
                    leftNavItems={ leftNavItems }
                    rightNavItems={ rightNavItems }/>

                { children }
            </page>
        );
    }
}

const styles = css({
    background: colors.grey[50],
    display: 'block',
    fontFamily: fonts.body,
    fontSize: '14px',
    minHeight: '100vh',
    overflow: 'hidden'
});
