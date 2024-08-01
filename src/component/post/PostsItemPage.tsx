import React, {FC, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {IPost} from "../types/types";

const PostsItemPage: FC = () => {

  const [post, setPost] = useState<IPost | null>(null)
  const params = useParams<{id: string}>()
  const navigate = useNavigate()

  useEffect(() => {
    fetchPost()
  }, [])

  const fetchPost = async () => {
    try {
      const response = await axios.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + params.id)
      return setPost(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <button onClick={() => navigate('/Posts')}>Back</button>
      <div>{post?.id}</div>
      <div>{post?.title}</div>
      <div>{post?.body}</div>
    </div>
  );
};

export default PostsItemPage;