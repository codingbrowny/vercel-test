import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import productImg from "../utils/products/product4.jpg";
import Banner from "../utils/images/campaign.png";
import UserImage from "../utils/images/user.png"

export const SidebarLinks = {
  mainLinks: [
    {
      path: "/",
      linkName: "Dashboard",
      icon: GridViewOutlinedIcon,
      disabled: false
    },
    {
      path: "/orders",
      linkName: "Orders",
      icon: LocalMallOutlinedIcon,
      disabled: false
    },
    {
      path: "/products",
      linkName: "Products",
      icon: GridViewOutlinedIcon,
      disabled: false
    },
    {
      path: "/reports",
      linkName: "Reports",
      icon: TrendingUpOutlinedIcon,
      disabled: false
    },
    {
      path: "/messages",
      linkName: "Messages",
      icon: MailOutlineRoundedIcon,
      disabled: true
    },
    {
      path: "/customers",
      linkName: "Customers",
      icon: GroupOutlinedIcon,
      disabled: false
    },
  ],
  managementLinks: [
    {
      path: "/management/dashboard",
      linkName: "Dashboard",
      disabled: false
    },
    {
      path: "/management/products",
      linkName: "Product Management",
      disabled: false
    },
    {
      path: "/management/orders",
      linkName: "Order Management",
      disabled: false
    },
    {
      path: "/management/users",
      linkName: "User Management",
      disabled: false
    },
    {
      path: "/management/campaign",
      linkName: "Campaign",
      disabled: false
    },
    {
      path: "/management/message",
      linkName: "Message",
      disabled: true
    },
    {
      path: "/management/activity-log",
      linkName: "Activity Log",
      disabled: false
    },
    {
      path: "/management/reports",
      linkName: "Reports",
      disabled: true
    },
    {
      path: "/management/system-settings",
      linkName: "System Settings",
      disabled: false
    },
    {
      path: "/management/reviews",
      linkName: "Manage Reviews",
      disabled: false
    },
    {
      path: "/management/transactions",
      linkName: "Transactions",
      disabled: false
    },
    {
      path: "/management/payments",
      linkName: "Payments",
      disabled: false
    },
  ],
};

export const MonthsFilter = ["This Month", "3 Months", "6 Months", "This Year"];

// Recent Orders Table Data
export const RecentOrders = {
  // THE TABLE HEADER
  Colums: [
    {
      field: "product",
      headerName: "Product",
    },
    {
      field: "orderId",
      headerName: "Order ID",
    },
    {
      field: "purchaseDate",
      headerName: "Purchase On",
    },
    {
      field: "amount",
      headerName: "Amount",
    },
    {
      field: "tracking",
      headerName: "Tracking #",
    },
    {
      field: "payment",
      headerName: "Payment Method",
    },
    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "action",
      headerName: "Action",
    },
  ],
  // THE TABLE DATA
  Data: [
    {
      id: 1,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Pending",
    },
    {
      id: 2,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Pending",
    },
    {
      id: 3,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Refund",
    },
    {
      id: 4,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Pending",
    },
    {
      id: 5,
      product: "Nike Jogger",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Pending",
    },
  ],
};

export const OrdersData = {
  // THE TABLE HEADER
  Columns: [
    {
      field: "product",
      headerName: "Product",
    },
    {
      field: "orderId",
      headerName: "Order ID",
    },
    {
      field: "purchaseDate",
      headerName: "Purchase On",
    },
    {
      field: "billTo",
      headerName: "Bill to Name",
    },
    {
      field: "shipTo",
      headerName: "Ship to Name",
    },
    {
      field: "amount",
      headerName: "Amount",
    },
    {
      field: "tracking",
      headerName: "Tracking #",
    },
    {
      field: "payment",
      headerName: "Payment Method",
    },
    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "action",
      headerName: "Action",
    },
  ],
  // THE TABLE DATA
  Data: [
    {
      id: 1,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Processing",
      url: productImg,
    },
    {
      id: 2,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Pending",
      url: productImg,
    },
    {
      id: 3,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Refund",
      url: productImg,
    },
    {
      id: 4,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Delivered",
      url: productImg,
    },
    {
      id: 5,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Pending",
      url: productImg,
    },
    {
      id: 6,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Refund",
      url: productImg,
    },
    {
      id: 7,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Processing",
      url: productImg,
    },
    {
      id: 8,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Pending",
      url: productImg,
    },
    {
      id: 9,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Delivered",
      url: productImg,
    },
    {
      id: 10,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Processing",
      url: productImg,
    },
  ],
};

