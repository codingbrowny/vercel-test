import React from 'react'
import { DataTable, PageHeader, TableFilters } from '../../../core/components'
import { PaymemtManagementData } from "../../../core/utils/data";

const PaymentManagement = () => {
    const { Columns, Data } = PaymemtManagementData;
  return (
      <>
          <PageHeader title={"Payment Management"} />
          <TableFilters />
          <DataTable data={Data} tableHeader={Columns} />
      </>
  )
}

export default PaymentManagement