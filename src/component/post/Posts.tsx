import React, {FC, useEffect, useState} from 'react'
import {IPost} from "../types/types";
import axios from "axios";
import List from "./List";
import PostsItem from "./PostsItem";
import {useNavigate} from "react-router-dom";

const Posts: FC = () => {

  const [posts, setPosts] = useState<IPost[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchPost()
    console.log('UseEffectRunPosts')
  }, [])

  const fetchPost = async() => {
    try {
      const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=20')
      return setPosts(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <List
        items={posts}
        renderItem={(post: IPost) => <PostsItem key={post.id} post={post}/>}
      />
    </div>
  )
}

export default Posts