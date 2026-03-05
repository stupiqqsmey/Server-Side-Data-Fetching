import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { UserResponse } from "@/lib/types/type"

export function UserCard({ user }: { user: UserResponse }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="aspect-square w-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">{user.role}</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{user.name}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {user.email}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  )
}