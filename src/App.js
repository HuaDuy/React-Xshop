import Routers from "./Routers/Router";
import ProductApi from './api/ProductApi';
import React, { useState, useEffect } from 'react';
import CategoryApi from './api/CategoryApi';


function App() {

  const [userName, setUserName] = useState('');
  useEffect(() => {
    const infoUser = localStorage.getItem('user') || false;
    setUserName(infoUser);
  }, [userName]);
  
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const listProduct = async () => {
      try {
        const { data: { data: products } } = await ProductApi.getAll();
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }
    listProduct();
  }, []);

  const [categories, setCategory] = useState([]);
  useEffect(() => {
    const listCategories = async () => {
      try {
        const { data: { data: categories } } = await CategoryApi.getAll();
        setCategory(categories);
      } catch (error) {
        console.log(error);
      }
    }
    listCategories();
  }, []);



  const onHandleRemoveProduct = async (id) => {
    try {
      await ProductApi.remove(id)
      const newProducts = products.filter(item => item._id !== id);
      setProducts(newProducts)
    } catch (error) {
      console.log(error)
    }
  }
  
  const onHandleRemoveCate = async (id) => {
    try {
      await CategoryApi.remove(id)
      const newCategory = categories.filter(item => item._id !== id);
      setCategory(newCategory)
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleAddProduct = async (product) => {
    try {
      await ProductApi.add(product)
      const { data: { data: products } } = await ProductApi.getAll();
      setProducts(products);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleAddCate = async (cate) => {
    try {
      await CategoryApi.add(cate)
      const { data: { data: categories } } = await CategoryApi.getAll();
      setCategory(categories);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleEditProduct = async (id, product) => {
    try {
      await ProductApi.update(id, product)
      const { data: { data: products } } = await ProductApi.getAll();
      setProducts(products);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleEditCate = async (id, cate) => {
    try {
      await CategoryApi.update(id, cate)
      const { data: { data: categories } } = await CategoryApi.getAll();
      setCategory(categories);
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Routers
      userName={userName}
      products={products}
      categories={categories}
      onUpdateProduct={onHandleEditProduct}
      onAddProduct={onHandleAddProduct}
      onRemove={onHandleRemoveProduct}
      onAddCate={onHandleAddCate}
      onUpdateCate={onHandleEditCate}
      onRemoveCate={onHandleRemoveCate}
    ></Routers>
  );
}

export default App;
