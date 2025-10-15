import React, { useState } from 'react'

function Add() {
    const [profile, setProfile] = useState({
        fname: "",
        lname: "",
        age: 0
    })
    const [list, setList] = useState([])
    // const [fname,setFname]= useState("")
    // const [lname,setLname]= useState("")
    // const [age,setAge]= useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("profile", profile);
        setList([
            ...list,
            profile
        ])
        setProfile({
            fname: "",
            lname: "",
            age: 0
        })
    }

    // const handleChange = (e)=>{
    //     console.log(e.target?.value);
    //     setFname(e.target.value)

    // }
    const handleChange = (e) => {
        console.log(e.target);
        const { value, name } = e?.target
        setProfile({
            ...profile,
            [name]: value
        })

        console.log(name, value);

    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} style={{ width: '200px', border: '1px solid black' }} name='fname' />
                <input onChange={handleChange} style={{ width: '200px', border: '1px solid black' }} name='lname' />
                <input onChange={handleChange} style={{ width: '200px', border: '1px solid black' }} name='age' />
                <button type='submit'>Submit</button>
            </form>
            {
                list.map((i, idx) => {
                    const { fname, lname, age } = i
                    return (
                        <div key={idx}>
                            <p>{fname || "-"}</p>
                            <p>{lname || "-"}</p>
                            <p>{age || 0}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Add