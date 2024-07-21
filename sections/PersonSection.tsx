import { ResultSet } from "https://esm.sh/@libsql/client@0.6.0/web";

export interface Props {
  /**
   * @format integer between 1 and 100.000
   * @description id of the profile.
   * @default 1
   */
  id?: string;
  /**
   * @format structure of lists
   * @description profiles.
   * @default 
   */
  resultSet: ResultSet;
}

export default function Section(props: Props) {

  return (
    <div
      id="Person"
      class="container py-10 flex flex-col h-screen w-full items-center justify-center gap-16"
    >
      teste
    </div>
  );
}
