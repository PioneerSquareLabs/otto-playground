import React, { useMemo } from "react";
import { DataTable, DataColumn } from "~/types";

interface Props {
  tables: DataTable[];
  columns: DataColumn[];
}

const DataSchemaDiagram: React.FC<Props> = ({ tables, columns }) => {
  const columnsByTableId = useMemo(() => {
    const groupedColumns: Record<number, DataColumn[]> = {};
    columns.forEach((column) => {
      if (!groupedColumns[column.table_id]) {
        groupedColumns[column.table_id] = [];
      } else {
        groupedColumns[column.table_id]?.push(column);
      }
    });
    return groupedColumns;
  }, [columns]);

  return (
    <div className="data-schema-diagram">
      {tables.map((table) => (
        <div key={table.id} className="table">
          <h3 className="table-name">{table.name}</h3>
          <ul className="columns">
            {columnsByTableId[table.id]?.map((column) => (
              <li key={column.id} className="column">
                <span className="column-name">{column.name}</span>
                <span className="column-data-type">{column.data_type}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DataSchemaDiagram;
