import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

interface Student {
  id: number;
  name: string;
  email: string;
  dob: string;
  age: number;
}

function ListGroup() {
  //const [selectedIndex, setSelectedIndex] = useState(-1);
  const mockStudents: Student[] = [
    {
      id: 1,
      name: "Ma",
      email: "ma.jamal@gmail.com",
      dob: "1983-01-05",
      age: 23,
    },
    {
      id: 2,
      name: "Al",
      email: "al@gmail.com",
      dob: "2000-01-05",
      age: 26,
    },
  ];
  const [data, setData] = useState<Student[]>(mockStudents);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/student")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Date of birth</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>{student.dob}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default ListGroup;
