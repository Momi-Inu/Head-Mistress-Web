import * as React from 'react';
import './HomePage.css';
import homeIcon from './images/home_icon.jpg';

interface IState {
    hide: boolean,
    forText: string[],
    currentTextIdx: number
}

export default class HomePage extends React.Component<{}, IState> {

    public state = {
        currentTextIdx: 0,
        forText: [
            'Love',
            'Games',
            'Roles',
            'Kinks',
            'BDSM',
            'Lewdlyness',
        ],
        hide: false,
    }

    constructor(props: {}) {
        super(props);
        setInterval(() => {
            this.rotateToNextState();
        }, 5000);
    }

    public rotateToNextState = () => {
        this.setState({
            hide: true
        });
        setTimeout(() => {
            this.setState({
                currentTextIdx: (this.state.currentTextIdx + 1) % this.state.forText.length,
                hide: false,
            });
        }, 1000);
    }

    public render() {
        return (
            <div>
                <div className="max-divider" />
                <div className="homepage-container">
                    <div className="homepage-content">
                        <div className="homepage-table-container">
                            <p className="homepage-stat-identity">Global Bot Statistics</p>
                            <table className="table table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row" className="homepage-table">Users</th>
                                        <td className="homepage-table">1232</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="homepage-table">Guilds</th>
                                        <td className="homepage-table">94</td>
                                    </tr>
                                    <tr className="homepage-add-border-bottom">
                                        <th scope="row" className="homepage-table">Commands Ran</th>
                                        <td className="homepage-table">1232121</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h1 className="homepage-info-tag-1">A Discord Bot for</h1>
                        <h1 className={this.state.hide ? "homepage-info-tag-2 homepage-info-tag-hide" : "homepage-info-tag-2 homepage-info-tag-show"}>{this.state.forText[this.state.currentTextIdx]}</h1>
                    </div>
                    <div className="homepage-icon-container">
                        <img src={homeIcon} />
                        <h1 className="homepage-icon-subtext lead">The Beautiful and Magnificent</h1>
                        <h1 className="homepage-icon-subtext-2 lead">Head Mistress</h1>
                    </div>
                </div>
                <div className="max-divider" />
            </div>
        )
    }
}