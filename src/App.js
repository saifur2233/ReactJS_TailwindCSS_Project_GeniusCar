import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Router/Routes';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
