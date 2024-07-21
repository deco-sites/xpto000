import { ResultSet, createClient } from "https://esm.sh/@libsql/client@0.6.0/web";
import { load } from "https://deno.land/std@0.224.0/dotenv/mod.ts";

const env = await load();

export interface Props {
 /**
   * @format integer between 1 and 100.000
   * @description id of the profile.
   * @default 1
   */
 id: string;
}

export const turso = createClient({
  url: env["TURSO_DATABASE_URL"],
  authToken: env["TURSO_AUTH_TOKEN"],
});

export default async function loader(props: Props): Promise<ResultSet> {
  
  const rs:ResultSet = (await turso.execute({sql: "SELECT * FROM person where id=?", args: [props.id]}));

  return (
    rs
  );
}
