import './App.css'
import TextField from '@mui/material/TextField';
import './Speedometer.css';
import Button from '@mui/material/Button';
import Speedometer from './Speedometer';
import { useState } from 'react';


function App() {
  //state to hold values from input field
  const [age , setAge]= useState(0)
  const [weight , setWeight]= useState(0)
  const [height , setHeight]= useState(0)
  const [bmi ,setBmi] = useState(true)
  const [msg , setMsg] = useState('')

  //for conditional rendering
  const [isAge , setIsAge]= useState(true)
  const [isWeight,setIsWieght]=useState(true)
  const [isHeight, setIsHeight]=useState(true)



  const validate = (e)=>{
    // console.log(e.target.value);
    // console.log(e.target.name);
    
    let name = e.target.name
    let value = e.target.value
  


    if(!!value.match(/^[0-9]*$/)){
      if(name=='age'){
        setAge(value)
        setIsAge(true)
      }
      else if(name =='weight'){
        setWeight(value)
        setIsWieght(true)
      }
      else{
        setHeight(value)
        setIsHeight(true)
      }
    }
    else{
      if(name=='age'){
        setAge(value)
        setIsAge(false)
      }
      else if(name =='weight'){
        setWeight(value)
        setIsWieght(false)
      }
      else{
        setHeight(value)
        setIsHeight(false)
      }
    }
    
  }

  const handleReset =()=>{
    setAge(0)
    setWeight(0)
    setHeight(0)
    setIsAge(true)
    setIsWieght(true)
    setIsHeight(true)
    setBmi(0)
    setMsg(true)
  }

  const calculate =()=>{
    setBmi((((weight)/(height * height))*10000).toFixed(2))
    

    if(bmi<18.5){
      setMsg("Underweight")
    }
    else if(bmi>=18.5 && bmi<24.9){
      setMsg("Normal Weight")
    }
    else if(bmi>=25 && bmi<29.9){
      setMsg("Over Weight")
    }
    else if(bmi>=30){
      setMsg("Obese")
    }
  }
  // console.log('age',age);
  // console.log('weight',weight);
  // console.log('height',height);



  return (
    <>
      <div className='text-center'>
        <div className='mt-4 head'>
        <h2>BMI Calculator</h2>

        </div>

        <div className='border box' >
        <div className='mt-5'> 
          <h3 >{bmi} BMI</h3>
          <p className='text-dark'>Condition: {msg}</p>
        </div>

        <div className='mt-3'>
        <TextField id="outlined-basic" value={age || ''} label="Age (2-120)"  variant="outlined" name='age' className='' onChange={(e)=>validate(e)} />
        {!isAge &&
          <p className='text-danger'>*Invalid Input</p>} 
        </div>

        <div className='mt-3'>
        <TextField id="outlined-basic" value={weight || ''} label="Weight in kg" variant="outlined" name='weight' className='' onChange={(e)=>validate(e)}/>
        {!isWeight &&
          <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className='mt-3'>
        <TextField id="outlined-basic" value={height || ''} label="Height in cm" variant="outlined" name='height'  onChange={(e)=>validate(e)}/>
        {!isHeight &&
          <p className='text-danger'>*Invalid Input</p>}
        </div>

        <div className='mt-5 d-flex justify-content-center'>
        <Button variant="contained" className='me-4' color="success" disabled={isAge && isWeight && isHeight ?false:true} onClick={calculate} >Calculate</Button>
        <Button variant="outlined" color="error" onClick={handleReset}>Clear</Button>
        </div>
      </div>
        </div>
        

      
    </>
  )
}


export default App


