import { GetServerSideProps } from 'next';

const Wiki = () => {
  return 'HI';
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const docName = query.docName as string;
  console.log(docName);
  return { props: {} };
};

export default Wiki;
