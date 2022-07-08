import type { ActionFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  console.log(Object.fromEntries(data));
  return null;
};

export default function Signin() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <main className="w-4/5 lg:w-1/2 flex flex-col justify-center items-center -translate-y-24 border rounded-lg p-8 shadow sha">
        <Form className="w-full" method="post" action="/auth/signin">
          <label className="text-xl text-bold" htmlFor="email">
            Sign In with Email
          </label>
          <div className="h-4" />
          <div className="flex flex-col gap-4">
            <input
              className="p-2 px-4 border rounded-lg shadow-inner"
              id="email"
              type="email"
              name="email"
              placeholder="hoonter@must-hoont.gg"
            />
            <input
              className="self-end w-20 p-2 border rounded-lg cursor-pointer shadow"
              type="submit"
              value="Sign In"
            />
          </div>
        </Form>
      </main>
    </div>
  );
}
