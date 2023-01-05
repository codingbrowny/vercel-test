import React from 'react'
import { DataTable, PageHeader, TableFilters } from '../../../@core/components'
import { TransactionsManagementData } from '../../../@core/utils/data'

const TransactionsManagement = () => {
  const {Columns, Data} = TransactionsManagementData
  return (
    <>
      <PageHeader title={"Transactions Management"} />
      <TableFilters />
    <DataTable data={Data} tableHeader={Columns}  />
    </>
  )
}

export default TransactionsManagement