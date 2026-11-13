import React from 'react'
import { AppContent, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    // Added w-100 to ensure the wrapper takes full width
    <div className="wrapper d-flex flex-column min-vh-100 bg-light w-100">
      <AppHeader />
      
      {/* 
        flex-grow-1 makes it fill the remaining height.
        w-100 makes it take full width.
        d-flex and flex-column ensure AppContent can stretch inside it.
      */}
      <div className="body flex-grow-1 w-100 d-flex flex-column">
        <AppContent />
      </div>
      
      <AppFooter />
    </div>
  )
}

export default DefaultLayout