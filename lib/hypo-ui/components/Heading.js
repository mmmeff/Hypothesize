import React            from 'react';
import { style, merge } from 'glamor';
import colors           from '../theme/colors';
import fonts            from '../theme/fonts';


export default class Heading extends React.Component {
    static propTypes = {
        level: React.PropTypes.number,
        centered: React.PropTypes.bool
    };

    render() {
        let overrides;
        if (this.props.centered) overrides = { ...overrides, ...centeredOverrides };

        let otherStyles = merge({ ...overrides, ...this.props.style }, this.props.className);

        switch (this.props.level) {
        case 5:
            return <h5 className={ merge(h5Style, otherStyles) }>{ this.props.children }</h5>;
        case 4:
            return <h4 className={ merge(h4Style, otherStyles) }>{ this.props.children}</h4>;
        case 3:
            return <h3 className={ merge(h3Style, otherStyles) }>{ this.props.children}</h3>;
        case 2:
            return <h2 className={ merge(h2Style, otherStyles) }>{ this.props.children}</h2>;
        case 1:
        default:
            return <h1 className={ merge(h1Style, otherStyles) }>{ this.props.children }</h1>;
        }
    }
}

const baseHeaderStyles = {
    color: colors.grey[700],
    fontFamily: fonts.heading,
    position: 'relative',
    zIndex: 2
};

const pseudoBorder = {
    background: colors.grey[700],
    content: '""',
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: 1,
    bottom: 13,
    left: 2,
    right: 2,
    zIndex: 1,
    borderRadius: 5
};

const h1Style = style({
    ...baseHeaderStyles,
    fontSize: '3.998rem',
    ':before': {
        ...pseudoBorder,
        height: 3
    }
});

const h2Style = style({
    ...baseHeaderStyles,
    fontSize: '2.827rem',
    ':after': {
        ...pseudoBorder,
        height: 2,
        bottom: 10
    }
});

const h3Style = style({
    ...baseHeaderStyles,
    fontSize: '1.999rem',
    ':after': {
        ...pseudoBorder,
        height: 1,
        bottom: 7,
        left: 1.4,
        right: 1
    }
});

const h4Style = style({
    ...baseHeaderStyles,
    fontSize: '1.414rem'
});

const h5Style = style({
    ...baseHeaderStyles,
    fontSize: '1.2rem'
});

const centeredOverrides = {
    textAlign: 'center',
    ':before': { background: 'transparent' }
};
