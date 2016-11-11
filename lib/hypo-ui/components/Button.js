import React        from 'react';
import { style }    from 'glamor';

import colors       from '../theme/colors';


export default class Button extends React.Component {
    static propTypes = {
        primary: React.PropTypes.boolean,
        secondary:  React.PropTypes.boolean,
        ghost: React.PropTypes.boolean,
        disabled: React.PropTypes.boolean,

        onClick: React.PropTypes.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        let styles;
        if (this.props.secondary) styles = buttonStyles.secondary;
        else if (this.props.ghost) styles = buttonStyles.ghost;
        else styles = buttonStyles.primary;

        return (
            <button
                type="button"
                className={ this.props.disabled ? buttonStyles.disabled : styles }
                onClick={ (e) => this.props.onClick(e) }
                disabled={ this.props.disabled }>
                { this.props.children }
            </button>
        );
    }
}

const baseButtonStyles = {
    borderRadius: 5,
    height: 40,
    margin: '5px',
    minWidth: 120,
    textTransform: 'lowercase',
    transition: 'all 0.1s',
    color: 'white',
    border: 'none'
};
const buttonStyles = {
    primary: style({
        ...baseButtonStyles,
        background: colors.primary,
        ':hover': {
            background: colors.primaryDark
        }
    }),
    secondary: style({
        ...baseButtonStyles,
        background: colors.secondary,
        ':hover': {
            background: colors.secondaryDark
        }
    }),
    ghost: style({
        ...baseButtonStyles,
        background: 'transparent',
        border: `3px solid ${colors.grey[300]}`,
        color: colors.primaryGrey,
        ':hover': {
            background: colors.grey[300]
        }
    }),
    disabled: style({
        ...baseButtonStyles,
        background: colors.grey[300],
        color: colors.primaryGrey,
        cursor: 'not-allowed !important' //TODO: File bug with glamor on the need for this
    })
};
