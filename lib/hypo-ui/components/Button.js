import React                from 'react';
import { style, merge }     from 'glamor';

import colors               from '../theme/colors';


export default class Button extends React.Component {
    static propTypes = {
        onClick: React.PropTypes.func,

        primary: React.PropTypes.bool,
        secondary:  React.PropTypes.bool,
        ghost: React.PropTypes.bool,
        danger: React.PropTypes.bool,
        disabled: React.PropTypes.bool,

        size: React.PropTypes.oneOf([
            'small',
            'large'
        ]),

        prefix: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.element
        ]),
        suffix: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            React.PropTypes.element
        ])
    };

    render() {
        let styles;
        if (this.props.secondary) styles = buttonStyles.secondary;
        else if (this.props.danger) styles = buttonStyles.danger;
        else if (this.props.ghost) styles = buttonStyles.ghost;
        else styles = buttonStyles.primary;

        // build button class from selected style and disabled state
        const buttonStyle = this.props.disabled ? buttonStyles.disabled : styles;

        // determine size overrides
        let sizeOverrideStyles;
        switch (this.props.size) {
        case 'small':
            sizeOverrideStyles = sizeOverrides.small;
            break;
        case 'large':
        default:
            sizeOverrideStyles = sizeOverrides.large;
            break;
        }

        let className = !!this.props.className
            ? merge(buttonStyle, this.props.className, sizeOverrideStyles)
            : merge(buttonStyle, sizeOverrideStyles);

        return (
            <button
                type="button"
                className={ className }
                onClick={ (e) => this.props.onClick(e) }
                disabled={ this.props.disabled }>

                {
                    !!this.props.prefix &&
                    <span className={ prefixStyles }>{ this.props.prefix }</span>
                }

                { this.props.children }

                {
                    !!this.props.suffix &&
                    <span className={ suffixStyles }>{ this.props.suffix }</span>
                }
            </button>
        );
    }
}

const baseButtonStyles = {
    borderRadius: 5,
    height: 40,
    letterSpacing: 1,
    margin: '5px',
    minWidth: 120,
    padding: '0 20px',
    textTransform: 'uppercase',
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
    danger: style({
        ...baseButtonStyles,
        background: colors.danger,
        ':hover': {
            ...baseButtonStyles[':hover'],
            background: colors.dangerDark
        }
    }),
    ghost: style({
        ...baseButtonStyles,
        background: 'transparent',
        border: `2px solid ${colors.grey[300]}`,
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

const sizeOverrides = {
    small: style({
        height: 30,
        padding: '0 10px',
        fontSize: '0.9em',
        textTransform: 'lowercase'
    }),
    large: {} // default
};

const prefixStyles = style({
    marginRight: 10
});

const suffixStyles = style({
    marginLeft: 10
});
