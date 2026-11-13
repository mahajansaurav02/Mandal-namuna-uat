/* eslint-disable prettier/prettier */
import React from 'react'
import { Toast } from 'src/views/ui/Toast'
import ExcelDownloadButton from 'src/views/ui/ExcelDownloadButton'
import '../../../layout/ModernReport.css' // Ensure path is correct

const MandalNamuna6 = () => {
  // Sample data mapping to the 7 columns
  const reportData = [
    {
      id: 1,
      villageSajja: 'गाव 1 / साझा 1',
      orderNoDate: 'आदेश क्र. 123 / 10-01-2024',
      surveyNo: '45/2',
      area: '2.50',
      aakar: '1500.00',
      type: 'खराब जमीन',
    },
    {
      id: 2,
      villageSajja: 'गाव 2 / साझा 2',
      orderNoDate: 'आदेश क्र. 124 / 15-02-2024',
      surveyNo: '78/1',
      area: '1.20',
      aakar: '800.50',
      type: 'पडीक जमीन',
    },
    // Add more rows...
  ]

  return (
    <div className="mr-container">
      <Toast />
      
      {/* Page Header */}
      <div className="mr-page-header">
        <h1 className="mr-page-title">मंडळातील शासकीय जमिनीची नोंदवही</h1>
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
          <h2 className="mr-card-title">शासकीय जमिनीची नोंदवही</h2>
          <ExcelDownloadButton
            data={reportData}
            fileName="mandal_government_land"
            sheetName="Government Land"
            buttonText="Download Excel"
          />
        </div>
        
        <div className="mr-card-body" style={{ padding: 0 }}>
          <div className="mr-table-wrapper">
            <table className="mr-table">
              <thead>
                <tr>
                  <th>अ.क्र</th>
                  <th>गाव/साझा</th>
                  <th>आदेश क्र. व दिनांक</th>
                  <th>भूमापन क्रमांक</th>
                  <th>क्षेत्र - (हे.आ.)</th>
                  <th>आकार - (रु.पै.)</th>
                  <th>प्रकार</th>
                </tr>
              </thead>
              
              <tbody>
                {reportData.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.villageSajja}</td>
                    <td>{row.orderNoDate}</td>
                    <td>{row.surveyNo}</td>
                    <td>{row.area}</td>
                    <td>{row.aakar}</td>
                    <td>{row.type}</td>
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

export default MandalNamuna6