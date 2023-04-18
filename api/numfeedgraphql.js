const fetch = require('node-fetch');

module.exports = (req, res) => {
    const username = req.query.username;
    if (!username) {
        return res.status(400).send('username parameter is required.');
    }

    const endpointUrl = 'https://v2.velog.io/graphql';

    const query = `
   query {
     user(username: "${username}") {
       username
       post
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
            if (!result.data) {
                return res.status(400).send('result.data not found');
            }
            const user = result.data.user;
            if (!user) {
                return res.status(400).send('User not found');
            }

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.send(result.data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Server Error');
        });
};
