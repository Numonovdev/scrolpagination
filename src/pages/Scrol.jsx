import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card';

function Scrol() {
  const [page, setPage] = useState(1); 
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const limit = 20;

  const fetchPictures = (page) => {
    setLoading(true);
    const start = (page - 1) * limit;

    fetch(`https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=${limit}`)
      .then(res => res.json())
      .then((data) => {
        setPictures(prevPictures => [...prevPictures, ...data]);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight && 
          !loading) {
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  useEffect(() => {
    fetchPictures(page);
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
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default Scrol;
