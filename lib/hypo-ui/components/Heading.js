import React        from 'react';
import { style }    from 'glamor';
import colors       from '../theme/colors';

export default class Heading extends React.Component {
    static propTypes = {
        level: React.PropTypes.number
    };

    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.level) {
        case 5:
            return <h5 className={ h5Style }>{ this.props.children }</h5>;
        case 4:
            return <h4 className={ h4Style }>{ this.props.children}</h4>;
        case 3:
            return <h3 className={ h3Style }>{ this.props.children}</h3>;
        case 2:
            return <h2 className={ h2Style }>{ this.props.children}</h2>;
        case 1:
        default:
            return <h1 className={ h1Style }>{ this.props.children }</h1>;
        }
    }
}

const baseHeaderStyles = {
    color: colors.primaryGrey,
    // fontFamily: 'Grand Hotel'
};

const h1Style = style({
    ...baseHeaderStyles,
    fontSize: '3.998rem'
});

const h2Style = style({
    ...baseHeaderStyles,
    fontSize: '2.827rem'
});

const h3Style = style({
    ...baseHeaderStyles,
    fontSize: '1.999rem'
});

const h4Style = style({
    ...baseHeaderStyles,
    fontSize: '1.414rem'
});

const h5Style = style({
    ...baseHeaderStyles,
    fontSize: '1.2rem'
});
