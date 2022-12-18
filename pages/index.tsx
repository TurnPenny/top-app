import { Button, Ptag, Htag, Tag } from "../components";

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
      <Ptag>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
        numquam nobis placeat recusandae praesentium cum, ex porro! Sunt
        nesciunt molestiae, eaque consequatur quaerat quia explicabo ipsa,
        inventore omnis reiciendis aspernatur.
      </Ptag>
      <Tag size='s' color='green'>
        tag
      </Tag>
      <Tag size='m' color='primary'>
        tag
      </Tag>
      <Tag color='ghost'>tag</Tag>
      <Tag color='red'>tag</Tag>
    </>
  );
}
