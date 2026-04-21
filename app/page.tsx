
import { HomeFetch } from "./home-fetch";
import { CharityTableContext } from "./table/table-context-example";

export default function Home() {
  return (
    <CharityTableContext charities={[]} totalCharities={0}>
        <HomeFetch />
    </CharityTableContext>
  );
}
