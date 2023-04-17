import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id: any, date: any, name: any, start: any) {
  return { id, date, name, start };
}

const rows = [
  createData(0, "산타기", "Amir Shaikh", "완료버튼"),
  createData(1, "다이어트", "Akshay Prabhu", "완료버튼"),
  createData(2, "ㅎㅎ", "Chinmay Tiwari", "완료버튼"),
  createData(3, "333333333333333333333", "Diploma Holder", "시작버튼"),
  createData(4, "555555", "xyz", "시작버튼"),
];

function preventDefault(event: any) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    JunginTop: theme.spacing(3),
  },
}));
const Lists = () => {
  return (
    <React.Fragment>
      <Title>내 버킷리스트</Title>
      <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>버킷리스트</TableCell>
            <TableCell>그룹</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.start}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};

export default Lists;
