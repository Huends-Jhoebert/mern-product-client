import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteBtn = (props) => {
  const id = props.id;
  const url = "https://mern-product-server.onrender.com/products/";

  const handleDelete = (id) => {
    axios
      .delete(`${url}${id}`)
      .then((res) => {
        console.log(res.data.message);
        Swal.fire({
          title: "Message",
          text: res.data.message,
          icon: "success",
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <Button variant="danger" onClick={() => handleDelete(id)} size="sm">
      <FaRegTrashAlt className="pb-1" />
      Delete
    </Button>
  );
};

export default DeleteBtn;
