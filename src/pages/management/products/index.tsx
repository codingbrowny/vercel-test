import React from 'react'
import { DataTable, PageHeader, TableFilters } from '../../../core/components'
import { ProductsData } from '../../../core/utils/data';

const ProductManagement = () => {
    const { Columns, Data } = ProductsData;
  return (
    <>
      <PageHeader title={"Product Management"} />
      <TableFilters />
      <DataTable tableHeader={Columns} data={Data} hasReviewCount />
    </>
  );
}

export default ProductManagement