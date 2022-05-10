import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  console.log(product);

  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    console.log(response.data);
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    fetchProductDetail();
  }, []);
  return (
    <div>
      {product.title}
      <h2>{product.price}</h2>
    </div>
  );
};

export default ProductDetail;
