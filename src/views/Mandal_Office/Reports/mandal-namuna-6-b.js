/* eslint-disable prettier/prettier */
import React from 'react'
import { Toast } from 'src/views/ui/Toast'
import ExcelDownloadButton from 'src/views/ui/ExcelDownloadButton'
import '../../../layout/ModernReport.css' // Ensure path is correct

const MandalNamuna6b = () => {
  // Sample data mapping to the 10 columns
  const reportData = [
    {
      id: 1,
      villageSajja: 'गाव 1 / साझा 1',
      orderNoDate: 'आदेश क्र. 123 / 10-01-2024',
      surveyNo: '45/2',
      areaHectare: '2',
      areaAre: '50',
      aakarRupee: '1500',
      aakarPaise: '00',
      grantType: 'कब्जेहक्क',
      period: '10 वर्षे',
      occupantName: 'श्री. रामराव पाटील',
    },
    {
      id: 2,
      villageSajja: 'गाव 2 / साझा 2',
      orderNoDate: 'आदेश क्र. 124 / 15-02-2024',
      surveyNo: '78/1',
      areaHectare: '1',
      areaAre: '20',
      aakarRupee: '800',
      aakarPaise: '50',
      grantType: 'भाडेपट्टा',
      period: '5 वर्षे',
      occupantName: 'श्री. श्यामराव देशमुख',
    },
    // Add more rows...
  ]

  return (
    <div className="mr-container">
      <Toast />
      
      {/* Page Header */}
      <div className="mr-page-header">
        <h1 className="mr-page-title">मंडळातील शासनाने निहित केलेल्या विविध जमिनीची नोंदवही</h1>
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
          <h2 className="mr-card-title">शासनाने निहित केलेल्या जमिनीची नोंदवही</h2>
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
                {/* Main Header Row */}
                <tr>
                  <th rowSpan="2">अ.क्र</th>
                  <th rowSpan="2">गाव/साझा</th>
                  <th rowSpan="2">आदेश क्र. व दिनांक</th>
                  <th rowSpan="2">भूमापन क्रमांक</th>
                  
                  {/* Grouped Header 1 */}
                  <th colSpan="2" style={{ textAlign: 'center', borderBottom: '1px solid var(--mr-border)' }}>
                    क्षेत्र
                  </th>
                  
                  {/* Grouped Header 2 */}
                  <th colSpan="2" style={{ textAlign: 'center', borderBottom: '1px solid var(--mr-border)' }}>
                    आकार
                  </th>

                  <th rowSpan="2">प्रदानाचा प्रकार (कब्जेहक्क/ भाडेपट्टा)</th>
                  <th rowSpan="2">कालावधी</th>
                  <th rowSpan="2">वहिवाटदाराचे नाव</th>
                </tr>
                
                {/* Sub-Header Row */}
                <tr>
                  <th style={{ fontSize: '0.75rem' }}>हे.</th>
                  <th style={{ fontSize: '0.75rem' }}>आर.</th>
                  <th style={{ fontSize: '0.75rem' }}>रु.</th>
                  <th style={{ fontSize: '0.75rem' }}>पै.</th>
                </tr>
              </thead>
              
              <tbody>
                {reportData.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.villageSajja}</td>
                    <td>{row.orderNoDate}</td>
                    <td>{row.surveyNo}</td>
                    <td>{row.areaHectare}</td>
                    <td>{row.areaAre}</td>
                    <td>{row.aakarRupee}</td>
                    <td>{row.aakarPaise}</td>
                    <td>{row.grantType}</td>
                    <td>{row.period}</td>
                    <td>{row.occupantName}</td>
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

export default MandalNamuna6b