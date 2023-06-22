import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import { userActions } from "_store";

export { Audit };

function Audit() {
  const dispatch = useDispatch();

  function dateConvert(cell, row) {
    const date = new Date(cell);
    const localDate = date.toLocaleString(); // Convert to local date and time string
    return <span>{cell? localDate : null}</span>;
  }

  const columns = [
    {
      dataField: "index",
      text: "ID",
      formatter: (cell, row, rowIndex) => {
        return rowIndex + 1; // Add 1 to start the index from 1
      },
    },
    { dataField: "firstName", text: "First Name" },
    { dataField: "lastName", text: "Last Name" },
    { dataField: "username", text: "User Name" },
    { dataField: "role", text: "Role" },
    { dataField: "lastLoginTime", text: "Last Login", formatter: dateConvert },
    { dataField: "lastClientIP", text: "Last Client IP" },
    {
      dataField: "lastLogoutTime",
      text: "Last Logout",
      formatter: dateConvert,
    },
  ];

  const users = useSelector((x) => x.users.list);

  useEffect(() => {
    dispatch(userActions.getAll());
  }, []);

  return (
    <div>
      <h1>Auditor Page</h1>

      <BootstrapTable
        striped
        hover
        condensed
        keyField="id"
        data={users && users.value ? users.value : []}
        columns={columns}
        pagination={paginationFactory()}
      />
    </div>
  );
}
