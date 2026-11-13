/* eslint-disable prettier/prettier */
import React from 'react'
import { Toast } from 'src/views/ui/Toast'
import ExcelDownloadButton from 'src/views/ui/ExcelDownloadButton'
import '../../../layout/ModernReport.css' // Make sure this path is correct

const MandalNamuna2 = () => {
  // Sample data mapping to the 13 columns
  const reportData = [
    {
      id: 1,
      description: 'कागद (रिम)',
      authority: 'क्र. 123/2024',
      quantity: '10',
      purchaseDate: '2024-01-10',
      certificate: 'प्रमाणक 1',
      depYear: '2023-24',
      depStatus: 'निर्लेखित',
      depAmount: '5000',
      recAmount: '5000',
      treasuryDate: '2024-01-15',
      balanceQty: '0',
      balanceValue: '0',
    },
    {
      id: 2,
      description: 'पेन (डझन)',
      authority: 'क्र. 124/2024',
      quantity: '5',
      purchaseDate: '2024-02-05',
      certificate: 'प्रमाणक 2',
      depYear: '2023-24',
      depStatus: 'अंशतः निर्लेखित',
      depAmount: '1000',
      recAmount: '500',
      treasuryDate: '2024-02-10',
      balanceQty: '2',
      balanceValue: '500',
    },
    // Add more rows...
  ]

  return (
    <div className="mr-container">
      <Toast />
      
      {/* Page Header */}
      <div className="mr-page-header">
        <h1 className="mr-page-title">मंडळ अधिकारी कार्यालयातील शासकीय मालमत्ता नोंदवही</h1>
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
          <h2 className="mr-card-title">शासकीय मालमत्ता नोंदवही</h2>
          <ExcelDownloadButton
            data={reportData}
            fileName="mandal_assets_report"
            sheetName="Assets Data"
            buttonText="Download Excel"
          />
        </div>
        
        <div className="mr-card-body" style={{ padding: 0 }}>
          <div className="mr-table-wrapper">
            <table className="mr-table">
              <thead>
                <tr>
                  <th>अ.क्र</th>
                  <th>वस्तूचे वर्णन</th>
                  <th>खरेदीसाठी प्राधिकार</th>
                  <th>संख्या किंवा परिमाण</th>
                  <th>खरेदीची दिनांक</th>
                  <th>प्राधिकारपत्र किंवा प्रमाणक</th>
                  <th>निर्लेखण वर्ष कालावधी</th>
                  <th>निर्लेखण स्थिति</th>
                  <th>निर्लेखित केलेली रक्कम</th>
                  <th>वसुल केलेली रक्कम</th>
                  <th>वसूल रक्कम कोषागारत जमा दिनांक</th>
                  <th>शिल्लक संग्रह संख्या</th>
                  <th>शिल्लक संग्रह मूल्य</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.description}</td>
                    <td>{row.authority}</td>
                    <td>{row.quantity}</td>
                    <td>{row.purchaseDate}</td>
                    <td>{row.certificate}</td>
                    <td>{row.depYear}</td>
                    <td>{row.depStatus}</td>
                    <td>{row.depAmount}</td>
                    <td>{row.recAmount}</td>
                    <td>{row.treasuryDate}</td>
                    <td>{row.balanceQty}</td>
                    <td>{row.balanceValue}</td>
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

export default MandalNamuna2