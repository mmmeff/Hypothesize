import React from 'react';
import { style } from 'glamor';

export default class TextField extends React.Component {
    static propTypes = {

    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ textFieldOuterStyles }>
                <input type="text" />
            </div>
        );
    }
}

const textFieldOuterStyles = style({

});
