
import './App.css';
import { useGetAllPostQuery, useGetPostByIdQuery } from './services/post'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
// import { useEffect } from 'react';


function App() {
  const responseInfo = useGetPostByIdQuery(5);
  console.log(responseInfo)
  console.log(responseInfo.data)
  console.log(responseInfo.isSuccess)
  // const responseInfo = useGetAllPostQuery();
  // console.log(responseInfo.data);
  // console.log(responseInfo.isSuccess);

  //   if (responseInfo.isLoading) return <Stack sx={{ color: 'grey.500' }}

  //     spacing={2} direction="row">
  //     <CircularProgress color="success" />
  //   </Stack>
  //   if (responseInfo.isError) return <h1>Error Sorry Bro...</h1>


  return (
    <div className="App">
      {/* <h1>Redux Toolkit</h1>
    {
      responseInfo.data.map((post) => (
        <div key={post.id}>
          <h2>Title: {post.title}</h2>
          <h4>Body: {post.body}</h4>
          <hr /> */}

      <h1>{responseInfo.data} {responseInfo.data.title} </h1>
      <h6>{responseInfo.body}</h6>



    </div>
  );
}

export default App;
