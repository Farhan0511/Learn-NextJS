async function getUserPost() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=3",
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const posts = await getUserPost();
  return (
    <div>
      <h1 className="main-heading">Selamat Datang di NextJS News</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet doloribus, voluptate delectus culpa aperiam quam nostrum. Quo, saepe rerum?
      </p>

      <div className="post-list">
        {posts.map((post: {id: number; name: string; email: string}) => (
          <div className="post-item" key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
