import React from "react";
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import {MdAccessTime} from 'react-icons/md'
import { useState,useEffect } from 'react';

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Maximize } from "@mui/icons-material";

export default function UsageHistory (){

    const [age, setAge] = useState("");

    const handleChange = (e) => {
        setAge(e.target.value);
    };

    useEffect(() => {
        console.log(age);
    });

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    return(
        <Grid container rowSpacing={1} columnSpacing={2} columns={16}>

            <Grid item xs={16}>
                
                <Item style={{ textAlign: 'left'}}>
                    <div className='flex items-center' style={{fontSize: '50px', color: '#000000' , justifyContent:'left'} }>
                    <div>
                        <MdAccessTime />
                    </div>
                    
                    <div>
                        ประวัติการเข้าใช้งาน
                    </div>
                    
                    </div>
                    
                    <Button variant="contained" color="secondary" size="large">test1</Button>
                    <Button variant="contained" color="secondary" size="large">test1</Button>
                    <Button variant="contained" color="secondary" size="large">test1</Button>

                    
                </Item>

                
            </Grid>

            <Grid item xs={16}>
                <Item style={{ textAlign: 'left'}}>
                    <div className='flex items-center' style={{fontSize: '20px', color: '#000000' , justifyContent:'left'} }>
                        <div>
                            เลือกสถานีชาร์จของคุณ
                        </div>
                    </div>

                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-filled-label">เลือกสถานี</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={age}
                        onChange={handleChange}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>



                </Item>

            </Grid>

            <Grid item xs={8}>

                <Grid item xs={3}>
                    <Item style={{ textAlign: 'left'}}>
                            
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg" width="100%" height="100%"/>
                    </Item>
                </Grid>

                <Grid item xs={5}>
                    <Item style={{ textAlign: 'left'}}>
                    <div>Hi </div></Item>
                </Grid>

                    

                



            </Grid>
            

        </Grid>
        
    );
}