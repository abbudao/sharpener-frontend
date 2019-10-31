import React, { forwardRef } from 'react';
import MaterialTable from "material-table";
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
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
  Add: forwardRef((props, ref) => <AddCircleOutline {...props} ref={ref} />),
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

const ClassesTable = ({classesData}) => {
  console.log(classesData);
  return(
    <MaterialTable
      localization={{
        header: {
          actions: '',
        }}
      }
        options={{
          toolbar:false,
          actionsColumnIndex: -1,
          rowStyle: {
            align: 'left',
          }
        }}
          icons={tableIcons}
          columns={[
            { title: "Nome da turma", field: "name" },
            {
              title: "Data de criação", 
              field: "created_at", 
              type:"date",
              render: rowData => new Date(rowData.created_at).toLocaleDateString()
            },
            { title: "Qtde. Matriculados", field: "members", type: "numeric" },
            {
              title: "Qtde. Tracks Ativas",
              field: "tracks",
              type: "numeric" 
            }
          ]}
            actions={[
              {
                icon: AddCircleOutline,
                tooltip: 'Mais detalhes',
                onClick: (event, rowData) => alert("Mais detalhes da turma " + rowData.name)
              }
            ]}
              data={classesData}
              editable={{
                onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.data;
                      data.push(newData);
                      this.setState({ data }, () => resolve());
                    }
                    resolve()
                  }, 1000)
                }),
              }}
            />
  )
}

export default ClassesTable;
