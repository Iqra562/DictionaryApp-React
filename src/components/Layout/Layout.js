import Header from "../Header/Header"
import { alpha, styled } from '@mui/material/styles';
import { grey, pink, yellow } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { useEffect, useState ,useContext} from "react";
import Container from '@mui/material/Container';
import Definition from "../Definition/Definition";
import ApiContextProvider from "../../Context/ApiContextProvider";
import { MenuItem, TextField, ThemeProvider, createTheme } from "@mui/material";
import "./Layout.css";
import ApiContext from "../../Context/ApiContext";
 

function Layout(){
    const [darkMode,setDarkMode]= useState(false);

    const DarkMode = styled(Switch)(({ theme }) => ({
      padding: 8,
      '& .MuiSwitch-track': {
        borderRadius: 22 / 2,
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 16,
          height: 16,
        },
        '&::before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main),
          )}" d="M19,13H5V11H19V13Z" /></svg>')`,
          right: 12,
        },
        '&::after': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
            theme.palette.getContrastText(theme.palette.primary.main),
          )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
          left: 12,
      
        },
      }, 
      '& .MuiSwitch-thumb': {
        boxShadow: 'none',
        width: 16,
        height: 16,
        margin: 2,
      },
    }));


 
    

    const darkTheme = createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: darkMode ? "#fff" : "#000000" 
        },
      },
    });
    
return(
    <>
        <ThemeProvider theme={darkTheme}>
    <ApiContextProvider>
          
<div  style={{
     height:"100vh",
     backgroundColor: darkMode? "#000": "#fff",
     color: darkMode ? "white":"black",   
     transition:"all 0.5s linear"
   }}>
   <div style={{
     backgroundColor: darkMode? "#000": "#fff",
     color: darkMode ? "white":"black",   
     transition:"all 0.5s linear"
   }} className="Outer-cover">
<div  className="dictionary-heading" style={{backgroundColor:darkMode?"#161616":"#fafafa"}}> 
  <div style={{color:darkMode?"#c3c2c2":"#7d7b7b"}}> The Dictionary</div>
<DarkMode checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
</div>
   <Container    sx={{
        marginTop: "1%",
        width: '100%',
        maxWidth: {
          xs: '95%', 
          sm: '90%',  
          md: '80%',  
          lg: '70%',  
          xl: '60%',  
        },
      }}>

<Header darkMode={darkMode}/>
<Definition  darkMode={darkMode}/>

   </Container>
   </div>
   </div>
     </ApiContextProvider>
        </ThemeProvider>
    </>
)
}
export default Layout;
