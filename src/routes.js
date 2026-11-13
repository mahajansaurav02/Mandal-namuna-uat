import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
// Reports
const InspectionOffline = React.lazy(() =>
  import('./views/inspection-module/inspection-offline/AuditFormtrial'),
)
const InspectionOnline = React.lazy(() =>
  import('./views/inspection-module/inspection-online/InspectionOnline'),
)
const CheckInspectionOffline = React.lazy(() =>
  import('./views/inspection-module/check-inspection-offline/CheckInspection'),
)
const CheckInspectionOnline = React.lazy(() =>
  import('./views/inspection-module/check-inspection-online/CheckInspectionOnline'),
)
const viewInspectionOffline = React.lazy(() =>
  import('./views/inspection-module/check-inspection-offline/viewInspection'),
)
const InspectionTableOffline = React.lazy(() =>
  import('./views/inspection-module/check-inspection-offline/InspectionTable'),
)
const InspectionTableOnline = React.lazy(() =>
  import('./views/inspection-module/check-inspection-offline/InspectionTable'),
)

const satbara = React.lazy(() =>
  import('./views/inspection-module/inspection-online/Sections/SectionTables/satbara'),
)

// OCR-Trial-Components
const UserRegistration = React.lazy(() =>
  import('./views/ocr-trial/user-registration/user-registration'),
)
const RRRFSearchTrial = React.lazy(() => import('./views/ocr-trial/rrrf-search/rrrf-search'))
// const TextRecognizeTrial = React.lazy(() =>
//   import('./views/ocr-trial/text-recognize/TextRecognization'),
// )
const CompareDocumentsTrial = React.lazy(() =>
  import('./views/ocr-trial/compare-documents/compare-documents'),
)

//Circular officer
const CircularForm1 = React.lazy(() => import('./views/Mandal_Office/Reports/circular-form-1'))
const CircularForm2 = React.lazy(() => import('./views/Mandal_Office/Reports/circular-form-2'))
const CircularForm3 = React.lazy(() => import('./views/Mandal_Office/Reports/circular-form-3'))
const CircularForm5 = React.lazy(() => import('./views/Mandal_Office/Reports/circular-form-5'))
const CircularForm8 = React.lazy(() => import('./views/Mandal_Office/Reports/circular-form-8'))
const CircularForm9 = React.lazy(() => import('./views/Mandal_Office/Reports/circular-form-9'))
const CircularForm10 = React.lazy(() => import('./views/Mandal_Office/Reports/circular-form-10'))
const MandalNamuna1= React.lazy(() => import('./views/Mandal_Office/Reports/mandal-namuna-1'))
const MandalNamuna2= React.lazy(() => import('./views/Mandal_Office/Reports/mandal-namuna-2'))
const MandalNamuna3= React.lazy(() => import('./views/Mandal_Office/Reports/mandal-namuna-3'))
const MandalNamuna4= React.lazy(() => import('./views/Mandal_Office/Reports/mandal-namuna-4'))
const MandalNamuna5= React.lazy(() => import('./views/Mandal_Office/Reports/mandal-namuna-5'))
const MandalNamuna6= React.lazy(() => import('./views/Mandal_Office/Reports/mandal-namuna-6'))
const MandalNamuna6b= React.lazy(() => import('./views/Mandal_Office/Reports/mandal-namuna-6-b'))
const AvakjavakForm= React.lazy(() => import('./views/Mandal_Office/DataEntryForm/avak_javak_nondvahi'))
const ShaskiyMalmattavahiForm= React.lazy(() => import('./views/Mandal_Office/DataEntryForm/shaskiy_malmattavahi_form'))
const CircularDataentryForm1 = React.lazy(() =>
  import('./views/Mandal_Office/DataEntryForm/CircularDataentryForm1'),
)
const CircularVillageForm1 = React.lazy(() =>
  import('./views/Mandal_Office/DataEntryForm/CircularVillageForm1'),
)

