'use client'
import PostCard from "@/components/TopNav/PostCard/page";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";
import { useEffect,useState } from "react";

export default function Blog() {
  const[PostData, setPostData] = useState([])
   useEffect(()=>{
    getAllPost()
   },[]
 

  )
  const getAllPost =async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data =await response.json()
    setPostData(data)
  }
 console.log(PostData)
  return (
    <div className="flex flex-wrap justify-center">
      {PostData.map((eachPost:Params) =>{
           return(
            <Link key={eachPost.id} href={`/Blog/${eachPost.id}`}>
            <PostCard PostData={eachPost} />
          </Link>
     
          )

           })}
      </div>
 
  )
}