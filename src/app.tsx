import React from 'react';
import './app.scss';
import { RootStore } from './stores/root-store';
import { StoresContext } from './stores/stores-context';

const rootStore = new RootStore();

const App: React.FC = (props) => {
  return (
    <StoresContext.Provider value={rootStore}>
      {props.children}
    </StoresContext.Provider>
  );
};

export default App;
