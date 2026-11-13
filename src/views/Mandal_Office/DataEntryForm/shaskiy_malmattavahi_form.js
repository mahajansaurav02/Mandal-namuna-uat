// import React from 'react'
import React, { useState, useRef } from 'react'
import { Toast } from 'primereact/toast'
import '../../../scss/toast.scss'
import '../../../layout/ModernReport.css' // Ensure path is correct

const ShaskiyMalmattavahiForm = () => {
  const toast = useRef(null)

  const [allFormVal, setAllFormVal] = useState({
    gaoName: '',
    autho_certificate: '',
    AmountWritt: '',
    recoverdamt: '',
    treasuryPaymentDate: '',
    balancedQty: '',
    balanceValue: '',
    itemDesc: '',
    itemQty: '',
    purchaseDate: '',
    remark: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setAllFormVal({ ...allFormVal, [name]: value })
  }

  const handlerReset = () => {
    setAllFormVal({
      gaoName: '',
      autho_certificate: '',
      AmountWritt: '',
      recoverdamt: '',
      treasuryPaymentDate: '',
      balancedQty: '',
      balanceValue: '',
      itemDesc: '',
      itemQty: '',
      purchaseDate: '',
      remark: '',
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Shaskiy Malmatta Vahi Form Values:->', allFormVal)
    
    // Simple validation check as per original code
    if (allFormVal.itemDesc !== '') {
      toast.current.show({
        severity: 'success',
        summary: '✅ यशस्वी!',
        detail: 'नोंद यशस्वीपणे जतन झाली.',
        life: 3000,
      })
      handlerReset()
    } else {
      toast.current.show({
        severity: 'error',
        summary: 'त्रुटी',
        detail: 'कृपया सर्व आवश्यक फील्ड भरा आणि पुन्हा प्रयत्न करा.',
        life: 4000,
      })
    }
  }

  return (
    <div className="mr-container">
      <Toast ref={toast} position="top-center" />

      <div className="mr-form-container">
        {/* Page Header */}
        <div className="mr-page-header">
          <h1 className="mr-page-title">शासकीय मालमत्ता वही नमूना (Data Entry)</h1>
        </div>

        {/* Form Card */}
        <div className="mr-form-section">
          <form onSubmit={handleSave}>
            <div className="mr-form-grid">
              
              {/* Row 1: Item Description (Full Width) */}
              <div className="mr-form-group mr-form-grid-full">
                <label className="mr-form-label">वस्तुचे वर्णन</label>
                <input
                  type="text"
                  className="mr-input"
                  name="itemDesc"
                  placeholder="वस्तुचे वर्णन प्रविष्ट करा"
                  value={allFormVal.itemDesc}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2: Quantity & Purchase Date */}
              <div className="mr-form-group">
                <label className="mr-form-label">संख्या किंवा परिमाण</label>
                <input
                  type="text"
                  className="mr-input"
                  name="itemQty"
                  placeholder="संख्या किंवा परिमाण"
                  value={allFormVal.itemQty}
                  onChange={handleChange}
                />
              </div>

              <div className="mr-form-group">
                <label className="mr-form-label">खरेदीची दिनांक</label>
                <input
                  type="date"
                  className="mr-input"
                  name="purchaseDate"
                  value={allFormVal.purchaseDate}
                  onChange={handleChange}
                />
              </div>

              {/* Row 3: Certificate & Written Off Amount */}
              <div className="mr-form-group">
                <label className="mr-form-label">प्राधिकारपत्र किंवा प्रमाणक</label>
                <input
                  type="text"
                  className="mr-input"
                  name="autho_certificate"
                  placeholder="प्राधिकारपत्र किंवा प्रमाणक"
                  value={allFormVal.autho_certificate}
                  onChange={handleChange}
                />
              </div>

              <div className="mr-form-group">
                <label className="mr-form-label">निर्लेखित केलेली रक्कम</label>
                <input
                  type="text"
                  className="mr-input"
                  name="AmountWritt"
                  placeholder="निर्लेखित केलेली रक्कम"
                  value={allFormVal.AmountWritt}
                  onChange={handleChange}
                />
              </div>

              {/* Row 4: Treasury Date & Recovered Amount */}
              <div className="mr-form-group">
                <label className="mr-form-label">कोषागारात भरणा केल्याची दिनांक</label>
                <input
                  type="date"
                  className="mr-input"
                  name="treasuryPaymentDate"
                  value={allFormVal.treasuryPaymentDate}
                  onChange={handleChange}
                />
              </div>

              <div className="mr-form-group">
                <label className="mr-form-label">वसुल केलेली रक्कम</label>
                <input
                  type="text"
                  className="mr-input"
                  name="recoverdamt"
                  placeholder="वसुल केलेली रक्कम"
                  value={allFormVal.recoverdamt}
                  onChange={handleChange}
                />
              </div>

              {/* Row 5: Balance Qty, Balance Value & Remark (3 Columns) */}
              <div className="mr-form-group">
                <label className="mr-form-label">शिल्लक संग्रह संख्या</label>
                <input
                  type="text"
                  className="mr-input"
                  name="balancedQty"
                  placeholder="शिल्लक संग्रह संख्या"
                  value={allFormVal.balancedQty}
                  onChange={handleChange}
                />
              </div>

              <div className="mr-form-group">
                <label className="mr-form-label">शिल्लक संग्रह मूल्य</label>
                <input
                  type="text"
                  className="mr-input"
                  name="balanceValue"
                  placeholder="शिल्लक संग्रह मूल्य"
                  value={allFormVal.balanceValue}
                  onChange={handleChange}
                />
              </div>

              <div className="mr-form-group mr-form-grid-full">
                <label className="mr-form-label">शेरा</label>
                <input
                  type="text"
                  className="mr-input"
                  name="remark"
                  placeholder="शेरा प्रविष्ट करा"
                  value={allFormVal.remark}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Actions */}
            <div className="mr-form-actions">
              <button type="button" className="mr-btn-danger" onClick={handlerReset}>
                Cancel
              </button>
              <button type="button" className="mr-btn-secondary" onClick={handlerReset}>
                Reset
              </button>
              <button type="submit" className="mr-btn-primary">
                Save Record
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShaskiyMalmattavahiForm