import React from 'react';
import _ from 'lodash';
import Proptypes from 'prop-types';

const Pagination = (props) => {

    const { itemsCount, pageSize, onPagechange, currentPage} = props;
    console.log(currentPage);  
    const pagesCount = Math.ceil(itemsCount / pageSize);
    // console.log(pagesCount);
    if(pagesCount === 1 ) return null;
    const pages = _.range(1, pagesCount + 1);
// console.log(pages);
return (<nav>
        <ul className="pagination">
            {
               pages.map(page => (
                   <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
                       <a className="page-link" onClick={()=>onPagechange(page)}>
                           {page}
                       </a>
                   </li>
               ))
            }
           
        </ul>
        </nav>
        );
};
 Pagination.propTypes = {
    itemsCount: Proptypes.number.isRequired,
     pageSize: Proptypes.number.isRequired,
      onPagechange:Proptypes.func.isRequired, 
      currentPage: Proptypes.number.isRequired
 }
export default Pagination;