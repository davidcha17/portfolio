import React from 'react'

export default function Content({ children }) {
  return (
    <div style={{ 
        textAlign: `left`, 
        margin: `auto`,
        marginTop: `30px`, 
        marginBottom: '80px'}}
    >
      {children}
    </div>
  )
}