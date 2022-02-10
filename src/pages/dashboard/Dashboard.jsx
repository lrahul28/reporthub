import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <h1 className="text-5xl font-bold mix-blend-color-dodge">Dashboard</h1>
      <Outlet />
    </>
  );
}

export default Dashboard;
