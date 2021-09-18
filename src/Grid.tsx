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
    game: string;
    seed: string;
    selection?: string[];
}

class Grid extends React.Component<Properties, State> {

    constructor(props: Properties) {
        super(props);
        this.state = {game: env().gameDefault, seed: ''};
        this.buildCell = this.buildCell.bind(this);
        this.buildGrid = this.buildGrid.bind(this);
        this.getSeed = this.getSeed.bind(this);
    }


    componentDidMount(): void {
        const params: URLSearchParams = new URLSearchParams(window.location.search);
        const game: string = this.getGame(params);
        const seed: string = this.getSeed(params);
        this.setState({game: game, seed: seed});
        this.makeSelection(game, seed).then(selection => this.setState({selection: selection}));
    }


    private async makeSelection(game: string, seed: string): Promise<string[]> {
        const cells: number = this.props.rows * this.props.columns;
        const result: string[] = [];
        const remainingOptions: string[] = await getOptions(game);
        this.shuffleArray(remainingOptions, seed);
        for (let i = 0; i < cells; i++) {
            result.push(remainingOptions[i]);
        }
        return result;
    }


    private getGame(params: URLSearchParams): string {
        let game: string | null = params.get("game");
        if (game === null) {
            game = env().gameDefault;
            window.history.pushState('gamed', 'gamed', `${env().baseUrl}?game=${game}&seed=${this.getSeed(params)}`);
        }
        return game;
    }


    private shuffleArray(array: any[], seed: string): void {
        const rand: Random = random.clone(seedrandom(seed));
        array.sort(() => rand.float() - 0.5);
    }

    
    private getSeed(params: URLSearchParams): string {
        let seed: string | null = params.get("seed");
        if (seed === null) {
            seed = randomWords(3).join('-');
            window.history.pushState('seeded', 'seeded', `${env().baseUrl}?game=${this.getGame(params)}&seed=${seed}`);
        }
        return seed;
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
                    {env().gameTitle[this.state.game]}<br/>
                    <span>B</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>O</span>
                </h1>
                <div className="grid">
                    {this.buildGrid()}
                </div>
                <small>Seed: <span id="seed">{this.state.seed}</span></small>
                <small><a href={`${env().baseUrl}`}>Gimme a new Card</a></small>
            </main>
        )
    }
}


export {Grid};
