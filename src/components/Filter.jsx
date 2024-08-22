import { Box, TextField } from '@mui/material';

export const Filter = ({ setFilter }) => {
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box sx={{ margin: '20px auto' }}>
      <TextField
        variant="outlined"
        label="Buscar Producto"
        onChange={handleChange}
        sx={{
          '& label.Mui-focused': {
            color: '#6f7295',
          },
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#040305',
            '& fieldset': {
              borderColor: '#6f7295',
              borderWidth: '3px',
            },
            '&:hover fieldset': {
              borderColor: '#6f7295',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6f7295',
            },
            color: '#6f7295',
          },
        }}
        InputLabelProps={{
          sx: {
            color: '#e3e5f3',
            '&.Mui-focused': {
              color: '#6f7295',
            },
          },
        }}
      />
    </Box>
  );
};
