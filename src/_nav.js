
  // 
  
  
  
  
  
  
  
  import React from 'react'
import {
  cilDescription,
  cilSpeedometer,
  cilSpreadsheet,
  cilApplicationsSettings,
  cilLibraryBuilding,
  cilTransfer,
  cilListRich,
  cilSettings,
  cilChart,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    name: 'मंडळ अहवाल',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
    items: [
      {
        name: <span style={{ fontSize: '13px' }}>कार्यरत ग्रा.म. अधिकारी माहिती अहवाल</span>,
        to: '/Mandal_Office/mandal-namuna-1',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        name: <span style={{ fontSize: '13px' }}>शासकीय मालमत्ता नोंदवही</span>,
        to: '/Mandal_Office/mandal-namuna-2',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        name: <span style={{ fontSize: '13px' }}>आवक जावक नोंदवही</span>,
        to: '/Mandal_Office/mandal-namuna-3',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        name: <span style={{ fontSize: '13px' }}>साजानिहाय विवादग्रस्त फेरफरांची नोंदवही</span>,
        to: '/Mandal_Office/mandal-namuna-4',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        name: <span style={{ fontSize: '13px' }}>इनाम व वतन जमिनीची नोंदवही</span>,
        to: '/Mandal_Office/mandal-namuna-5',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        name: <span style={{ fontSize: '13px' }}>शासकीय जमिनीची नोंदवही</span>,
        to: '/Mandal_Office/mandal-namuna-6',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
      {
        name: <span style={{ fontSize: '13px' }}>शासनाने निहित केलेल्या विविध जमिनीची नोंदवही (ब)</span>,
        to: '/Mandal_Office/mandal-namuna-6-b',
        icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
      },
    ],
  },
  {
    name: 'Master Form',
    icon: <CIcon icon={cilApplicationsSettings} customClassName="nav-icon" />,
    items: [
      {
        name: <span style={{ fontSize: '13px' }}>आवक जावक नोंदवाहि नमूना</span>,
        to: '/Mandal_Office/avakjavakform',
        icon: <CIcon icon={cilTransfer} customClassName="nav-icon" />,
      },
      {
        name: <span style={{ fontSize: '13px' }}>शासकीय मालमत्ता वही नमूना</span>,
        to: '/Mandal_Office/shaskiymalmattavahiform',
        icon: <CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />,
      },
    ],
  },
]

