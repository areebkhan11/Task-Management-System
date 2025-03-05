"use client";

import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/queries";

export default function Dashboard() {
  const { data, loading } = useQuery(GET_TASKS);

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading tasks...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">My Assigned Tasks</h2>
      <ul className="space-y-4">
        {data?.tasks?.map((task: any) => (
          <li key={task.id} className="p-4 bg-white shadow rounded-lg border">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
