import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../pages/product';
import ProductDetails from '../pages/product/Details';
import Home from '../pages/Dashboard';
import Brand from '../pages/brand';
import BrandDetails from '../pages/brand/Details';
import Category from '../pages/category';
import CategoryDetails from '../pages/category/Details';
import Group from '../pages/group';
import GroupDetails from '../pages/group/Details';
import Subcategory from '../pages/subcategory';
import SubcategoryDetails from '../pages/subcategory/Details';
import Customer from '../pages/customers';
import User from '../pages/user';
import UserDetails from '../pages/user/Details';
import Order from '../pages/order';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<Home />}/>
            <Route path="products" element={<Product />}/>
            <Route path="products/:id" element={<ProductDetails />}/>
            <Route path="brands" element={<Brand />}/>
            <Route path="brands/:id" element={<BrandDetails />}/>
            <Route path="categories" element={<Category />}/>
            <Route path="categories/:id" element={<CategoryDetails />}/>
            <Route path="groups" element={<Group />}/>
            <Route path="groups/:id" element={<GroupDetails />}/>
            <Route path="subcategories" element={<Subcategory />}/>
            <Route path="subcategories/:id" element={<SubcategoryDetails />}/>
            <Route path="customers" element={<Customer />}/>
            <Route path="users" element={<User />}/>
            <Route path="users/:id" element={<UserDetails />}/>
            <Route path="orders" element={<Order />}/>
        </Routes>
    );
};

export default AppRoutes;