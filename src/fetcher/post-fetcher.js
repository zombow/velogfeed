const { request } = require("../util");

const fetcher = (variables) => {
    return request({
        query: `
            query Posts($cursor: ID, $username: String, $temp_only: Boolean, $tag: String, $postnum: Int, &usernameFont: String, &titleFont: String, &descriptionFont: String) {
                posts(cursor: $cursor, username: $username, temp_only: $temp_only, tag: $tag, limit: $postnum, usernameFont: $usernameFont, titleFont:$titleFont, descriptionFont: $discriptionFont) {
                  title
                  short_description
                  thumbnail
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
                  tags
                  likes
                }
              }
            `,
        variables,
    });
};

async function fetchPosts({ username, postnum, tag, usernameFont, titleFont, descriptionFont}) {
    try {
        const { data } = await fetcher({ username: username, limit: postnum, tag: tag ,usernameFont: usernameFont, titleFont: titleFont, descriptionFont: descriptionFont});
        return data.data.posts;
    } catch (e) {
        throw new Error(e);
    }
}

module.exports = fetchPosts;
