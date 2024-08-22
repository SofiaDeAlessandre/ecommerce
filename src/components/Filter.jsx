import { Box, TextField } from '@mui/material';

export const Filter = ({ setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    // <Box sx={{ margin: '20px auto', display:'block'}}>
    //   <TextField
    //     variant="outlined"
    //     label="Buscar Producto"
    //     onChange={handleChange}
    //     sx={{border:'white'}}
    //   />
    // </Box>
    <Box sx={{ margin: '20px auto' }}>
      <TextField
        variant="outlined"
        label="Buscar Producto"
        onChange={handleChange}
        sx={{
          '& label.Mui-focused': {
            color: '#e3e5f3',
          },
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#05031a',
            '& fieldset': {
              borderColor: '#e3e5f3',
              borderWidth: '3px',
            },
            '&:hover fieldset': {
              borderColor: '#e3e5f3',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#e3e5f3',
            },
            color: '#e3e5f3',
          },
        }}
        InputLabelProps={{
          sx: {
            color: '#e3e5f3',
            '&.Mui-focused': {
              color: '#e3e5f3',
            },
          },
        }}
      />
    </Box>
  );
};

