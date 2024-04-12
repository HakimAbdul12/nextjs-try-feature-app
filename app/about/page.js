import React from 'react'
import Link from 'next/link'
import "../globals.css"


export default function page() {
  return (
<>
      <h1>First Post</h1>
      <h2>
          <Link href="/">← Back to home</Link>
      </h2>
</>
  )
}
