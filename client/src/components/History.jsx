import React, { useState, useEffect } from 'react';
import Measurements from './Measurements.jsx';
import Pagination from './Pagination.jsx';

import axios from 'axios';


function History  ()  {

  const [allMeasurements, setAllMeasurements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);

  useEffect(() => {
    setLoading(true);
    axios.get('/getAllMeasurements')
      .then((results) => {
        setAllMeasurements((results.data));
      })
      .catch((err) => {
        console.log(err);
      })
    setLoading(false);
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allMeasurements.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (number) => setCurrentPage(number);


  return (
    <div>
      <Measurements currentPosts= {currentPosts} loading= {loading}/>
      <Pagination postsPerPage= {postsPerPage} totalPosts= {allMeasurements.length} paginate= {paginate}/>
    </div>

  )
}

export default History