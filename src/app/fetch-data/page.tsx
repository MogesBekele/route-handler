export default async function FetchDataPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allData = await res.json();
  const data = allData.slice(0, 10);

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-blue-800 text-center">
        Fetched Posts
      </h1>
      <ul className="space-y-4">
        {data.map((item: { id: number; title: string }) => (
          <li
            key={item.id}
            className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-blue-900 hover:bg-blue-100 transition-colors"
          >
            <span className="font-semibold text-blue-700 mr-2">#{item.id}:</span>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
