import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Chart = ({ ratings }) => {
  if (!ratings) return null;

  // Show 5 star at top
  const chartData = [...ratings].reverse();

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={chartData}
          margin={{ top: 10, right: 20, left: 20, bottom: 5 }}
        >
          {/* Numbers axis */}
          <XAxis type="number" />

          {/* Star labels */}
          <YAxis
            type="category"
            dataKey="name"
          />

          {/* Hover tooltip */}
          <Tooltip
            formatter={(value) =>
              value.toLocaleString()
            }
          />

          {/* Bars */}
          <Bar
            dataKey="count"
            fill="#FF8811"
            radius={[0, 6, 6, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;