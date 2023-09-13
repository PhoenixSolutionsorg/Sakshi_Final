import './App.css';
import { Suspense } from 'react';
import { useRoutes, useLocation } from 'react-router-dom';
import { baseRoutes } from './helpers/baseRoutes';
import { routes } from './route';
import { ToastContainer } from 'react-toastify';
import { Loader } from './components';
function RouteLayout({ path }) {
  const element = useRoutes(path);
  return element;
}
function App() {
  const location = useLocation();
  let path = location.pathname.search(baseRoutes.adminBaseRoutes.replace("/", "admin")) >= 0 ? "admin" : "user";
  return (
    <>
      <ToastContainer className="toast-position"
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={
        path === "user" ?
          <>
            <Loader/>
          </>
          : <div>Admin Loader...</div>
      }>
        <RouteLayout path={routes()} />
      </Suspense>
    </>
  );
}

export default App;
