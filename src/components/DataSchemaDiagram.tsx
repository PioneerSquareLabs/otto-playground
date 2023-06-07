import React, { FC } from 'react';
import { ProjectDataSchema, ProjectDataColumn } from '~/types';

interface DataSchemaDiagramProps {
  dataSchemas: ProjectDataSchema[];
  dataColumns: ProjectDataColumn[];
}

const DataSchemaDiagram: FC<DataSchemaDiagramProps> = ({ dataSchemas, dataColumns }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {dataSchemas.map((schema) => {
        const columns = dataColumns.filter((column) => column.dataSchemaId === schema.id);

        return (
          <div key={schema.id} className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-bold mb-2">{schema.tableName}</h3>
            <ul>
              {columns.map((column) => (
                <li key={column.id} className="mb-1">
                  <span className="font-medium">{column.columnName}</span> ({column.columnType})
                  {column.columnDescription && (
                    <span className="text-gray-500 ml-2">{column.columnDescription}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default DataSchemaDiagram;