import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DataGrid } from "@mui/x-data-grid"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axiosService from "../../services/axiosService";

function AdminViewStudents() {

    const [open, setOpen] = useState(false);
    const [credentials, setCredentials] = useState({ email: '', name: '', password: '' })
    const [selectionModel, setSelectionModel] = useState(null)
    const viewStudents = useSelector((state) => state.adminViewStudents)
    const dispatch = useDispatch()
    const token = localStorage.getItem('adminToken')

    useEffect(() => {
        dispatch({ type: 'ADMIN_VIEW_STUDENTS_REQUEST', payload: { token: localStorage.getItem('adminToken') } })
    }, [])

    async function createStudent() {
        const { name, email, password } = credentials
        const payload = { email: email, name: name, password: password }
        try {
            const response = await axiosService.send('admin/create/student', token, payload, 'post')
            dispatch({ type: 'ADMIN_VIEW_STUDENTS_REQUEST', payload: { token: token } })
        } catch (e) {
            console.log(e.response)
        }
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteStudent = async () => {
        await axiosService.send('admin/delete/student', token, {id: selectionModel[0]}, 'post')
        window.location.reload()
    }

    return (
        <Box sx={{ display: 'inline-flex', flexDirection: 'row' }}>
            <Box style={{ height: 250, width: 550, height: 500 }}  >
                <DataGrid
                    columns={[{ field: 'id' }, { field: 'name', width: 200 }, { field: 'email', width: 200 }]}
                    rows={viewStudents.students}
                    sx={{
                        mt: 3,
                        borderColor: 'primary.light',
                        '& .MuiDataGrid-cell:hover': {
                            color: 'primary.main',
                        }

                    }}
                    onSelectionModelChange={(newSelectionModel) => {
                        console.log(newSelectionModel)
                        setSelectionModel(newSelectionModel);
                      }}
                />
            </Box>
            <Stack>
                <Button variant="contained" color="success" startIcon={<AddIcon />} sx={{ mt: 5, ml: 2 }} onClick={handleOpen} >
                    Create Student
                </Button>
                <Button variant="outlined" color="error" startIcon={<RemoveIcon />} sx={{ mt: 1, ml: 2 }} onClick={deleteStudent} >
                    Remove Student
                </Button>
            </Stack>

            {/* dialog box  */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create new Student</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create Student credentials.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setCredentials({ ...credentials, email: e.target.value }) }}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setCredentials({ ...credentials, name: e.target.value }) }}
                    />
                    <TextField
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={createStudent}>Create</Button>
                </DialogActions>
            </Dialog>

        </Box >

    )
}

export default AdminViewStudents