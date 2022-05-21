import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

/**
 * Blog詳細ｺﾝﾎﾟｰﾈﾝﾄ
 * @param post ﾌﾞﾛｸﾞ情報（JSON）
 * @returns ﾌﾞﾛｸﾞ詳細ｺﾝﾎﾟｰﾈﾝﾄ
 * @description ｻｰﾊﾞｰｻｲﾄﾞﾌｪｯﾁSSG+ISR
 */
export default function Post({ post }) {
  const router = useRouter();

  // Pre-fetch中はﾛｰﾃﾞｨﾝｸﾞ表示
  if (router.isFallback || !post) {
    return <div>Loading...</div>;
  }

  // ﾌﾞﾛｸﾞ詳細ﾋﾞｭｰ
  return (
    <Layout title={post.title}>
      <p className='m-4'>
        {'ID : '}
        {post.id}
      </p>
      <p className='mb-4 text-xl font-bold'>{post.title}</p>
      <p className='mb-12'>{post.created_at}</p>
      <p className='px-10'>{post.content}</p>
      <Link href='/blog-page'>
        <div className='flex cursor-pointer mt-12'>
          <svg
            className='w-6 h-6 mr-3'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
            />
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
}

/**
 * Pathsｻｰﾊﾞｰｻｲﾄﾞ関数
 * @returns paths｜ID一覧
 * @returns fallback｜false:Paths以外遷移不可, true:Paths超過遷移許可
 * @description ﾋﾞﾙﾄﾞ時ｻｰﾊﾞｰｻｲﾄﾞ実行
 */
export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

/**
 * Propsｻｰﾊﾞｰｻｲﾄﾞ関数
 * @param params ﾌﾞﾛｸﾞ情報
 * @returns props｜posts｜JSONﾃﾞｰﾀ
 * @description ﾋﾞﾙﾄﾞ時にｻｰﾊﾞｰｻｲﾄﾞﾌｪｯﾁするSSG+ISR
 */
export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 3,
  };
}
