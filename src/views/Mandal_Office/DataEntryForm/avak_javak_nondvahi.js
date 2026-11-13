// import React from 'react'
import React, { useState, useRef } from 'react'
import { Toast } from 'primereact/toast'
import '../../../scss/toast.scss'
import '../../../layout/ModernReport.css' // Ensure path is correct

const AvakJavakForm = () => {
  const toast = useRef(null)

  const [allFormVal, setAllFormVal] = useState({
    inwardName: '',
    letterSeqNo: '',
    letterSeqDate: '',
    actionTaken: '',
    outwardName: '',
    issueDate: '',
    recordedNo: '',
    remark: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setAllFormVal({ ...allFormVal, [name]: value })
  }

  const handlerReset = () => {
    setAllFormVal({
      inwardName: '',
      letterSeqNo: '',
      letterSeqDate: '',
      actionTaken: '',
      outwardName: '',
      issueDate: '',
      recordedNo: '',
      remark: '',
    })
  }

  const handleSave = (e) => {
    e.preventDefault()
    console.log('Avak Javak Form Values:->', allFormVal)
    
    if (allFormVal.inwardName !== '' && allFormVal.letterSeqNo !== '') {
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
          <h1 className="mr-page-title">आवक जावक नोंदवही (Data Entry)</h1>
        </div>

        {/* Form Card */}
        <div className="mr-form-section">
          <form onSubmit={handleSave}>
            <div className="mr-form-grid">
              
              {/* Row 1 */}
              <div className="mr-form-group">
                <label className="mr-form-label">पत्रव्यवहार कोणाकडुन मिळाला</label>
                <input
                  type="text"
                  className="mr-input"
                  name="inwardName"
                  placeholder="नाव प्रविष्ट करा"
                  value={allFormVal.inwardName}
                  onChange={handleChange}
                />
              </div>

              <div className="mr-form-group">
                <label className="mr-form-label">पत्रव्यवहाराचा क्रमांक</label>
                <input
                  type="text"
                  className="mr-input"
                  name="letterSeqNo"
                  placeholder="क्रमांक प्रविष्ट करा"
                  value={allFormVal.letterSeqNo}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2 */}
              <div className="mr-form-group">
                <label className="mr-form-label">पत्रव्यवहाराचा दिनांक</label>
                <input
                  type="date"
                  className="mr-input"
                  name="letterSeqDate"
                  value={allFormVal.letterSeqDate}
                  onChange={handleChange}
                />
              </div>

              <div className="mr-form-group">
                <label className="mr-form-label">पत्रव्यवहार कोणाकडे निर्गमित केला</label>
                <input
                  type="text"
                  className="mr-input"
                  name="outwardName"
                  placeholder="नाव प्रविष्ट करा"
                  value={allFormVal.outwardName}
                  onChange={handleChange}
                />
              </div>

              {/* Row 3 - Full Width */}
              <div className="mr-form-group mr-form-grid-full">
                <label className="mr-form-label">थोडक्यात विषय व करावयाची कार्यवाही</label>
                <input
                  type="text"
                  className="mr-input"
                  name="actionTaken"
                  placeholder="विषय व कार्यवाही प्रविष्ट करा"
                  value={allFormVal.actionTaken}
                  onChange={handleChange}
                />
              </div>

              {/* Row 4 */}
              <div className="mr-form-group">
                <label className="mr-form-label">निर्गमित केल्याचा दिनांक</label>
                <input
                  type="date"
                  className="mr-input"
                  name="issueDate"
                  value={allFormVal.issueDate}
                  onChange={handleChange}
                />
              </div>

              <div className="mr-form-group">
                <label className="mr-form-label">अ , ब, क, ड सूचीत अभिलिखित केल्याचा क्रमांक</label>
                <input
                  type="text"
                  className="mr-input"
                  name="recordedNo"
                  placeholder="अभिलिखित क्रमांक"
                  value={allFormVal.recordedNo}
                  onChange={handleChange}
                />
              </div>

              {/* Row 5 - Full Width */}
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

export default AvakJavakForm