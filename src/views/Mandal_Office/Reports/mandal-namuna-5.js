/* eslint-disable prettier/prettier */
import React from 'react'
import { Toast } from 'src/views/ui/Toast'
import ExcelDownloadButton from 'src/views/ui/ExcelDownloadButton'
import '../../../layout/ModernReport.css' // Ensure path is correct

const MandalNamuna5 = () => {
  // Sample data mapping to the 9 columns
  const reportData = [
    {
      id: 1,
      villageSajja: 'गाव 1 / साझा 1',
      surveyNo: '45/2',
      area: '2.50',
      aakar: '1500',
      judi: '500',
      nuksan: '200',
      inamType: 'देवस्थान इनाम',
      occupantName: 'श्री. रामराव पाटील',
      orderNoDate: 'आदेश क्र. 123 / 10-01-2024',
    },
    {
      id: 2,
      villageSajja: 'गाव 2 / साझा 2',
      surveyNo: '78/1',
      area: '1.20',
      aakar: '800',
      judi: '300',
      nuksan: '100',
      inamType: 'वतन इनाम',
      occupantName: 'श्री. श्यामराव देशमुख',
      orderNoDate: 'आदेश क्र. 124 / 15-02-2024',
    },
    // Add more rows...
  ]

  return (
    <div className="mr-container">
      <Toast />
      
      {/* Page Header */}
      <div className="mr-page-header">
        <h1 className="mr-page-title">मंडळातील इनाम व वतन जमिनीची नोंदवही</h1>
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
          <h2 className="mr-card-title">इनाम व वतन जमिनीची नोंदवही</h2>
          <ExcelDownloadButton
            data={reportData}
            fileName="mandal_inam_vatan"
            sheetName="Inam Vatan Data"
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
                  <th rowSpan="2">भूमापन क्रमांक</th>
                  <th rowSpan="2">क्षेत्र</th>
                  
                  {/* Grouped Header */}
                  <th colSpan="3" style={{ textAlign: 'center', borderBottom: '1px solid var(--mr-border)' }}>
                    शासनाला येणे असलेली रक्कम
                  </th>
                  
                  <th rowSpan="2">इनामाचा प्रकार</th>
                  <th rowSpan="2">वहिवाटदाराचे नाव</th>
                  <th rowSpan="2">इनाम आदेश क्र. व दिनांक</th>
                </tr>
                
                {/* Sub-Header Row */}
                <tr>
                  <th style={{ fontSize: '0.75rem' }}>आकार (रु.पै.)</th>
                  <th style={{ fontSize: '0.75rem' }}>जुडी (रु.पै.)</th>
                  <th style={{ fontSize: '0.75rem' }}>नुकसान (रु.पै.)</th>
                </tr>
              </thead>
              
              <tbody>
                {reportData.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.villageSajja}</td>
                    <td>{row.surveyNo}</td>
                    <td>{row.area}</td>
                    <td>{row.aakar}</td>
                    <td>{row.judi}</td>
                    <td>{row.nuksan}</td>
                    <td>{row.inamType}</td>
                    <td>{row.occupantName}</td>
                    <td>{row.orderNoDate}</td>
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

export default MandalNamuna5