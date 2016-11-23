import React                    from 'react';
import { style, merge }         from 'glamor';
import colors                   from '../theme/colors';

export default class NavBar extends React.Component {
    static propTypes = {
        iconElement: React.PropTypes.element,
        titleElement: React.PropTypes.element,
        leftNavItems: React.PropTypes.array,
        rightNavItems: React.PropTypes.array
    };

    render() {
        let titleElement = this.props.titleElement;
        if (typeof this.props.titleElement === 'string') {
            titleElement = <span>{ this.props.titleElement }</span>;
        }

        return (
            <div className={ navBarStyles }>
                {
                    !!this.props.titleLogoSrc &&
                        <div className={ navBarTitleLogoStyles }
                            style={{ backgroundImage: `url(${this.props.titleLogoSrc})` }} />
                }

                {
                    !!this.props.titleElement && React.cloneElement(titleElement, { className: navBarTitleStyles })
                }

                {
                    !!this.props.leftNavItems &&
                    this.props.leftNavItems.map((el, i) => {
                        return React.cloneElement(el, { className: navBarNavElStyles, key: i });
                    })
                }

                {
                    !!this.props.rightNavItems &&
                    this.props.rightNavItems.map((el, i) => {
                        const elStyle = i === 0
                            ? merge(navBarNavElStyles, { marginLeft: 'auto' })
                            : navBarNavElStyles;
                        return React.cloneElement(el, { className: elStyle, key: i });
                    })
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
    padding: '0 20px 0 10px',
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
