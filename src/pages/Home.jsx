import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import Card from '../components/Card';

function Home() {
  const [page, setPage] = useState(1);
  const [pictures, setPictures] = useState([]);
  const limit = 20;
  useEffect(() => {
    const start = (page - 1) * limit;
    const end = start + limit;

    fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`)
      .then(res => res.json())
      .then((data) => {
        setPictures(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [page]);
  
  return (
    <div className='flex flex-col Roboto items-center my-10 w-full max-w-7xl mx-auto'>
      <h1 className='text-3xl'>Food Blog</h1>
      <p className='w-[593px] text-center text-xl mt-4 text-[#7D7878]'>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
      </p>
      <div className='flex flex-wrap gap-10 justify-center'>
        {pictures.length > 0 && pictures.map((picture, index) => (
          <Card img={picture} key={index} />
        ))}
      </div>
      <PaginationControl
        page={page}
        between={4}
        total={5000}
        limit={limit}
        changePage={(newPage) => setPage(newPage)}
        ellipsis={1}
      />
    </div>
  );
}

export default Home;
