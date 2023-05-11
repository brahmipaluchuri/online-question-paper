import React,{useState} from 'react';
import { inputControlsApp } from './config';
import { Input } from '../inputcontrols/input';
import { Textarea } from '../inputcontrols/textarea';
import { Select } from '../inputcontrols/select';
import { fnValidate } from './validate';
import { Loader } from '../loader/loader';
import { toast } from 'react-toastify';
import axios from 'axios';

export const Question=()=>{
   const [inputdata,setInputdata] =  useState(inputControlsApp)
   const [showloader,setShowloader] =useState(false)
   const fnChange=(eve)=>{
      const {value,name} = eve.target
      let _inputdata = JSON.parse(JSON.stringify(inputdata))
     const inputdataObj=_inputdata.find((obj)=>obj.name==name)
     inputdataObj.val = value
     fnValidate(inputdataObj)
     setInputdata(_inputdata)
   }
   const fnClick=()=>{
      let dataObj={}
      let _inputdata = JSON.parse(JSON.stringify(inputdata))
      _inputdata.forEach((obj)=>{
         dataObj[obj.name]=obj.val
         fnValidate(obj)
      });
      let isInvalid=_inputdata.some((obj)=>{
         return obj.isshowerrormsg
      })
      setInputdata(_inputdata) 
      if(isInvalid) return;

      setShowloader(true)
      //  console.log({data:dataObj})
      axios.post('http://127.0.0.1:2020/que/save-que',{data:dataObj})
      .then((res)=>{
         setShowloader(false)
         toast.success('sending successs............')
         _inputdata.forEach((obj)=>{
            obj.val=''
        });
        setInputdata(_inputdata)
        console.log(res)

      })
      .catch((e)=>{
         setShowloader(false)
         toast.error('not a  successs.....'+e)
      })

      /*
      alert('sending request.....')
      console.log(dataObj)

      setTimeout((obj)=>{
         setShowloader(false)
         toast.success('sending successs............')
         _inputdata.forEach((obj)=>{
             obj.val=''
         });
      },5000)
      
      */
   }
    return(
    <div className='container-fulid'>
       {
          inputdata.map((obj,c)=>{
            switch(obj.tag){
                case'input':
                    return <Input key={c} fnChange={fnChange} {...obj}    />
                 case'textarea':
                    return <Textarea key={c} fnChange={fnChange} {...obj}     />
                    case'select':
                        return  <Select key={c} fnChange={fnChange} {...obj} /> 
            }
          })
       }
       <div className='row'>
         <div className='offset-sm-5 col-sm-7'>
            <button onClick={fnClick} className='btn btn-outline-success text-danger'>Save</button>
         </div>

       </div>
       {showloader && <Loader></Loader> }
    </div>

    )   
    
}