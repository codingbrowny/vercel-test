import { Avatar, Rating } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";
import StarIcon from "@mui/icons-material/Star";
import { ProductActionMenu, RenderStatus } from "../../components";
import Image from "next/image";

/**Functon: Renders the status of an order respectively */
const renderDataCell = (params: GridRenderCellParams) => {
  const status = params.value.toLowerCase();
  switch (params.value.toLowerCase()) {
    case "pending":
      return RenderStatus("bg-pending", params.value);
    case "inactive":
      return RenderStatus("bg-[#8D8D8D]", params.value);
    case "upcoming":
      return RenderStatus("bg-[#3B99FF]", params.value);
    case "processing":
      return RenderStatus("bg-processing", params.value);
    case "refund":
      return RenderStatus("bg-refund", params.value);
    default:
      return RenderStatus("bg-approved", params.value);
  }
};

/** Function: Render product with image if available */
const orderProduct = (name: string, productImage?: any) => {
  if (productImage) {
    return (
      <div className="flex gap-x-3 items-center w-full text-ellipsis">
        <Image
          src={productImage}
          alt={name}
          height={30}
          width={30}
          className="h-auto w-auto"
        />
        <span className="overflow-hidden text-ellipsis">{name}</span>
      </div>
    );
  }
  return <span className="overflow-hidden text-ellipsis">{name}</span>;
};

/** A function that handles how each cell in the data table is rendered.
 * It returns a modified copy of the actual data from the server
 */
export default function RenderDataCells({
  item,
  reviewCount,
  review,
  reviewDetails,
  actionType
}) {
  if (item.field === "product") {
    item = {
      ...item,
      renderCell(params) {
        if (!params.row.url) {
          return orderProduct(params.value);
        }
        return orderProduct(params.value, params.row.url.src);
      },
    };
  }

  // Status handler
  if (item.field === "status") {
    item = {
      ...item,
      renderCell(params: GridRenderCellParams) {
        return renderDataCell(params);
      },
    };
  }

  // Product Reviews handler
  if (item.field === "reviews") {
    item = {
      ...item,
      renderCell(params: GridRenderCellParams) {
        return (
          <div className="flex items-center gap-1 overflow-hidden">
            {reviewCount && <span>{params.row.reviews.count}</span>}
            <Rating
              name="review"
              value={params.row.reviews.count}
              readOnly
              size="small"
              precision={0.1}
              emptyIcon={
                <StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />
              }
            />
            {review && (
              <span className="overflow-hidden text-ellipsis">
                {params.row.reviews.review}
              </span>
            )}
          </div>
        );
      },
    };
  }

  if (item.field === "action") {
    item = {
      ...item,
      maxWidth: 100,
      renderCell(params: GridRenderCellParams) {
        if (actionType === "view") {
          return (
            <button className="text-blue-500 underline underline-offset-2">
              view
            </button>
          );
        }
        return (
          <ProductActionMenu
            onView={() => { }}
            onDelete={() => { }}
            onEdit={() => { }}
          />
        );
      },
    };
  }
  // Rendering Cell for thumbnails
  if (item.field === "thumbnail") {
    item = {
      ...item,
      renderCell(params: GridRenderCellParams) {
        return (
          <Image
            src={params.row.thumbnail.src}
            alt={params.row.name}
            width={50}
            height={50}
          />
        );
      },
    };
  }
  // Rendering cell for product and seller
  if (item.field === "product_and_seller") {
    item = {
      ...item,
      maxWidth: 320,
      renderCell(params: GridRenderCellParams) {
        return (
          <div className="flex items-center gap-2">
            <Image
              src={params.row.product_and_seller.product.src}
              alt={params.row.product_and_seller.productName}
              width={40}
              height={50}
            />
            <div className="leading">
              <p className="text-sm">
                {params.row.product_and_seller.productName}
              </p>
              <span className="text-xs text-gray-400">
                {params.row.product_and_seller.seller}
              </span>
            </div>
          </div>
        );
      },
    };
  }
  // Rendering cell for review details column
  if (item.field === "details") {
    item = {
      ...item,
      maxWidth: 150,
      renderCell(params: GridRenderCellParams) {
        return (
          <button
            className="text-blue-500 underline underline-offset-2"
            onClick={() =>
              reviewDetails({ openModal: true, review: params.row })
            }
          >
            view details
          </button>
        );
      },
    };
  }
  // Reviewer Cell Render
  if (item.field === "reviewer") {
    item = {
      ...item,
      maxWidth: 200,
      renderCell(params: GridRenderCellParams) {
        return (
          <div className="flex items-center gap-2">
            <Avatar
              alt={params.row.reviewer.name}
              src={params.row.reviewer.image}
              className="h-6 w-6"
            />
            <span>{params.row.reviewer.name}</span>
          </div>
        );
      },
    };
  }

  if (item.field === "username") {
    item = {
      ...item,
      renderCell(params: GridRenderCellParams) {
        return (
          <div className="flex items-center gap-2">
            <Avatar src={params.row.userImage} alt={params.row.username} className="h-7 w-7" />
            <span>{ params.row.username }</span>
          </div>
        )
      }
    }
  }

  return item;
}
