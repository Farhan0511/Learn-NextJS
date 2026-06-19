async function getUserAbout() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3",
  );
  const data = await res.json(); 
  return data; 
}

async function page() {
  // ✅ async
  const post = await getUserAbout(); 

  return (
    <>
      <div>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore porro voluptatem ut nobis ullam sequi itaque nam fugit placeat.</p>
      </div>
      <div className="post-list">
        {post.map((post) => (
          <div key={post.id} className="post-item">
            <h1>{post.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default page;
