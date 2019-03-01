import React from 'react';
import './App.css';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';

const firstTooltip = (
  <Tooltip color='hotpink' message='tooltip message'>
    Lorem
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126bcc' message='another tooltip message'>
    Ipsum
  </Tooltip>
)

function App() {
    return (
        <main className='App'>
          <Split className='left' flexBasis={2}>
            This is the content for the left Split. Lorem ipsum {firstTooltip} dolor sit amet consectetur... 
            <Tooltip message='one more tooltip message'>
              Lorem to tha ipsum, y'all.
            </Tooltip>
          </Split>
          <Split className='right'>
            This is the content for the right Split. “Lorem ipsum quis {secondTooltip} quam fuga”.
          </Split>
        </main>
    );
}

export default App;