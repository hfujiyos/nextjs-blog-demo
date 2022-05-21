import { useEffect } from 'react'; //ｸﾗｲｱﾝﾄｻｲﾄﾞｷｬｯｼｭ連動ﾗｲﾌﾞﾗﾘ
import Layout from '../components/Layout';
import Link from 'next/link';
import { getAllTasksData } from '../lib/tasks';
import Task from '../components/Task';
import useSWR from 'swr'; // ｸﾗｲｱﾝﾄｻｲﾄﾞﾌｪｯﾁﾗｲﾌﾞﾗﾘ
import StateContextProvider from '../context/StateContext';
import TaskForm from '../components/TaskForm';

/**
 * CSRﾌｪｯﾁｬｰ関数
 * @returns res｜ﾀｽｸ情報（JSON）
 * @description ｸﾗｲｱﾝﾄｻｲﾄﾞﾌｪｯﾁCSR
 */
const fetcher = (url) => fetch(url).then((res) => res.json());
const apiUrl = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`;

/**
 * ﾀｽｸ一覧画面ｺﾝﾎﾟｰﾈﾝﾄ
 * @param staticfilterdTasks ﾀｽｸ一覧（Props）
 * @returns ﾀｽｸ一覧ｺﾝﾎﾟｰﾈﾝﾄ
 * @description ｻｰﾊﾞｰｻｲﾄﾞﾌｪｯﾁSSG+ISR、ｸﾗｲｱﾝﾄｻｲﾄﾞﾌｪｯﾁCSR
 */
export default function TaskPage({ staticfilterdTasks }) {
  /**
   * useSWRｸﾗｲｱﾝﾄｻｲﾄﾞﾌｪｯﾁCSR
   * @param apiUrl ｴﾝﾄﾞﾎﾟｲﾝﾄURL
   * @param fetcher CSRﾌｪｯﾁｬｰ関数
   * @param staticfilterdTasks ﾀｽｸ一覧（SSGﾌｫｰﾙﾊﾞｯｸ）（Props）
   * @returns tasks｜ﾀｽｸ一覧（ｷｬｯｼｭ）
   * @returns mutate｜ｷｬｯｼｭ最新化関数
   */
  const { data: tasks, mutate } = useSWR(apiUrl, fetcher, {
    fallbackData: staticfilterdTasks,
  });

  //ﾀｽｸ一覧並替（created_at降順）
  const filteredTasks = tasks?.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at),
  );

  /**
   * ｷｬｯｼｭ最新化関数
   * @description ﾏｳﾝﾄ時mutateｷｬｯｼｭ最新化関数実行
   */
  useEffect(() => {
    mutate();
  }, []);

  // ﾀｽｸ一覧画面ﾋﾞｭｰ
  return (
    <StateContextProvider>
      <Layout title='Task page'>
        <TaskForm taskCreated={mutate} />
        <ul>
          {filteredTasks &&
            filteredTasks.map((task) => (
              <Task key={task.id} task={task} taskDeleted={mutate} />
            ))}
        </ul>
        <Link href='/main-page'>
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
            <span>Back to main page</span>
          </div>
        </Link>
      </Layout>
    </StateContextProvider>
  );
}

/**
 * Propsｻｰﾊﾞｰｻｲﾄﾞ関数
 * @returns props｜ﾀｽｸ一覧（JSON）
 * @description ﾋﾞﾙﾄﾞ時にｻｰﾊﾞｰｻｲﾄﾞﾌｪｯﾁするSSG+ISR
 */
export async function getStaticProps() {
  const staticfilterdTasks = await getAllTasksData();
  return {
    props: { staticfilterdTasks },
    revalidate: 3,
  };
}
