'use strict';

console.log('app.js is running');

var app = {
  title: 'CanNotChoose',
  subtitle: 'Let your computer choose for you!',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
};

var resetAll = function resetAll() {
  app.options = [];
  renderApp();
};

var makeDecision = function makeDecision() {
  var ranndomNumber = Math.floor(Math.random() * app.options.length);
  var option = app.options[ranndomNumber];
  alert(option);
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: makeDecision },
      'Let me choose!'
    ),
    React.createElement(
      'button',
      { onClick: resetAll },
      'Remove all'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          'Option: ',
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
var appRoot = document.getElementById('app');
renderApp();
