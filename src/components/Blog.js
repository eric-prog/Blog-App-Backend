import { Box, Button } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Blog = ({title, description, imageURL, userName, isUser, id}) => {
    const navigate = useNavigate()
    const handleEdit = (e) => {
        navigate(`/${id}`)
    }
    return (
        <div>
            {isUser &&  (
                <Box>
                    <Button onClick={handleEdit}>Edit</Button>
                </Box>
            )}
            <h1>{userName}</h1>
            <h1>Title: {title}</h1>
            <p>description: {description}</p>
            <p>{imageURL}</p>
            <h2>{userName}</h2>
        </div>
    )
}

export default Blog