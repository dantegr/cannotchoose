class CanNotChooseApp extends React.Component {
  render(){
    const title = 'Can Not Choose App';
    const subtitle = 'Let your computer choose for you!!';
    const options = ['Thing one' ,'Thing two', 'Thing three'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}


class Header extends React.Component {
  render() {
    
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
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
        <ol>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
        </ol>

        
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <li>{this.props.optionText}</li>
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