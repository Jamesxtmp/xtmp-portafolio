/* eslint-disable */
export const Background = ( { children } ) => {
  return (
    <div className="bg-zinc-0 dark:bg-[#101010] dark:text-white z-0 fixed w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden" >
      <div className="rounded-full blur-2xl absolute opacity-20 dark:opacity-10 h-[250px] w-[250px] bg-amber-500 dark:bg-blue-500 -bottom-20"></div>
      <div className="rounded-full blur-2xl absolute opacity-20 dark:opacity-10 h-[250px] w-[250px] bg-pink-500 dark:bg-purple-500 -left-28 top-10"></div>
      <div className="rounded-full blur-2xl absolute opacity-20 dark:opacity-10 h-[250px] w-[250px] bg-red-500 dark:bg-cyan-500 top-60 -right-20"></div>
      {children}
    </div>
  )
}
