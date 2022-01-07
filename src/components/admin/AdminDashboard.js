import { Card, Grid, Typography, CardContent, CardHeader, Avatar } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function AdminDashboard() {
    const [raised, setRaised] = useState({ c1: false, c2: false, c3: false, c4: false })
    const adminDashboard = useSelector(state => state.adminDashboard)

    const dispatch = useDispatch()

    useEffect(() => {
        const payload = { token: localStorage.getItem('adminToken') }
        dispatch({ type: 'ADMIN_DASHBOARD_REQUEST', payload: payload })
        console.log("this is data", adminDashboard)
    }, [])

    function handleRaised(value, key) {
        setRaised({ [key]: value })
    }

    return (
        <Grid container spacing={10} sx={{ my: 0 }} p={2}>
            <Grid item sm={6} md={6} xs={12} >
                <Card sx={{ minHeight: 150, maxWidth: 400 }} raised={raised.c1} onPointerOver={() => handleRaised(true, 'c1')} onPointerOut={() => handleRaised(false, 'c1')}>
                    <CardHeader avatar={<Avatar><SupervisorAccountIcon /></Avatar>} title={'Total Admins:'} titleTypographyProps={{variant:"h8", color:"black", component:"div", align:'left'}} />
                    <CardContent>
                        <Typography variant="h2" color="#1976d2" sx={{pb:1}}>{adminDashboard.adminCount}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={6} md={6} xs={12}><Card sx={{ minHeight: 150, maxWidth: 400 }} raised={raised.c2} onPointerOver={() => handleRaised(true, 'c2')} onPointerOut={() => handleRaised(false, 'c2')}>
                <Box pt={2} ><Typography variant="h8" color="black" > Total Classes:  </Typography></Box>
                <Typography variant="h2" color="#1976d2">{adminDashboard.classCount}</Typography>
            </Card></Grid>
            <Grid item sm={6} md={6} xs={12}><Card sx={{ minHeight: 150, maxWidth: 400 }} raised={raised.c3} onPointerOver={() => handleRaised(true, 'c3')} onPointerOut={() => handleRaised(false, 'c3')}>
                <Box pt={2} ><Typography variant="h8" color="black" > Total Instructors:  </Typography></Box>
                <Typography variant="h2" color="#1976d2">{adminDashboard.instructorCount}</Typography>
            </Card></Grid>
            <Grid item sm={6} md={6} xs={12}><Card sx={{ minHeight: 150, maxWidth: 400 }} raised={raised.c4} onPointerOver={() => handleRaised(true, 'c4')} onPointerOut={() => handleRaised(false, 'c4')}>
                <Box pt={2} ><Typography variant="h8" color="black" > Total Students:  </Typography></Box>
                <Typography variant="h2" color="#1976d2">{adminDashboard.studentCount}</Typography>
            </Card></Grid>
        </Grid>

    )
}

export default AdminDashboard