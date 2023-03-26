import { nestRef } from '@client/axios-ref';
import { GetServerSideProps } from 'next';
import { FC, FormEventHandler, useState } from 'react';
import { DocumentEntity } from '@server/entitiy/document.entity';
import Head from 'next/head';

type Props = { doc: DocumentEntity };

const Wiki: FC<Props> = ({ doc }) => {
  const [value, setValue] = useState(doc.content);

  const edit: FormEventHandler = async (e) => {
    e.preventDefault();
    await nestRef.post(`document/content/${doc.id}`, { content: value });
    console.log(value);
  };

  return (
    <>
      <Head>
        <title>{doc.name}</title>
      </Head>
      <form onSubmit={edit}>
        <textarea value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">修正</button>
      </form>
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
