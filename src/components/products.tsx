export const Product=async ()=>{
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return(
    <div>
      <h1>this is product  component</h1>
    </div>
  )
}