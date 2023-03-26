import { nestRef } from '@client/axios-ref';
import { GetServerSideProps } from 'next';

const Wiki = () => {
  return 'HI';
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const docName = query.docName as string;
  const res = await nestRef
    .get(`document/${docName}`)
    .then(({ data }) => data)
    .catch();

  return { props: {} };
};

export default Wiki;
