import styled from "styled-components";

const TableWrapper = styled.div`
  margin: 20px;
  overflow-x: auto;

  @media screen and (max-width: 768px) {
    overflow: auto;
    overflow-x: scroll;
  }
`;

const TableHeaderRow = styled.tr`
  background-color: #f7f7f7;
  color: #333;
  font-size: 16px;
  font-weight: bold;

  border: 1px solid #ddd;
`;

const TableTitle = styled.th`
  cursor: pointer;
  padding: 10px;
  position: relative;
  text-align: left;
  width: 100px;

  &:hover {
    background-color: #e2e2e2;
  }

  svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const TableRow = styled.tr`
  color: #333;
  font-size: 14px;
  height: 35px;
  border: 1px solid #ddd;

  &:nth-child(even) {
    background-color: #f7f7f7;
  }

  td {
    padding: 10px;
    text-align: left;
  }
`;

const ResponsiveTable = styled.table`
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #ddd;
  font-size: 14px;
  min-width: 1090px;

  border: 1px solid #ddd;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Styled = {
  TableWrapper,
  TableHeaderRow,
  TableTitle,
  TableRow,
  ResponsiveTable,
};
