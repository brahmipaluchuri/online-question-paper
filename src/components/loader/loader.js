import React from 'react';
import Styles from '@/components/loader/loader.module.css';

export const Loader=()=>{
    return(
        <>
        <div className='mask'></div>
        <img className={Styles.loaderimg} src='loading.gif' />
        </>
    )
}