import DataTableModule, { type TableProps } from 'react-data-table-component';
import styled from 'styled-components';
const DataTable = (DataTableModule as any).default || DataTableModule;

const TableWrapper = styled.div`
  width: 0;
  min-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;

  .rdt_Table {
    background-color: transparent;
    min-width: 1000px;
  }
  .rdt_TableHeadRow {
    background-color: #F8F9FC;
    border-bottom: 1px solid #EDEDF2;
    min-height: 52px;
  }
  .rdt_TableHeadColumn {
    font-weight: 600;
    font-size: 13px;
    color: #464651;
    text-transform: capitalize;
    letter-spacing: 0.02em;
  }
  .rdt_TableRow {
    min-height: 64px;
    border-bottom: 1px solid #EDEDF2;
    background-color: #FFFFFF;
    &:hover {
      background-color: #F8F9FC;
    }
  }
  .rdt_TableCell {
    font-size: 14px;
    color: #1B1B20;
    padding: 12px 16px;
  }
  .rdt_TableHeadColumn:first-child, .rdt_TableCell:first-child {
    padding-left: 24px;
  }
  .rdt_TableHeadColumn:last-child, .rdt_TableCell:last-child {
    padding-right: 24px;
  }
  
  /* Checkbox styling */
  input[type='checkbox'] {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: 1.5px solid #C7C5D3;
    cursor: pointer;
    accent-color: var(--color-primary);
  }
`;

interface CustomDataTableProps<T> extends TableProps<T> {
  // for any extra props
}

const CustomDataTable = <T,>(props: CustomDataTableProps<T>) => {
  const customStyles = {
    header: {
      style: {
        display: 'none',
      },
    },
    headRow: {
      style: {
        borderTopStyle: 'none' as const,
        borderTopWidth: '0',
      },
    },
    cells: {
      style: {
        '&:not(:last-of-type)': {
          borderRightStyle: 'none' as const,
        },
      },
    },
  };

  return (
    <TableWrapper>
      <DataTable
        selectableRows
        selectableRowsHighlight
        pointerOnHover
        highlightOnHover
        responsive
        noHeader
        {...props}
        customStyles={customStyles}
      />
    </TableWrapper>
  );
};

export default CustomDataTable;
