import React, { useState } from 'react';

function Pagination ({ postsPerPage, totalPosts, paginate }) {

  const pageNumbers = [];
  const [selected, setSelected] = useState(1);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <div className= 'pagination'>
        {pageNumbers.map((number) => {
          return (
            <div key = {number} onClick= {() => {
              setSelected(number)
              paginate(number)

            }} className= {`${selected === number ? 'page-item selected-page' : 'page-item'}`}>
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