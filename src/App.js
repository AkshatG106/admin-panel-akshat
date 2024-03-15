import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddUser from "./component/user/addUser";
import Login from "./component/login/Login";
import DisplayUser from "./component/user/DisplayUser";
import Dashboard from "./component/dashboard/Dashboard";
import AddCategory from "./component/category/addCategory";
import UpdateUser from "./component/user/UpdateUser";
import UpdateCategory from "./component/category/UpdateCategory";
import AddProduct from "./component/Product/addProduct";
import DisplayProducts from "./component/Product/DisplayProducts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route excat path="/" element={<Login />} />
          <Route excat path="/addUser" element={<AddUser />} />
          <Route path="/updateUser/:id" element={<UpdateUser/>} />
          <Route path="/displayUser" element={<DisplayUser/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/addCategory" element={<AddCategory/>} />
          <Route path="/updateCategory/:id" element={<UpdateCategory/>} />
          <Route path="/displayUser" element={<DisplayUser/>} />
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/displayproducts" element={<DisplayProducts/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
