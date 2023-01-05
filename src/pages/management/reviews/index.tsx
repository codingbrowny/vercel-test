import React, { useState } from "react";
import { ManageReviewsData } from "../../../@core/utils/data";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import TurnLeftRoundedIcon from "@mui/icons-material/TurnLeftRounded";
import { DataTable, PageHeader, TableFilters } from "../../../@core/components";
import Image from "next/image";
import ProductImg from "../../../@core/utils/products/product4.jpg";
import StarIcon from "@mui/icons-material/Star";
import { Avatar, Rating, IconButton, Button, Dialog } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../@core/hooks/useRedux";
import { getReviewData } from "../../../redux/features/review/review-slice";

const ReviewManagement = () => {
  const { Column, Data } = ManageReviewsData;
  
  const dispatch = useAppDispatch()
  const reviewDetails = useAppSelector((state) => state.review);
  const { review, openModal } = reviewDetails;

  const handleClose = () => {
    dispatch(getReviewData({openModal:false, review}))
  }

  return (
    <>
      <Dialog open={openModal}>
        <div className="p-5 pt-2 overflow-hidden">
          <div className="flex justify-end gap-2 items-center mb-2">
            <IconButton
              aria-label="undo"
              size="small"
              onClick={handleClose}
            >
              <TurnLeftRoundedIcon className="font-extralight" />
            </IconButton>
            <IconButton
              aria-label="close"
              size="small"
              onClick={handleClose}
            >
              <CloseRoundedIcon className="font-extralight" />
            </IconButton>
          </div>
          <div className="h-[200px]">
            <Image
              src={review.product_and_seller.product}
              alt={"hu"}
              height={250}
              className="h-[inherit] w-full object-cover"
            />
          </div>
          <p className="name mt-2 w-full sm:w-[350px] overflow-hidden text-clip">
            {review.product_and_seller.productName}
          </p>
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center">
              <span className="text-sm">{ review.reviews.count }</span>
              <Rating
                value={review.reviews.count}
                readOnly
                size="small"
                precision={0.1}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />
                }
              />
            </div>
            <span className="text-sm">{reviewDetails.review.date}</span>
          </div>
          <span className="text-sm">
            Seller: {reviewDetails.review.product_and_seller.seller}
          </span>
          <div className="comment my-5 text-sm w-full sm:w-[350px]">
            {review.reviews.review}
          </div>
          <div className="reviewer flex items-center gap-3">
            <Avatar
              src="https://randomuser.me/api/portraits/men/69.jpg"
              alt="Emerald"
              className="h-7 w-7"
            />{" "}
            <span className="text-gray-600 text-sm">{ review.reviewer.name }</span>
          </div>
          <div className="my-5 flex items-center justify-end gap-3">
            <Button
              variant="outlined"
              className="text-sm rounded-none capitalize border-gray-400 hover:text-main-text text-gray-500"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className="bg-primary-bg text-white text-sm px-3 hover:bg-primary-bg hover:bg-primary-bg/90 rounded-none capitalize"
              onClick={() => {}}
            >
              Approve
            </Button>
          </div>
        </div>
      </Dialog>

      <PageHeader title={"Manage Reviews"} />
      <TableFilters />
      <DataTable
        data={Data}
        tableHeader={Column}
        hasReviewMessage
        hasReviewCount
      />
    </>
  );
};

export default ReviewManagement;
