import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData ] = useState()

    // useEffect(() => {
    //     fetch('https://api.github.com/users/pruthvi300')
    //     .then( res => res.json())
    //     .then( data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <>
    <div className="flex items-center bg-gray-600 p-3 justify-center">
        <img src={data.avatar_url} alt="Profile" width={300} className="rounded-lg" />
        <div className='text-3xl  p-4 text-center text-white'>{ data?.name }
        </div>  
    </div>
    </>
)
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/pruthvi300')
    return response.json()
}