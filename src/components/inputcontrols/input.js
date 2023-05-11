import React from 'react';

export const Input=(props)=>{
    const {lbl,type,name,opitons,fnChange,val,values,errormsg,isshowerrormsg} = props

 const fnInputcontrols=()=>{
    switch(type){
        case 'text':
            return <input value={val} onChange={fnChange} name={name} type={type} className='form-control' />
        case 'radio':
            return opitons.map((x,j)=>{
                return <><input checked={values[j]==val} value={values[j]} onChange={fnChange} name={name} type={type} key={j} className='me-2' /><span className='me-3'>{x}</span></>
            })
    }
 }
    return <>
       <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
              <h1>{lbl} :</h1>
        </div>
        <div className='col-sm-3'>
           {fnInputcontrols()}          
        </div>
        <div className='col-sm-4'>
        {isshowerrormsg && <b className='text-danger'>{errormsg}</b> }
        </div>
       </div>
       
    </>
 }