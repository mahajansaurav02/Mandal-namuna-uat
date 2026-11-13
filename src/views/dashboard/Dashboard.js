import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { CChart } from '@coreui/react-chartjs'
import URLS from 'src/URLS'

// Icons
import DescriptionIcon from '@mui/icons-material/Description'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import GroupsIcon from '@mui/icons-material/Groups'
import AssessmentIcon from '@mui/icons-material/Assessment'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'

// Assuming this CSS file holds the modern design classes (co-card, co-dashboard, etc.)
import '../../layout/CircleOfficer.css' 

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
const toNumber = (val) => {
  const num = parseInt(val)
  return isNaN(num) ? 0 : num
}

// Hardcoded headers matching your original first dashboard
const getHeaders = (token) => ({
  Authorization: 'Bearer ' + token,
  Echdbname: '3y+6bSLaBNfOzEUWW3yXOA==',
  Echschemaname: '33gU8iw1FOl/D43LCQ6MhA==',
  Echhost: 'On3zPHeGPKNn95bKB26ZhA==',
  Mhrdbname: 'egt/yzXRlGH+dexGJKQ7yA==',
  Mhrhost: 'On3zPHeGPKNn95bKB26ZhA==',
  Mhrschemaname: 'jfxKEUeaSF6ew8mrXvUedg==',
  Servarthid: 'REVARPM8102',
})

/* ------------------------------------------------------------------ */
/*  Presentational components (design)                                 */
/* ------------------------------------------------------------------ */
const StatCard = ({ label, count, icon, topHeader }) => (
  <div className="co-card co-stat-card">
    {icon && <div className="co-card-icon">{icon}</div>}
    {topHeader && <div className="co-card-top-header">{topHeader}</div>}
    <div className="co-card-label">{label}</div>
    <div className="co-card-count">{toNumber(count)}</div>
  </div>
)

