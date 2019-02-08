'use strict';

var parText = '';
var buttonText = 'Show Details';

var detailsButton = function detailsButton() {
  if (buttonText === 'Show Details') {
    parText = 'Details revealed';
    buttonText = 'Hide Details';
    renderApp();
  } else {
    parText = '';
    buttonText = 'Show Details';
    renderApp();
  }
};

var renderApp = function renderApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibitity Toggle'
    ),
    React.createElement(
      'button',
      { onClick: detailsButton },
      buttonText
    ),
    React.createElement(
      'p',
      null,
      parText
    )
  );

  ReactDOM.render(template, appRoot);
};
var appRoot = document.getElementById('app');
renderApp();
