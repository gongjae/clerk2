import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Gobgjaes Home</h1>

      <div className="bg-gray-100 p-4 m-4 rounded-lg mb-4">
        <Link
          href="https://www.clerk2.com"
          className="text-xl text-blue-700 font-bold"
        >
          clerk2.com
        </Link>
        <p>
          This is a demo of Clerk authentication. Clerk is more than a "sign-in
          box." Integrate complete user management UIs and APIs, purpose-built
          for React, Next.js, and the Modern Web.
        </p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link
          href="https://api.github.com/"
          className="text-xl text-blue-700 font-bold"
        >
          api.github.com
        </Link>
        <p className="mb-2">Explore github repositories using Fetch API</p>
      </div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
             
        <Link
          href="http://localhost:3000/api/courses"
          className="text-xl text-blue-700 font-bold"
        >
          Backend API      
        </Link>
               
        <p className="mb-2">
          Provide Backend API service that provide extensive courses
          informationin web development      
        </p>
           
      </div>
    </>
  )
}