export const ProductsData = {
  // THE TABLE HEADER
  Columns: [
    {
      field: "product",
      headerName: "Product",
    },
    {
      field: "squ",
      headerName: "SQU",
    },
    {
      field: "price",
      headerName: "Price",
    },
    {
      field: "categories",
      headerName: "Categories",
    },
    {
      field: "stocks",
      headerName: "Stocks",
    },
    {
      field: "instock",
      headerName: "Instocks",
    },

    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "reviews",
      headerName: "Reviews",
    },
    {
      field: "action",
      headerName: "Action",
    },
  ],
  // THE TABLE DATA
  Data: [
    {
      id: 1,
      product: "Nike Airforce",
      squ: "12wert",
      price: "GHC 100",
      categories: "Shoe",
      stocks: 35,
      instock: 35,
      status: "Processing",
      reviews: {
        count: 4,
      },
      url: productImg,
    },
    {
      id: 2,
      product: "Nike Airforce",
      squ: "12wert",
      price: "GHC 100",
      categories: "Shoe",
      stocks: 35,
      instock: 35,
      status: "Processing",
      reviews: {
        count: 3,
      },
      url: productImg,
    },
    {
      id: 3,
      product: "Nike Airforce",
      squ: "12wert",
      price: "GHC 100",
      categories: "Shoe",
      stocks: 35,
      instock: 35,
      status: "Processing",
      reviews: {
        count: 3,
      },
      url: productImg,
    },
    {
      id: 4,
      product: "Nike Airforce",
      squ: "12wert",
      price: "GHC 100",
      categories: "Shoe",
      stocks: 35,
      instock: 35,
      status: "Processing",
      reviews: {
        count: 5,
      },
      url: productImg,
    },
    {
      id: 5,
      product: "Nike Airforce",
      squ: "12wert",
      price: "GHC 100",
      categories: "Shoe",
      stocks: 35,
      instock: 35,
      status: "Processing",
      reviews: {
        count: 3,
      },
      url: productImg,
    },
    {
      id: 6,
      product: "Nike Airforce",
      squ: "12wert",
      price: "GHC 100",
      categories: "Shoe",
      stocks: 35,
      instock: 35,
      status: "Approved",
      reviews: {
        count: 5,
      },
      url: productImg,
    },
  ],
};

