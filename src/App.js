import Header from "./components/Header/Header"
import { alpha, styled } from '@mui/material/styles';
import { grey, pink } from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import './App.css'
import Definition from "./components/Definition/Definition";
import ApiContextProvider from "./Context/ApiContextProvider";
import { MenuItem, TextField, ThemeProvider, createTheme } from "@mui/material";
import Layout from "./components/Layout/Layout";

function App() {
  
  return (
    <>
       
        <Layout/>
    
   
    </>
  );
}

export default App;
