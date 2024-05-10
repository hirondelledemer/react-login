import { useState } from 'react';

const usePagination = <T>(items: T[], pageLimit: number) => {
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = Math.ceil(items.length / pageLimit);

  const changePage = (pn: number) => {
    setPageNumber(pn);
  };

  const getPageData = () => {
    const s = pageNumber * pageLimit;
    const e = s + pageLimit;
    return items.slice(s, e);
  };

  const goToNextPage = () => {
    setPageNumber(Math.min(pageNumber + 1, pageCount - 1));
  };

  const gotToPreviousPage = () => {
    setPageNumber(Math.max(pageNumber - 1, 0));
  };

  return {
    pageNumber,
    pageCount,
    changePage,
    getPageData,
    goToNextPage,
    gotToPreviousPage,
  };
};

export default usePagination;
