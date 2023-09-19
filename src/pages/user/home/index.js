import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Countdown, Footer, HeroSlider, MiddleBanner, ProductArea, ShopBlog, ShopHome, ShopServices, SmallSlider, TopBar, TopProducts, WithoutCategory } from "../../../components";
import { CategoryServices, ProductServices } from "../../../services";

function Home(props) {
  const [categories, setCategories] = useState([]);
  const [products,setProducts] = useState([]);
  const getAllProducts = async ()=>{
    try{
      const response = await ProductServices.getAllProducts();
      if(response?.success){
        setProducts(response?.data);
      }
    }catch(error){
      console.log(error);
    }
  }
  const getAllCategories = async ()=>{
    try{
      const response = await CategoryServices.getAllCategories();
      if(response?.success){
        setCategories(response?.data);
        console.log('products ',response?.data);
      }
    }catch(error){
      console.log(error);
    }
  }
  useEffect(async () => {
    getAllCategories();
    getAllProducts();
  }, [])
  return (
    <>
      <TopBar />
        <WithoutCategory
            categories={categories}
        />
        <HeroSlider />
        <SmallSlider />
        <TopProducts/>
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
