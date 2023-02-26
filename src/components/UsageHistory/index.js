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
    const [usageData, setusageData] = useState([]);

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
            console.log("use Effect 1 Called");
            // console.log(stationID);
            // console.log(Allstation);
            
        })
      },[])

      console.log(Allstation);


    useEffect(() => {
        
        axios.get('http://localhost:5000/api/ChooseStation?userid='+userid +"&stationID="+stationID,             ///////// ใช้ได้อยู่
        )
        .then(respone => {
            setusageData(respone.data.results)
            console.log("use Effect 2 Called");
            // console.log(userid);
            // console.log(stationID);
            // console.log(usageData);
            
        })
      },[stationID])

      console.log(usageData);
  

    

    // useEffect(() => {
        
    //     console.log(stationID);
    //     setstationID(stationID);
    //     console.log("use Effect 3 Called");
        
    // })

 
     

    

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
                    
                    <Button variant="contained" color="secondary" size="large">การใช้งาน</Button>
                    <Button variant="contained" color="secondary" size="large">รายได้ที่ได้รับ</Button>
                    <Button variant="contained" color="secondary" size="large">รีวิว</Button>

                    
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
                                // Allstation.map((item, index) => {
        
                                //     return(
                                //         <div key={index}>
                                //             <MenuItem value={item.id}> {item.stationName} </MenuItem>
                                //         </div>
                                //     )
                                    
                                // })
                            }
                            
                            {
                                Allstation.map (content =>(
                                    
                                    <MenuItem value={content.id} key={content.id} > {content.stationName}</MenuItem>
                                    
                                ))
                            }

                            {/* <MenuItem value={1}>EV Station 1</MenuItem>
                            <MenuItem value={2}>EV Station 2</MenuItem>
                            <MenuItem value={3}>EV Station 3</MenuItem>
                            <MenuItem value={4}>EV Station 4</MenuItem> */}

                        

                        </Select>
                    </FormControl>



                </Item>

            </Grid>

            <Grid item xs={16}>

                {/* <Grid item xs={3}>
                    <Item style={{ textAlign: 'left'}}>
                            
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg" width="100%" height="100%"/>
                    </Item>
                    
                </Grid>

                <Grid item xs={5}>
                    <Item style={{ textAlign: 'left'}}>
                    <div>Hi </div></Item>
                </Grid> */}

                    {
                            // usageData.map (y =>(
                            // <div>
                            //     <div>{y.id}</div>
                            //     <div>{y.name}</div>
                            //     <div>{y.ChargeTP}</div>
                            //     <div>{y.ChargeTN}</div>
                            //     <div>{y.Cmodel}</div>
                            //     <div>{y.kWh}</div>
                            //     <div>{y.price}</div>
                            //     <div>{y.date}</div>
                            //     <div>================================</div>
                            // </div>
            
                            // ))
                    }

                {
                    usageData.map((y, index) => {
    
                                return(
                                    <div key={index}>
                                        <div>{y.id}</div>
                                        <div>{y.name}</div>
                                        <div>{y.ChargeTP}</div>
                                        <div>{y.ChargeTN}</div>
                                        <div>{y.Cmodel}</div>
                                        <div>{y.kWh}</div>
                                        <div>{y.price}</div>
                                        <div>{y.date}</div>
                                        <div>================================</div>
                                    </div>
                                )
                                
                    })
                }

                

                

                    

                



            </Grid>
            

        </Grid>
        
    );
}