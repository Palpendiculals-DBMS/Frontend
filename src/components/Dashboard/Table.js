import React from "react";
import PropTypes from "prop-types";
import { useTable, useSortBy } from "react-table";
import { BsCaretDownFill } from "react-icons/bs";
/**
 *
 * @param {*} param0
 * @return {JSX.Element}
 */
export default function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20);

  return (
    <>
      <div className="flex px-24 py-4 font-body text-sm">
        <table {...getTableProps()} className=" flex-grow cursor-pointer">
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={i}
                className="rounded-md"
              >
                {headerGroup.headers.map((column, _) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={_}
                    className="p-3 text-left font-normal bg-red-400 text-white
                        shadow-lg
                        shadow-red-500/20
                        "
                    style={{
                      width: column.width,
                    }}
                  >
                    <div className="flex">
                      {column.render("Header")}
                      {/* Add a sort direction indicator */}
                      <BsCaretDownFill
                        className={`self-center mx-2
                        ${
                          column.isSorted
                            ? column.isSortedDesc
                              ? ""
                              : "rotate-180"
                            : ""
                        }

                        ${
                          column.isSorted
                            ? "opacity-100"
                            : "opacity-0 -translate-x-6"
                        }
                        transition-all duration-300
                      `}
                      />
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  key={i}
                  className="cursor-pointer
                                hover:bg-gray-100
                      transition-all"
                >
                  {row.cells.map((cell, index) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="p-2 py-3 opacity-75 transition-all duration-400"
                        key={index}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};
