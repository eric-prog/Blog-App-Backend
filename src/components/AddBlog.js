import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddBlog = () => {
    const [inputs, setInputs] = useState({
        title: "",
        description: "",
        imageURL: ""
    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const sentRequest = async() => {
        const res = await axios.post("http://localhost:5000/api/blog/add", {
            title: inputs.title,
            description: inputs.description,
            image: inputs.imageURL,
            user: localStorage.getItem("userId")
        }).catch(err => console.log(err))
        const data = await res.data
        return data
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        sentRequest().then(data => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box>
                    <Typography>Post your Blog</Typography>
                    <InputLabel>Title</InputLabel>
                    <TextField name="title" onChange={handleChange} value={inputs.title}/>
                    <InputLabel>Description</InputLabel>
                    <TextField name="description" onChange={handleChange} value={inputs.description}/>
                    <InputLabel>imageURL</InputLabel>
                    <TextField name="imageURL" onChange={handleChange} value={inputs.imageURL}/>
                    <Button type="submit">Submit</Button>
                </Box>
            </form>
        </div>
    )
}

export default AddBlog