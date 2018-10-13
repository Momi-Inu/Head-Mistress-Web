import * as React from 'react';
import CommandGroup from './CommandGroup/CommandGroup.Component';
import CommandList from './CommandList/CommandList.component';

import './Commands.css';

interface ICommandGroup {
    isActive: boolean,
    location: string
}

interface IState {
    [commandGroup: string]: ICommandGroup
}

export default class Commands extends React.Component<{}, IState> {

    public state: IState = {
        assignment: { isActive: true, location: 'commandgroup-assignment' },
        information: { isActive: false, location: 'commandgroup-information' },
        help: { isActive: false, location: 'commandgroup-help' },
    }

    public setNewLocation = (newLocation: string) => {
        const newState: IState = {};
        for (const commandGroup in this.state) {
            if (this.state.hasOwnProperty(commandGroup)) {
                const currentGroup = this.state[commandGroup];
                newState[commandGroup] = this.determineLocationStateChanges(currentGroup, newLocation);
            }
        };
        this.setState(newState);
    }

    public render() {
        return (
            <div className="commands-container">
                <div className="commands-groups">
                    <div
                        className="nav flex-column nav-pills commands-selector-menu"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                    >
                        <CommandGroup
                            toLocation={this.state.assignment.location}
                            isActive={this.state.assignment.isActive}
                            onSelected={this.setNewLocation}
                        >
                            Assignment
                        </CommandGroup>
                        <CommandGroup
                            toLocation={this.state.information.location}
                            isActive={this.state.information.isActive}
                            onSelected={this.setNewLocation}
                        >
                            Information
                        </CommandGroup>
                        <CommandGroup
                            toLocation={this.state.help.location}
                            isActive={this.state.help.isActive}
                            onSelected={this.setNewLocation}
                        >
                            Help
                        </CommandGroup>
                    </div>
                </div>
                <div className="commands-lists">
                    <div className="tab-content" id="v-pills-tabContent">
                        <CommandList
                            fromLocation={this.state.assignment.location}
                            isActive={this.state.assignment.isActive}
                        >
                            Assignment
                        </CommandList>
                        <CommandList
                            fromLocation={this.state.information.location}
                            isActive={this.state.information.isActive}
                        >
                            Information
                        </CommandList>
                        <CommandList
                            fromLocation={this.state.help.location}
                            isActive={this.state.help.isActive}
                        >
                            help
                        </CommandList>
                    </div>
                </div>
            </div>
        )
    }

    private determineLocationStateChanges = (currentGroup: ICommandGroup, newLocation: string) => {
        if (currentGroup.location === newLocation) {
            return {
                isActive: true,
                location: currentGroup.location
            }
        } else {
            return {
                isActive: false,
                location: currentGroup.location
            };
        }
    }
}