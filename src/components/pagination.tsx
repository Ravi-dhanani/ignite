"use client";
import React from "react";
type Prop = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: Prop) => {
  const handleClick = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          disabled={i === currentPage}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            cursor: i === currentPage ? "default" : "pointer",
            backgroundColor: i === currentPage ? "#007bff" : "#fff",
            color: i === currentPage ? "#fff" : "#007bff",
            border: "1px solid #007bff",
            borderRadius: "5px",
          }}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <>
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          margin: "0 5px",
          padding: "5px 10px",
          cursor: currentPage === 1 ? "default" : "pointer",
          backgroundColor: currentPage === 1 ? "#ccc" : "#007bff",
          color: "#fff",
          border: "1px solid #007bff",
          borderRadius: "5px",
        }}
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          margin: "0 5px",
          padding: "5px 10px",
          cursor: currentPage === totalPages ? "default" : "pointer",
          backgroundColor: currentPage === totalPages ? "#ccc" : "#007bff",
          color: "#fff",
          border: "1px solid #007bff",
          borderRadius: "5px",
        }}
      >
        Next
      </button>
    </>
  );
};

export default Pagination;
