import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class CanNotChooseApp extends React.Component {
  state ={
    options: [],
    selectedOption: undefined
  };

  handlePick = () => {
    const ranndomNumber = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[ranndomNumber];
    this.setState(()=> ({ selectedOption: option}));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({options: [] }));
  }

  handleDeleteSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined }));
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value';
    }else if (this.state.options.indexOf(option)> -1) {
      return 'This option already exists'
    }

    this.setState((prevState) => ({ options: prevState.options.concat([option])}));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options:prevState.options.filter ((option) => {
        return optionToRemove !==option;
      })
    }));
  }
  
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      
      if (options){
      this.setState(() => ({options: options}));
      }
    }catch (e) {
      //do nothing
    }
  
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json);
      console.log ('saving data');
    }
  }
  componentWillUnmount() {
    console.log('component Will unmount!');
  }

  render(){
    const subtitle = 'Let your computer choose for you!!';
   

    return (
      <div>
        <Header  subtitle={subtitle}/>
        <div className="container">
          <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options 
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleDeleteSelectedOption={this.handleDeleteSelectedOption}
        />
      </div>
    )
  }
}
