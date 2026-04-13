import React, { useContext } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";
import useApps from "../../hooks/useApps";
import { InstalledAppContext } from "../../context/InstalledAppContext";

const Dashboard = () => {
  const { installApps } = useContext(InstalledAppContext);
  const { apps} = useApps();
  const totalInstall = installApps.length;
  const totalUnstall = apps.length - totalInstall;

  console.log(installApps , apps);
  // Sample data
  const data = [
    { name: "Installed Apps", value:  totalInstall},
    { name: "Unstalled Apps", value: totalUnstall },
  ];

  // Colors for pie sections
  const COLORS = ["#00D390", "#FF8042", "#8884d8"];
  return (
    <div className="flex justify-center items-center py-10">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Dashboard;
