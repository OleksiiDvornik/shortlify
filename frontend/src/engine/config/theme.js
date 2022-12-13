import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontFamily: [
            'Proxima Nova',
            'sans-serif'
        ].join(',')
    }
})

export const palette = {
    text: '#151414',
    accent: '#2A5BD7',
    hover: '#FF731D',
    disabled: '#8F989D'
}