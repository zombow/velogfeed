const fetch = require('node-fetch');
const { postcardSVG } = require('../src/card/post-card');

module.exports = (req, res) => {
    const username = req.query.username;
    if (!username) {
        return res.status(400).send('username parameter is required.');
    }

    let postnum = parseInt(req.query.postnum) || 0;

    const endpointUrl = 'https://v2.velog.io/graphql';

    const query = `
   query {
  user(username: "${username}") {
    username
    posts(page: ${postnum / 10 + 1}, perPage: 10) {
      edges {
        node {
          title
          body
          user {
            username
          }
          publishedAt
        }
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
            console.log(result);
            if (!result.data) {
                return res.status(400).send('result.data not found');
            }
            const post = result.data.user.posts.edges[postnum % 10]?.node;
            if (!post) {
                return res.status(400).send('Post not found');
            }

            const svg = postcardSVG(post.title, post.body);
            const data = {
                svg
            };

            res.setHeader('Access-Control-Allow-Origin', '*');
            res.json(data);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Server Error');
        });
};
