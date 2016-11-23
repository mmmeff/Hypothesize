import React from 'react';
import { style } from 'glamor';

import colors from '../theme/colors';
import fonts  from '../theme/fonts';


export default class Card extends React.Component {
    static propTypes = {
        title: React.PropTypes.string
    };

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
    margin: '100px 5px 10px 5px',
    borderLeft: `5px solid ${colors.primary}`,
    borderRight: `5px solid ${colors.secondary}`,
    position: 'relative',
    boxShadow: '0 0 0 1px rgba(16, 22, 26, 0.15)',
    transition: 'box-shadow 0.2s cubic-bezier(0.4, 1, 0.75, 0.9)',
    ':hover': {
        boxShadow: '0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2)'
    }
});

const titleStyle = style({
    color: colors.grey[700],
    fontFamily: fonts.heading,
    left: '0.1em',
    position: 'absolute',
    top: '-0.8em',
    fontSize: '3em',
    textShadow: `0 3px 0 ${colors.white}`,
    padding: '0 0.5em'
});
