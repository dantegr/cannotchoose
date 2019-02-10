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
  handlePick() {
    alert('handlepick');
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>Will you choose for me?</button>
      </div>

    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);

  }
  handleRemoveAll(){
    alert('remove all');
  }
  render() {
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(e){
    e.preventDefault();
    const value = e.target.elements.option.value.trim();
    if(value){
      alert('handleAddOption');
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}



ReactDOM.render(<CanNotChooseApp />, document.getElementById('app'));