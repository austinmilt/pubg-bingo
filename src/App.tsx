import React from 'react';
import './App.css';
import { Grid } from './Grid';

class App extends React.Component {
    render(): React.ReactNode {
        const pathSplit: string[] = window.location.pathname.split('/');
        const seed: string = pathSplit[pathSplit.length-1];

        return (
            <div className="App">
                <Grid rows={5} columns={5} seed={seed}/>
            </div>
          );
    }
}

export default App;
