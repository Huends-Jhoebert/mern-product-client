import Table from "react-bootstrap/Table";
import SiteModal from "./SiteModal";
import EditModal from "./EditModal";
import DeleteBtn from "./DeleteBtn";

const SiteTable = (params) => {
  const products = params.products;

  return (
    <div>
      <SiteModal />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.description}</td>
              <td>
                <EditModal
                  name={data.name}
                  price={data.price}
                  description={data.description}
                  id={data._id}
                />{" "}
                <DeleteBtn id={data._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SiteTable;
