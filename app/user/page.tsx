import { UserCard } from "@/components/i-card/user-card";
import { UserResponse } from "@/lib/types/type";

///  create function to get data from api ///
const BASE_URL = process.env.NEXT_PUBLIC_API;

export default async function UserPage() {

    const res = await fetch(`${BASE_URL}/api/v1/users`);
    const users: UserResponse[] = await res.json();
    return (
        <main className="container mx-auto">
            <section className="grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                    />
                ))}
            </section>
        </main>
    );
}
