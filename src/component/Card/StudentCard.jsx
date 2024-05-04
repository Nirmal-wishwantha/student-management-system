import React, { useState, useRef } from 'react'
import { Box, TextField } from '@mui/material'
import HowToRegRoundedIcon from '@mui/icons-material/HowToRegRounded';
import Button from '@mui/material/Button';
import './StudentCard.css'
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
import DisplayGroup from '../Display/DisplayGroup';

export default function StudentCard() {

    const [newstudent, setNewstudent] = useState([]);

    const [studentname, setStudentname] = useState('');
    const [studentage, setStudentage] = useState('');
    const [studentaddress, setStudentnaddress] = useState('');
    const [studentschool, setStudentschool] = useState('');

    const nameRef = useRef();
    const ageRef = useRef();
    const addRef = useRef();
    const sclRef = useRef();

    const changeList = (index) => {
        const deStu = [...newstudent];
        deStu.splice(index, 1);
        setNewstudent(deStu);
    }


    function addStudent() {

        nameRef.current.valueu
        ageRef.current.value
        addRef.current.value
        sclRef.current.value

        const newStu = {
            id: newstudent.length + 1,
            displayname: studentname,
            displayage: studentage,
            displayaddress: studentaddress,
            displayschool: studentschool
        };

        setNewstudent([...newstudent, newStu]);

        nameRef.current.value = '';
        ageRef.current.value = '';
        addRef.current.value = '';
        sclRef.current.value = '';
    }


    return (
        <div>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>

                <Box sx={{ boxShadow: 12, padding: 5, borderRadius: 2, backgroundColor: ' #e6f9ff', marginTop: 2 }}>

                    <Box>
                        <h2 className='topic'>Student Register Form</h2>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'center', opacity: .4 }}>
                        <GroupAddSharpIcon sx={{ fontSize: 70, display: 'flex', justifyContent: 'center' }} />
                    </Box>

                    <Box sx={{ marginBottom: 4 }}>

                        <Box className='input-filed'>
                            <TextField
                                className='input-aria'
                                id="standard-textarea"
                                label="Student Name"
                                placeholder="enter name"
                                multiline
                                variant="standard"
                                onChange={(val1) => setStudentname(val1.target.value)}
                                inputRef={nameRef}
                            />
                        </Box>

                        <Box className='input-filed'>
                            <TextField
                                className='input-aria'
                                id="standard-textarea"
                                label="Student Age"
                                placeholder="enter age"
                                multiline
                                variant="standard"
                                onChange={(val2) => setStudentage(val2.target.value)}
                                inputRef={ageRef}
                            />
                        </Box>

                        <Box className='input-filed'>
                            <TextField
                                className='input-aria'
                                id="standard-textarea"
                                label="Student Address"
                                placeholder="enter address"
                                multiline
                                variant="standard"
                                onChange={(val3) => setStudentnaddress(val3.target.value)}
                                inputRef={addRef}
                            />
                        </Box>

                        <Box className='input-filed'>
                            <TextField
                                className='input-aria'
                                id="standard-textarea"
                                label="Student School"
                                placeholder="enter school"
                                multiline
                                variant="standard"
                                onChange={(val4) => setStudentschool(val4.target.value)}
                                inputRef={sclRef}

                            />
                        </Box>

                    </Box>

                    <Box className='btn'>

                        <Button variant="contained" startIcon={<HowToRegRoundedIcon />}
                            sx={{ boxShadow: 8 }}
                            onClick={addStudent}
                        >Submit
                        </Button>

                    </Box>

                </Box>

            </Box>

            <Box sx={{ backgroundColor: '#66b3ff', borderRadius: 1, boxShadow: 10,position:'sticky',top:83,zIndex:1 }}>
                <h1 className='bottom-container-topic'>Registerd Student</h1>
            </Box>


            <Box sx={{ display: 'flex', justifyContent: 'center', margin: 2, flexWrap: 'wrap' }} >

                {newstudent.map((val, index) => (
                    <DisplayGroup
                        key={val.id}
                        displayname={val.displayname}
                        displayage={val.displayage}
                        displayaddress={val.displayaddress}
                        displayschool={val.displayschool}
                        deletebtn={() => changeList(index)}
                    />
                ))}

            </Box>

        </div>
    )
}
