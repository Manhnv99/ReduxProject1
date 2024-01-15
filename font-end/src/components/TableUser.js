import { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUser } from "../action/actions";

const TableUser = (props) => {
  const dispatch = useDispatch();

  const listUser = useSelector((state) => state.listUser.listUser);

  const isLoading = useSelector((state) => state.listUser.isLoading);

  const isError = useSelector((state) => state.listUser.isError);



  //gọi dispatch để thực hiện call API từ file action khi component được mount
  useEffect(() => {
    dispatch(getAllUser());
  }, []);


  const handleDeleteUser=(id)=>{
    dispatch(deleteUser(id))
  }

  return (
    <>
      {isError ? (
        <Container>Something wrongs,please try again...</Container>
      ) : isLoading === true ? (
        <Container>Loading ...</Container>
      ) : (
        <Container>
          <Table responsive="sm">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>STT</th>
                <th style={{ width: "35%" }}>Email</th>
                <th style={{ width: "30%" }}>Username</th>
                <th style={{ width: "25%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listUser.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.email}</td>
                    <td>{item.userName}</td>
                    <td>
                      <Button className="btn btn-warning mx-2">Update</Button>
                      <Button onClick={()=>{handleDeleteUser(item.id)}} className="btn btn-danger">Delete</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};

export default TableUser;
