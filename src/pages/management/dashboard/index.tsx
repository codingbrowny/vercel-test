import Link from "next/link";
import {Suspense, lazy} from "react"
import Grid from "@mui/material/Grid"
import { DataMap, DataTable, GridItem, PageHeader, Statistics, ItemProgress, Spinner } from "../../../core/components"
import { TopSellersData, BestSellingProducts, TopCustommers } from "../../../core/utils/data";
import GroupsIcon from '@mui/icons-material/Groups';
import CategoryIcon from '@mui/icons-material/Category';
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
// import 

const ManagementDashboard = () => {

    const Map = lazy(() => import("../../../core/components/map"))

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <>
            <PageHeader title={"Dashboard"} />
            <div className="my-5">
                <Grid container spacing={3}>
                    <GridItem xs={12} sm={6} md={3}>
                        <Statistics title={"Total Users"} value={"250K.00"} icon={<GroupsIcon />} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Statistics title={"New Accounts"} value={"250K.00"} icon={<PersonAddIcon />} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Statistics title={"Total Products"} value={"250K.00"} icon={<CategoryIcon />} />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={3}>
                        <Statistics title={"Total Visits"} value={"1000"} icon={<GroupsIcon />} />
                    </GridItem>
                </Grid>

                <div className="grid grid-col-1 md:grid-cols-2 gap-5 my-5">
                    <div className="">
                        <div className="flex flex-col md:flex-row items-center gap-5 mb-5">
                            <div className="border w-full p-3">
                                <Statistics title={"Total Sales"} value={"1000"} icon={<TrendingUpOutlinedIcon />} />
                            </div>
                            <div className="border w-full p-3">
                                <Statistics title={"Total Revenue"} value={"1000"} icon={<SignalCellularAltIcon />} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <p className="font-semibold">Top Sellers</p>
                            <Link href={"/management/users"} className="text-main-text">See All</Link>
                        </div>
                        <DataTable data={TopSellersData.Data} tableHeader={TopSellersData.Column} hasReviewCount pageSize={6} actionType={"view"} />
                    </div>

                    {/* Data Map */}
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Sales Per Location</span>
                            <div className="flex items-center gap-1">
                                <span className="text-gray-400 text-sm">Sort by:</span>
                                <select name="map" id="map" className="text-[15px] w-fit">
                                    <option value="world">World</option>
                                    <option value="ccountry">Country</option>
                                    <option value="city">City</option>
                                </select>
                            </div>
                            </div>
                        <div className="border">
                            <div className="map-container h-80 w-full overflow-y-scroll cursor-grab">
                                <Suspense fallback={<Spinner />}>
                                    <DataMap />
                                </Suspense>
                            </div>
                            <div className="px-10 mt-5">
                                <span className="font-semibold">Top Countries</span>
                                <ItemProgress item={"Ghana"} value={80} />
                                <ItemProgress item={"Serbia"} value={68} />
                                <ItemProgress item={"Nigeria"} value={55} />
                                <ItemProgress item={"Cameroon"} value={70} />
                            </div>
                        </div>
                    </div>
                    {/* Top Sellers */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <div className="flex items-center justify-between my-3">
                            <p className="font-semibold">Best Selling Product</p>
                            <Link href={""} className="text-main-text">See All</Link>
                        </div>
                    <DataTable data={BestSellingProducts.Data} tableHeader={BestSellingProducts.Column} hasReviewCount pageSize={5} actionType={"view"} />
                    </div>
                    <div>
                        <div className="flex items-center justify-between my-3">
                            <p className="font-semibold">Top Customers</p>
                            <Link href={"/management/users"} className="text-main-text">See All</Link>
                        </div>
                        <DataTable data={TopCustommers.Data} tableHeader={TopCustommers.Column} hasReviewCount pageSize={5} actionType={"view"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManagementDashboard