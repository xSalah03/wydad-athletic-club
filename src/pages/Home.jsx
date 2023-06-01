import React, { useEffect } from 'react'
import { getInformations } from '../redux/apis/wacApi'
import {useDispatch} from 'react-redux'

function Home() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInformations());
    }, [dispatch])
    console.log();

    return (
        <div>Home</div>
    )
}

export default Home