import type { Account } from "@prisma/client";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/utils/prisma";

export const loader: LoaderFunction = async () => {
  const data = await db.account.findMany();
  return json(data);
};

export default function Index() {
  const data = useLoaderData<Account[]>();

  return (
    <div className="h-screen">
      <div className="text-blue-600">
        {data.map((d) => (
          <div key={d.id}>{d.id}</div>
        ))}
      </div>
    </div>
  );
}
