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
                    <UI.Paragraph>
                        This is a paragraph element. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                        This is a paragraph element. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                    </UI.Paragraph>
                </UI.Card>

                <UI.Card title="Layout Elements">
                    <UI.NavBar title="NavBar" navItems={[<a href="">lorem</a>, <a href="">ipsum</a>]}>
                    </UI.NavBar>
                </UI.Card>

                <UI.Card title="Form Elements">
                    <UI.TextField />
                </UI.Card>
            </div>
        );
    }
}
