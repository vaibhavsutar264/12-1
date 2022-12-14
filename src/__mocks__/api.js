export async function getData() {
  const response = await fetch('https://reqres.in/api/products', options);
  return response;
}