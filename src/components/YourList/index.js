import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import DescriptionIcon from '@mui/icons-material/Description';
import { Button } from '@mui/material';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 ,headerAlign: 'center', align:'center', menubar:'disable'},
    { field: 'Name', headerName: 'ชื่อสถานนีชาร์จ', width: 200 ,headerAlign: 'center', align:'center'},
    
  ];

  const rows = [
 { id: '1', Name: 'สถานี Ev'},
 { id: '2', Name: 'Ev Center'},
 { id: '3', Name: 'ขับรถevชนตู้'},
 { id: '4', Name: 'สถานี Ev 2'},
 { id: '5', Name: 'สถานี Ev 3'},
 { id: '6', Name: 'สถานี Ev 4'},
 { id: '7', Name: 'สถานี Ev 5'},
 
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const handleEvent /*: GridEventListener<'rowClick'> */= (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details, // GridCallbackDetails
  ) => {
    console.log(params.row.id);
  };


function YourList () {
    return(
        <Grid container spacing={2} columns={16} >
            <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <div style={{fontSize: '40px'} }>
                รายการของคุณ</div>
                <div style={{fontSize: '26px'} }>
                สถานีชาร์จของคุณ</div>
                <div style={{ height: 400, width: '100%', justifyContent: 'center'} }>
                <DataGrid
                    
                    rows={rows}
                    columns={columns}
                    //pageSize={5}
                    rowsPerPageOptions={[5]}
                    //checkboxSelection
                    isRowSelectable={(params) => false}
                    disableColumnMenu    ///// ปืดเมนู สามจุเที่ column header     
                    onRowClick={handleEvent}
                    
                />              
                    
                    </div>
                </Item>
            </Grid>

            <Grid item xs={16} md={16}>
                <Item style={{ textAlign: 'left'}}>
                <div style={{fontSize: '26px'} }>
                สร้างสถานีชาร์จใหม่</div>
                </Item>

                <Item style={{ textAlign: 'center'}}>
                <div style={{fontSize: '20px'} }>
                เพิ่มสถานีชาร์จใหม่ของคุณ เพื่อสร้างรายได้ที่เพิ่มขึ้น</div>
                <div></div>
                <Button variant="contained" color="secondary" size="large">คลิกเพื่อสร้างสถานีชาร์จใหม่</Button>
                </Item>

                
            </Grid>

        </Grid>
        
    );
}

export default YourList;
