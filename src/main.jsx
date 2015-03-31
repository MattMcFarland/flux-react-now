/* Load Global Scripts and Settings */
require('./globals');


/* Load Main App */
var App = require('./Components/App.jsx');
React.render(<App />, document.getElementById("app"));