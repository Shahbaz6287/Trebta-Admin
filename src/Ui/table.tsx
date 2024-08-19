import React, { useState } from "react";
import "./table.css";

// Define the types for the table props
interface Column {
  header: string;
  accessor: string; // Key to access data in each row
}

interface TableProps<T> {
  columns: Column[];
  data: T[];
  itemsPerPage: number; // Number of items to display per page
}

const Table = <T,>({
  columns,
  data,
  itemsPerPage,
}: TableProps<T>): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the data to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  // Change page handler
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };
  return (
    <>
      <div className="table-responsive no-wrap">
        <table className="table">
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{(row as any)[col.accessor]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Table;
