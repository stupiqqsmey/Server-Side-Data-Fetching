

async function getProfile() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/1",
    {
      cache: "no-store", // 👈 Dynamic
    }
  );
  return res.json();
}

export default async function ProfilePage() {
  const user = await getProfile();

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
    </div>
  );
}
