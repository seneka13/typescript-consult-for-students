
import { BrowserRouter, Route } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { MainPage } from './pages/MainPage';
import { MyCart } from './pages/MyCart';
import { Products } from './pages/Products';
import { routes } from './routes';
import { Layout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <>
          <Route path={routes.mainPage} component={MainPage} exact />
          <Route path={routes.products} component={Products} exact />
          <Route path={routes.myCart} component={MyCart} exact />
          <Route path={routes.aboutUs} component={AboutUs} exact />
        </>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