// Taluka officer
const TalukaForm1 = React.lazy(() => import('./views/Taluka_Office/Taluka-form-1'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/inspection-module/inspection-offline', name: 'TrialForm', element: InspectionOffline },
  { path: '/inspection-module/inspection-online', name: 'TrialForm', element: InspectionOnline },
  {
    path: '/inspection-module/check-inspection-offline',
    name: 'Inspection Check',
    element: CheckInspectionOffline,
  },
  {
    path: '/inspection-module/check-inspection-online',
    name: 'Inspection Check',
    element: CheckInspectionOnline,
  },
  {
    path: '/check-inspection-offline/ViewInspection',
    name: 'Print Inspection',
    element: viewInspectionOffline,
  },
  {
    path: '/inspection-module/check-inspection-offline/CheckInspection/InspectionTable',
    name: 'Inspection Check',
    element: InspectionTableOffline,
  },
  {
    path: '/inspection-module/check-inspection-online/CheckInspection/InspectionTable',
    name: 'Inspection Check',
    element: InspectionTableOnline,
  },
  {
    path: '/inspection-module/inspection-online/Sections/SectionTables/satbara.js',
    name: 'Satbara',
    element: satbara,
  },

  //ocr trial
  { path: '/ocr/gr-information', name: 'GR-information', element: UserRegistration },
  { path: '/ocr/rrrf-search', name: 'rrrf-search', element: RRRFSearchTrial },
  {
    path: '/ocr/compare-documents',
    name: 'compare-documents',
    element: CompareDocumentsTrial,
  },
  { path: '/Mandal_Office/circular-form-1', name: 'Circular Form', element: CircularForm1 },
  { path: '/Mandal_Office/circular-form-2', name: 'Circular Form', element: CircularForm2 },
  { path: '/Mandal_Office/circular-form-3', name: 'Circular Form', element: CircularForm3 },
  { path: '/Mandal_Office/circular-form-5', name: 'Circular Form', element: CircularForm5 },
  { path: '/Mandal_Office/circular-form-8', name: 'Circular Form', element: CircularForm8 },
  { path: '/Mandal_Office/circular-form-9', name: 'Circular Form', element: CircularForm9 },
  { path: '/Mandal_Office/circular-form-10', name: 'Circular Form', element: CircularForm10 },
  { path: '/Mandal_Office/mandal-namuna-1', name: 'Circular Form', element: MandalNamuna1 },
  { path: '/Mandal_Office/mandal-namuna-2', name: 'Circular Form', element: MandalNamuna2 },
  { path: '/Mandal_Office/mandal-namuna-3', name: 'Circular Form', element: MandalNamuna3 },
  { path: '/Mandal_Office/mandal-namuna-4', name: 'Circular Form', element: MandalNamuna4 },
  { path: '/Mandal_Office/mandal-namuna-5', name: 'Circular Form', element: MandalNamuna5 },
  { path: '/Mandal_Office/mandal-namuna-6', name: 'Circular Form', element: MandalNamuna6 },
  { path: '/Mandal_Office/mandal-namuna-6-b', name: 'Circular Form', element: MandalNamuna6b },
  { path: '/Mandal_Office/avakjavakform', name: 'Circular Form', element: AvakjavakForm },
  { path: '/Mandal_Office/shaskiymalmattavahiform', name: 'Circular Form', element: ShaskiyMalmattavahiForm },


  {
    path: '/Mandal_Office/DataEntryForm/CircularDataentryForm1',
    name: 'Circular Form',
    element: CircularDataentryForm1,
  },
  {
    path: '/Mandal_Office/DataEntryForm/CircularVillageForm1',
    name: 'Circular Form',
    element: CircularVillageForm1,
  },
  { path: '/Taluka_Office/Taluka-form-1', name: 'Circular Form', element: TalukaForm1 },
]

export default routes
