

export async function GET(){
const categories=[

  { id: 1, name: "Technology" },
  { id: 2, name: "Health" },
  { id: 3, name: "Finance" },
  { id: 4, name: "Travel" },
  { id: 5, name: "Food" },
  { id: 6, name: "Lifestyle" },
  { id: 7, name: "Education" },
  { id: 8, name: "Entertainment" },
  { id: 9, name: "Sports" },
]

return Response.json(categories)
}