import * as React from 'react';

interface IProp {
    isActive?: boolean,
    fromLocation: string
}

export default class CommandList extends React.Component<IProp, {}> {

    public render() {

        const info = this.generateInfo();

        return (
            <div
                className={info.className}
                id={info.id}
                role="tabpanel"
                aria-labelledby={info.ariaLabelledBy}
            >
                {this.props.children}
            </div>
        )
    }

    private generateInfo = () => {
        return {
            ariaLabelledBy: this.props.fromLocation + '-tab',
            className: 'tab-pane fade ' + ((this.props.isActive) ? 'show active' : ''),
            id: this.props.fromLocation,
        }
    }
}