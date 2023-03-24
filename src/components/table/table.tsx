import { useState } from "react";
import tableHeaderRowsValues from "../../constants/table-values";
import { Styled } from "./table.styles";
import { TbCaretDown, TbCaretUp } from "react-icons/tb";

type SortDirection = "asc" | "desc";
type SortColumn = keyof typeof tableHeaderRowsValues[0];

function Table() {
  const [sortColumn, setSortColumn] = useState<SortColumn>("name");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (column: SortColumn) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedRows = [...tableHeaderRowsValues].sort((a, b) => {
    if (sortColumn === "name" || sortColumn === "type") {
      const compareResult = a[sortColumn].localeCompare(b[sortColumn]);
      return sortDirection === "asc" ? compareResult : -compareResult;
    } else {
      const compareResult = a[sortColumn] - b[sortColumn];
      return sortDirection === "asc" ? compareResult : -compareResult;
    }
  });

  return (
    <Styled.TableWrapper>
      <Styled.ResponsiveTable>
        <thead>
          <Styled.TableHeaderRow>
            <Styled.TableTitle onClick={() => handleSort("name")}>
              Name
              {sortColumn === "name" && sortDirection === "asc" ? (
                <TbCaretUp />
              ) : (
                <TbCaretDown />
              )}
            </Styled.TableTitle>
            <Styled.TableTitle onClick={() => handleSort("type")}>
              Type
              {sortColumn === "type" && sortDirection === "asc" ? (
                <TbCaretUp />
              ) : (
                <TbCaretDown />
              )}
            </Styled.TableTitle>
            <Styled.TableTitle onClick={() => handleSort("hp")}>
              HP
              {sortColumn === "hp" && sortDirection === "asc" ? (
                <TbCaretUp />
              ) : (
                <TbCaretDown />
              )}
            </Styled.TableTitle>
            <Styled.TableTitle onClick={() => handleSort("attack")}>
              Attack
              {sortColumn === "attack" && sortDirection === "asc" ? (
                <TbCaretUp />
              ) : (
                <TbCaretDown />
              )}
            </Styled.TableTitle>
            <Styled.TableTitle onClick={() => handleSort("defense")}>
              Defense
              {sortColumn === "defense" && sortDirection === "asc" ? (
                <TbCaretUp />
              ) : (
                <TbCaretDown />
              )}
            </Styled.TableTitle>
            <Styled.TableTitle onClick={() => handleSort("spAttack")}>
              Sp. Attack
              {sortColumn === "spAttack" && sortDirection === "asc" ? (
                <TbCaretUp />
              ) : (
                <TbCaretDown />
              )}
            </Styled.TableTitle>
            <Styled.TableTitle onClick={() => handleSort("spDefense")}>
              Sp. Defense
              {sortColumn === "spDefense" && sortDirection === "asc" ? (
                <TbCaretUp />
              ) : (
                <TbCaretDown />
              )}
            </Styled.TableTitle>
            <Styled.TableTitle onClick={() => handleSort("speed")}>
              Speed
              {sortColumn === "speed" && sortDirection === "asc" ? (
                <TbCaretUp />
              ) : (
                <TbCaretDown />
              )}
            </Styled.TableTitle>
            <Styled.TableTitle onClick={() => handleSort("total")}>
              Total
              {sortColumn === "total" && sortDirection === "asc" ? (
                <TbCaretUp />
              ) : (
                <TbCaretDown />
              )}
            </Styled.TableTitle>
          </Styled.TableHeaderRow>
        </thead>
        <tbody>
          {sortedRows.map((item, index) => (
            <Styled.TableRow key={index}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.hp}</td>
              <td>{item.attack}</td>
              <td>{item.defense}</td>
              <td>{item.spAttack}</td>
              <td>{item.spDefense}</td>
              <td>{item.speed}</td>
              <td>{item.total}</td>
            </Styled.TableRow>
          ))}
        </tbody>
      </Styled.ResponsiveTable>
    </Styled.TableWrapper>
  );
}

export default Table;
