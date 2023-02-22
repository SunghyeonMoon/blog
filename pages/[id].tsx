import Head from 'next/head';
import { fetchBlocks, fetchPage, fetchPageList } from '@/apis/notion';
import { Block, Header } from '@/components/Detail';
import Navigation from '@/components/Detail/Navigation';
import useFade from '@/hooks/useFade';
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next';

const Detail = ({ page, blocks }: InferGetStaticPropsType<typeof getStaticProps>) => {
  useFade({ selector: 'main > *, main > ul > *' });

  if (!page || !blocks) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Moon | {page.title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header title={page.title} tags={page.tags} />
      <hr />
      {blocks.map((block, index) => (
        <Block block={block} key={index} />
      ))}
      <hr />
      <Navigation blocks={blocks} />
    </>
  );
};

export default Detail;

export const getStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const posts = await fetchPageList(databaseId!);
  const paths = posts.map((post) => ({ params: { id: post.id } }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const id = params?.id;
  const page = await fetchPage(id as string);
  const blocks = await fetchBlocks(id as string);
  return { props: { page, blocks } };
};
