import React from "react";
import { Grid, Menu } from '@mui/material';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import { MdAccessTime } from 'react-icons/md'
import { useState,useEffect } from 'react';

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Maximize } from "@mui/icons-material";

import axios from 'axios';

export default function UsageHistory (){


    const userid = 3

    const [stationID, setstationID] = useState("");
    const [Allstation, setAllstation] = useState([]);
    const [ReviewData, setReviewData] = useState([]);

    const handleChange = (e) => {
        console.log(stationID);
        setstationID(e.target.value);
        console.log("onChange Called");
    };


    useEffect(() => {
        
        axios.get('http://localhost:5000/api/GetAllStation?userid='+userid,             ///////// ใช้ได้อยู่
        )
        .then(respone => {
            setAllstation(respone.data.results)
        })
      },[])

      console.log(Allstation);


    // useEffect(() => {
        
    //     axios.get('http://localhost:5000/api/ChooseStation?userid='+userid +"&stationID="+stationID,             ///////// ใช้ได้อยู่
    //     )
    //     .then(respone => {
    //         setReviewData(respone.data.results)
    //     })
    //   },[stationID])

      console.log(ReviewData);

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
                    
                    <NavLink to={"/history/UseHistory"} >
                        <Button variant="contained" color="secondary" size="large">การใช้งาน</Button>
                    </NavLink>
                    
                    <NavLink to={"/history"} >
                        <Button variant="contained" color="secondary" size="large">รายได้ที่ได้รับ</Button>
                    </NavLink>

                    <NavLink to={"/history/UserReview"} >
                        <Button variant="contained" color="secondary" size="large">รีวิว</Button>
                    </NavLink>

                    
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
                        value={stationID}
                        onChange={handleChange}
                        
                        >
                        

                            <MenuItem value="">
                                <em>ทุกสถานี</em>
                            </MenuItem>
                            
                            {
                                Allstation.map (content =>(
                                    
                                    <MenuItem value={content.id} key={content.id} > {content.stationName}</MenuItem>
                                    
                                ))
                            }
                  

                        </Select>

                    </FormControl>

                </Item>

            </Grid>

            <Grid item xs={16}>

                {
                    ReviewData.map((y, index) => {
    
                                return(
                                    <div key={index}>
                                        {/* <div>{y.id}</div>
                                        <div>{y.name}</div>
                                        <div>{y.ChargeTP}</div>
                                        <div>{y.ChargeTN}</div>
                                        <div>{y.Cmodel}</div>
                                        <div>{y.kWh}</div>
                                        <div>{y.price}</div>
                                        <div>{y.date}</div> */}
                                        <div>================================</div>
                                    </div>
                                )
                                
                    })
                }


            </Grid>
            

        </Grid>
        
    );
}