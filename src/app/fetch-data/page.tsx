export default async function FfetchDataPage() {
  // Simulate fetching data from an API or database
  const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });

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