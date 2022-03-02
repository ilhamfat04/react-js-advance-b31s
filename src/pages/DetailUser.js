import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

// import necessary hooks from react-router-dom 
import { useParams } from "react-router-dom";

const DetailUser = () => {
  const [data, setData] = useState(null);

  // call that hooks here and store to variable
  const params = useParams()

  console.log(params);

  // don't worry about this, we'll cover later
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      setData(null);
    };
  }, []);

  return (
    // code element inside Container
    // display information that stored in data 
    // console.log first to see what information that you get from fetching
    <Container className="text-center">
      <h1>Data User</h1>
      <br />
      <p>{data?.name}</p>
      <p>{data?.username}</p>
      <p>{data?.email}</p>
    </Container>
  );
};

export default DetailUser;
