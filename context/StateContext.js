import { createContext, useState } from 'react';

// Stateｺﾝﾃｷｽﾄ生成
export const StateContext = createContext();

/**
 * Stateｺﾝﾃｷｽﾄﾌﾟﾛﾊﾞｲﾀﾞ関数
 * @param props 子ｺﾝﾎﾟｰﾈﾝﾄ
 * @returns Stateｺﾝﾃｷｽﾄ
 * @description ﾌﾟﾛﾊﾞｲﾀﾞで全ｺﾝﾎﾟｰﾈﾝﾄへStateｺﾝﾃｷｽﾄを共有
 */
export default function StateContextProvider(props) {
  // State更新処理（初期値）
  const [selectedTask, setSelectedTask] = useState({ id: 0, title: '' });

  // Stateｺﾝﾃｷｽﾄ共有
  return (
    <StateContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
