import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';

// 포스트 리스트
const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <PostListContainer />
        </>
    );
};

export default PostListPage;