

// open line 5 to run as node get_trainings.js
// to run in browser, this is commented.
//const fetch = require("node-fetch");
fetch('http://localhost:1337/graphql',{
method : 'POST',
headers: {"Content-Type": "application/json" },
body: JSON.stringify({

	query : `
		query {
				trainings{
					training_name
					website
  				description
    			purpose
    			id
  		}
		}
	`
})
})
.then(res => res.json())
.then(data => {
	console.log(data.data)
})
