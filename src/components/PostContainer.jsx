import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../redux'

const PostContainer = () => {

    const postData = useSelector((state) => state.post);

    console.log(postData.posts, 9)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);


    return postData.loading ? (<h2>Loading...</h2>)
        : postData.error ? (<div>{postData.error}</div>)
            : (
                <div>
                    {
                        postData.posts?.map(post => {
                            return <p>{post.id} <span>{post.title}</span></p>
                        })
                    }
                </div>
            )
}

export default PostContainer