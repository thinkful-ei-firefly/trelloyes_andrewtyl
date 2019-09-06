import React from 'react';
import './App.css';
import STORE from './STORE';
import List from './components/List/List';

class App extends React.Component {
  static defaultProps = {
    STORE
  };


  render() {
    const arrayOfLists = this.props.STORE.lists.map((list) =>
      <List key={list.id} header={list.header} cards={list.cardIds.map(id => this.props.STORE.allCards[id])}/>
    )

    return (
      <div className="App">
        <header class="App-header">
          <h1>Trelloyes</h1>
        </header>
        <div className="App-list">
            {arrayOfLists}
        </div>
      </div>
    );
  }
}

export default App;
