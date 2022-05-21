import { useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import useSWR from 'swr'; // ｸﾗｲｱﾝﾄｻｲﾄﾞﾌｪｯﾁﾗｲﾌﾞﾗﾘ
import { getAllTaskIds, getTaskData } from '../../lib/tasks';

const fetcher = (url) => fetch(url).then((res) => res.json());

/**
 * ﾀｽｸ詳細ｺﾝﾎﾟｰﾈﾝﾄ
 * @param staticTask ﾀｽｸ情報（JSON）
 * @param id ﾀｽｸID
 * @returns ﾀｽｸ詳細ｺﾝﾎﾟｰﾈﾝﾄ
 * @description ｻｰﾊﾞｰｻｲﾄﾞﾌｪｯﾁSSG+ISR、ｸﾗｲｱﾝﾄｻｲﾄﾞﾌｪｯﾁCSR
 */
export default function Post({ staticTask, id }) {
  const router = useRouter();

  /**
   * useSWRｸﾗｲｱﾝﾄｻｲﾄﾞﾌｪｯﾁCSR
   * @param apiUrl ｴﾝﾄﾞﾎﾟｲﾝﾄURL
   * @param fetcher CSRﾌｪｯﾁｬｰ関数
   * @param staticTask ﾀｽｸ詳細（SSGﾌｫｰﾙﾊﾞｯｸ）（Props）
   * @returns task｜ﾀｽｸ詳細（ｷｬｯｼｭ）
   * @returns mutate｜ｷｬｯｼｭ最新化関数
   */
  const { data: task, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}`,
    fetcher,
    {
      fallbackData: staticTask,
    },
  );
  /**
   * ｷｬｯｼｭ最新化関数
   * @description ﾏｳﾝﾄ時mutateｷｬｯｼｭ最新化関数実行
   */
  useEffect(() => {
    mutate();
  }, []);

  // ISRﾌｫｰﾙﾊﾞｯｸや新規ﾀｽｸのPre-fetch中はﾛｰﾃﾞｨﾝｸﾞ表示
  if (router.isFallback || !task) {
    return <div>Loading...</div>;
  }

  // ﾀｽｸ詳細ﾋﾞｭｰ
  return (
    <Layout title={task.title}>
      <span className='mb-4'>
        {'ID : '}
        {task.id}
      </span>
      <p className='mb-4 text-xl font-bold'>{task.title}</p>
      <p className='mb-12'>{task.created_at}</p>
      <Link href='/task-page'>
        <div className='flex cursor-pointer mt-8'>
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
          <span>Back to task-page</span>
        </div>
      </Link>
    </Layout>
  );
}

/**
 * Pathsｻｰﾊﾞｰｻｲﾄﾞ関数
 * @returns paths｜ﾀｽｸID一覧
 * @returns fallback｜ﾌｫｰﾙﾊﾞｯｸﾌﾗｸﾞ（false:Paths以外遷移不可, true:Paths超過遷移許可）
 * @description ﾋﾞﾙﾄﾞ時ｻｰﾊﾞｰｻｲﾄﾞ実行
 */
export async function getStaticPaths() {
  const paths = await getAllTaskIds();
  return {
    paths,
    fallback: true,
  };
}

/**
 * Propsｻｰﾊﾞｰｻｲﾄﾞ関数
 * @param params ﾀｽｸ情報
 * @returns props｜ﾀｽｸID, ﾀｽｸ情報（JSON）
 * @description ﾋﾞﾙﾄﾞ時にｻｰﾊﾞｰｻｲﾄﾞﾌｪｯﾁするSSG+ISR
 */
export async function getStaticProps({ params }) {
  const staticTask = await getTaskData(params.id);
  return {
    props: {
      id: staticTask.id,
      staticTask,
    },
    revalidate: 3,
  };
}
