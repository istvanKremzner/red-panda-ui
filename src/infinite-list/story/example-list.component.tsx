import { sleep } from "@/lib/utils";
import { Loader } from "@/loader";
import { InfiniteList } from "../infinite-list.component";
import { ExampleCard } from "./example-card.component";

interface IExampleItem {
  content: string;
}

let counter = 1;

export const ExampleList = () => {
  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <InfiniteList<IExampleItem>
        onLoad={async () => {
          {
            await sleep(500);

            return Array.from({ length: 2 }).map(() => ({
              content: (counter++).toString(),
            }));
          }
        }}
        renderItem={(item) => <ExampleCard>{item.content}</ExampleCard>}
        loader={
          <div
            style={{
              display: "grid",
              placeItems: "center",
              padding: "2rem 0",
            }}
          >
            <Loader />
          </div>
        }
      />
    </main>
  );
};
