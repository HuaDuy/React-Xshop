import Routers from "./Routers/Router";
import ProductApi from './api/ProductApi';
import CategoryApi from './api/CategoryApi';
import React, { useState, useEffect } from 'react'

function App() {

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
        const newProducts = products.filter(item => item._id != id);
        setProducts(newProducts)
      } catch (error) {
        console.log(error)
      }
    }

    const onHandleAddProduct = async (product) => {
      // var object = {};
      // product.forEach(function (value, key) {
      //   object[key] = value;
      // });
      // products.push(object)
      try {
        await ProductApi.add(product)
      } catch (error) {
        console.log(error)
      }
    }

    const onHandleAddCate = async (cate) => {
      // var object = {};
      // product.forEach(function (value, key) {
      //   object[key] = value;
      // });
      // products.push(object)
      try {
        await CategoryApi.add(cate)
      } catch (error) {
        console.log(error)
      }
    }

    const onHandleEditProduct = async ( id, product) => {
      // var object = {};
      // product.forEach(function (value, key) {
      //   object[key] = value;
      // });
      // products.push(object)
      try {
        await ProductApi.update(id, product)
      } catch (error) {
        console.log(error)
      }
    }

    const onHandleEditCate = async ( id, cate) => {
      // var object = {};
      // product.forEach(function (value, key) {
      //   object[key] = value;
      // });
      // products.push(object)
      try {
        await CategoryApi.update(id, cate)
      } catch (error) {
        console.log(error)
      }
    }


  return (
    <Routers 
          products={products} 
          categories={categories} 
          onUpdateProduct={onHandleEditProduct} 
          onAddProduct={onHandleAddProduct} 
          onRemove={onHandleRemoveProduct}
          onAddCate={onHandleAddCate}
          onUpdateCate={onHandleEditCate}
    ></Routers>
  );
}

export default App;
