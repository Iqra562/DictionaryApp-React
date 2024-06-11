import { ThemeOptions } from "@mui/material/styles";
import React from 'react';

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: React.CSSProperties['color'];
      };
    }
  }
  