import BlogData from '../../data/mocks/blog.json';

import AppStore from '../../data/store.js';

export function getLatestBlogPost () {
    const count = BlogData.blog.posts.length;

    AppStore.dispatch({
        type: 'ADD_BLOG_POST',
        data: BlogData.blog.posts[count - 1]
    });
}
