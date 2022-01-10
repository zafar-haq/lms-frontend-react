import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material"
import { red, blue, green, yellow } from '@mui/material/colors';
import { Box } from "@mui/system"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RemoveIcon from '@mui/icons-material/Remove';


function StudentViewClasses() {
    const colors = [red[500], blue[500], green[500], yellow[500]]
    const token = localStorage.getItem('studentToken')

    const classes = useSelector(state => state.studentViewClasses.classes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'STUDENT_VIEW_CLASSES_REQUEST', payload: { token: token } })
        console.log(classes)
    }, [])

    return (
        <Box>
            <Stack direction='row' spacing={2} rowGap={4} p={1} sx={{ flexWrap: 'wrap' }}>

                {
                    classes.map(value => {
                        let dateObject = new Date(value.createdAt)
                        let date = dateObject.toDateString()
                        return (<Card sx={{ minWidth: 340, ml: 2 }} raised={true} key={value.id}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: colors[Math.floor(Math.random() * 4)] }} aria-label="class">
                                        {value.course_name[0]}
                                    </Avatar>
                                }
                                title={value.course_name}
                                subheader={'Created at: ' + date}
                            />
                            <CardContent>
                                <Typography component='div' variant="body2" color="text.secondary">
                                    <ul style={{ textAlign: 'left' }}>
                                        <li key={1}>Strength: {value.strength}</li>
                                        <li key={2}>Enrolled Students: {value.enrolledStudents}</li>
                                        <li key={3}>Number of Instructors: {value['Instructors'].length}</li>
                                    </ul>
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button onClick={() => {} } startIcon={<RemoveIcon />}>
                                    Enroll out
                                </Button>
                            </CardActions>
                        </Card>)
                    })
                }

            </Stack>
        </Box>
    )
}

export default StudentViewClasses