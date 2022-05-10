import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  // const fetchProducts = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log(response.data);
  //   dispatch(setProducts(response.data));
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <Container>
        <ProductComponent />
      </Container>
    </div>
  );
};

export default ProductListing;