export default _nav
  
  
  
  // {
  //   component: CNavGroup,
  //   // name: 'Inspection Module', // to: '/Masters',
  //   name: 'निरीक्षण मॉड्यूल', // to: '/Masters',
  //   // name: 'संक्षिप्त दफ्तर तपासणी(online)', // to: '/Masters',
  //   icon: <CIcon icon={cilWindowMaximize} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavGroup,
  //       // name: 'Online', // to: '/Mandal_Office/DataEntryForm', // to: '/inspection-module/check-inspection-online',
  //       name: 'संक्षिप्त दफ्तर तपासणी(online)', // to: '/Mandal_Office/DataEntryForm', // to: '/inspection-module/check-inspection-online',
  //       icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           // name: 'Inspection Check Online',
  //           name: 'ऑनलाइन तपासणी',
  //           to: '/inspection-module/check-inspection-online',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },

  //         // {
  //         //   component: CNavItem,
  //         //   name: 'Inspection Online',
  //         //   to: '/inspection-module/inspection-online',
  //         //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         // },
  //       ],
  //     },
  //     {
  //       component: CNavGroup,
  //       // name: 'Offline', // to: '/Mandal_Office/DataEntryForm', // to: '/inspection-module/inspection-online/InspectionOnline',
  //       // name: 'तलाठी दफ्तर (अ-ऑडिट) तपासणी(offline)', // to: '/Mandal_Office/DataEntryForm', // to: '/inspection-module/inspection-online/InspectionOnline',
  //       name: 'तलाठी दफ्तर (अ-ऑडिट) तपासणी(offline)', // to: '/Mandal_Office/DataEntryForm', // to: '/inspection-module/inspection-online/InspectionOnline',
  //       icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           // name: 'Inspection Check Offline',
  //           name: 'ऑफलाइन तपासणी',
  //           to: '/inspection-module/check-inspection-offline',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         // {
  //         //   component: CNavItem,
  //         //   name: 'Inspection Offline',
  //         //   to: '/inspection-module/inspection-offline',
  //         //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         // },
  //       ],
  //     },
  //   ],
  // },
  //----------------------------------------------------OCR----------------------------------
  // {
  //   component: CNavGroup,
  //   name: 'OCR Trial',
  //   to: '/ocr',
  //   icon: <CIcon icon={cilFlip} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'GR Registration',
  //       to: '/ocr/gr-information',
  //       icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'RRRF Search',
  //       to: '/ocr/rrrf-search',
  //       icon: <CIcon icon={cilZoom} customClassName="nav-icon" />,
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Compare Documents',
  //       to: '/ocr/compare-documents',
  //       icon: <CIcon icon={cilLowVision} customClassName="nav-icon" />,
  //     },
  //   ],
  // },

  //-------------------------------------------Mandal Office----------------------------------
  // {
  //   component: CNavGroup,
  //   // name: 'Circular Form',
  //   name: 'मंडळ नमुने',
  //   to: '/Mandal_Office',
  //   // icon: <CIcon icon={cilFlip} customClassName="nav-icon" />,
  //   icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  //   items: [
  //     // {
  //     //   component: CNavGroup,
  //     //   // name: 'Data Entry',
  //     //   name: 'माहिती भरणे',
  //     //   to: '/Mandal_Office/DataEntryForm',
  //     //   // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //     //   icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,

  //     //   items: [
  //     //     // {
  //     //     //   component: CNavItem,
  //     //     //   name: 'CircularDataentryForm1',
  //     //     //   to: '/Mandal_Office/DataEntryForm/CircularDataentryForm1',
  //     //     //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //     //     // },
  //     //     {
  //     //       component: CNavItem,
  //     //       name: 'मंडळ नमुने १',
  //     //       to: '/Mandal_Office/DataEntryForm/CircularVillageForm1',
  //     //       icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //     //     },
  //     //   ],
  //     // },
  //     {
  //       component: CNavGroup,
  //       // name: 'Reports',
  //       name: 'अहवाल',
  //       to: '/Mandal_Office/Reports',
  //       // icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //       items: [
  //         // {
  //         //   component: CNavItem,
  //         //   // name: 'circular-form-2',
  //         //   name: 'वन जमिनींची नोंदवही',
  //         //   to: '/Mandal_Office/circular-form-2',
  //         //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         // },
  //         // {
  //         //   component: CNavItem,
  //         //   // name: 'circular-form-1',
  //         //   // name: 'मंडळ नमूना १ अहवाल',
  //         //   name: 'अतिक्रमण नोंदवही',
  //         //   to: '/Mandal_Office/circular-form-1',
  //         //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         // },
  //         // {
  //         //   component: CNavItem,
  //         //   // name: 'circular-form-3',
  //         //   name: 'बिनभोगवटयाच्या (सरकारी) जमिनींची नोंदवही',
  //         //   to: '/Mandal_Office/circular-form-3',
  //         //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         // },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-3',
  //           name: <span style={{ fontSize: '13px' }}>कार्यरत ग्रा.म. अधिकारी माहिती अहवाल</span>,
  //           to: '/Mandal_Office/mandal-namuna-1',
  //           icon: <CIcon style={{marginRight:0}} icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-3',
  //           name:   <span style={{ fontSize: '13px' }}> शासकीय मालमत्ता नोंदवही</span>,
  //           to: '/Mandal_Office/mandal-namuna-2',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-3',
  //           name:  <span style={{ fontSize: '13px' }}>आवक जावक नोंदवही</span> ,
  //           to: '/Mandal_Office/mandal-namuna-3',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-3',
  //           name:  <span style={{ fontSize: '13px' }}>साजानिहाय विवादग्रस्त फेरफरांची नोंदवही</span>,
  //           to: '/Mandal_Office/mandal-namuna-4',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-3',
  //           name: <span style={{ fontSize: '13px' }}>इनाम व वतन जमिनीची नोंदवही</span>,
  //           to: '/Mandal_Office/mandal-namuna-5',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-3',
  //           name: <span style={{ fontSize: '13px' }}>शासकीय जमिनीची नोंदवही</span>,
  //           to: '/Mandal_Office/mandal-namuna-6',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //         {
  //           component: CNavItem,
  //           // name: 'circular-form-3',
  //           name: <span style={{ fontSize: '13px' }}>शासनाने निहित केलेल्या विविध जमिनीची नोंदवही (ब)</span>,
  //           to: '/Mandal_Office/mandal-namuna-6-b',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
          
  //         // {
  //         //   component: CNavItem,
  //         //   // name: 'circular-form-5',
  //         //   name: 'मं.न. ४ अहवाल',
  //         //   to: '/Mandal_Office/circular-form-5',
  //         //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         // },
  //         // {
  //         //   component: CNavItem,
  //         //   // name: 'circular-form-8',
  //         //   name: 'मं.न. ५ अहवाल',
  //         //   to: '/Mandal_Office/circular-form-8',
  //         //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         // },
  //         // {
  //         //   component: CNavItem,
  //         //   // name: 'circular-form-9',
  //         //   name: 'मं.न. ६ अहवाल',
  //         //   to: '/Mandal_Office/circular-form-9',
  //         //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         // },
  //         // {
  //         //   component: CNavItem,
  //         //   name: 'मं.न. ७. अहवाल',
  //         //   to: '/Mandal_Office/circular-form-10',
  //         //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         // },
  //       ],
  //     },
  //   ],
  // },
  //-------------------------------------------Taluka Office----------------------------------
  // {
  //   component: CNavGroup,
  //   name: 'Taluka Form',
  //   to: '/Mandal_Office',
  //   // icon: <CIcon icon={cilFlip} customClassName="nav-icon" />,
  //   icon: <CIcon icon={cilSpreadsheet} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Dataentry',
  //       to: '/Mandal_Office/DataEntryForm',
  //       icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //       items: [
  //         {
  //           component: CNavItem,
  //           name: 'Taluka-form-1',
  //           to: '/Mandal_Office/DataEntryForm/circular-form-1.js',
  //           icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  //         },
  //       ],
  //     },
  //   ],
  // },

