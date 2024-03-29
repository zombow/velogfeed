const { request } = require("../util");

const fetcher = (variables) => {
    return request({
        query: `
            query Posts($cursor: ID, $username: String, $temp_only: Boolean, $tag: String, $postnum: Int) {
                posts(cursor: $cursor, username: $username, temp_only: $temp_only, tag: $tag, limit: $postnum) {
                  id
                  title
                  short_description
                  thumbnail
                  tags
                  user {
                    username
                    profile {
                      thumbnail
                    }
                  }
                  url_slug
                  released_at
                  updated_at
                  comments_count
                  likes
                }
              }
            `,
        variables,
    });
};

async function fetchPosts({ username, postnum, tag}) {
    try {
        const { data } = await fetcher({ username: username, limit: postnum, tag: tag });
        return data.data.posts;
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = fetchPosts;
