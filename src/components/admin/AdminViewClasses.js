import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { red, blue, green, yellow } from '@mui/material/colors';
import { Box } from "@mui/system"
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosService from "../../services/axiosService";

function InstructorsListDialog({ open, instructors, handleClose, value: valueProp, classId }) {
    console.log(open)
    console.log(instructors)
    const radioGroupRef = useRef(null);
    const [value, setValue] = useState(valueProp);
    const [instructorId, setInstructorId] = useState(null)

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
            maxWidth="xs"
            TransitionProps={{ onEntering: handleEntering }}
            open={open}
        >
            <DialogTitle>Instructors</DialogTitle>
            <DialogContent dividers>
                <RadioGroup
                    ref={radioGroupRef}
                    aria-label="instructors"
                    name="instructors"
                    value={value}
                    onChange={handleChange}
                >
                    {instructors.map((instructor) => (
                        <FormControlLabel
                            value={instructor.id}
                            key={instructor.name}
                            control={<Radio />}
                            label={instructor.name}
                        />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={() => handleClose()}>Cancel</Button>
                <Button onClick={() => { handleClose(value) }}>Ok</Button>
            </DialogActions>
        </Dialog>
    )
}

function AdminViewClasses() {
    const colors = [red[500], blue[500], green[500], yellow[500]]
    const token = localStorage.getItem('adminToken')

    const [open, setOpen] = useState(false)
    const [instructors, setInstructors] = useState([])
    const [value, setValue] = useState('')
    const [classId, setClassId] = useState(null)

    const classes = useSelector(state => state.adminViewClasses.classes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({ type: 'ADMIN_VIEW_CLASSES_REQUEST', payload: { token: token } })
        console.log(classes)
    }, [value])

    const handleClose = async (newValue) => {
        setOpen(false);
        if (newValue) {
            setValue(newValue);
            const response = await axiosService.send('admin/assign/instructor', token, {classId:classId, instructorId:newValue}, 'post')
            
        }
    };

    async function getInstructorsApi(){
        const response = await axiosService.send('admin/getInstructors', token, {}, 'get')
        setInstructors(response.data.data)
    }

    function getInstructors(id) {
        getInstructorsApi()
        setOpen(true)
        console.log("these are instructors", instructors)
        setClassId(id)
    }

    return (
        <Box>
            <Stack direction='row' justifyContent='space-between' spacing={2} rowGap={4} p={1} sx={{ flexWrap: 'wrap' }}>

                {
                    classes.map(value => {
                        let dateObject = new Date(value.createdAt)
                        let date = dateObject.toDateString()
                        return (<Card sx={{ minWidth: 340, ml: 2 }} raised={true}>
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
                                <Button onClick={() => { getInstructors(value.id) }} startIcon={<AddOutlinedIcon />}>
                                    Assign Instructor
                                </Button>
                            </CardActions>
                        </Card>)
                    })
                }

            </Stack>
            <InstructorsListDialog open={open} instructors={instructors} handleClose={handleClose} value={value} classId={classId}  />
        </Box>
    )
}

export default AdminViewClasses