import React from "react";
import Link from "next/link";
import { DataTable, DoughnutChart, ItemProgress, StatisticsBar } from "../core/components";
import { RecentOrders } from "../core/utils/data";

interface StatHeaderInterface {
  title: string;
  href?: string;
}
// Table Title bar
const StatHeader = ({ title, href }: StatHeaderInterface) => {
  return (
    <div className="mb-3 flex justify-between items-center">
      <span>{title}</span>
      {href && (
        <div className="text-main-text text-sm">
          <Link href={`${href}`}>See All</Link>
        </div>
      )}
    </div>
  );
};

const Index = () => {
  const { Data, Colums } = RecentOrders;

  return (
    <>
      <h2 className="page-name mt-5 font-bold text-lg text-primary-black">
        Dashboard
      </h2>
      {/* Sales Analysis */}
      <div className="mt-8">
        <StatisticsBar />
      </div>

      {/* Recent Orders && Delivery Progress */}

      <div className="my-8 flex flex-col lg:flex-row gap-5">
        {/* ORDERS Data Table Component */}
        <div className="bg-none md:basis-3/4">
          <StatHeader title="Recent Orders" href="/orders" />
          <DataTable tableHeader={Colums} data={Data} />
        </div>
        {/* Grid Item For rendering Order Stats */}
        <div className="md:basis-1/4 flex flex-col sm:flex-row md:flex-col gap-3">
          <div className="sm:basis-1/2">
            <StatHeader title="Sales Categories"/>
            <div className="relative border p-3 md:px-5 min-h-[280px]">
              <DoughnutChart />
            </div>
          </div>
          <div className="sm:basis-1/2">
            <StatHeader title="Delivery Progress" href="/orders" />
            <div className="border border-1 px-3 md:px-5">
              <ItemProgress item={"Macbook"} value={80} />
              <ItemProgress item={"Shirt"} value={40} />
              <ItemProgress item={"Shoes"} value={63} />
              <ItemProgress item={"Dell Optiplex"} value={37} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
