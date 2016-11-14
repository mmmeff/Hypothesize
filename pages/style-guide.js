import React from 'react';

import * as UI from '../lib/hypo-ui';
import FontAwesome from 'react-fontawesome';

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
                    <div>
                        <UI.Button primary>primary</UI.Button>
                        <UI.Button secondary>secondary</UI.Button>
                        <UI.Button danger>danger</UI.Button>
                        <UI.Button ghost>ghost</UI.Button>
                        <UI.Button disabled>disabled</UI.Button>
                    </div>
                    <div>
                        <UI.Button primary size="small">small</UI.Button>
                        <UI.Button secondary size="small">small</UI.Button>
                        <UI.Button danger size="small">danger</UI.Button>
                        <UI.Button ghost size="small">small</UI.Button>
                        <UI.Button disabled size="small">small</UI.Button>
                    </div>

                    <UI.Heading level={ 4 }>Button Prefix/Suffix</UI.Heading>
                    <UI.Paragraph>
                        Can take either a string or an element in the prefix/suffix props. Elements below are from react-fontawesome
                    </UI.Paragraph>
                    <div>
                        <UI.Button secondary prefix={ <FontAwesome name="info-circle" /> }>
                            What?
                        </UI.Button>
                        <UI.Button ghost suffix={ <FontAwesome name="chevron-right" /> }>
                            Read More
                        </UI.Button>
                        <UI.Button danger
                            prefix={ <FontAwesome name="trash" /> }
                            suffix={ <FontAwesome name="trash" /> }>
                            Delete
                        </UI.Button>
                    </div>
                    <div>
                        <UI.Button primary
                            size="small"
                            prefix={ <FontAwesome name="sign-out" /> }>
                            Log out
                        </UI.Button>
                        <UI.Button disabled
                            size="small"
                            prefix={ <FontAwesome name="refresh" spin/> }>
                            please wait
                        </UI.Button>
                    </div>

                    <UI.Heading level={ 4 }>ButtonGroup</UI.Heading>
                    <UI.ButtonGroup>
                        <UI.Button primary>primary</UI.Button>
                        <UI.Button secondary>secondary</UI.Button>
                        <UI.Button ghost>ghost</UI.Button>
                    </UI.ButtonGroup>
                    <UI.ButtonGroup>
                        <UI.Button primary size="small">small</UI.Button>
                        <UI.Button secondary size="small">small</UI.Button>
                        <UI.Button ghost size="small">small</UI.Button>
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
