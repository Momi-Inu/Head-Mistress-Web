import * as React from 'react';

import './CommandGroup.css';

interface IProp {
    toLocation: string;
    children: React.ReactNode,
    isActive?: boolean,
    onSelected: (location: string) => void
}


export default class CommandGroup extends React.Component<IProp, {}> {

    public constructor(props: IProp) {
        super(props);
    }

    public render() {
        const renderedInfo = this.getRenderInfo();
        return (
            <a
                className={renderedInfo.className}
                id={renderedInfo.id}
                data-toggle="pill"
                href={renderedInfo.href}
                role="tab"
                aria-controls={this.props.toLocation}
                aria-selected={renderedInfo.ariaSelected}
                onClick={this.setAsCurrent}
            >
                {this.props.children}
            </a>
        )
    }

    private setAsCurrent = () => {
        this.props.onSelected(this.props.toLocation);
    }

    private getRenderInfo() {
        return {
            ariaSelected: this.props.isActive ? true : false,
            className: "commandgroup-navlink " + ((this.props.isActive) ? 'commandgroup-current' : ''),
            href: '#' + this.props.toLocation,
            id: this.props.toLocation + '-tab',
        }
    }
}