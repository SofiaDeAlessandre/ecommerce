import './App.css'
import { Container, Typography } from '@mui/material';
import { useContext } from 'react';
import { FirebaseContext } from './context/FirebaseContext';
import { Header } from './layout/Header';
function App() {
const { products } = useContext(FirebaseContext)
const { users } = useContext(FirebaseContext)
return (
  <>
  <Header/>
  <Container>
    {products.map(product => (
      <Container key={product.id}>
        <Typography>{product.id}</Typography>
        <Typography>{product.descripcion}</Typography>
        <Typography>{product.nombre}</Typography>
        <Typography>{product.precio}</Typography>
      </Container>
    ))}
    <h1>usuarios</h1>
			<ul>
				{users?.map((user) => (
					<li key={user.id}>
						<span>{user.nombre}</span>
					</li>
				))}
			</ul>
  </Container>
  </>
);
}
export default App;
