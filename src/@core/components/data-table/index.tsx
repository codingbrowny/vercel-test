import React from "react";
import {
  DataGrid,
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import { Pagination } from "@mui/material";
import RenderDataCells from "../../utils/data-grid/data-table-fns";
import EmptyBox from "../../utils/images/empty-box.png"
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Image from "next/image"
import { useAppDispatch } from "../../hooks/useRedux";
import { getReviewData } from "../../../redux/features/review/review-slice";

interface DataGridInterface {
  /** The data to show on the table */
  data: Object[];
  /** The table header */
  tableHeader: GridColDef[];
  /** 
   * If specified, the reviews section of the table is rendered with the review number.
   * 
   * **ONLY** use for table with reviews section.
   * */
  hasReviewCount?: boolean
  /**
   * Determins the number of data to show per table page
   * 
   * default **10**
   */
  pageSize?: number;
  /**
   * Indicates whether review message is shown or not.
   * 
   * **ONLY** use for table with reviews section.
   */
  hasReviewMessage?: boolean;
  props?: any

  /**
   * specifies how the action column is rendered.
   * 
   * __value__: *menu* or *view*
   * 
   * @default- menu
   */
  actionType?: "menu" | "view"
}

const DataTable = ({ tableHeader, data, hasReviewMessage, hasReviewCount = false, pageSize = 10, actionType="menu" }: DataGridInterface) => {
  
  const dispatch = useAppDispatch()
  const getReviewDetails = (review) => {
    dispatch(getReviewData(review))
  }

  // Setting the Table Header
  const renderTableHead = () => {
    let tableHead: GridColDef[] = [];
    for (let item of tableHeader) {
      // Setting the renderCell on the product field
      const data = RenderDataCells({ item, actionType, reviewCount:hasReviewCount, review:hasReviewMessage, reviewDetails:getReviewDetails});

      tableHead.push({ ...data, flex: 1, headerClassName: "bg-sidebar-bg" });
    }
    return tableHead;
  };

  // Custom Pagination Component
  const CustomPagination = () => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
        siblingCount={1}
        size="small"
        shape="rounded"
      />
    );
  };

  const EmptyDataOverlay = () => (
    <div className="flex flex-col justify-center items-center h-full">
      <Image src={EmptyBox} width={70} height={70} alt="no data" />
      <span>No Data</span>
    </div>
  );

  return (
    <div className="relative min-w-full h-fit max-h-full">
      <DataGrid
        sx={{ width: "100%", backgroundColor: "white", maxHeight: "100%" }}
        columns={renderTableHead()}
        rows={data}
        editMode={"cell"}
        autoHeight={true}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Pagination: CustomPagination,
          NoRowsOverlay: EmptyDataOverlay,
          ColumnSortedAscendingIcon(props) {
              return <ExpandMoreOutlinedIcon />
          },
          ColumnSortedDescendingIcon(props) {
              return <ExpandLessOutlinedIcon />
          },
        }}
        pageSize={pageSize}
      />
    </div>
  );
};

export default DataTable;
