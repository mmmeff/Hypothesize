import React from 'react';

import Page from '../components/Page';

export default class IndexPage extends Page {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        return super.render(
            <h1>Suh dude!</h1>
        );
    }
}
