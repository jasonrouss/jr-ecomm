import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-4  ">
      <nav>
        <ul className="pagination flex justify-between gap-6 sm:gap-12 mb-8 ">
          <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={handlePrevClick}>
              Previous
            </button>
          </li>

          {pages.map((page) => (
            <li
              key={page}
              className={page === currentPage ? "page-item active" : "page-item"}
            >
              <button className="page-link transition ease-in-out duration-200 transform hover:-translate-y-1 hover:scale-110" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}

          <li className={currentPage === totalPages ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={handleNextClick}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
