export async function getUserPost() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=3",
  );
  const data = await res.json();
  return data;
};

export async function getUserAbout() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3",
  );
  const data = await res.json(); 
  return data; 
}