const FilterSelect = ({ label, name, value, options, onChange, disabled = false }) => (
  <div className="co-filter">
    <label className="co-filter-label" htmlFor={`co-${name}`}>
      {label}
    </label>
    <select
      id={`co-${name}`}
      className="co-filter-select"
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="">-- निवडा --</option>
      {options?.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
)

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
const Dashboard = () => {
  // --- 1. STATE FROM ORIGINAL DASHBOARD ---
  const [dropdownVal, setDropdownVal] = useState({
    village: '',
    villageCode: '',
    cCode: '',
    revenueYear: '',
  })

  const [totalLiveKhatedar, setTotalLiveKhatedar] = useState(0)
  const [totalSurveyNumber, setTotalSurveyNumber] = useState(0)
  const [totalKhatedar, setTotalKhatedar] = useState(0)
  const [AugPin1, setAugPin1] = useState(0)
  const [Wasulipatrakhatedar, setWasulipatrakhatedar] = useState(0)
  const [targetData, setTargetData] = useState(0)

  const [totalNetAmount, setTotalNetAmount] = useState(0)
  const [totalNetReceived, setTotalNetReceived] = useState(0)
  const [khatedarAmountReceived, setKhatedarAmountReceived] = useState(0)
  const [sankirnWith, setSankirnWith] = useState(0)
  const [sankirnWithOut, setSankirnWithOut] = useState(0)
  const [sankirnMahsool, setSankirnMahsool] = useState(0)
  const [demandGenerated, setDemandGenerated] = useState(0)
  const [jamabandi, setJamabandi] = useState(0)

  const isFetched = useRef(false)

  // --- 2. API CALLS FROM ORIGINAL DASHBOARD ---
  const TotalLiveKhatedar = async () => {
    const token = localStorage.getItem('token')
    const talukCode = JSON.parse(localStorage.getItem('talukaCode'))
    
    await axios
      .get(
        `${URLS.BaseURL}/restservice/getDashBoardKhataNoDetails?cCode=272400110296420000&talukaCode=${talukCode}`,
        { headers: getHeaders(token) }
      )
      .then((res) => {
        try {
          setTotalSurveyNumber(res.data.form7KhataData[0].pin)
          setTotalKhatedar(res.data.form7KhataDataAug[0].khataNo)
          setAugPin1(res.data.form7KhataDataAug[0].pin)
          setWasulipatrakhatedar(res.data.khatedarPatra[0].netAmount1)
        } catch (err) {
          console.log(err, 'error in TotalLiveKhatedar')
        }
      })
  }

  const getTargetData = async () => {
    const token = localStorage.getItem('token')
    await axios
      .get(
        `${URLS.BaseURL}/restservice/getVillageTarget?cCode=272400110296420000&revenueYear=2022-23`,
        { headers: getHeaders(token) }
      )
      .then((res) => {
        try {
          setTargetData(res.data.talathiDashBoardData[0].annualVillageTarget)
        } catch (err) {
          console.log(err, 'error in getTargetData')
        }
      })
  }

  const TotalLiveDemandDetails = async () => {
    const token = localStorage.getItem('token')
    await axios
      .get(
        `${URLS.BaseURL}/restservice/getDashBoardTotalDemandDetails?cCode=272400110296420000&revenueYear=2022-23`,
        { headers: getHeaders(token) }
      )
      .then((res) => {
        setTotalNetAmount(res.data.landRevenueDemandData[0].netAmount)
        setTotalNetReceived(res.data.landRevenueDemandData[0].netReceived)
        setKhatedarAmountReceived(res.data.landRevenueDemandData[0].khataNo)
        setSankirnWith(res.data.landRevenueDemandData[0].totalOfWithSankirn)
        setSankirnWithOut(res.data.landRevenueDemandData[0].totalOfWithuotSankirn)
        setDemandGenerated(res.data.demandGenerated[0].demandGenerated)
        
        // Original logic for Sankirn Mahsool was slightly broken (res.sankirnMahsool), fixed to safely default
        setSankirnMahsool(
           res.data.landRevenueDemandData[0].sankirnMahsool 
           ? parseInt(res.data.landRevenueDemandData[0].sankirnMahsool) 
           : 0
        )
        setJamabandi(res.data.jmp[0].jamabandi_p)
      })
  }

  useEffect(() => {
    if (!isFetched.current) {
      // TotalLiveKhatedar()
      // TotalLiveDemandDetails()
      // getTargetData()
      isFetched.current = true
    }
  }, [])

  // --- 3. MAP DATA FOR UI ---
  const data = {
    khatedarAug: AugPin1,
    khatedarToday: totalLiveKhatedar,
    satbaraAug: totalKhatedar,
    satbaraToday: totalSurveyNumber,
    jamabandi: jamabandi,
    target: targetData,
    demandGenerated: demandGenerated,
    vasuliPatra: Wasulipatrakhatedar,
    vasuliPurna: khatedarAmountReceived,
    totalReceived: totalNetReceived,
    sankirnMahsool: sankirnMahsool,
  }

  const landRevenue = toNumber(data.totalReceived) - toNumber(data.sankirnMahsool)

  // --- 4. CHART CONFIGURATIONS ---
  const pieOptions = {
    maintainAspectRatio: false,
    plugins: { legend: { position: 'top', labels: { boxWidth: 30, font: { size: 11 } } } },
  }

  const demandPieData = {
    labels: [
      'मागणी निश्चित झालेली खातेदार संख्या % मध्ये',
      'मागणी निश्चित न झालेली खातेदार संख्या % मध्ये',
    ],
    datasets: [
      {
        data: [
          toNumber(data.demandGenerated),
          Math.max(toNumber(data.khatedarAug) - toNumber(data.demandGenerated), 0),
        ],
        backgroundColor: ['#1565c0', '#90caf9'],
        hoverBackgroundColor: ['#0a3d9c', '#64b5f6'],
      },
    ],
  }

  const vasuliPieData = {
    labels: [
      'वसुली पूर्ण झालेली खातेदार संख्या % मध्ये',
      'वसुली पूर्ण न झालेली खातेदार संख्या % मध्ये',
    ],
    datasets: [
      {
        data: [
          toNumber(data.vasuliPurna),
          Math.max(toNumber(data.vasuliPatra) - toNumber(data.vasuliPurna), 0),
        ],
        backgroundColor: ['#1565c0', '#90caf9'],
        hoverBackgroundColor: ['#0a3d9c', '#64b5f6'],
      },
    ],
  }

  // Note: The original `Section1` handled dropdowns. We use dummy hardcoded filters 
  // here to match the design, but you can wire `handleFilterChange` if your `Section1` is used.
  const handleFilterChange = (e) => {
    // Dropdown logic from original dashboard
  }

  // --- 5. RENDER (Second Dashboard Design) ---
  return (
    <div className="co-dashboard">
      <div className="co-body">
        
        {/* FIXED FILTER BAR (Design from CircleOfficer) */}
        <div className="co-filter-bar">
          <h2 className="co-dashboard-headline">डॅशबोर्ड</h2>
          <div className="co-filters-group">
            
            <FilterSelect
              label="जिल्हा"
              name="district"
              value="नागपूर"
              options={[{ value: 'नागपूर', label: 'नागपूर' }]}
              disabled
            />
            
            <FilterSelect
              label="तालुका"
              name="taluka"
              value="कुही"
              options={[{ value: 'कुही', label: 'कुही' }]}
              disabled
            />

            <FilterSelect
              label="गाव"
              name="village"
              value="272400110296420000"
              options={[{ value: '272400110296420000', label: 'निवडलेले गाव' }]}
              disabled
            />

            <FilterSelect
              label="महसूल वर्ष"
              name="revenueYear"
              value="2022-23"
              options={[
                { value: '2022-23', label: '2022-23' },
                { value: '2023-24', label: '2023-24' },
              ]}
              disabled
            />
          </div>
        </div>

        {/* Row 1 : section titles + stat cards */}
        <div className="co-grid-3">
          <div className="co-group">
            <div className="co-section-title">एकूण खातेदार संख्या</div>
            <div className="co-grid-2">
              <StatCard label="१ ऑगस्ट रोजी" count={data.khatedarAug} icon={<DescriptionIcon />} />
              <StatCard label="आजची संख्या" count={data.khatedarToday} icon={<TrackChangesIcon />} />
            </div>
          </div>

          <div className="co-group">
            <div className="co-section-title">एकूण ७/१२ संख्या</div>
            <div className="co-grid-2">
              <StatCard label="१ ऑगस्ट रोजी" count={data.satbaraAug} icon={<GroupsIcon />} />
              <StatCard label="आजची संख्या" count={data.satbaraToday} icon={<GroupsIcon />} />
            </div>
          </div>

          <div className="co-group">
            <div className="co-section-title">वसुली</div>
            <div className="co-grid-2">
              <StatCard
                label="जमाबंदी प्रमाणे"
                count={data.jamabandi}
                icon={<AssessmentIcon />}
                topHeader="प्रपत्र-अ"
              />
              <StatCard
                label="उद्दिष्ट"
                count={data.target}
                icon={<EmojiEventsIcon />}
                topHeader="प्रपत्र-अ"
              />
            </div>
          </div>
        </div>

        {/* Row 2 : khatedar counts + pie charts */}
        <div className="co-section-panel">
          <div className="co-grid-3">
            <StatCard
              label="मागणी निश्चित केलेले खातेदार संख्या"
              count={data.demandGenerated}
              icon={<DescriptionIcon />}
            />
            <StatCard
              label="वसुली पात्र खातेदार संख्या"
              count={data.vasuliPatra}
              icon={<DescriptionIcon />}
            />
            <StatCard
              label="वसुली पूर्ण खातेदार संख्या"
              count={data.vasuliPurna}
              icon={<DescriptionIcon />}
            />
          </div>

          <div className="co-pie-row">
            <div className="co-card co-pie-card">
              <CChart type="pie" data={demandPieData} options={pieOptions} />
            </div>
            <div className="co-card co-pie-card">
              <CChart type="pie" data={vasuliPieData} options={pieOptions} />
            </div>
          </div>
        </div>

        {/* Row 3 : amount equation */}
        <div className="co-section-panel">
          <div className="co-amount-row">
            <StatCard
              label="वसूल झालेली रक्कम"
              count={data.totalReceived}
              icon={<DescriptionIcon />}
            />
            <div className="co-operator">=</div>
            <StatCard
              label="जमीन व इतर महसूल (संकीर्ण वगळता)"
              count={landRevenue}
              icon={<DescriptionIcon />}
            />
            <div className="co-operator">+</div>
            <StatCard
              label="संकीर्ण महसूल"
              count={data.sankirnMahsool}
              icon={<DescriptionIcon />}
            />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard