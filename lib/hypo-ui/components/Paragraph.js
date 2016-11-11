import React        from 'react';
import { style }    from 'glamor';
import colors       from '../theme/colors';

export default class Paragraph extends React.Component {
    static propTypes = {
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p className={ paragraphStyles }>
                { this.props.children }
            </p>
        );
    }
}

const paragraphStyles = style({
    color: colors.primaryGrey
});
