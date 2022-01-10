import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material"
import { red, blue, green, yellow } from '@mui/material/colors';
import { Box } from "@mui/system"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RemoveIcon from '@mui/icons-material/Remove';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import axiosService from "../../services/axiosService";
import axios from "axios";


function StudentViewClasses() {
    const colors = [red[500], blue[500], green[500], yellow[500]]
    const token = localStorage.getItem('studentToken')

    const [open, setOpen] = useState(false)
    const [courseMaterial, setCourseMaterial] = useState([])
    const classes = useSelector(state => state.studentViewClasses.classes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'STUDENT_VIEW_CLASSES_REQUEST', payload: { token: token } })
        console.log(classes)
    }, [])

    async function getCourseMaterial(classId) {
        const response = await axiosService.send('student/getCourseMaterial', token, { params: { classId: classId } }, 'get')
        if (response.hasOwnProperty('data') && response.data.hasOwnProperty('data')) {
            setCourseMaterial(response.data.data)
        }
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    async function downloadFile(link){
        const response = await axios.get(link, {})
        // if (response.hasOwnProperty('data') && response.data.hasOwnProperty('data')) {
        //     setCourseMaterial(response.data.data)
        // }
        setOpen(false)
    }

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
                            <CardActions >
                                <Button color='error' onClick={() => { }} startIcon={<RemoveIcon />}>
                                    Enroll out
                                </Button>
                                <Button onClick={() => { getCourseMaterial(value.id) }} startIcon={<LibraryBooksOutlinedIcon />}>
                                    View Course Material
                                </Button>
                            </CardActions>
                        </Card>)
                    })
                }

            </Stack>

            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
                maxWidth="xs"
                open={open}
            >
                <DialogTitle>Course Material</DialogTitle>
                <DialogContent dividers>
                    <List>
                        {courseMaterial.map((value) => {
                            return (
                                <ListItem
                                    value={value.file}
                                    key={value.id}
                                    label={value.name}
                                >
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <AttachFileOutlinedIcon />
                                        </ListItemIcon>
                                        <ListItemText > <a href={value.file} download>{value.name}</a> </ListItemText>
                                    </ListItemButton>
                                </ListItem>)
                        })}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>
    )
}

export default StudentViewClasses