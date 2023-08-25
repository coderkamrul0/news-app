// 'use client'
// import { useTheme } from "next-themes";
// import { useState, useEffect } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";

// const DarkButton = () => {
//   const [mounted, setMounted] = useState(false);
//   const { systemTheme, theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   const currentTheme = theme === 'system' ? systemTheme : theme;

//   return (
//     <div>
//       {currentTheme === 'dark' ? (
//         <FaSun size={15} className="cursor-pointer text-yellow-500" onClick={() => setTheme("light")} />
//       ) : (
//         <FaMoon size={15} className="cursor-pointer text-gray-900" onClick={() => setTheme("dark")} />
//       )}
//     </div>
//   );
// };

// export default DarkButton;
