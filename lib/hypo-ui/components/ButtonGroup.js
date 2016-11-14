import React        from 'react';
import { merge, style }    from 'glamor';
import colors       from '../theme/colors';

export default class ButtonGroup extends React.Component {
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

                        className = merge(className, { flexGrow: 1 });

                        return React.cloneElement(child, { ...child.props, className, key });
                    })
                }
            </div>
        );
    }
}

const buttonGroupStyles = style({
    border: `2px solid ${colors.grey[300]}`,
    borderRadius: 5,
    display: 'flex',
    margin: 5
});

const buttonBaseStyleOverrides = {
    margin: 0,
    border: 'none'
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
    ...buttonBaseStyleOverrides,
    borderRadius: 0
});
