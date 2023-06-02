import React, { useEffect } from 'react'
import { getInformations } from '../redux/apis/wacApi'
import { useDispatch } from 'react-redux'
import coach from '../assets/Mbenza1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCediSign } from '@fortawesome/fontawesome-svg-core';


function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInformations());
    }, [dispatch])
    console.log();

    return (
        <div className='flex justify-around'>
            <div>
                <p className='text-slate-100 font-medium pt-8'>More than 87 year</p>
                <h2 className='text-slate-100 font-semibold text-4xl pt-8'>Wydad Athletic Club</h2>
                <h4 className='text-slate-100 font-semibold text-3xl pt-8'>Champoins Club</h4>
                <span>
                    <FontAwesomeIcon icon={fac} />
                </span>
            </div>
            <div><img src={coach} alt="Wac coach" /></div>
        </div>
    )
}

export default Home