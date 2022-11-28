import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faChartLine, faCoins, faDollar, faSignal } from '@fortawesome/free-solid-svg-icons';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { StackChart } from './chart';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';  
import {useState} from "react"
import BasicTable from './basictable';
import "/node_modules/flag-icons/css/flag-icons.min.css";

function App() {
  return (
  <div className='App'>
   <Dashboard/>
  </div>
    

  );
}
function Dashboard(){
  const Profit={
    number:"22,534",
    percent:0.7,
    icon:faChartLine,
    type:"money",
    text:"Monthly Profits",
   percentprogress:
   [{time:"this month",percent:75,color:'violet'},
    {time:"this month",percent:75,color:'green'}],
    iconColor1:"violet",
    iconColor2:"green",
    performance:"up",
    

  };

  return(
  <div className='Dashboard'>
  <SummaryBoxList />
  <ProfitBox data={Profit}/>
  <OverView/>
  <BasicTable/>
  </div>);
}
function OverView(){
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return(
  <div className='chart'>
    <div>
    <p>OverView of Sales of Profit and Losses</p>
    </div>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Month</ToggleButton>
      <ToggleButton value="android">Year</ToggleButton>
    </ToggleButtonGroup>
    <StackChart/>
  </div>);
}



function ProfitBox({data}){
  const CustomProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor1: data.iconColor1,
      backgroundColor2: data.iconColor2,

    },
  }));
  return(
    <div className='MonthlyProfits'>
<div className='Summary-box-container'>
  <div className='summary-box-spec'>
  <p className='summary-box-text'>{data.text}</p>
  <FontAwesomeIcon style={{color: data.iconColor}} icon={data.icon}/>
  </div>
  <h2 className='summary-box-number'>
    {data.type=="money"?"$":null}
    {data.number}
  </h2>
  <div className='time'>
  {data.percentprogress.map((dt)=><percentprogress data={data}/>)}
  <CustomProgress  className='summary-box-progress' variant="determinate" value={75} /><br></br>
  <CustomProgress  className='summary-box-progress' variant="determinate" value={50} />
  </div>
  
  </div>
    </div>
  )
}


function SummaryBoxList(){
  const datalist=[
    {
      number:568,
      percent:0.7,
      icon:faChartLine,
      text:"number of sales",
      time:"last month",
      iconColor:"violet",
      performance:"up",
    },
    {
      number:"12,897",
      percent:0.43,
      icon:faCoins,
      type:"money",
      text:"New Revenue",
      time:"last month",
      iconColor:"orange",
      performance:"down",
    },
    {
      number:"11,234",
      percent:1.44,
      icon:faDollar,
      type:"money",
      text:"Total Cost",
      typeof:"money",
      time:"last month",
      iconColor:"green",
      performance:"down",
    },
    {
      number:789,
      percent:0.9,
      icon:faSignal,
      text:"Profit By Sales",
      time:"last month",
      type:"money",
      iconColor:"aquablue",
      performance:"up",
    },
  ];
  return(
    <div className='SummaryBoxList'>
      {datalist.map((dt)=>(
        <SummaryBox data={dt}/>
      ))}
    
    </div>
  );
}

function SummaryBox({data}){
  const CustomProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: data.iconColor,
    },
  }));
  return(
  <div className='Summary-box-container'>
  <div className='summary-box-spec'>
  <p className='summary-box-text'>{data.text}</p>
  <FontAwesomeIcon style={{color: data.iconColor}} icon={data.icon}/>
  </div>
  <h2 className='summary-box-number'>
    {data.type=="money"?"$":null}
    {data.number}</h2>
  <CustomProgress  className='summary-box-progress' variant="determinate" value={50} />
  <div className='summary-box-time'>
  <p>{data.time}</p>
  <p> <FontAwesomeIcon 
  style={{color:data.performance==="up"?"green":"red"}} 
  icon={data.performance==="up"?faCaretUp:faCaretDown}/>  
  {data.percent}%
  </p>
  </div>
  </div>);
}


export default App;
