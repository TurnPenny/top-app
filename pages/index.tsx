import axios from 'axios';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Ptag, Htag, Tag, RatingComponent } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

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
      <RatingComponent isEditable rating={rating} setRating={setRating} />
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}> {m._id.secondCategory} </li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
