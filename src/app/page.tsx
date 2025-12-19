import { Jumbotron } from "@/components/jumbotron";
import { Quality } from "@/components/quality";
import { What } from "@/components/what";

export default function HomePage() {
  return (
    <>
      <Jumbotron />
      <Quality />
      <What />
    </>
  );
}
