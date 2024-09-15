export default async function ReviewsPage() {
  const data = await fetch('http://localhost:5000');
  const msg = await data.json();
  console.clear();
  console.log(msg);
  return (
    <>
      <div>Welcome to <span className="text-blue-500">William's reviews</span></div>
      {/* { msg } */}
    </>

  );
}
