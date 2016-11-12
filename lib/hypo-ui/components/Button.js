import React        from 'react';
import { style }    from 'glamor';
import cx           from 'classnames';

import colors       from '../theme/colors';


export default class Button extends React.Component {
    static propTypes = {
        primary: React.PropTypes.bool,
        secondary:  React.PropTypes.bool,
        ghost: React.PropTypes.bool,
        disabled: React.PropTypes.bool,

        onClick: React.PropTypes.func
    };

    render() {
        let styles;
        if (this.props.secondary) styles = buttonStyles.secondary;
        else if (this.props.ghost) styles = buttonStyles.ghost;
        else styles = buttonStyles.primary;

        let className = cx(
            (this.props.disabled ? buttonStyles.disabled : styles),
            this.props.className
        );

        console.log(className);
        console.log(styles);

        return (
            <button
                type="button"
                className={ className }
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
    color: colors.white,
    border: 'none',
    ':hover': {
        transform: 'scale(1.1)',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)'
    }
};
const buttonStyles = {
    primary: style({
        ...baseButtonStyles,
        background: colors.primary,
        ':hover': {
            ...baseButtonStyles[':hover'],
            background: colors.primaryDark
        }
    }),
    secondary: style({
        ...baseButtonStyles,
        background: colors.secondary,
        ':hover': {
            ...baseButtonStyles[':hover'],
            background: colors.secondaryDark
        }
    }),
    ghost: style({
        ...baseButtonStyles,
        background: 'transparent',
        border: `3px solid ${colors.grey[300]}`,
        color: colors.primaryGrey,
        ':hover': {
            ...baseButtonStyles[':hover'],
            background: colors.grey[300]
        }
    }),
    disabled: style({
        ...baseButtonStyles,
        background: colors.grey[300],
        color: colors.primaryGrey,
        ':hover': {},
        cursor: 'not-allowed !important' //TODO: File bug with glamor on the need for this (reset is more specific...?),
    })
};
