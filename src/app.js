class CanNotChooseApp extends React.Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const ranndomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[ranndomNumber];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value';
    }else if (this.state.options.indexOf(option)> -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    });
  }
  render(){
    const title = 'Can Not Choose App';
    const subtitle = 'Let your computer choose for you!!';
   

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

// class Header extends React.Component {
//   render() {
    
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }

// }

const Action = (props) => {
  
    return (
      <div>
        <button onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        Will you choose for me?</button>
      </div>

    );
  
};

// class Action extends React.Component {

//   render(){
//     return (
//       <div>
//         <button onClick={this.props.handlePick}
//         disabled={!this.props.hasOptions}
//         >
//         Will you choose for me?</button>
//       </div>

//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
      <ol>
      {
        props.options.map((option) => <Option key={option} optionText={option} />)
      }
      </ol>       
    </div>
  );
};

// class Options extends React.Component {

//   render() {
//     return (
//       <div>
//       <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//         <ol>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//         </ol>       
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      <li>{props.optionText}</li>
    </div>
  );
};


// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <li>{this.props.optionText}</li>
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e){
    e.preventDefault();
    const value = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(value);
    
    this.setState(() => {
      return {
        error: error
      };
    });
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   )
// };

ReactDOM.render(<CanNotChooseApp/>, document.getElementById('app'));