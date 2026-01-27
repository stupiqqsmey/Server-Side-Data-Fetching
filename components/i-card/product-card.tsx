import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ProductCard(props: {
  images: string[];
  title: string;
  description: string;
  price: number;
}) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={props.images[0]}
          alt={props.title}
          className="aspect-video w-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <Badge variant="secondary">${props.price}</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{props.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
