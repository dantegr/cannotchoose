console.log('app.js is running');

var app = {
  title: 'CanNotChoose',
  subtitle: 'Let your computer choose for you!'
};


var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Pantelis',
  age: 32,
  location: 'Thessaloniki'
};

var templateTwo = (
<div>
  <h1>{user.name}</h1>
  <p>Age: {user.age}</p>
  <p>Location: {user.location}</p>
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);