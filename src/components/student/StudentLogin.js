import { Alert, Avatar, Button, Grid, Paper, Snackbar, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import LockIcon from '@mui/icons-material/Lock'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

function StudentLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [snackOpen, setSnackOpen] = useState(false)
    const [snackMessage, setSnackMessage] = useState('')
    const studentAuth = useSelector(state => state.studentAuth)
    const dispatch = useDispatch()
    const router = useNavigate()

    function dispatchStudentLogin() {
        const payload = {
            email: email,
            password: password
        }
        dispatch({ type: 'STUDENT_LOGIN_REQUEST', payload: payload })
    }

    useEffect(() => {
        if (studentAuth.studentToken !== '') {
            localStorage.setItem('studentToken', studentAuth.studentToken)
            router('/student/view/classes')
        } else if (studentAuth.authError !== '') {
            setSnackOpen(true)
            setSnackMessage(studentAuth.authError)
        }
    }, [studentAuth])

    const paperStyle = { padding: 20, height: '60vh', width: 300, 'marginTop': '5%' }
    const AvatarStyle = { backgroundColor: '#4444d9', 'marginLeft': 'auto', 'marginRight': 'auto' }
    return (
        <Grid container justifyContent="center">
            <Paper elevation={10} style={paperStyle}>
                <Grid item>
                    <Avatar style={AvatarStyle}><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                    <TextField required label='Email' placeholder='email' fullWidth margin='normal' onChange={(e) => setEmail(e.target.value)} ></TextField>
                    <TextField placeholder='password' label='Password' type='password' fullWidth required margin='normal' onChange={(e) => setPassword(e.target.value)} ></TextField>

                    <Button sx={{ my: 5 }} variant="contained" color='primary' onClick={dispatchStudentLogin}>Submit</Button>
                </Grid>
            </Paper>
            <Snackbar open={snackOpen} autoHideDuration={600} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}><Alert severity='error'>{snackMessage}</Alert></Snackbar>
        </Grid>
    )
}

export default StudentLogin