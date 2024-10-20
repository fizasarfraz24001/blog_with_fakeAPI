'use client'
import Comments from '@/components/Comments/Comments';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';


import React, { useEffect, useState } from 'react'
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
export default function Page({ params }: Params) {
    const[ PostData, setPostData] =useState<Post | null>(null)
    const [comments , setcomments]=useState([])
  useEffect(() => {
    getSpecificPost()
  }, [])
  
  const getSpecificPost = async () => {
    const postresponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
    if (postresponse.ok){
        const SpecificData = await postresponse.json()
        setPostData(SpecificData)
        const responsecomments = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments/`)
           const commentsData = await responsecomments.json()
      
           setcomments(commentsData)
 }
  }
  return (
    <div>
        <div className='w-full mx-auto bg-white shadow-md rounded-lg my-4 p-6'>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>{(PostData || {}).title}</h2>
            <p className='text-gray-700 text-base mb-6'>{(PostData || {}).body}</p>
      {comments &&comments.map(com=>{
        return(  <Comments commentData={com}/>)
      })}
     
             </div>
    </div>
  )
}