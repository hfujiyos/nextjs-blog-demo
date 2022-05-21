import { useState } from 'react'; //ﾛｰｶﾙｽﾃｰﾄﾗｲﾌﾞﾗﾘ
import { useRouter } from 'next/router'; //画面遷移ﾗｲﾌﾞﾗﾘ
import Cookie from 'universal-cookie'; //ｸﾗｲｱﾝﾄｻｲﾄﾞCookieﾗｲﾌﾞﾗﾘ
import { LockClosedIcon } from '@heroicons/react/solid';

// ｸｯｷｰｲﾝｽﾀﾝｽ生成
const cookie = new Cookie();

/**
 * Authｺﾝﾎﾟｰﾈﾝﾄ
 * @returns 認証ｺﾝﾎﾟｰﾈﾝﾄ
 */
export default function Auth() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  /**
   * login関数
   * @return res｜ﾛｸﾞｲﾝﾚｽﾎﾟﾝｽJSON
   * @description JWTｱｸｾｽﾄｰｸﾝ取得しCookie格納
   */
  const login = async () => {
    try {
      // JWTｱｸｾｽﾄｰｸﾝ取得
      await fetch(
        `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/auth/jwt/create/`,
        {
          method: 'POST',
          body: JSON.stringify({ username: username, password: password }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
        // 失敗時ｴﾗｰﾒｯｾｰｼﾞ
        .then((res) => {
          if (res.status === 400) {
            throw 'authentication failed';
          } else if (res.ok) {
            return res.json();
          }
        })
        // 成功時ｸｯｷｰ格納＆ﾒｲﾝ画面遷移
        .then((data) => {
          const options = { path: '/' };
          cookie.set('access_token', data.access, options);
        });
      router.push('/main-page');
    } catch (err) {
      alert(err);
    }
  };

  /**
   * authUser関数
   * @return res｜ﾛｸﾞｲﾝﾚｽﾎﾟﾝｽJSON
   * @description JWTｱｸｾｽﾄｰｸﾝ取得(async/await非同期処理)
   */
  const authUser = async (e) => {
    // ﾌﾞﾗｳｻﾞﾘﾛｰﾄﾞ防止
    e.preventDefault();

    // ﾛｸﾞｲﾝﾓｰﾄﾞ
    if (isLogin) {
      // ﾛｸﾞｲﾝ処理
      login();
      // ﾚｼﾞｽﾀｰﾓｰﾄﾞ
    } else {
      try {
        // 新規ﾕｰｻﾞｰ作成
        await fetch(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/register/`, {
          method: 'POST',
          body: JSON.stringify({ username: username, password: password }),
          headers: {
            'Content-Type': 'application/json',
          },
          // 失敗時ｴﾗｰﾒｯｾｰｼﾞ
        }).then((res) => {
          if (res.status === 400) {
            throw 'authentication failed';
          }
        });
        // 成功時ﾛｸﾞｲﾝ処理
        login();
      } catch (err) {
        alert(err);
      }
    }
  };

  // 認証ﾋﾞｭｰ
  return (
    <div className='max-w-md w-full space-y-8'>
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className='mx-auto h-12 w-auto'
          src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
          alt='Workflow'
        />
        <h2 className='mt-6 text-center text-3xl font-extrabold text-white'>
          {isLogin ? 'Login' : 'Sign up'}
        </h2>
      </div>
      <form className='mt-8 space-y-6' onSubmit={authUser}>
        <input type='hidden' name='remember' value='true' />
        <div className='rounded-md shadow-sm -space-y-px'>
          <div>
            <input
              name='username'
              type='text'
              autoComplete='username'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='username'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <input
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>

        <div className='flex items-center justify-center'>
          <div className='text-sm'>
            <span
              onClick={() => setIsLogin(!isLogin)}
              className='cursol-pointer font-medium text-white hover:text-indigo-500'
            >
              change mode ?
            </span>
          </div>
        </div>

        <div>
          <button
            type='submit'
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            <span className='absolute left-0 inset-y-0 flex items-center pl-3'>
              <LockClosedIcon
                className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                aria-hidden='true'
              />
            </span>
            {isLogin ? 'Login with JWT' : 'Create new user'}
          </button>
        </div>
      </form>
    </div>
  );
}
