import type { ReactNode } from "react";

type AdminTableProps = {
  headers: string[];
  rows: ReactNode[][];
};

export default function AdminTable({
  headers,
  rows
}: AdminTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-soft">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-gray-50">
            {headers.map((header) => (
              <th
                key={header}
                className="px-6 py-4 text-left text-sm font-semibold"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b last:border-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 text-sm"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
