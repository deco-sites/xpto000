import { ResultSet, createClient } from "https://esm.sh/@libsql/client@0.6.0/web";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

interface Props {
    id: string;
}

export const turso = createClient({
  url: env["TURSO_DATABASE_URL"],
  authToken: env["TURSO_AUTH_TOKEN"],
});

export default async function loader({
  id = "0"
}: Props): Promise<ResultSet> {
  
  const rs:ResultSet = (await turso.execute({sql: "SELECT * FROM person where id=?", args: [id]}));

  return (
    rs
  );
}
