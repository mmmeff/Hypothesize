import React    from 'react';
import * as UI       from '../lib/hypo-ui';

import Page from '../components/Page';

export default class IndexPage extends Page {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    render() {
        return super.render(
            <div>
                <UI.Card title="Active Tests">

                </UI.Card>

                <UI.Card title="Traffic">

                </UI.Card>
            </div>
        );
    }
}
