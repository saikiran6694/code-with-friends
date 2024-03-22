import { db } from "@/db";

const HomePage = async () => {
  const items = await db.query.testing.findMany();
  return (
    <main className="flex flex-col p-24 min-h-screen justify-between items-center">
      {items?.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
      ))}
    </main>
  );
};

export default HomePage;
