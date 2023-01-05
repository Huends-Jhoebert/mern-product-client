import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import SiteTable from "./SiteTable";
import axios from "axios";

const Opening = () => {
  const url = "https://mern-product-server.onrender.com/products/";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Container>
        <SiteTable products={products} />
      </Container>
    </div>
  );
};

export default Opening;
