'use client'
import PostCards from "@/components/TopNav/PostCard/page";
import { useEffect,useState } from "react";

export default function Blog() {
  const[postData, setPostData] = useState([])
   useEffect(()=>{
    getAllpost()
   },[]
 

  )
  const getAllpost =async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data =await response.json()
    setPostData(data)
  }
 console.log
  return (
    <div><PostCards/></div>

  )
}
