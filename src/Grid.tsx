import random, { Random } from "random";
import React from "react";
import { options } from "./options";
import seedrandom from 'seedrandom';

interface Properties {
    rows: number;
    columns: number;
    seed: string;
}

interface State {
    selection: string[];
}

class Grid extends React.Component<Properties, State> {

    constructor(props: Properties) {
        super(props);
        this.state = {selection: this.makeSelection()};
        this.buildCell = this.buildCell.bind(this);
        this.buildGrid = this.buildGrid.bind(this);
    }


    private makeSelection(): string[] {
        const cells: number = this.props.rows * this.props.columns;
        const result: string[] = [];
        const remainingOptions: string[] = options;
        this.shuffleArray(remainingOptions);
        for (let i = 0; i < cells; i++) {
            result.push(remainingOptions[i]);
        }
        return result;
    }


    private shuffleArray(array: any[]): void {
        const rand: Random = random.clone(seedrandom(this.props.seed));
        array.sort(() => rand.float() - 0.5);
    }


    private buildGrid(): React.ReactNode[] {
        const grid: React.ReactNode[] = [];
        for (let option of this.state.selection) {
            grid.push(this.buildCell(option));
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
                <small>Seed: <span id="seed">{this.props.seed}</span></small>
                </main>
        )
    }
}


export {Grid};
