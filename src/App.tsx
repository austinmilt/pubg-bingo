import React from 'react';
import './App.css';
import { Grid } from './Grid';

class App extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="App">
                <Grid rows={5} columns={5}/>
            </div>
          );
    }
}

export default App;
