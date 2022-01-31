import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

// 포스트 리스트
const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <PostListContainer />
            <PaginationContainer />
        </>
    );
};

export default PostListPage;