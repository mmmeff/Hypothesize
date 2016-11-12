import React                    from 'react';
import { style }                from 'glamor';
import colors                   from '../theme/colors';

export default class NavBar extends React.Component {
    static propTypes = {
        iconElement: React.PropTypes.element,
        titleElement: React.PropTypes.element,
        navItems: React.PropTypes.array
    };

    render() {
        return (
            <div className={ navBarStyles }>
                {
                    !!this.props.titleLogoSrc &&
                        <div className={ navBarTitleLogoStyles }
                            style={{ backgroundImage: `url(${this.props.titleLogoSrc})` }} />
                }

                {
                    !!this.props.titleElement && React.cloneElement(this.props.titleElement, { className: navBarTitleStyles })
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
    background: colors.background,
    borderLeft: `5px solid ${colors.primary}`,
    borderRight: `5px solid ${colors.secondary}`,
    borderRadius: 5,
    display: 'flex',
    height: 60,
    minHeight: 60,
    margin: '5px',
    padding: '0 10px',
    alignItems: 'center'
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
    cursor: 'pointer',
    color: colors.grey[500],
    transition: 'all 0.2s',
    ':hover': {
        color: colors.grey[800],
        textDecoration: 'underline'
    }
};

const navBarTitleStyles = style({
    ..._navBarChildStyles,
    fontSize: '1.5em',
    letterSpacing: '2px',
    display: 'block'
});

const navBarNavElStyles = style({
    ..._navBarChildStyles,
    marginLeft: 50,
    textDecoration: 'none',
    position: 'relative',
    top: 4
});
