import React from 'react'
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'
import './AppHeaderDropdown.css' 
import Logout from '../logout'

const AppHeaderDropdown = () => {
  // Hardcoded for exact match with the image
  const englishName = 'SAMADHAN BHASKAR GAIKWAD'
  const marathiName = 'समाधान भास्कर गायकवाड'
  const role = 'मंडळ अधिकारी'

  return (
    <CDropdown variant="nav-item" alignment="end">
      {/* Top Navbar Toggle */}
      <CDropdownToggle className="custom-user-toggle" caret={false}>
        <div className="user-avatar">
          <CIcon icon={cilUser} size="sm" />
        </div>
        <div className="user-info d-none d-md-block">
          <span className="user-name">{englishName.split(' ')[0]}</span>
          {/* <span className="user-role">{role}</span> */}
        </div>
        <svg className="dropdown-caret ms-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </CDropdownToggle>

      {/* The Dropdown Menu (The Card from your picture) */}
      <CDropdownMenu className="user-menu-card">
        
        {/* Blue Header */}
        <div className="menu-header-blue">
          <span>My Account</span>
        </div>

        {/* Profile Body */}
        <div className="menu-body-content">
          <div className="large-avatar-wrapper">
            <div className="large-avatar">
              <CIcon icon={cilUser} size="xl" />
            </div>
          </div>
          
          <div className="profile-text">
            <h5 className="english-name">{englishName}</h5>
            <h6 className="marathi-name">{marathiName}</h6>
            <p className="welcome-text">Welcome back 👋</p>
          </div>
        </div>

        {/* Separator */}
        <hr className="menu-divider" />

        {/* Logout Section */}
        <div className="logout-wrapper">
          {/* If you want to use your custom Logout component, put it inside this div */}
          {/* <Logout /> */}
          
          {/* Custom styling to match image perfectly */}
          <button className="custom-logout-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#e55353" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <CDropdownItem className="logout-item">
              <Logout />
            </CDropdownItem>
          </button>
        </div>

      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown