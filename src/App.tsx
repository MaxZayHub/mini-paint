import React from 'react';
import { useTypeSelector } from './hooks/useTypeSelector'

function App() {
  const state = useTypeSelector(state => state.user)
  return (
    <div className="App">
    </div>
  );
}

export default App;
