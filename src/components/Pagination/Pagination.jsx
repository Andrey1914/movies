import React, { useState, useEffect } from "react";
import { PaginationContainer, PaginationButton } from "./PaginationStyled";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const [totalPagesToShow, setTotalPagesToShow] = useState(9); // 9 для десктопа по умолчанию

  useEffect(() => {
    const handleResize = () => {
      // Определяем количество видимых страниц на основе ширины окна
      if (window.innerWidth <= 767) {
        setTotalPagesToShow(3); // Для мобильных устройств показываем 3 страницы
      } else {
        setTotalPagesToShow(9); // Для десктопа показываем 9 страниц
      }
    };

    // Вызовем функцию один раз при загрузке компонента
    handleResize();

    // Добавляем прослушивание события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Убираем слушатель при размонтировании компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPageNumbers = () => {
    const pages = [];
    const half = Math.floor(totalPagesToShow / 2);

    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (end - start < totalPagesToShow - 1) {
      if (start === 1) {
        end = Math.min(totalPagesToShow, totalPages);
      } else if (end === totalPages) {
        start = Math.max(1, totalPages - totalPagesToShow + 1);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous Page
      </PaginationButton>

      {getPageNumbers().map((page) => (
        <PaginationButton
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </PaginationButton>
      ))}

      <PaginationButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next Page
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
