'use client'
import Link from "next/link"
export default function Loading() {
  return (
    <div>
        <h1 className="text-center text-white">Please wait for a moment while data is fetched</h1>
        <h1 className="text-center text-danger">(❁´◡`❁)(❁´◡`❁)(❁´◡`❁)</h1>
        <p className="text-center"><small>you can wait or go back <Link href="/">Home ←</Link></small></p>
    </div>
  )
}
