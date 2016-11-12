import React from 'react';

import * as UI from '../lib/hypo-ui';

import Page from '../components/Page';

export default class StyleGuidePage extends Page {
    constructor(props) {
        super(props);
    }

    render() {
        return super.render(
            <div>
                <UI.Card title="Buttons">
                    <UI.Heading level={ 4 }>Button</UI.Heading>
                    <UI.Button primary>primary</UI.Button>
                    <UI.Button secondary>secondary</UI.Button>
                    <UI.Button ghost>ghost</UI.Button>
                    <UI.Button disabled>disabled</UI.Button>

                    <UI.Heading level={ 4 }>ButtonGroup</UI.Heading>
                    <UI.ButtonGroup>
                        <UI.Button primary>primary</UI.Button>
                        <UI.Button secondary>secondary</UI.Button>
                        <UI.Button ghost>ghost</UI.Button>
                    </UI.ButtonGroup>
                </UI.Card>

                <UI.Card title="Typography">
                    <UI.Heading level={ 1 }>Heading 1</UI.Heading>
                    <UI.Heading level={ 2 }>Heading 2</UI.Heading>
                    <UI.Heading level={ 3 }>Heading 3</UI.Heading>
                    <UI.Heading level={ 4 }>Heading 4</UI.Heading>
                    <UI.Heading level={ 5 }>Heading 5</UI.Heading>
                    <UI.Paragraph>
                        This is a paragraph element. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                        This is a paragraph element. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    </UI.Paragraph>
                </UI.Card>

                <UI.Card title="Layout">
                    <UI.NavBar title="NavBar" navItems={[<a href="">lorem</a>, <a href="">ipsum</a>]}>
                    </UI.NavBar>
                </UI.Card>

                <UI.Card title="Forms">
                    <UI.TextField />
                </UI.Card>
            </div>
        );
    }
}
