import { Button, Stack } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DataGrid } from "@mui/x-data-grid"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function AdminViewStudents() {

    const viewStudents = useSelector((state) => state.adminViewStudents)
    const dispatch = useDispatch()
    useEffect(() => {
        const payload = { token: localStorage.getItem('adminToken') }
        dispatch({ type: 'ADMIN_VIEW_STUDENTS_REQUEST', payload: payload })
    }, [])

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
                />
            </Box>
            <Stack>
                <Button variant="contained" color="success" startIcon={<AddIcon />} sx={{ mt: 5, ml: 2 }} >
                    Create Student
                </Button>
                <Button variant="outlined" color="error" startIcon={<RemoveIcon />} sx={{ mt: 1, ml: 2 }} >
                    Remove Student
                </Button>
            </Stack>
        </Box >

    )
}

export default AdminViewStudents