import React from 'react';
import { style } from 'glamor';
import colors from '../theme/colors';

export default class Card extends React.Component {
    static propTypes = {
        title: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ cardStyle }>
                {
                    !!this.props.title &&
                    <div className={ titleStyle }>{ this.props.title }</div>
                }

                { this.props.children }
            </div>
        );
    }
}

const cardStyle = style({
    background: colors.grey[100],
    borderRadius: 5,
    padding: '15px 20px',
    margin: '60px 5px 10px 5px',
    borderLeft: `5px solid ${colors.primary}`,
    borderRight: `5px solid ${colors.secondary}`,
    position: 'relative'
});

const titleStyle = style({
    color: colors.primaryGrey,
    left: '0.1em',
    position: 'absolute',
    top: '-1.15em',
    fontSize: '2em',
    textShadow: `0 3px 0 ${colors.white}`,
    padding: '0 0.5em'
});
