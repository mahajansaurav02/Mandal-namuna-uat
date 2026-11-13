/* eslint-disable prettier/prettier */
import React from 'react'
import { Toast } from 'src/views/ui/Toast'
import ExcelDownloadButton from 'src/views/ui/ExcelDownloadButton'
import '../../../layout/ModernReport.css' // Ensure path is correct

const MandalNamuna4 = () => {
  // Sample data mapping to the 10 columns
  const reportData = [
    {
      id: 1,
      receivedDate: '2024-01-10',
      propertyDesc: 'गाव 1 / साझा 1 / स.नं. 45',
      mutationNo: 'फेरफार क्र. 123',
      complainant: 'श्री. रामराव पाटील, पत्ता: मु.पो. कुही, मो. 9876543210',
      respondent: 'श्री. श्यामराव देशमुख, पत्ता: मु.पो. कुही, मो. 9876543211',
      stayOrderDate: '2024-01-15 (30 दिवस)',
      stayOrderDetail: 'अंतरिम स्थगिती आदेश दिनांक 15/01/2024',
      finalOrder: 'अंतिम आदेश दिनांक 20/02/2024',
      recordSentDate: '2024-03-01',
    },
    {
      id: 2,
      receivedDate: '2024-02-05',
      propertyDesc: 'गाव 2 / साझा 2 / स.नं. 78',
      mutationNo: 'फेरफार क्र. 124',
      complainant: 'श्री. संतोष कुलकर्णी, पत्ता: मु.पो. नागपूर, मो. 9998887770',
      respondent: 'श्री. विजय जोशी, पत्ता: मु.पो. नागपूर, मो. 9998887771',
      stayOrderDate: '-',
      stayOrderDetail: '-',
      finalOrder: 'प्रलंबित',
      recordSentDate: '-',
    },
    // Add more rows...
  ]

  return (
    <div className="mr-container">
      <Toast />
      
      {/* Page Header */}
      <div className="mr-page-header">
        <h1 className="mr-page-title">मंडळातील साजानिहाय विवादग्रस्त फेरफरांची नोंदवही</h1>
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
          <h2 className="mr-card-title">विवादग्रस्त फेरफरांची नोंदवही</h2>
          <ExcelDownloadButton
            data={reportData}
            fileName="mandal_disputed_mutations"
            sheetName="Disputed Mutations"
            buttonText="Download Excel"
          />
        </div>
        
        <div className="mr-card-body" style={{ padding: 0 }}>
          <div className="mr-table-wrapper">
            <table className="mr-table">
              <thead>
                <tr>
                  <th>अ.क्र</th>
                  <th>मं अ. कडे प्रकरण प्राप्त झाल्याचा दिनांक</th>
                  <th>गाव/साझा आणि मिळकतीचे वर्णन</th>
                  <th>फेरफार क्र.</th>
                  <th>वादीचे नाव, पत्ता व संपर्क क्र</th>
                  <th>प्रतिवादीचे नाव, पत्ता व संपर्क क्र</th>
                  <th>अंतरिम स्थगिती मिळाली असल्यास आदेशाचा दिनांक व मुदत / कालावधी</th>
                  <th>अंतरिम स्थगिती मिळाली असल्यास आदेशाचा दिनांक</th>
                  <th>प्रकरणावर अंतिम आदेश पारीत केल्याचा तपशील व दिनांक</th>
                  <th>अभिलेख कक्षाकडे पाठविल्या चा दिनांक</th>
                </tr>
              </thead>
              <tbody>
                {reportData.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.receivedDate}</td>
                    <td>{row.propertyDesc}</td>
                    <td>{row.mutationNo}</td>
                    <td>{row.complainant}</td>
                    <td>{row.respondent}</td>
                    <td>{row.stayOrderDate}</td>
                    <td>{row.stayOrderDetail}</td>
                    <td>{row.finalOrder}</td>
                    <td>{row.recordSentDate}</td>
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

export default MandalNamuna4