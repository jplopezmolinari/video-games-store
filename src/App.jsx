import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ListOfProducts from './components/ListOfProducts';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import LoginContainer from './containers/LoginContainer';
import RegisterContainer from './containers/RegisterContainer';
import 'antd/dist/antd.css';
import Cart from './components/Cart';
import AddProductForm from './components/AddProductForm';
import EditGameForm from './components/EditGameForm';
import PurchaseConfirm from './components/PurchaseConfirm';
import UsersList from './components/UsersList';
import UserEdit from './components/UserEdit';
import OrdersHistory from './components/OrdersHistory';
import PendingOrders from './components/PendingOrders';
import NewCategoryForm from './components/NewCategoryForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" component={ListOfProducts} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/orders" component={OrdersHistory} />
        <Route exact path="/create/newCategory" component={NewCategoryForm} />
        <Route exact path="/pendingOrders" component={PendingOrders} />
        <Route exact path="/users" component={UsersList} />
        <Route exact path="/profile/edit/:email" component={UserEdit} />
        <Route exact path="/products/:id/" component={ProductDetail} />
        <Route path="/search/" component={ListOfProducts} />
        <Route exact path="/purchaseConfirm" component={PurchaseConfirm} />
        <Route exact path="/:userId/:cartId" component={Cart} />
        <Route
          exact
          path="/create/videoGame/addNew"
          component={AddProductForm}
        />
        <Route exact path="/videoGame/edit/:id" component={EditGameForm} />
        {/* <Route path="/" render={() => <Navigate to="/home" />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
