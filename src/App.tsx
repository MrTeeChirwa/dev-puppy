import { Header } from "./components/Header.js";
import { PageWrapper } from "./components/PageWrapper.js";
import { Container } from "./components/Container.js";
import { Search } from "./components/Search.js";
import { PuppyList } from "./components/PuppyList.js";
import { NewPuppyForm } from "./components/NewPuppyForm.js";
import { puppies } from "./data/puppies.ts";
import { useState } from "react";
import { Puppy } from "./types/types.ts";

export function App() {
  return (
    <div>
      <PageWrapper>
        <Container>
          <Header />
          <main>
          <Main />
          </main>
        </Container>
      </PageWrapper>
    </div>
  );
}

function Main() {
  const [liked, setLiked] = useState<Puppy['id'][]>([]);

  return (
    <div>
      <Search puppies={puppies} liked={liked} />
      <PuppyList puppies={puppies} liked={liked} setLiked={setLiked} />
      <NewPuppyForm />
    </div>
  );
}
