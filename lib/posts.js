import fetch from 'node-fetch'; //ｻｰﾊﾞｰｻｲﾄﾞpre-fetchﾗｲﾌﾞﾗﾘ

/**
 * ﾌﾞﾛｸﾞ情報全件取得関数
 * @returns posts｜ﾌﾞﾛｸﾞ全件（JSON）
 * @description created_at降順並替
 */
export async function getAllPostsData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`),
  );
  const posts = await res.json();
  //ﾌﾞﾛｸﾞ一覧並替（created_at降順）
  const filteredPosts = posts.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at),
  );
  return filteredPosts;
}

/**
 * ﾌﾞﾛｸﾞID一覧取得関数
 * @returns posts.map｜ﾌﾞﾛｸﾞID一覧（JSON）
 */
export async function getAllPostIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`),
  );
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

/**
 * ﾌﾞﾛｸﾞ詳細取得関数
 * @param id ﾌﾞﾛｸﾞID
 * @returns posts｜ﾌﾞﾛｸﾞ詳細JSONﾃﾞｰﾀ
 */
export async function getPostData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}/`),
  );
  const post = await res.json();
  return post;
}
