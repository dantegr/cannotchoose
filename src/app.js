class CanNotChooseApp extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Can Not Choose</h1>
        <h2>Let your computer choose for you!!</h2>
      </div>
    );
  }

}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button>Will you choose for me?</button>
      </div>

    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <ol>
          <li>Option A</li>
          <li>Option B</li>
        </ol>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        <form >
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}



ReactDOM.render(<CanNotChooseApp />, document.getElementById('app'));