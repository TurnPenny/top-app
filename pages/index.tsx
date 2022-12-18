import { Button, Htag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag='h1'>TEXT</Htag>
      <Button arrow='right'>Standart</Button>
      <Button arrow='down' appearance='primary'>
        Primary
      </Button>
      <Button arrow='right' appearance='ghost'>
        ghost
      </Button>
    </>
  );
}
