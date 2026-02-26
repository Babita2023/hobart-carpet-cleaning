export async function POST(req) {
  const data = await req.formData();
  const name = data.get("name");
  const phone = data.get("phone");
  const message = data.get("message");

  console.log(name, phone, message);

  return new Response("Success", { status: 200 });
}