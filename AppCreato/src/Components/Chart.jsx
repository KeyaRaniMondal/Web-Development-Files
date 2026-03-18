
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Chart = ({ details }) => {

  return (
    <>
      <h1 className='text-3xl font-bold my-10'>Ratings</h1>
      <BarChart
        layout="vertical" // 1. Set layout to vertical
        style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
        data={details?.ratings ?? []}
        margin={{ top: 5, right: 30, bottom: 5 }} // Increased left margin for labels
      >
        <CartesianGrid strokeDasharray="3 3" />

        {/* 2. XAxis now handles the numerical values */}
        <XAxis type="number" />

        {/* 3. YAxis now handles the names/categories */}
        <YAxis dataKey="name" type="category" width={80} />

        <Tooltip />
        <Legend />

        {/* 4. Update radius to match horizontal flow [left, right, right, left] */}
        <Bar
          dataKey="count"
          fill="#FF8811"
          radius={[0, 10, 10, 0]}
        />
        <Bar
          radius={[0, 10, 10, 0]}
        />
      </BarChart>
    </>

  );
};

export default Chart;