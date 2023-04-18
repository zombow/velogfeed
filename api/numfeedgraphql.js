const fetch = require('node-fetch');

module.exports = (req, res) => {
    const username = req.query.username;
    if (!username) {
        return res.status(400).send('username parameter is required.');
    }

    const endpointUrl = 'https://v2.velog.io/graphql';

    const query = `
query IntrospectionQuery {
  __schema {
    types {
      name
      kind
      description
      fields {
        name
        description
      }
    }
  }
}

`;



    fetch(endpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body: JSON.stringify({ query })
    })
        .then(response => response.json())
        .then(result => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(result);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Server Error');
        });
};
