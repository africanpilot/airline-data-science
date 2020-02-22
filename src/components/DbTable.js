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

export default function DbTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name', fixed: true },
      { title: 'Department', field: 'department' },
      { title: 'Data Load', field: 'dataLoad'},
      { title: 'QC Rules', field: 'qcRules'},
      { title: 'QC Format', field: 'qcFormat'},
      { title: 'Data Analysis', field: 'dataAnalysis'},
      { title: 'ML Model', field: 'mlModel'},
      { title: 'Process ML Model', field: 'processMlModel'},
      { title: 'DL Model', field: 'dlModel'},
      { title: 'Process DL Model', field: 'processDlModel'},
      { title: 'Evaluate Models', field: 'evaluateModels'},
      { title: 'Evaluate Case', field: 'evaluateCase'},
      { title: 'Presentation', field: 'presentation'},
    ],
    data: [
      { name: 'Use Case1', department: 'Safety', dataLoad: 'web Api',
        qcRules: 'rules1', qcFormat: 'format1', dataAnalysis: 'analysis1',
        mlModel: 'model1', processMlModel:'process1', dlModel: 'model1',
        processDlModel: 'process1', evaluateModels: 'evaluate1',
        evaluateCase: 'evaluate1', presentation: 'presentation1'
      },
      { name: 'Use Case2', department: 'Safety', dataLoad: 'web Api',
        qcRules: 'rules1', qcFormat: 'format1', dataAnalysis: 'analysis1',
        mlModel: 'model1', processMlModel:'process1', dlModel: 'model1',
        processDlModel: 'process1', evaluateModels: 'evaluate1',
        evaluateCase: 'evaluate1', presentation: 'presentation1'
      },
      { name: 'Use Case3', department: 'Safety', dataLoad: 'web Api',
        qcRules: 'rules1', qcFormat: 'format1', dataAnalysis: 'analysis1',
        mlModel: 'model1', processMlModel:'process1', dlModel: 'model1',
        processDlModel: 'process1', evaluateModels: 'evaluate1',
        evaluateCase: 'evaluate1', presentation: 'presentation1'
      },
      { name: 'Use Case4', department: 'Safety', dataLoad: 'web Api',
        qcRules: 'rules1', qcFormat: 'format1', dataAnalysis: 'analysis1',
        mlModel: 'model1', processMlModel:'process1', dlModel: 'model1',
        processDlModel: 'process1', evaluateModels: 'evaluate1',
        evaluateCase: 'evaluate1', presentation: 'presentation1'
      },
      { name: 'Use Case5', department: 'Safety', dataLoad: 'web Api',
        qcRules: 'rules1', qcFormat: 'format1', dataAnalysis: 'analysis1',
        mlModel: 'model1', processMlModel:'process1', dlModel: 'model1',
        processDlModel: 'process1', evaluateModels: 'evaluate1',
        evaluateCase: 'evaluate1', presentation: 'presentation1'
      },
      { name: 'Use Case6', department: 'Safety', dataLoad: 'web Api',
        qcRules: 'rules1', qcFormat: 'format1', dataAnalysis: 'analysis1',
        mlModel: 'model1', processMlModel:'process1', dlModel: 'model1',
        processDlModel: 'process1', evaluateModels: 'evaluate1',
        evaluateCase: 'evaluate1', presentation: 'presentation1'
      },
    ],
  });

  return (
    <MaterialTable
      title="Use Cases"
      icons={tableIcons}
      columns={state.columns}
      data={state.data}
      options={{
                    fixedColumns: {
                      left: 2,
                      right: 0
                    },
                    tableLayout: 'fixed'
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
