import React, { useState, useEffect } from 'react';
import Measurements from './Measurements.jsx';
import Pagination from './Pagination.jsx';

import ReactPaginate from 'react-paginate';

import axios from 'axios';

function History ({ userDataReversed })  {

  const [allMeasurements, setAllMeasurements] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    axios.get('/getAllMeasurementsReversed')
      .then((results) => {
        setAllMeasurements(results.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const indexOfLastPost = pageNumber * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = allMeasurements
    .slice(indexOfLastPost, indexOfLastPost + 10)
    .map((measurement, index) => {
      return (
        <div key = {index} className= 'history-measurement-card'>

          <div className= 'date-time-container'>
            {new Date (measurement.created_at).toLocaleString()}
          </div>
          <div className= 'blood-pressure-container'>
            {measurement.systolic}/{measurement.diastolic}
          </div>
          {measurement.meds_taken.length ?
            <div className= 'medication-container'>
              {measurement.meds_taken.map((taken, index) =>{
                return (
                  <div style={{marginRight: 10}} key= {index}>{taken}</div>
                )
              })}
            </div> :
            <div className= 'medication-container'>
              No Medications Taken
            </div>
          }
        </div>
      )
    })

  const pageCount = Math.ceil(allMeasurements.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }
  return (
    <div>

      {allMeasurements.length > 0 ?
        <div className= 'history-container'>
          {currentPosts}
          <ReactPaginate
            previousLabel ='<'
            nextLabel= '>'
            pageCount= {pageCount}
            onPageChange= {changePage}
            containerClassName= {'paginationButtons'}
            nextLinkClassName= {'nextButton'}
            previousLinkClassName= {'previousButton'}
            disabledClassName= {'disablePaginated'}
            activeClassName= {'activePaginated'}
          />
        </div>
        : <div> no data</div>}

    </div>

  )
}

export default History
