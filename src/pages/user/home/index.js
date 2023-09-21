import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Countdown, Footer, HeroSlider, MiddleBanner, ProductArea, ShopBlog, ShopServices, SmallSlider, TopBar, TopProducts, WithoutCategory } from "../../../components";
import { CategoryServices, ProductServices } from "../../../services";

function Home(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');
  const [cartProduct, setCartProduct] = useState({});

  const tabData = [
    { name: 'nam' },
    { name: 'women' },
    { name: 'kids' },
    { name: 'accessories' },
    { name: 'essential' },
    { name: 'prices' }
  ]

  const getAllProducts = async () => {
    try {
      const response = await ProductServices.getAllProducts();
      if (response?.success) {
        setProducts(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const getAllCategories = async () => {
    try {
      const response = await CategoryServices.getAllCategories();
      if (response?.success) {
        setCategories(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, [])

  useEffect(() => {

  }, [filter])
  return (
    <>
      <ToastContainer className="toast-position"
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <TopBar />
      <WithoutCategory
        categories={categories}
      />
      <HeroSlider />
      <SmallSlider />
      <TopProducts
        products={products}
        filter={filter}
        setFilter={setFilter}
        setCartProduct={setCartProduct}
        tabData={tabData}
      />
      <MiddleBanner />
      <ProductArea />
      {/* <ShopHome /> */}
      <Countdown />
      <ShopBlog />
      <ShopServices />
      <Footer />
    </>
  );
}
export default Home;
