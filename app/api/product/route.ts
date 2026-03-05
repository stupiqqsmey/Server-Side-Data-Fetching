export async function GET() {
  return Response.json({
    users: ["Alice", "Bob", "Charlie"],
  })
}
export async function POST(request: Request) {
  const body = await request.json()

  return Response.json({
    message: "User created",
    data: body,
  })
}
