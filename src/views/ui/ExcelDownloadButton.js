// src/components/ExcelDownloadButton.js
import React from 'react'
import * as XLSX from 'xlsx'
import { CButton } from '@coreui/react'
import {
  cilCloudDownload,cilArrowCircleBottom,cisFileExcel
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const ExcelDownloadButton = ({ data, fileName = 'report', sheetName = 'Sheet1', buttonText = 'Download Excel' }) => {
  const handleDownload = () => {
    if (!Array.isArray(data) || data.length === 0) {
      alert('No data to download.')
      return
    }

    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, sheetName)
    XLSX.writeFile(wb, `${fileName}.xlsx`)
  }

  return (
    <CButton color="primary" variant="outline" shape="rounded-1" onClick={handleDownload}>
        {buttonText} <CIcon style={{color:'black',paddingTop:4 ,fontWeight:'bold'}} size="xl" icon={cilArrowCircleBottom
  } />

    </CButton>
  )
}

export default ExcelDownloadButton
