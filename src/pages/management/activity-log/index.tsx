import React from "react";
import { DataTable, PageHeader, TableFilters } from "../../../core/components";
import { ActivityLogData } from "../../../core/utils/data";

const ActivityLogs = () => {
  const { Column, Data } = ActivityLogData;
  return (
    <>
      <PageHeader title={"Activity Logs"} />
      <TableFilters />
      <DataTable data={Data} tableHeader={Column} />
    </>
  );
};

export default ActivityLogs;
