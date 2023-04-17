const fetch = require('node-fetch');
const { createSVG } = require('../src/card/post-card');

module.exports = async (req, res) => {
    try {
        const username = req.query.username;
        if (!username) {
            return res.status(400).send('username parameter is required.');
        }
        let postnum = parseInt(req.query.postnum);
        if (!postnum) {
            postnum = 0;
        } else {
            postnum = parseInt(postnum);
        }

        // GraphQL API 엔드포인트 URL
        const endpointUrl = 'https://v2.velog.io/graphql';

        // GraphQL 쿼리
        const query = `
      query {
        user(username: "${username}") {
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

        const response = await fetch(endpointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query })
        });

        const result = await response.json();
        const post = result.data.user.posts.edges[postnum % 10].node;

        const svg = createSVG(post.title, post.body);
        const data = {
            svg
        };

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};
