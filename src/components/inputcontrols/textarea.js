import React from 'react';

export const Textarea=(props)=>{
    const {lbl,type,name,fnChange,val,errormsg,isshowerrormsg} = props


    return <>
       <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
              <h1>{lbl} :</h1>
        </div>
        <div className='col-sm-3'>
          <textarea value={val} onChange={fnChange} name={name} type={type} className='form-control'></textarea>         
        </div>
        <div className='col-sm-4'>
          {isshowerrormsg  && <b className='text-danger'>{errormsg}</b>}
        </div>
       </div>
       
    </>
 }