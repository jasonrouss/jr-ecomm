import React, { useState } from "react";
import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const products = useSelector((state) => state.product.filteredProducts);

  const productsPerPage = 8;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Filter the products based on the search term
  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  console.log(filteredProducts);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="" >
      {currentProducts.length > 0 ? (
        <>
          <div className="flex justify-center md:h-[1180px] xl:h-[840px] bg-indigo-50  rounded-xl  ">
            <div className="product-list grid  grid-cols-2 md:grid-cols-3 xl:grid-cols-4   mb-6 mx-4 lg:mx-10">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
          <div className="text-xl ml-28 font-bold text-gray-600 h-screen  ">
            No products available
          </div>
      )}
    </div>
  );
};

export default Product;
