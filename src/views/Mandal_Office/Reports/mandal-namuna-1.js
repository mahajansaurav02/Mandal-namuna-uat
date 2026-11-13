/* eslint-disable prettier/prettier */
import React from 'react'
import { Toast } from 'src/views/ui/Toast'
import ExcelDownloadButton from 'src/views/ui/ExcelDownloadButton'
import '../../../layout/ModernReport.css' // Make sure this path is correct

const MandalNamuna1 = () => {
  // Sample data to download
  const reportData = [
    {
      id: 1,
      officerName: 'श्री यशवंतराव माने',
      village: 'गाव 1',
      sajja: 'साझा 1',
      joinedDate: '2024-01-10',
      email: 'mane@example.com',
      phone: '9960718207',
    },
    {
      id: 2,
      officerName: 'श्री यशवंतराव माने',
      village: 'गाव 1',
      sajja: 'साझा 1',
      joinedDate: '2024-01-10',
      email: 'mane@example.com',
      phone: '9960718207',
    },
  ]

  return (
    <div className="mr-container">
      <Toast />
      
      {/* Page Header */}
      <div className="mr-page-header">
        <h1 className="mr-page-title">मंडळ कार्यरत ग्राम महसूल अधिकारी माहिती अहवाल</h1>
      </div>

      {/* Filter Card */}
      <div className="mr-card">
        <div className="mr-card-body">
          <div className="mr-filter-grid">
            
            <div className="mr-form-group">
              <label className="mr-form-label">जिल्हा</label>
              <input type="text" className="mr-input" value="नागपूर" disabled />
            </div>

            <div className="mr-form-group">
              <label className="mr-form-label">तालुका</label>
              <input type="text" className="mr-input" value="कुही" disabled />
            </div>

            <div className="mr-form-group">
              <label className="mr-form-label">मंडळ निवाडा</label>
              <select className="mr-input">
                <option value="">-- निवडा --</option>
                <option value="111">Mandal 1</option>
                <option value="112">Mandal 2</option>
              </select>
            </div>

            <div className="mr-form-group">
              <label className="mr-form-label">साझा</label>
              <select className="mr-input">
                <option value="">-- निवडा --</option>
                <option value="111">sajja 1</option>
                <option value="112">sajja 2</option>
              </select>
            </div>

            <div className="mr-form-group">
              <label className="mr-form-label">गाव</label>
              <select className="mr-input">
                <option value="">-- निवडा --</option>
                <option value="111">111</option>
              </select>
            </div>

            <div className="mr-form-group">
              <button className="mr-btn-primary" onClick={() => console.log('Fetch Data')}>
                Show Data
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mr-info-banner">
        <div className="mr-info-item">
          <span className="mr-info-label">मंडळ अधिकार्याचे नाव</span>
          <span className="mr-info-value">श्री यशवंतराव माने</span>
        </div>
        <div className="mr-info-item">
          <span className="mr-info-label">मंडळाचे नाव</span>
          <span className="mr-info-value">हवेली</span>
        </div>
        <div className="mr-info-item">
          <span className="mr-info-label">संपर्क क्र.</span>
          <span className="mr-info-value">9960718207</span>
        </div>
      </div>

      {/* Data Table Card */}
      <div className="mr-card">
        <div className="mr-card-header">
          <h2 className="mr-card-title">अहवाल माहिती</h2>
          <ExcelDownloadButton
            data={reportData}
            fileName="mandal_report"
            sheetName="Mandal Data"
            buttonText="Download Excel"
          />
        </div>
        
        <div className="mr-card-body" style={{ padding: 0 }}>
          <div className="mr-table-wrapper">
            <table className="mr-table">
              <thead>
                <tr>
                  <th>अ.क्र</th>
                  <th>ग्राम महसूल अधिकारी नाव</th>
                  <th>गांव/साझा</th>
                  <th>साझ्यातील गावे</th>
                  <th>मंडळात रुजू दिनांक</th>
                  <th>ईमेल</th>
                  <th>संपर्क क्रंमाक</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.officerName}</td>
                    <td>{row.village}</td>
                    <td>{row.sajja}</td>
                    <td>{row.joinedDate}</td>
                    <td>{row.email}</td>
                    <td>{row.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MandalNamuna1