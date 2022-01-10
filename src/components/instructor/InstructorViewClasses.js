import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContentText, DialogContent, DialogTitle, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography, TextField } from "@mui/material"
import { red, blue, green, yellow } from '@mui/material/colors';
import { Box } from "@mui/system"
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
import axiosService from "../../services/axiosService";


function InstructorViewClasses() {
    const colors = [red[500], blue[500], green[500], yellow[500]]
    const token = localStorage.getItem('instructorToken')

    const inputFile = useRef(null)
    const [name, setName] = useState('')
    const [classId, setClassId] = useState(null)
    const [openFileDialog, setOpenFileDialog] = useState(false)
    const [fileInput, setFileInput] = useState({})
    const [open, setOpen] = useState(false)
    const [courseMaterial, setCourseMaterial] = useState([])
    const classes = useSelector(state => state.instructorViewClasses.classes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'INSTRUCTOR_VIEW_CLASSES_REQUEST', payload: { token: token } })
        console.log(classes)
    }, [])

    async function getCourseMaterial(classId) {
        const response = await axiosService.send('student/getCourseMaterial', token, { params: { classId: classId } }, 'get')
        if (response.hasOwnProperty('data') && response.data.hasOwnProperty('data')) {
            setCourseMaterial(response.data.data)
        }
        setOpen(true)
    }

    function uploadCourseMaterial(classId) {
        setClassId(classId)
        setOpenFileDialog(true)
    }

    async function submitFile() {
        let formData = new FormData()
        formData.append( 
            "file", 
            fileInput, 
            fileInput.name 
          ); 
        formData.append(
            "name",
            name
        )
        const response = await axiosService.send(`CourseMaterialRoute/${classId}/upload`, token, formData, 'post')
        setOpenFileDialog(false)
    }

    const onFileChange = event => {
        setFileInput(event.target.files[0]);
        console.log(fileInput)
    };

    function handleClose() {
        setOpen(false)
    }

    function handleCloseFileDialog() {
        setOpenFileDialog(false)
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
                                    </ul>
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button onClick={() => { getCourseMaterial(value.id) }} startIcon={<LibraryBooksOutlinedIcon />}>
                                    <p style={{ fontSize: 12 }}>View Course Material</p>
                                </Button>
                                <Button onClick={() => { uploadCourseMaterial(value.id) }} startIcon={<UploadFileOutlinedIcon />}>
                                    <p style={{ fontSize: 12 }}>upload Course Material</p>
                                </Button>
                            </CardActions>
                            <p style={{ fontSize: 10 }}>File uploaded: {fileInput.name}</p>
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

            <Dialog open={openFileDialog} onClose={handleCloseFileDialog}>
                <DialogTitle>Upload Course Material</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        File Details
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setName(e.target.value) }}
                    />
                    <input type='file' id='file' value={''} ref={inputFile} onChange={onFileChange} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseFileDialog}>Cancel</Button>
                    <Button onClick={submitFile}>Submit</Button>
                </DialogActions>
            </Dialog>

        </Box>
    )
}

export default InstructorViewClasses