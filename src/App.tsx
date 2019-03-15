import * as React from 'react';
import CounterOutput from './CounterOutput';

interface IAppState {
  counterValue: number;
}

class App extends React.Component<{}, IAppState> {
  public state = {
    counterValue: 0
  }

  public render() {
    return (
      <div style={{textAlign: 'center'}}>
        <CounterOutput counter={this.state.counterValue} />
        <button style={buttonStyle} onClick={this.handleSubtractPoint}>-</button>
        <button style={buttonStyle} onClick={this.handleAddPoint}>+</button>
      </div>
    )
  }

  private handleAddPoint = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue + 1 };
    })
  }

  private handleSubtractPoint = () => {
    this.setState(prevState => {
      return { counterValue: prevState.counterValue - 1 };
    })
  }
}

const buttonStyle = {
  margin: '5px'
}

export default App;
