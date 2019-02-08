console.log('app.js is running');

const app = {
  title: 'CanNotChoose',
  subtitle: 'Let your computer choose for you!',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
  }
  renderApp();
};

const resetAll = () => {
  app.options = [];
  renderApp();
};

const makeDecision = () => {
  const ranndomNumber = Math.floor(Math.random() * app.options.length);
  const option = app.options[ranndomNumber];
  alert(option);

};


const renderApp = () => {
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <button disabled={app.options.length === 0} onClick={makeDecision}>Let me choose!</button>
    <button onClick={resetAll}>Remove all</button>
    <ol>
    {
      app.options.map((option) => {
        return <li key={option}>Option: {option}</li>
      })
    }
    </ol>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option"/>
      <button>Add Option</button>
    </form>
  </div>
);

ReactDOM.render(template, appRoot);
};
const appRoot = document.getElementById('app');
renderApp();

