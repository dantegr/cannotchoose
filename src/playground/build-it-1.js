
let parText = '';
let buttonText = 'Show Details';

const detailsButton = () => {
  if(buttonText === 'Show Details'){
    parText='Details revealed';
    buttonText='Hide Details';
    renderApp();
  }else {
    parText = '';
    buttonText='Show Details';
    renderApp();
  }
};


const renderApp = () => {
  const template = (
    <div>
      <h1>Visibitity Toggle</h1>

      <button onClick={detailsButton}>{buttonText}</button>
      <p>{parText}</p>

    </div>
  );
  
    ReactDOM.render(template, appRoot);
  };
  const appRoot = document.getElementById('app');
  renderApp();