import React from 'react'

const BlogLayout = ({children}:{children:React.ReactNode}) => {
  return (
        <div>
            {children}
            <h1>This is Blog Layout.</h1>
        </div>
  )
}

export default BlogLayout
