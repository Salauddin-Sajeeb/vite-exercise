import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-grey-300 min-h-screen p-12">
        <ul className="bg-green">
          <li className="border border-black p-4 text w-full hover:list-disc my-4">
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"all-products"}>All Products</Link>
          </li>
          <li className="border border-black p-4 text w-full my-4">
            <Link to={"add-products"}>Add Product</Link>
          </li>

          <li className="border border-black p-4 text w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
