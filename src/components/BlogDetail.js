import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'


const BlogDetail = () => {
    const [blog, setBlog] = useState()
    const id = useParams().id
    console.log(id)
    const [inputs, setInputs] = useState({
        
    })
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const fetchDetails = async() => {
        const res = await axios.get(`http://localhost:5000/api/blog/${id}`).catch(err => console.log(err))
        const data = await res.data
        return data
    }
    const sendRequest = async() => {
        const res = axios.put(`http://localhost:5000/api/blog/update/${id}`, {
            title: inputs.title,
            description: inputs.description,
            image: inputs.imageURL
        }).catch(err => console.log(err))
        const data = await res.data
        return data
    }
    useEffect(() => {
        fetchDetails().then(data => {
            setBlog(data.blog)
            setInputs({
                title: data.blog.title, 
                description: data.blog.description,
                imageURL: data.blog.image
            })
        })
    }, [id])    
    const handleSubmit = (e) => {
        e.preventDefault()
        sendRequest().then(data => console.log(data))
    }

    return (
        <div>
            <h1>BlogDetail</h1>
            { inputs && (
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
            )}
        </div>
    )
}

export default BlogDetail