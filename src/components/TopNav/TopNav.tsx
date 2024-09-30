import React from 'react'
import Link from 'next/link'
export default function TopNav() {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">Logo</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link href="/Blog" className="text-gray-300 hover:text-white">
            Blog
        </Link>
        </div>
      </div>
    </nav>
  )
}
