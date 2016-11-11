import React from 'react';
import { style } from 'glamor';
import colors   from '../theme/colors';

export default class NavBar extends React.Component {
    static propTypes = {
        titleLogoSrc: React.PropTypes.string,
        title: React.PropTypes.string,
        navItems: React.PropTypes.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={ navBarStyles }>
                {
                    !!this.props.titleLogoSrc &&
                    <div className={ navBarTitleLogoStyles }
                         style={{ backgroundImage: `url(${this.props.titleLogoSrc})` }} />
                }

                {
                    !!this.props.title &&
                    <a href="/" className={ navBarTitleStyles }>
                        { this.props.title }
                    </a>
                }

                {
                    !!this.props.navItems &&
                    this.props.navItems.map((x, i) => React.cloneElement(x, { className: navBarNavElStyles, key: i }))
                }
            </div>
        );
    }
}

const navBarStyles = style({
    background: colors.primary,
    color: colors.white,
    display: 'flex',
    height: 80,
    minHeight: 80,
    padding: '0 10px',
    alignItems: 'flex-end'
});

const navBarTitleLogoStyles = style({
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    cursor: 'pointer',
    height: '80%',
    width: '100%',
    maxWidth: 60,
    alignSelf: 'center'
});

const _navBarChildStyles = {
    fontWeight: 300,
    marginLeft: 10,
    paddingBottom: 10,
    cursor: 'pointer',
    color: colors.grey[300],
    transition: 'all 0.2s',
    ':hover': {
        color: colors.white,
        textDecoration: 'underline'
    }
};

const navBarTitleStyles = style({
    ..._navBarChildStyles,
    fontSize: '1.5em',
    letterSpacing: '2px',
    display: 'block',
});

const navBarNavElStyles = style({
    ..._navBarChildStyles,
    marginLeft: 50,
    textDecoration: 'none',
    paddingBottom: 13
});
