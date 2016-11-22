import React        from 'react';
import { merge, style }    from 'glamor';
import colors       from '../theme/colors';

export default class Paragraph extends React.Component {
    static propTypes = {
    };

    render() {
        return (
            <p className={ merge(paragraphStyles, this.props.className, this.props.style) }>
                { this.props.children }
            </p>
        );
    }
}

const paragraphStyles = style({
    color: colors.primaryGrey
});
