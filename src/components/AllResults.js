import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import Pagination from "./Pagination";

const AllResults = ({ books, expandBook }) => {
  const [bookData, setData] = useState([])
  const [pageIndex, setIndex] = useState(1)
  useEffect(() => {
    setData(books.slice(0, 4))
  }, [books]);
  return (
    <div className="row">
      {bookData.map(book => (
        <SearchResult bookData={book} key={book.id} expandBook={expandBook} />
      ))}
      {(books || []).length ? <Pagination pageIndex={pageIndex} totalRecords={books} callBackAction={(d, index) => {
        setData(d);
        setIndex(index)
      }} /> : null}
    </div>
  );
};

export default AllResults;
