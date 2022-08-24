import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, Tabs, Tab } from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state=> state.isLoggedIn)
    const [value, setValue] = useState(0);
    return (
        <AppBar
        position="sticky">
            { isLoggedIn && 
            (<Box display="flex">
                <Tabs textColor="inherit" value={value} onChange={(e, val) => setValue(val)}>
                    <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
                    <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
                    <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog"/>
                </Tabs>
            </Box>)}
            <Toolbar>
                <Typography variant="h4">Blogs App</Typography>
                <Box display="flex">
{  !isLoggedIn &&                  ( <><Button LinkComponent={Link} to="/auth"  variant="contained" color="warning">Login</Button>
                    <Button LinkComponent={Link} to="/auth"  variant="contained" color="warning">Signup</Button></>)}
{     isLoggedIn &&                (<Button onClick={() => dispatch(authActions.logout()) } LinkComponent={Link} to="/auth"  variant="contained" color="warning">Logout</Button>
)}                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header