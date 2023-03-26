import { nestRef } from '@client/axios-ref';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { DocumentEntity } from '@server/entitiy/document.entity';
import Head from 'next/head';

type Props = { doc: DocumentEntity };
const Wiki: FC<Props> = ({ doc }) => {
  return (
    <>
      <Head>
        <title>{doc.name}</title>
      </Head>
      {doc.content}
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const docName = query.docName as string;
  const res = await nestRef
    .get<DocumentEntity>(`document/${docName}`)
    .then(({ data }) => data)
    .catch();

  if (!res) {
    return { notFound: true };
  }
  return { props: { doc: res } };
};

export default Wiki;
