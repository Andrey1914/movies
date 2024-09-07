import styled from "styled-components";

export const PaginationContainer = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 15px;
  }
`;

export const PaginationButton = styled.button`
  padding: 5px;
  font-size: 12px;
  background-color: var(--bg);
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    font-weight: bold;
    background-color: #262637;
    color: #ff4f00;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    padding: 5px 12px;
    font-size: 14px;
  }
`;
