
class VisibilityTogle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
   
    this.state = {
      visibillity: false,
      buttonText: 'Show Details',
      parText: ''
    };

  }

  render() {
    return(
    <div>
    <h1>Visibitity Toggle</h1>

    <button onClick={this.handleToggleVisibility}>{this.state.buttonText}</button>
    <p>{this.state.parText}</p>

  </div>
  );
  }

  handleToggleVisibility() {
    this.setState(() => {
      if(this.state.visibillity === false) {
        return {
          visibillity: true,
          buttonText: 'HIDE Details',
          parText: 'Details revealed'
        };
      }else {
        return {
          visibillity: false,
          buttonText: 'Show Details',
          parText: ''
        };
      }
    });
  }
}



  ReactDOM.render(<VisibilityTogle />,document.getElementById('app'));