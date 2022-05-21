import fetch from 'node-fetch';

/**
 * ﾀｽｸ情報全件取得関数
 * @returns staticfilterdTasks｜ﾀｽｸ全件（JSON）
 * @description created_at降順並替
 */
export async function getAllTasksData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`),
  );
  const tasks = await res.json();
  //ﾀｽｸ一覧並替（created_at降順）
  const staticfilterdTasks = tasks.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at),
  );
  return staticfilterdTasks;
}

/**
 * ﾀｽｸID一覧取得関数
 * @returns tasks.map｜ﾀｽｸID一覧（JSON）
 */
export async function getAllTaskIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`),
  );
  const tasks = await res.json();
  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      },
    };
  });
}

/**
 * ﾀｽｸ詳細取得関数
 * @param id ﾀｽｸID
 * @returns task｜ﾀｽｸ詳細（JSON）
 */
export async function getTaskData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-task/${id}/`),
  );
  const task = await res.json();
  return task;
}
