import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>TEXT</Htag>
      <Button>Standart</Button>
      <Button appearance='primary'>Primary</Button>
      <Button appearance='ghost'>ghost</Button>
    </>
  );
}
