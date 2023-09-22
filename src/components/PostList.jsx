import React from 'react';
import PostItem from './PostItem';


class PostList extends React.Component {
    render() {
        const { posts } = this.props;
        return (
            <div>
                <h2 className="mt-5">Postari:</h2>
                <div className="d-flex flex-row flex-wrap">
                {posts.map((post, index) => {
                    return <PostItem
                        title={post.title}
                        body={post.body}
                        key={index}
                    />
                })}
                </div>
            </div>
        );
    }
}

export default PostList;