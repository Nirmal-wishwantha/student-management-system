import React from 'react'
import './DisplayGroup.css'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

export default function DisplayGroup({ displayname, displayage, displayaddress, displayschool, deletebtn }) {

    return (
        <div>

            <Box sx={{ border: 'solid', padding: 1, borderRadius: 2, boxShadow: 5, margin: 1 }}>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

                    <Box sx={{ boxShadow: 8, borderRadius: 2, padding: 3, backgroundColor: '#e6fff7', margin: 1 }}>

                        <Box sx={{ display: 'flex' }}>
                            <div className='details-list'>
                                <h2>Name</h2>
                                <h2>Age</h2>
                                <h2>Address</h2>
                                <h2>School</h2>
                            </div>

                            <div className='displya-details'>
                                <p>{displayname}</p>
                                <p>{displayage}</p>
                                <p>{displayaddress}</p>
                                <p>{displayschool}</p>

                            </div>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-around', margin: 2 }}>

                            <Button variant="contained" startIcon={<EditRoundedIcon />}
                                sx={{ backgroundColor: '#1976d2', color: 'white', boxShadow: 10, marginRight: 1 }}
                            >Edit
                            </Button>

                            <Button startIcon={<DeleteIcon />}
                                sx={{ backgroundColor: '#cc0000', color: 'white', boxShadow: 10, ":hover": { backgroundColor: '#990000' } }}
                                onClick={deletebtn}
                            >Delete
                            </Button>

                        </Box>

                    </Box>

                </Box>

            </Box>


        </div>
    )
}
