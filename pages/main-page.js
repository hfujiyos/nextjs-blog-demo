import Cookie from 'universal-cookie'; //ｸﾗｲｱﾝﾄｻｲﾄﾞCookieﾗｲﾌﾞﾗﾘ
import { useRouter } from 'next/router'; //画面遷移ﾗｲﾌﾞﾗﾘ
import Layout from '../components/Layout';
import Link from 'next/link';

// ｸｯｷｰｲﾝｽﾀﾝｽ生成
const cookie = new Cookie();

/**
 * ﾒｲﾝ画面ｺﾝﾎﾟｰﾈﾝﾄ
 * @returns ﾒｲﾝ画面ｺﾝﾎﾟｰﾈﾝﾄ
 */
export default function MainPage() {
  const router = useRouter();

  /**
   * ﾛｸﾞｱｳﾄ関数
   * @description JWTｱｸｾｽﾄｰｸﾝ削除＆ﾙｰﾄ画面遷移
   */
  const logout = () => {
    cookie.remove('access_token');
    router.push('/');
  };

  // ﾒｲﾝ画面ﾋﾞｭｰ
  return (
    <Layout title='Main page'>
      <div className='mb-10'>
        <Link href='/blog-page'>
          <a className='bg-indigo-500 mr-8  hover:bg-indigo-600 text-white px-4 py-12 rounded'>
            Visit Blog by SSG + ISR
          </a>
        </Link>
        <Link href='/task-page'>
          <a className='bg-gray-500 ml-8 hover:bg-gray-600 text-white px-4 py-12 rounded'>
            Visit Task by ISR + CSR
          </a>
        </Link>
      </div>

      <svg
        onClick={logout}
        className='mt-10 cursor-pointer w-6 h-6'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
        />
      </svg>
    </Layout>
  );
}
