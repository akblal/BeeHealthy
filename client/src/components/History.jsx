import React, { useState, useEffect } from 'react';
import Measurements from './Measurements.jsx';
import Pagination from './Pagination.jsx';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material';

import ReactPaginate from 'react-paginate';

import axios from 'axios';

function History ({ userDataReversed })  {

  const [allMeasurements, setAllMeasurements] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [openMore, setOpenMore] = useState(false);

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
    .slice(indexOfLastPost, indexOfLastPost + postsPerPage)
    .map((measurement, index) => {
      return (
        <div key = {index} className= 'history-measurement-card'>

          <div className= 'date-time-container'>
            <div className= 'date-container'>
              {new Date (measurement.created_at).toLocaleString().slice(0, new Date (measurement.created_at).toLocaleString().indexOf(','))}
            </div>
            <div className= 'time-container'>
              {new Date (measurement.created_at).toLocaleString().slice(new Date (measurement.created_at).toLocaleString().indexOf(',') + 2)}
            </div>

          </div>
          <div className= 'blood-pressure-container'>
            {measurement.systolic}/{measurement.diastolic}
          </div>
          {measurement.meds_taken.length === 1 || measurement.meds_taken.length === 2 ?
            <div className= 'medication-container'>
              {measurement.meds_taken.map((taken, index) =>{
                return (
                  <div style={{marginRight: 10}} key= {index}>{taken}</div>
                )
              })}
            </div> :
              measurement.meds_taken.length > 2 ?
              <div>
                <div>
                 {measurement.meds_taken[0]}
                </div>
                <div>
                  {measurement.meds_taken[1]}
                </div>
                <div className= 'more-medication'>
                  <div onClick= {() => {setOpenMore(true)}}>Click for More</div>
                </div>
                <div>
                  <Dialog open= {openMore} onClose= {()=> {setOpenMore(false)}} aria-labelledby= 'dialog-title' aria-describedby= 'dialog-description'>
                  <DialogTitle id= 'dialog-title' className= 'dialog'>
                    <div className= 'dialog-time'>
                      {new Date (measurement.created_at).toLocaleString().slice(0, new Date (measurement.created_at).toLocaleString().indexOf(','))}
                    </div>
                    <div className= 'dialog-time'>
                      {new Date (measurement.created_at).toLocaleString().slice(new Date (measurement.created_at).toLocaleString().indexOf(',') + 2)}
                    </div>
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id= 'dialog-description'>
                      <div className='dialog-bp'>
                        {measurement.systolic}/{measurement.diastolic}
                      </div>
                      <div className= 'dialog-medication-container'>
                        Full List of Medications:
                        {measurement.meds_taken.map((taken, index) =>{
                          return (
                            <div style={{marginRight: 10}} key= {index}>{taken}</div>
                          )
                        })}
                      </div>
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                      <Button autoFocus onClick= {()=>{setOpenMore(false)}}>OK</Button>
                  </DialogActions>
                </Dialog>
                </div>

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
    <div className= 'center-body-container'>
      <div className= 'body-container'>
        {allMeasurements.length > 0 ?
          <div className= 'history-container'>
            {currentPosts}
            <ReactPaginate
              previousLabel ='<'
              nextLabel= '>'
              pageCount= {pageCount}
              onPageChange= {changePage}
              breakLabel="..."
              containerClassName= {'paginationButtons'}
              nextLinkClassName= {'nextButton'}
              previousLinkClassName= {'previousButton'}
              disabledClassName= {'disablePaginated'}
              activeClassName= {'activePaginated'}
              renderOnZeroPageCount={null}
              breakClassName="page-item"
              breakLinkClassName="page-link"
            />
      </div>
      : <div> no data</div>}

      </div>
    </div>

  )
}

export default History
