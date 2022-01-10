import { Alert, Avatar, Button, Grid, Paper, Snackbar, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import LockIcon from '@mui/icons-material/Lock'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

function InstructorLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [snackOpen, setSnackOpen] = useState(false)
    const [snackMessage, setSnackMessage] = useState('')
    const instructorAuth = useSelector(state => state.instructorAuth)
    const dispatch = useDispatch()
    const router = useNavigate()

    function dispatchInstructorLogin() {
        const payload = {
            email: email,
            password: password
        }
        dispatch({ type: 'INSTRUCTOR_LOGIN_REQUEST', payload: payload })
    }

    useEffect(() => {
        if (instructorAuth.instructorToken !== '') {
            localStorage.setItem('instructorToken', instructorAuth.instructorToken)
            router('/instructor/view/classes')
        } else if (instructorAuth.authError !== '') {
            setSnackOpen(true)
            setSnackMessage(instructorAuth.authError)
        }
    }, [instructorAuth])

    const paperStyle = { padding: 20, height: '60vh', width: 300, 'marginTop': '5%' }
    const AvatarStyle = { backgroundColor: 'green', 'marginLeft': 'auto', 'marginRight': 'auto' }
    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid item>
                    <Avatar style={AvatarStyle}><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                    <TextField required label='Email' placeholder='email' fullWidth margin='normal' onChange={(e) => setEmail(e.target.value)} ></TextField>
                    <TextField placeholder='password' label='Password' type='password' fullWidth required margin='normal' onChange={(e) => setPassword(e.target.value)} ></TextField>

                    <Button sx={{ my: 5 }} variant="contained" color='primary' onClick={dispatchInstructorLogin}>Submit</Button>
                </Grid>
            </Paper>
            <Snackbar open={snackOpen} autoHideDuration={600} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}><Alert severity='error'>{snackMessage}</Alert></Snackbar>
        </Grid>
    )
}

export default InstructorLogin