/**Chart Labels (Months) */
export const ChartLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const TransactionsManagementData = {
  // THE TABLE HEADER
  Columns: [
    {
      field: "product",
      headerName: "Product",
    },
    {
      field: "orderId",
      headerName: "Order ID",
    },
    {
      field: "purchaseDate",
      headerName: "Purchase On",
    },
    {
      field: "billTo",
      headerName: "Bill to Name",
    },
    {
      field: "shipTo",
      headerName: "Ship to Name",
    },
    {
      field: "seller",
      headerName: "Seller",
    },
    {
      field: "amount",
      headerName: "Amount",
    },
    {
      field: "tracking",
      headerName: "Tracking #",
    },
    {
      field: "payment",
      headerName: "Payment Method",
    },
    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "action",
      headerName: "Action",
    },
  ],
  // THE TABLE DATA
  Data: [
    {
      id: 1,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      seller: "Emerald",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Processing",
      url: productImg,
    },
    {
      id: 2,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      seller: "Emerald",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Delivered",
      url: productImg,
    },
    {
      id: 3,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      seller: "Emerald",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Processing",
      url: productImg,
    },
    {
      id: 4,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      seller: "Emerald",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Delivered",
      url: productImg,
    },
    {
      id: 5,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      seller: "Emerald",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Processing",
      url: productImg,
    },
    {
      id: 6,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      seller: "Emerald",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Delivered",
      url: productImg,
    },
    {
      id: 7,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      seller: "Emerald",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Processing",
      url: productImg,
    },
    {
      id: 8,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      seller: "Emerald",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Delivered",
      url: productImg,
    },
    {
      id: 9,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      seller: "Emerald",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Processing",
      url: productImg,
    },
    {
      id: 10,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      billTo: "Browny O'brien",
      shipTo: "Browny O'brien",
      amount: "Ghc 40",
      seller: "Emerald",
      tracking: "4RDT32",
      payment: "Mobile Wallet",
      status: "Delivered",
      url: productImg,
    },
  ],
};
export const PaymemtManagementData = {
  // THE TABLE HEADER
  Columns: [
    {
      field: "product",
      headerName: "Product",
    },
    {
      field: "orderId",
      headerName: "Order ID",
    },
    {
      field: "purchaseDate",
      headerName: "Purchase On",
    },
    {
      field: "customer",
      headerName: "Customer",
    },
    {
      field: "seller",
      headerName: "Seller",
    },
    {
      field: "amount",
      headerName: "Amount",
    },
    {
      field: "payment",
      headerName: "Payment Method",
    },
    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "action",
      headerName: "Action",
    },
  ],
  // THE TABLE DATA
  Data: [
    {
      id: 1,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      customer: "Browny O'brien",
      seller: "Emerald",
      amount: "Ghc 40",
      payment: "Mobile Wallet",
      status: "Successful",
      url: productImg,
    },
    {
      id: 2,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      customer: "Browny O'brien",
      seller: "Emerald",
      amount: "Ghc 40",
      payment: "Mobile Wallet",
      status: "Successful",
      url: productImg,
    },
    {
      id: 3,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      customer: "Browny O'brien",
      seller: "Emerald",
      amount: "Ghc 40",
      payment: "Mobile Wallet",
      status: "Successful",
      url: productImg,
    },
    {
      id: 4,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      customer: "Browny O'brien",
      seller: "Emerald",
      amount: "Ghc 40",
      payment: "Mobile Wallet",
      status: "Successful",
      url: productImg,
    },
    {
      id: 5,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      customer: "Browny O'brien",
      seller: "Emerald",
      amount: "Ghc 40",
      payment: "Mobile Wallet",
      status: "Successful",
      url: productImg,
    },
    {
      id: 6,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      customer: "Browny O'brien",
      seller: "Emerald",
      amount: "Ghc 40",
      payment: "Mobile Wallet",
      status: "Successful",
      url: productImg,
    },
    {
      id: 7,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      customer: "Browny O'brien",
      seller: "Emerald",
      amount: "Ghc 40",
      payment: "Mobile Wallet",
      status: "Successful",
      url: productImg,
    },
    {
      id: 8,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      customer: "Browny O'brien",
      seller: "Emerald",
      amount: "Ghc 40",
      payment: "Mobile Wallet",
      status: "Successful",
      url: productImg,
    },
    {
      id: 9,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      customer: "Browny O'brien",
      seller: "Emerald",
      amount: "Ghc 40",
      payment: "Mobile Wallet",
      status: "Successful",
      url: productImg,
    },
    {
      id: 10,
      product: "Nike Airforce",
      orderId: "12wert",
      purchaseDate: "July 17,2022",
      customer: "Browny O'brien",
      seller: "Emerald",
      amount: "Ghc 40",
      payment: "Mobile Wallet",
      status: "Successful",
      url: productImg,
    },
  ],
};

export const ActivityLogData = {
  Column: [
    {
      field: "activityName",
      headerName: "Activity Name",
    },
    {
      field: "activityStatus",
      headerName: "Activity Status",
    },
    {
      field: "user",
      headerName: "User",
    },
    {
      field: "time",
      headerName: "Time",
    },
    {
      field: "activityInfo",
      headerName: "Activity Information",
    },
    {
      field: "host",
      headerName: "Host",
    },
    {
      field: "priority",
      headerName: "Priority",
    },
  ],
  Data: [
    {
      id: 1,
      activityName: "User Login",
      activityStatus: "Successful",
      user: "Emerald",
      time: "12:45PM 19/11/2022",
      activityInfo: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      host: "233.24.87.21",
      priority: "High",
    },
    {
      id: 2,
      activityName: "User Login",
      activityStatus: "Successful",
      user: "Emerald",
      time: "12:45PM 19/11/2022",
      activityInfo: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      host: "233.24.87.21",
      priority: "High",
    },
    {
      id: 3,
      activityName: "User Login",
      activityStatus: "Successful",
      user: "Emerald",
      time: "12:45PM 19/11/2022",
      activityInfo: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      host: "233.24.87.21",
      priority: "High",
    },
    {
      id: 4,
      activityName: "User Login",
      activityStatus: "Successful",
      user: "Emerald",
      time: "12:45PM 19/11/2022",
      activityInfo: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      host: "233.24.87.21",
      priority: "High",
    },
    {
      id: 5,
      activityName: "User Login",
      activityStatus: "Successful",
      user: "Emerald",
      time: "12:45PM 19/11/2022",
      activityInfo: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      host: "233.24.87.21",
      priority: "High",
    },
    {
      id: 6,
      activityName: "User Login",
      activityStatus: "Successful",
      user: "Emerald",
      time: "12:45PM 19/11/2022",
      activityInfo: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      host: "233.24.87.21",
      priority: "High",
    },
    {
      id: 7,
      activityName: "User Login",
      activityStatus: "Successful",
      user: "Emerald",
      time: "12:45PM 19/11/2022",
      activityInfo: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      host: "233.24.87.21",
      priority: "High",
    },
    {
      id: 8,
      activityName: "User Login",
      activityStatus: "Successful",
      user: "Emerald",
      time: "12:45PM 19/11/2022",
      activityInfo: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      host: "233.24.87.21",
      priority: "High",
    },
    {
      id: 9,
      activityName: "User Login",
      activityStatus: "Successful",
      user: "Emerald",
      time: "12:45PM 19/11/2022",
      activityInfo: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      host: "233.24.87.21",
      priority: "High",
    },
    {
      id: 10,
      activityName: "User Login",
      activityStatus: "Successful",
      user: "Emerald",
      time: "12:45PM 19/11/2022",
      activityInfo: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
      host: "233.24.87.21",
      priority: "High",
    },
  ],
};

