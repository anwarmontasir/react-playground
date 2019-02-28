import React from 'react';
import './App.css';
import Split from './composition/Split';

function App() {
    return (
        <main className='App'>
          <Split className='left' flexBasis={2}>
            This is the content for the left Split. Lorem ipsum.
          </Split>
          <Split className='right'>
            This is the content for the right Split. Lorem ipsum.
          </Split>
        </main>
    );
}

export default App;