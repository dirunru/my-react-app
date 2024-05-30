import { NavLink, Outlet } from "react-router-dom";
function Home() {
  return (
    <div>
      <h3>管理页面</h3>
      <NavLink to="detail">管理页面</NavLink>
      <Outlet />
    </div>
  );
}
export default Home;
