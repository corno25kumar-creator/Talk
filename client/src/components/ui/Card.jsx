export default function Card({ title, children }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}
