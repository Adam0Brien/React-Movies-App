import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import { MoviesContext } from "../../../contexts/moviesContext";
import { useContext } from 'react';
import { Typography } from '@mui/material';

export default function PaginationOutlined() {
  const navigate = useNavigate();
  const {pageNumber,type} = useContext(MoviesContext)

  const [page, setPage] = React.useState(1);

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
        color: "white",
        fontSize: 10,
      };


      const handleChange = (event, value) => {
        setPageNumber(value)
        setPage(value)
      };


      const setPageNumber = (pageNo) =>{
        var newNum = parseInt(pageNo)
        var address = '';
        switch(type){
          case 'discover':
            address = '/page='
            break;
          case 'top':
            address = '/movies/top/page='
            break;
          case 'upcomming':
            address = '/movies/upcomming/page='
            break;
          case 'now':
            address = '/movies/now-playing/page='
            break;
          case 'shows':
            address = '/shows/page='
            break;
          default:
            address = '/page='
            break;
        }
        console.log(address + newNum)
        navigate(`${address}${newNum}`, { replace: true });
      }


  return (
    <div style={styles}>
    <Stack spacing={2}>
      {/* <Typography>Page: {page}</Typography> */}
      <Pagination count={50} page={page} variant="text" shape="rounded" color="primary" size="large" onChange={handleChange}/>
    </Stack>
    </div>
  );
}