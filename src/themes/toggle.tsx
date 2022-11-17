import React from 'react'
import { Button } from 'react-bootstrap'

const Toggle = ({ theme, toggleTheme }: { theme: any; toggleTheme: any }) => {
  return (
    <div className="theme-toggle-button">
      <Button onClick={toggleTheme}>
        {theme === 'light' ? (
          <span>
            <i className="bi bi-moon-stars-fill"></i>
          </span>
        ) : (
          <span>
            <i className="bi bi-brightness-high-fill"></i>
          </span>
        )}
      </Button>
    </div>
  )
}

export default Toggle
