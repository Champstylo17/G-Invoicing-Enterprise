export function Card({ children }) {
  return <div className="bg-white shadow p-4 rounded-lg">{children}</div>;
}

export function CardContent({ children }) {
  return <div className="space-y-2">{children}</div>;
}
