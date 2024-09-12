interface Post {
  id: number;
  title: string;
}

export default async function FactoryPage() {
  const data = await fetch('https://api.vercel.app/blog');
  const posts: Post[] = await data.json();

  return (
    <>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      <div>Welcome to <span className="text-blue-500">William's factory</span></div>
    </>
  );
}
