export default async function FetchDataPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allData = await res.json();
  const data = allData.slice(0, 10);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Fetched Data</h1>
      <ul className="space-y-2">
        {data.map((item: { id: number; title: string }) => (
          <li
            key={item.id}
            className="p-3 bg-blue-50 rounded border border-blue-100 text-blue-900"
          >
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
