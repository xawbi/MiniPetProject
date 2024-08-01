import React, {FC, memo} from 'react';
import {IPost} from "../types/types";
import {useNavigate} from "react-router-dom";

interface PostProps {
  post: IPost
}

const PostsItem: FC<PostProps> = memo(({post}) => {

  const navigate = useNavigate()

  if (post.id === 10) {
    post.title += 'Hello'
  }

  return (
    <div style={{border: '1px solid grey'}}>
      <h3>{post.id} Пост</h3>
      <h4>Название поста</h4>
      <div>{post.title}</div>
      <h4>Описание поста</h4>
      <div>{post.body}</div>
      <button onClick={() => navigate('/Posts/' + post.id)} style={{marginTop: 10}}>Просмотреть пост</button>
    </div>
  );
})

export default PostsItem;