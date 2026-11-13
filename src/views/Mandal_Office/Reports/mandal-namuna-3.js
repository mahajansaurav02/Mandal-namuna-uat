/* eslint-disable prettier/prettier */
import React from 'react'
import { Toast } from 'src/views/ui/Toast'
import ExcelDownloadButton from 'src/views/ui/ExcelDownloadButton'
import '../../../layout/ModernReport.css' // Ensure path is correct

const MandalNamuna3 = () => {
  // Sample data mapping to the 8 columns
  const reportData = [
    {
      id: 1,
      receivedFrom: 'तहसील कार्यालय',
      letterNo: 'क्र. 123/2024',
      letterDate: '2024-01-10',
      subject: 'महसूल वसुली अहवाल',
      sentTo: 'मंडळ अधिकारी',
      sentDate: '2024-01-15',
      registerNo: 'अ-45',
    },
    {
      id: 2,
      receivedFrom: 'जिल्हा परिषद',
      letterNo: 'क्र. 456/2024',
      letterDate: '2024-02-05',
      subject: 'ग्राम विकास योजना',
      sentTo: 'ग्रामपंचायत',
      sentDate: '2024-02-10',
      registerNo: 'ब-12',
    },
    // Add more rows...
  ]

  return (
    <div className="mr-container">
      <Toast />
      
      {/* Page Header */}
      <div className="mr-page-header">
        <h1 className="mr-page-title">मंडळातील आवक जावक नोंदवही</h1>
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
              <label className="mr-form-label">मंडळ</label>
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
                <option value="113">sajja 3</option>
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
              <label className="mr-form-label">महसुल वर्ष</label>
              <select className="mr-input">
                <option value="">-- निवडा --</option>
                <option value="2023-24">2023-24</option>
                <option value="2024-25">2024-25</option>
                <option value="2025-26">2025-26</option>
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
          <h2 className="mr-card-title">आवक जावक नोंदवही</h2>
          <ExcelDownloadButton
            data={reportData}
            fileName="mandal_inward_outward"
            sheetName="Inward Outward"
            buttonText="Download Excel"
          />
        </div>
        
        <div className="mr-card-body" style={{ padding: 0 }}>
          <div className="mr-table-wrapper">
            <table className="mr-table">
              <thead>
                <tr>
                  <th>अ.क्र</th>
                  <th>पत्रव्यवहार कोणाकडुन मिळाला</th>
                  <th>पत्रव्यवहाराचा क्रमांक</th>
                  <th>पत्रव्यवहाराचा दिनांक</th>
                  <th>थोडक्यात विषय व करावयाची कार्यवाही</th>
                  <th>पत्रव्यवहार कोणाकडे निर्गमित केला</th>
                  <th>निर्गमित केल्याचा दिनांक</th>
                  <th>अ, ब, क, ड सूचीत अभिलिखित केल्याचा क्रमांक</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.receivedFrom}</td>
                    <td>{row.letterNo}</td>
                    <td>{row.letterDate}</td>
                    <td>{row.subject}</td>
                    <td>{row.sentTo}</td>
                    <td>{row.sentDate}</td>
                    <td>{row.registerNo}</td>
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

export default MandalNamuna3