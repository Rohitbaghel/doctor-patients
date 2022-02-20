import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

export const Medicine=() => {
    const {medicine}=useParams()
    // console.log(medicine)
    const [data, setData]=useState([]);
    const appendedData=async () => {
        const res=await fetch(`http://localhost:2345/patient/${medicine}`)
        const dat= await res.json();
        // console.log(dat?.medicineId)
        setData(dat?.medicineId)
        // console.log(data)
    }
    useEffect(() => {
        appendedData()
      }, [])
  return (
      <><h1 className="text-2xl mb-2 font-extrabold">Medicine</h1>
          {data.map(({_id,name,quantity}) => (
              <div key={_id} className="flex justify-evenly mb-2">
                  <div className="border-2 w-60 text-lg text-center font-semibold">Name:{name}</div>
                  <div className="border-2 text-center w-48 text-lg font-semibold">Quantity:{quantity}</div>
              </div>
          ))}
      
      </>
  )
}
