import { Routes, Route } from 'react-router-dom';
import Header from './views/Header/Header';
import routes from './routes';

// import Hero from './views/Home/sections/Hero';
// import Sec1 from './views/Home/sections/Sec1';
// import Sec2 from './views/Home/sections/Sec2';
// import Sec3 from './views/Home/sections/Sec3';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={route.element}
                exact
              />
            );
          })}
        </Routes>
      </main>
    </>
  );
};

export default App;
