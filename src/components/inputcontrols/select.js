import React from 'react';

export const Select=(props)=>{
    const {lbl,type,name,opitons,fnChange,val,errormsg,isshowerrormsg} = props


    return <>
       <div className='row mb-3'>
        <div className='col-sm-5 text-end'>
              <h1>{lbl} :</h1>
        </div>
        <div className='col-sm-3'>
             <select name={name} onChange={fnChange} className='form-control'>
               <option value="">please select</option>
                {
                    opitons.map((a,b)=>{
                        return <option selected={a==val} key={b} value={a}>{a}</option>
                    })
                }
                </select>    
        </div>
        <div className='col-sm-4'>
        {isshowerrormsg && <b className='text-danger'>{errormsg}</b> }
        </div>
       </div>
       
    </>
 }