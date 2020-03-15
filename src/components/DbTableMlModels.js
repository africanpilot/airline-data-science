import React, { forwardRef } from 'react';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export default function DbTableMlModels() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Model Name', field: 'modelName',},
      { title: 'Use Case', field: 'useCase' },
      { title: 'Category', field: 'category'},
      { title: 'Subcategory', field: 'subcategory'},
      { title: 'Process Name', field: 'processName'},
      { title: 'Target', field: 'target'},
    ],
    data: [
        { modelName: 'ML Model 1', useCase: 'Use Case 1', category: 'Supervised Learning'
        , subcategory: 'Classification', processName: 'Processing 1', target: 'Column 1',},
        { modelName: 'ML Model 2', useCase: 'Use Case 2', category: 'Supervised Learning'
        , subcategory: 'Classification', processName: 'Processing 2', target: 'Column 2',},
        { modelName: 'ML Model 3', useCase: 'Use Case 3', category: 'Supervised Learning'
        , subcategory: 'Classification', processName: 'Processing 3', target: 'Column 3',},
        { modelName: 'ML Model 4', useCase: 'Use Case 4', category: 'Supervised Learning'
        , subcategory: 'Classification', processName: 'Processing 4', target: 'Column 4',},
        { modelName: 'ML Model 5', useCase: 'Use Case 5', category: 'Supervised Learning'
        , subcategory: 'Classification', processName: 'Processing 5', target: 'Column 5',},
        { modelName: 'ML Model 6', useCase: 'Use Case 6', category: 'Supervised Learning'
        , subcategory: 'Classification', processName: 'Processing 6', target: 'Column 6',},
    ],
  });

  return (
    <MaterialTable
      title="ML Models"
      icons={tableIcons}
      columns={state.columns}
      data={state.data}
      options={{
                    fixedColumns: {
                      left: 0,
                      right: 0
                    },
                    tableLayout: 'fixed',
                    pageSize: 1,
                    pageSizeOptions:[1,5,10,20],
                    selection: true,
                    rowStyle: rowData => ({ backgroundColor: rowData.tableData.checked ? '#37b15933' : '' })
                  }}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
