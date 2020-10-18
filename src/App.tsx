import React from 'react';
import Card from './Card';
import Column from './Column';
import { AppContainer } from './styledComponents';


function App() {

  return (
    <AppContainer className="App">
      <Column title="TODOS">
        <Card text="scaffold application" />
      </Column>
      <Column title="IN PROGRESS">
        <Card text="Learning React-Typescript" />
      </Column>
      <Column title="DONE">
        <Card text="learning React" />
      </Column>
    </AppContainer>
  );
}

export default App;
