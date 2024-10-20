import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import React from 'react'

export default function PostCard(props:Params) {
  const {PostData} = props 
  console.log("PostData" )
    return (
        <div>
            <div className="flex justify-center">
                <div className="max-w-sm rounded shadow-lg bg-white m-4">
                    {/* Post Image */}
                    <img
                        className="w-full"
                        src="https://via.placeholder.com/400x200"
                        alt="Post Image"
                    />
                    {/* Post Content */}
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{PostData.title}</div>
                        <p className="text-gray-700 text-base">
                           {PostData.body}
                        </p>
                    </div>


                </div>

            </div>

        </div>
    ) 
}