export const CustomerManagementData = {
  Column: [
    {
      field: "username",
      headerName: "Customer Username",
    },
    {
      field: "userId",
      headerName: "ID#",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "phone",
      headerName: "Phone",
    },
    {
      field: "location",
      headerName: "Location",
    },
    {
      field: "orders",
      headerName: "Orders",
    },
    {
      field: "amount",
      headerName: "Amount",
    },
    {
      field: "lastOrder",
      headerName: "Last Ordered",
    },
    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "action",
      headerName: "Action",
    },
  ],
  Data: [
    {
      id: 1,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
    {
      id: 2,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
    {
      id: 3,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
    {
      id: 4,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
    {
      id: 5,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
    {
      id: 6,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
    {
      id: 7,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
    {
      id: 8,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
    {
      id: 9,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
    {
      id: 10,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
    {
      id: 11,
      username: "Emerald123",
      userId: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      orders: "36",
      amount: "GHC 345",
      lastOrder: "12/11/2022",
      status: "Active",
      userImage: UserImage
    },
  ],
};

export const SellerManagementData = {
  Column: [
    {
      field: "sellerName",
      headerName: "Seller Username",
    },
    {
      field: "customerID",
      headerName: "ID#",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "phone",
      headerName: "Phone",
    },
    {
      field: "location",
      headerName: "Location",
    },
    {
      field: "reviews",
      headerName: "Reviews",
    },
    {
      field: "stock",
      headerName: "Stock",
    },
    {
      field: "sales",
      headerName: "Sales",
    },
    {
      field: "lastSold",
      headerName: "Last Sold",
    },
    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "action",
      headerName: "Action",
    },
  ],
  Data: [
    {
      id: 1,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:4.3
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
    {
      id: 2,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:4.2
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
    {
      id: 3,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:4.5
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
    {
      id: 4,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:4.5
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
    {
      id: 5,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:3.5
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
    {
      id: 6,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:2.5
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
    {
      id: 7,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:4.6
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
    {
      id: 8,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:3.5
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
    {
      id: 9,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:4.5
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
    {
      id: 10,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:4.5
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
    {
      id: 11,
      sellerName: "Emerald123",
      customerID: "FE3626G",
      email: "example@me.com",
      phone: "+233556087757",
      location: "Accra, Ghana",
      reviews: {
        count:3.5
      },
      stock: 245,
      sales: "GHC 1,234",
      lastSold: "12/11/2022",
      status: "Active",
    },
  ],
};

export const CampaignData = {
  Column: [
    {
      field: "thumbnail",
      headerName: "Thumbnail",
    },
    {
      field: "name",
      headerName: "Campaign Name",
    },
    {
      field: "startDate",
      headerName: "Start Date",
    },
    {
      field: "endDate",
      headerName: "End Date",
    },
    {
      field: "status",
      headerName: "Status",
    },
    {
      field: "action",
      headerName: "Action",
    },
  ],
  Data: [
    {
      id: 1,
      thumbnail: Banner,
      name: "Just For You",
      startDate: "12/11/2022",
      endDate: "12/11/2022",
      status: "Upcoming",
    },
    {
      id: 2,
      thumbnail: Banner,
      name: "Just For You",
      startDate: "12/11/2022",
      endDate: "12/11/2022",
      status: "Active",
    },
    {
      id: 3,
      thumbnail: Banner,
      name: "Just For You",
      startDate: "12/11/2022",
      endDate: "12/11/2022",
      status: "Inactive",
    },
    {
      id: 4,
      thumbnail: Banner,
      name: "Just For You",
      startDate: "12/11/2022",
      endDate: "12/11/2022",
      status: "Active",
    },
    {
      id: 5,
      thumbnail: Banner,
      name: "Just For You",
      startDate: "12/11/2022",
      endDate: "12/11/2022",
      status: "Active",
    },
    {
      id: 6,
      thumbnail: Banner,
      name: "Just For You",
      startDate: "12/11/2022",
      endDate: "12/11/2022",
      status: "Active",
    },
    {
      id: 7,
      thumbnail: Banner,
      name: "Just For You",
      startDate: "12/11/2022",
      endDate: "12/11/2022",
      status: "Active",
    },
    {
      id: 8,
      thumbnail: Banner,
      name: "Just For You",
      startDate: "12/11/2022",
      endDate: "12/11/2022",
      status: "Active",
    },
    {
      id: 9,
      thumbnail: Banner,
      name: "Just For You",
      startDate: "12/11/2022",
      endDate: "12/11/2022",
      status: "Active",
    },
    {
      id: 10,
      thumbnail: Banner,
      name: "Just For You",
      startDate: "12/11/2022",
      endDate: "12/11/2022",
      status: "Active",
    },
  ],
};

export const ManageReviewsData = {
  Column: [
    { field: "date", headerName: "Date", maxWidth: 150 },
    { field: "reviewer", headerName: "Reviewer", maxWidth: 200 },
    { field: "product_and_seller", headerName: "Product/Seller" },
    { field: "reviews", headerName: "Review" },
    { field: "details", headerName: "View Details" },
    { field: "action", headerName: "Action" },
  ],
  Data: [
    {
      id: 1,
      date: "11/12/20122",
      reviewer: {
        name: "Emerald23",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
      product_and_seller: {
        product: productImg,
        productName: "Fashion Low Sneakers",
        seller: "Browny",
      },
      reviews: {
        count: 3,
        review: "Lorem ipsum dolor sit amet consectetur adipiscing",
      },
    },
    {
      id: 2,
      date: "11/12/20122",
      reviewer: {
        name: "Emerald23",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
      product_and_seller: {
        product: productImg,
        productName: "Fashion Low Sneakers",
        seller: "Browny",
      },
      reviews: {
        count: 5,
        review: "Lorem ipsum dolor sit amet consectetur adipiscing",
      },
    },
    {
      id: 3,
      date: "11/12/20122",
      reviewer: {
        name: "Emerald23",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
      product_and_seller: {
        product: productImg,
        productName: "Fashion Low Sneakers",
        seller: "Browny",
      },
      reviews: {
        count: 2,
        review: "Lorem ipsum dolor sit amet consectetur adipiscing",
      },
    },
    {
      id: 4,
      date: "11/12/20122",
      reviewer: {
        name: "Emerald23",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
      product_and_seller: {
        product: productImg,
        productName: "Fashion Low Sneakers",
        seller: "Browny",
      },
      reviews: {
        count: 4,
        review: "Lorem ipsum dolor sit amet consectetur adipiscing",
      },
    },
    {
      id: 5,
      date: "11/12/20122",
      reviewer: {
        name: "Emerald23",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
      product_and_seller: {
        product: productImg,
        productName: "Fashion Low Sneakers",
        seller: "Browny",
      },
      reviews: {
        count: 3,
        review: "Lorem ipsum dolor sit amet consectetur adipiscing",
      },
    },
    {
      id: 6,
      date: "11/12/20122",
      reviewer: {
        name: "Emerald23",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
      product_and_seller: {
        product: productImg,
        productName: "Fashion Low Sneakers",
        seller: "Browny",
      },
      reviews: {
        count: 2,
        review: "Lorem ipsum dolor sit amet consectetur adipiscing",
      },
    },
    {
      id: 7,
      date: "11/12/20122",
      reviewer: {
        name: "Emerald23",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
      product_and_seller: {
        product: productImg,
        productName: "Fashion Low Sneakers",
        seller: "Browny",
      },
      reviews: {
        count: 4,
        review: "Lorem ipsum dolor sit amet consectetur adipiscing",
      },
    },
    {
      id: 8,
      date: "11/12/20122",
      reviewer: {
        name: "Emerald23",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
      product_and_seller: {
        product: productImg,
        productName: "Fashion Low Sneakers",
        seller: "Browny",
      },
      reviews: {
        count: 1,
        review: "Lorem ipsum dolor sit amet consectetur adipiscing",
      },
    },
    {
      id: 9,
      date: "11/12/20122",
      reviewer: {
        name: "Emerald23",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
      product_and_seller: {
        product: productImg,
        productName: "Fashion Low Sneakers",
        seller: "Browny",
      },
      reviews: {
        count: 5,
        review: "Lorem ipsum dolor sit amet consectetur adipiscing",
      },
    },
    {
      id: 10,
      date: "11/12/20122",
      reviewer: {
        name: "Emerald23",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
      product_and_seller: {
        product: productImg,
        productName: "Fashion Low Sneakers",
        seller: "Browny",
      },
      reviews: {
        count: 3,
        review: "Lorem ipsum dolor sit amet consectetur adipiscing",
      },
    },
  ],
};

export const TopSellersData = {
  Column: [
    {field: "seller", headerName: "Seller"},
    {field: "email", headerName: "Email"},
    {field: "location", headerName: "Location"},
    {field: "sold", headerName: "Sold", maxWidth: 70},
    {field: "reviews", headerName: "Review"},
    {field: "action", headerName: "Action"},
  ],
  Data: [
    { id: 1,
      seller: "Emerald23",
      email: "emerald@me.com",
      location: "Accra",
      sold: 300,
      reviews: {
        count:4.5
      },
    },
    { id: 2,
      seller: "Emerald23",
      email: "emerald@me.com",
      location: "Accra",
      sold: 300,
      reviews: {
        count:4.5
      },
    },
    { id: 3,
      seller: "Emerald23",
      email: "emerald@me.com",
      location: "Accra",
      sold: 300,
      reviews: {
        count:4.5
      },
    },
    { id: 4,
      seller: "Emerald23",
      email: "emerald@me.com",
      location: "Accra",
      sold: 300,
      reviews: {
        count:4.5
      },
    },
    { id: 5,
      seller: "Emerald23",
      email: "emerald@me.com",
      location: "Accra",
      sold: 300,
      reviews: {
        count:4.5
      },
    },
    { id: 6,
      seller: "Emerald23",
      email: "emerald@me.com",
      location: "Accra",
      sold: 300,
      reviews: {
        count:4.5
      },
    }
  ]
}

export const BestSellingProducts = {
  Column: [
    { field: "product", headerName: "Product", minWidth: 250 },
    { field: "price", headerName: "Price" },
    { field: "quantity", headerName: "Quantity" },
    { field: "amount", headerName: "Amount" },
    { field: "action", headerName: "Action" },
  ],
  Data: [
    {
      id: 1,
      product: "Fashion Low Sneaker",
      price: "GHc56.00",
      quantity: 2341,
      amount: "Ghc2234K",
      url: productImg
    },
    {id: 2,
      product: "Fashion Low Sneaker",
      price: "GHc56.00",
      quantity: 2341,
      amount: "Ghc2234K",
      url: productImg
    },
    {id: 3,
      product: "Fashion Low Sneaker",
      price: "GHc56.00",
      quantity: 2341,
      amount: "Ghc2234K",
      url: productImg
    },
    {id: 4,
      product: "Fashion Low Sneaker",
      price: "GHc56.00",
      quantity: 2341,
      amount: "Ghc2234K",
      url: productImg
    },
    {id: 5,
      product: "Fashion Low Sneaker",
      price: "GHc56.00",
      quantity: 2341,
      amount: "Ghc2234K",
      url: productImg
    },
  ]
}

export const TopCustommers = {
  Column: [
    {
      field: "username", headerName: "Username",
    },
    {
      field: "orders", headerName: "Orders", maxWidth: 150,
    },
    {
      field: "amount", headerName: "Amount", maxWidth: 150,
    },
    {
      field: "action", headerName: "Action",
    },
  ],
  Data: [
    {
      id: 1,
      username: "Emerald23",
      amount: "Ghc1,234",
      orders: 123,
      userImage: UserImage
    },
    {
      id: 2,
      username: "Emerald23",
      amount: "Ghc1,234",
      orders: 123,
      userImage: UserImage
    },
    {
      id: 3,
      username: "Emerald23",
      amount: "Ghc1,234",
      orders: 123,
      userImage: UserImage
    },
    {
      id: 4,
      username: "Emerald23",
      amount: "Ghc1,234",
      orders: 123,
      userImage: UserImage
    },
    {
      id: 5,
      username: "Emerald23",
      amount: "Ghc1,234",
      orders: 123,
      userImage: UserImage
    },
  ]
}