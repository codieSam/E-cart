import React, { Profiler, useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
// import ProductCard from "../components/ProductCart";
import ProductCart from "../components/ProductCart";

const AllProducts = () => {
  const { products, searchQuery } = useAppContext();
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      //   console.log("eh SAMMa thik cha");
    } else {
      setFilteredProducts(products);
      // console.log("yo block run vairaxa");
    }
  }, [products, searchQuery]); // whenever the products & searchQuery changes this function will be executed !
  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl uppercase font-light">All Products</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5  xl:grid-cols-5 mt-12 items-center">
        {filteredProducts
          .filter((product) => product.inStock)
          .map((product, index) => {
            return <ProductCart key={index} product={product} />;
            // console.log(product);
          })}
      </div>
    </div>
  );
};

export default AllProducts;
