import React from 'react'

export default function Content({ children }) {
  return (
    <div style={{ 
        textAlign: `center`, 
        margin: `auto`,
        marginTop: `30px` }}
    >
      {children}
    </div>
  )
}