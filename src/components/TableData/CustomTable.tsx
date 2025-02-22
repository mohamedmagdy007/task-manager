import React, { memo, ReactNode } from "react";

interface CustomTableProps {
  headers: string[];
  renderRows: () => ReactNode;
}

const NoDataFoundRow = ({ cols, msg }: { cols: number; msg?: string }) => {
  const message = msg ? msg : "no data found";
  return (
    <tr>
      <td colSpan={cols} className="!text-center text-danger">
        {message}{" "}
      </td>
    </tr>
  );
};

export function renderItemRows<T>(
  data: T[],
  renderRowItem: (row: T) => React.JSX.Element,
  col: number
) {
  let rows;
  if (data?.length > 0) {
    rows = data?.map(renderRowItem);
  } else {
    rows = <NoDataFoundRow cols={col} />;
  }
  return rows;
}

const CustomTable = memo(({ headers, renderRows }: CustomTableProps) => {
  return (
    <div className="table-responsive">
      <table className="custom-table">
        <thead className="text-sm font-semibold">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="p-4 text-left">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
});

export default CustomTable;
