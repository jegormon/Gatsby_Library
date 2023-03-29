import * as React from "react";
import SearchClientOnly from "./search/[...]";

export default function IndexPage() {
  return (
    <main>
      <h1>Hello, and welcome to the Library!</h1>
      <p>Feel free to use search function and find your favorite book.</p>
      <SearchClientOnly />
    </main>
  );
}
