import React, { useEffect, useState } from "react";
import Sidebar from "../dashboard/sidebar";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { deleteProduct } from "./productSlice";
import { TiDeleteOutline } from "react-icons/ti";


const DisplayProducts = () => {
  const [productData, setProductData] = useState([]);

  const dispatch = useDispatch();

  // console.log(productData);

  useEffect(() => {
    axios
      .get("https://65f2ca99105614e6549ed60b.mockapi.io/productdata")
      .then((res) => setProductData(res.data));
  }, []);

  return (
    <div className="flex bg-slate-300">
      <Sidebar />
      <div className="ml-[50px] w-full">
        <div>
          <h1 className="text-[50px]">Products</h1>
        </div>
        <hr className="" />
        <div className="w-full grid grid-rows-2 grid-flow-col">
          {productData.map((product, i) => {
            return (
              <div key={i} className="m-3">
                <div
                  className="flex items-center p-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    className="object-cover h-[170px] w-[150px] rounded-t-lg md:rounded-none md:rounded-s-lg"
                    src={product.image}
                    alt=""
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {product.title}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {product.description}
                    </p>
                    <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {product.points}
                    </h1>
                  </div>
                  <div className="relative">
                    <div className="bg-red-500 p-2 rounded-lg flex justify-center items-center absolute">
                      <button onClick={() => dispatch(deleteProduct(product.id))} ><TiDeleteOutline /></button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;
