
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState} from 'react'

function App() {
    const [principle , setPrinciple]= useState("")
    const [rate , setRate]= useState("")
    const [year , setYear]= useState("")
    const [interest , setInterest]= useState(0)
    const [isPrinciple , setIsPrinciple]= useState(true)
    const [isRate , setIsRate]= useState(true)
    const [isYear , setIsYear]= useState(true)


    const validate = (e)=>{ 
      console.log(e.target.name);
      console.log(e.target.value);

      //regular expression-used to check the pattern of a given string
      //1) start with ^
      //2) end with $
      //3) n pattern inside the square bracket
      console.log(!!e.target.value.match('^[0-9]*$'));
      if(!!e.target.value.match('^[0-9]*$')){
        if(e.target.name=='principle'){
          setPrinciple(e.target.value)
          setIsPrinciple(true)
        }
        else if(e.target.name=='rate'){
          setRate(e.target.value)
          setIsRate(true)
        }
        else{
          setYear(e.target.value)
          setIsYear(true)
        }
      }
      else{
        if(e.target.name=='principle'){
          setPrinciple(e.target.value)
          setIsPrinciple(false)
        }
        else if(e.target.name=='rate'){
          setRate(e.target.value)
          setIsRate(false)
        }
        else{
          setYear(e.target.value)
          setIsYear(false)
        }
      }

    }


    const reset=()=>{
      setPrinciple("")
      setRate("")
      setYear("")
      setIsPrinciple(true)
      setIsRate(true)
      setIsYear(true)
    }

    const op=()=>{
      setInterest((principle*rate*year) / 100)
    }
  return (
    <>
      <div style={{height:'100vh'}} className='bg-dark w-100 d-flex justify-content-center align-items-center'>
        <div style={{width:'500px'}} className='p-5 bg-light rounded' >
          <h1>Simple Interest App</h1>
          <p>Calculate Your Simple Interest Easily</p>
          <div style={{height:'130px' }} className='bg-warning rounded d-flex justify-content-center align-items-center flex-column'>
            <h1>₹ {interest}</h1>
            <p>Total Simple Interest</p>
          </div>
          <div className="my-3">
          <TextField name='principle' id="outlined-basic" value={principle} label="₹ Principal Amount" variant="outlined" className='w-100'onChange={(e)=>validate(e)}/>
           { ! isPrinciple && <span className='text-danger'>*invalid input</span>}
          </div>
          <div className="mb-3">
          <TextField name='rate' id="outlined-basic" value={rate} label="Rate Of Interest" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
          {! isRate &&<span className='text-danger'>*invalid input</span>}
          </div>
          <div className="mb-3">
          <TextField name='year' id="outlined-basic" value={year} label="Year (Yr)" variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
          {! isYear && <span className='text-danger'>*invalid input</span>}
          </div>
          <div className="mb-3 d-flex justify-content-between">
          <Button onClick={op}  style={{width: '190px', height:'60px'}} variant="contained" color="success" disabled={isPrinciple && isRate && isYear ? false:true }>Calculate</Button>
          <Button onClick={reset} style={{width: '190px', height:'60px'}} variant="outlined">Reset</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
