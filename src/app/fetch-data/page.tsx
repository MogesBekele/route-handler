export default async function FetchDataPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const allData = await res.json();
  const data = allData.slice(0, 10);

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item: { id: number; title: string }) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
