import React        from 'react';
import { style }    from 'glamor';
import colors       from '../theme/colors';

export default class ButtonGroup extends React.Component {
    static propTypes = {
    };

    render() {
        return (
            <div className={ buttonGroupStyles }>
                {
                    this.props.children.map((child, key) => {
                        let className;

                        switch (key) {
                        case 0:
                            className = buttonLeftStyleOverrides;
                            break;
                        case this.props.children.length-1:
                            className = buttonRightStyleOverrides;
                            break;
                        default:
                            className = buttonInnerStyleOverrides;
                            break;
                        }

                        return React.cloneElement(child, { ...child.props, className, key });
                    })
                }
            </div>
        );
    }
}

const buttonGroupStyles = style({
});

const buttonBaseStyleOverrides = {
    margin: 0
};

const buttonLeftStyleOverrides = style({
    ...buttonBaseStyleOverrides,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
});

const buttonRightStyleOverrides = style({
    ...buttonBaseStyleOverrides,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
});

const buttonInnerStyleOverrides = style({
    ...buttonBaseStyleOverrides
});
