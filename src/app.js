console.log('app.js is running');

var app = {
  title: 'CanNotChoose',
  subtitle: 'Let your computer choose for you!',
  options: ['One','Two']
};


var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
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

function getLocation(location){
  if (location){
      return <p>Location: {location}</p>;
  } 
}

var templateTwo = (
<div>
  <h1>{user.name ? user.name : 'Anonymous'}</h1>
  {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
  {getLocation(user.location)}
 
</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);