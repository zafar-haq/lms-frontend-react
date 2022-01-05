import { Alert, Avatar, Button, Grid, Paper, Snackbar, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import LockIcon from '@mui/icons-material/Lock'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

function AdminLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [snackOpen, setSnackOpen] = useState(false)
    const [snackMessage, setSnackMessage] = useState('')
    const adminAuth = useSelector(state => state.adminAuth)
    const dispatch = useDispatch()
    const router = useNavigate()

    function dispatchAdminLogin() {
        const payload = {
            email: email,
            password: password
        }
        dispatch({ type: 'ADMIN_LOGIN_REQUEST', payload: payload })
    }

    useEffect(() => {
        localStorage.setItem('adminToken', adminAuth.adminToken)
        if(adminAuth.adminToken !== ''){
            router('/admin/dashboard')
        }else if(adminAuth.authError !== ''){
            setSnackOpen(true)
            setSnackMessage(adminAuth.authError)
            // alert(adminAuth.authError)
        }
    }, [adminAuth])

    const paperStyle = { padding: 20, height: '60vh', width: 300, 'marginTop': '5%' }
    const AvatarStyle = { backgroundColor: '#e54b4b', 'marginLeft': 'auto', 'marginRight': 'auto' }
    return (
        <Grid container justifyContent="center">
            {/* <Grid item md={4} sm={5} xs={8} justifyContent="center" alignContent='center'> */}
            <Paper elevation={10} style={paperStyle}>
                <Grid item>
                    <Avatar style={AvatarStyle}><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                    <TextField required label='Email' placeholder='email' fullWidth margin='normal' onChange={(e) => setEmail(e.target.value)} ></TextField>
                    <TextField placeholder='password' label='Password' type='password' fullWidth required margin='normal' onChange={(e) => setPassword(e.target.value)} ></TextField>

                    <Button sx={{ my: 5 }} variant="contained" color='primary' onClick={dispatchAdminLogin}>Submit</Button>
                </Grid>
            </Paper>
            {/* </Grid> */}
            <Snackbar open={snackOpen} autoHideDuration={600} anchorOrigin={{ vertical: 'top', horizontal: 'right'}}><Alert severity='error'>{snackMessage}</Alert></Snackbar>
        </Grid>
    )
}

export default AdminLogin