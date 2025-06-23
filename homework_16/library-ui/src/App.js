import { AppBar, ToolBar, Typography, Button, Container, Dialog, DialogActions, 
  DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useState } from 'react';


function App() {

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpen = () => {
    setOpenDialog(true)  // вернет: открой модальное окно
  }

  const handleClose = () => {
    setOpenDialog(false)  //вернет: закрой модальное окно
  }

  return (
    <div className="App">

        <AppBar position="static" >

          <Typography variant='h6' sx={{p:1}}>My Material UI App</Typography>

        </AppBar>
      

        <Container sx={{ textAlign: 'center'}}>
          <Typography variant='h5' sx={{m: 2}}>Welcome to our Application!</Typography>
          <Button onClick={handleOpen}  variant='contained' color='primary'>Open dialog box</Button>
        </Container>

         { /* Модальное окно (появляется при open = true) */ }
         <Dialog open={openDialog} onClick={handleClose}>
            <DialogContent>
              <DialogTitle>Use material UI?</DialogTitle>
              <DialogContentText>This is a simple React App. You can customize it as you wish.</DialogContentText>
            </DialogContent>
            <DialogActions>
              {/* обе кнопки для закрытия */}
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>I agree</Button>
            </DialogActions>            
         </Dialog>
    </div>
  );
}

export default App;
