import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import HomePage from './Pages/HomePage/HomePage';
import Resume from './Pages/Resume/Resume';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage></HomePage>
    },
    {
      path: '/resume',
      element: <Resume></Resume>
    },
    {
      path: '/blogs',
      element: <Blogs></Blogs>
    }
  ])
  return (
    <div className="App bg-slate-600 text-white">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
