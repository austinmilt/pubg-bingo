import random, { Random } from "random";
import React from "react";
import seedrandom from 'seedrandom';
import randomWords from 'random-words';
import { env } from "./util/env";
import { getOptions } from "./util/gsheets";

interface Properties {
    rows: number;
    columns: number;
}

interface State {
    selection?: string[];
}

class Grid extends React.Component<Properties, State> {

    constructor(props: Properties) {
        super(props);
        this.state = {};
        this.buildCell = this.buildCell.bind(this);
        this.buildGrid = this.buildGrid.bind(this);
        this.getSeed = this.getSeed.bind(this);
    }


    componentDidMount(): void {
        this.makeSelection().then(selection => this.setState({selection: selection}));
    }


    private getSeed(): string {
        let seed: string | null = new URLSearchParams(window.location.search).get("seed");
        if (seed === null) {
            seed = randomWords(3).join('-');
            window.history.pushState('seeded', 'seeded', `${env().baseUrl}?seed=${seed}`);
        }
        return seed;
    }


    private async makeSelection(): Promise<string[]> {
        const cells: number = this.props.rows * this.props.columns;
        const result: string[] = [];
        const remainingOptions: string[] = await getOptions();
        this.shuffleArray(remainingOptions);
        for (let i = 0; i < cells; i++) {
            result.push(remainingOptions[i]);
        }
        return result;
    }


    private shuffleArray(array: any[]): void {
        const seed: string = this.getSeed();
        const rand: Random = random.clone(seedrandom(seed));
        array.sort(() => rand.float() - 0.5);
    }


    private buildGrid(): React.ReactNode[] {
        const grid: React.ReactNode[] = [];
        if (this.state.selection) {
            for (let option of this.state.selection) {
                grid.push(this.buildCell(option));
            }
        }
        return grid;
    }


    private buildCell(option: string): React.ReactNode {
        return <label key={option} onClick={e => e.currentTarget.classList.toggle("complete")}><div className="mark"><span>{option}</span></div></label>
    }


    render(): React.ReactNode {
        return (
            <main>
                <h1>
                    PUBG<br/>
                    <span>B</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>O</span>
                </h1>
                <div className="grid">
                    {this.buildGrid()}
                </div>
                <small>Seed: <span id="seed">{this.getSeed()}</span></small>
                </main>
        )
    }
}


export {Grid};
