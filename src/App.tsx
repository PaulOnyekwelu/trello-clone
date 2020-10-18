import React from 'react';
import { AppContainer, CardContainer, ColumnContainer, ColumnTitle } from './components/styles';


function App() {

  return (
    <AppContainer className="App">
      <ColumnContainer>
        <ColumnTitle>Hello world</ColumnTitle>
        <CardContainer>this is the card</CardContainer>
      </ColumnContainer>
    </AppContainer>
  );
}

export default App;
