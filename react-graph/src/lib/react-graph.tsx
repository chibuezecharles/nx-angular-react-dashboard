import React, { useState } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


type DataPoint = {
  name: string;
  uv: number;
};

export function ReactGraph() {
  const [data, setData] = useState<DataPoint[]>([
    { name: 'Jan', uv: 400 },
    { name: 'Feb', uv: 300 },
    { name: 'Mar', uv: 500 },
    { name: 'Apr', uv: 200 },
    { name: 'May', uv: 700 },
  ]);

  const [formData, setFormData] = useState<{ name: string; uv: string }>({
    name: '',
    uv: '',
  });

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const uvNumber = Number(formData.uv);
    if (!formData.name || isNaN(uvNumber)) return;

    setData((prev) => [...prev, { name: formData.name, uv: uvNumber }]);
    setFormData({ name: '', uv: '' });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 shadow-lg rounded-2xl my-12 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📈 Monthly Data Overview</h2>

      {/* Chart */}
      <div className="bg-gray-50 rounded-lg p-4 mb-8 pb-12">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="uv" stroke="#6366f1" strokeWidth={3} />
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="4 4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Form */}
      <div className='bg-gray-50 rounded-lg p-4' >
        <form
          onSubmit={handleSubmit}
          className="bg-indigo-50 p-6 rounded-lg flex flex-col sm:flex-row sm:items-end gap-4"
        >
          <div className="flex-1">
  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
    Month
  </label>
  <select
    name="name"
    value={formData.name}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
    required
  >
    <option value="">Select Month</option>
    {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
      <option key={month} value={month}>
        {month}
      </option>
    ))}
  </select>
</div>

          <div className="flex-1">
            <label htmlFor="uv" className="block text-sm font-medium text-gray-700 mb-1">
              Value
            </label>
            <input
              type="number"
              name="uv"
              placeholder="e.g. 600"
              value={formData.uv}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-6 py-2.5 rounded-lg mt-1 hover:bg-indigo-700 transition duration-300 ease-in-out"
            >
              Add Data
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

export default ReactGraph;
