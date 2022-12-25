import React from 'react';

function Pagination ({ postsPerPage, totalPosts, paginate }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div className= 'pagination'>
        {pageNumbers.map((number) => {
          return (
            <div key = {number} onClick= {() => paginate(number)} className= 'page-item'>
              <div   className= 'page-link'>
                {number}
              </div>
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export default Pagination;