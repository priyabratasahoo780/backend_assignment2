// // youtube ui copy

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0f0f0f] dark:text-zinc-100 font-sans flex flex-col">
//       {/* Top Navbar */}
//       <header className="sticky top-0 z-50 flex items-center justify-between h-14 px-4 bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 gap-4">
//         {/* Left: Logo */}
//         <div className="flex items-center gap-4 shrink-0">
//           <button className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition cursor-pointer" aria-label="Menu">
//             <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
//               <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
//             </svg>
//           </button>
//           <div className="flex items-center gap-1 cursor-pointer">
//             <div className="w-7 h-5 bg-red-600 rounded-lg flex items-center justify-center text-white">
//               <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </div>
//             <span className="font-bold tracking-tighter text-lg font-sans">YouTube</span>
//           </div>
//         </div>

//         {/* Center: Search Bar & Mic */}
//         <div className="flex items-center justify-center flex-1 max-w-2xl px-2">
//           <div className="flex w-full items-center">
//             <div className="relative flex-1">
//               <input
//                 type="text"
//                 placeholder="Search videos"
//                 className="w-full h-10 px-4 text-sm bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-l-full focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 placeholder:text-zinc-400"
//               />
//             </div>
//             <button
//               className="h-10 px-6 border border-l-0 border-zinc-300 dark:border-zinc-700 rounded-r-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300 transition cursor-pointer"
//               aria-label="Search"
//             >
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                 <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
//               </svg>
//             </button>
//           </div>
//           <button
//             className="ml-3 p-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 shrink-0 text-xs font-medium transition cursor-pointer"
//             title="Search with your voice"
//           >
//             Mic
//           </button>
//         </div>

//         {/* Right: Actions */}
//         <div className="flex items-center gap-2 shrink-0">
//           <button className="px-3 py-1.5 text-xs font-semibold rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition cursor-pointer">
//             + Create
//           </button>
//           <button className="px-3 py-1.5 text-xs font-semibold rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition cursor-pointer">
//             Notifications
//           </button>
//           <button className="w-8 h-8 rounded-full bg-purple-600 text-white font-semibold text-xs flex items-center justify-center hover:opacity-90 transition cursor-pointer">
//             Profile
//           </button>
//         </div>
//       </header>

//       {/* Main Content Layout */}
//       <div className="flex flex-1">
//         {/* Sidebar */}
//         <aside className="w-60 shrink-0 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-3 py-2 border-r border-zinc-200 dark:border-zinc-800 hidden md:flex flex-col gap-1 text-sm">
//           <div className="flex flex-col gap-0.5">
//             <h1 className="px-3 py-2 rounded-lg font-medium bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer transition">
//               Home
//             </h1>
//             <h1 className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Shorts
//             </h1>
//             <h1 className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Subscription
//             </h1>
//           </div>

//           <hr className="my-2 border-zinc-200 dark:border-zinc-800" />

//           <div className="flex flex-col gap-0.5">
//             <h2 className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
//               Subscriptions
//             </h2>
//             <h2 className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               You
//             </h2>
//             <h2 className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               History
//             </h2>
//           </div>

//           <hr className="my-2 border-zinc-200 dark:border-zinc-800" />

//           <div className="flex flex-col gap-0.5">
//             <h1 className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
//               Explore
//             </h1>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Shopping
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Music
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Movies &amp; TV
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Live
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Gaming
//             </p>
//           </div>

//           <hr className="my-2 border-zinc-200 dark:border-zinc-800" />

//           <div className="flex flex-col gap-0.5">
//             <h1 className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
//               More from youtube
//             </h1>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Youtube Studio
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Youtube Music
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Youtube Movies &amp; TV
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Youtube Live
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Youtube Gaming
//             </p>
//           </div>

//           <hr className="my-2 border-zinc-200 dark:border-zinc-800" />

//           <div className="flex flex-col gap-0.5 pb-4">
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Settings
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Report history
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Help
//             </p>
//             <p className="px-3 py-2 rounded-lg font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer transition">
//               Send feedback
//             </p>
//           </div>
//         </aside>

//         {/* Feed Area */}
//         <div className="flex-1 min-w-0 flex flex-col">
//           {/* Top Filter Chips */}
//           <div className="sticky top-14 z-40 bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur px-6 py-3 flex items-center gap-3 overflow-x-auto border-b border-zinc-200 dark:border-zinc-800 scrollbar-none">
//             <button className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 whitespace-nowrap cursor-pointer transition">
//               All
//             </button>
//             <button className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 whitespace-nowrap cursor-pointer transition">
//               Music
//             </button>
//             <button className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 whitespace-nowrap cursor-pointer transition">
//               Podcasts
//             </button>
//             <button className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 whitespace-nowrap cursor-pointer transition">
//               Compiler
//             </button>
//             <button className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 whitespace-nowrap cursor-pointer transition">
//               Algoritms
//             </button>
//             <button className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 whitespace-nowrap cursor-pointer transition">
//               Sports
//             </button>
//             <button className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 whitespace-nowrap cursor-pointer transition">
//               Music
//             </button>
//             <button className="px-3.5 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-800 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 whitespace-nowrap cursor-pointer transition">
//               Playlists
//             </button>
//           </div>

//           {/* Video Cards Grid */}
//           <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
//             {/* Card 1 */}
//             <div className="flex flex-col gap-3 group cursor-pointer">
//               <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
//                 <img
//                   src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg"
//                   alt="thumbnail"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//               <div className="flex gap-3">
//                 <div className="w-9 h-9 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0 mt-0.5" />
//                 <div className="flex flex-col">
//                   <h2 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-blue-500 transition">
//                     Title of the video
//                   </h2>
//                   <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
//                     Channel name
//                   </p>
//                   <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
//                     <span>Views</span>
//                     <span>•</span>
//                     <span>Likes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="flex flex-col gap-3 group cursor-pointer">
//               <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
//                 <img
//                   src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg"
//                   alt="thumbnail"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//               <div className="flex gap-3">
//                 <div className="w-9 h-9 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0 mt-0.5" />
//                 <div className="flex flex-col">
//                   <h2 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-blue-500 transition">
//                     Title of the video
//                   </h2>
//                   <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
//                     Channel name
//                   </p>
//                   <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
//                     <span>Views</span>
//                     <span>•</span>
//                     <span>Likes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="flex flex-col gap-3 group cursor-pointer">
//               <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
//                 <img
//                   src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg"
//                   alt="thumbnail"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//               <div className="flex gap-3">
//                 <div className="w-9 h-9 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0 mt-0.5" />
//                 <div className="flex flex-col">
//                   <h2 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-blue-500 transition">
//                     Title of the video
//                   </h2>
//                   <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
//                     Channel name
//                   </p>
//                   <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
//                     <span>Views</span>
//                     <span>•</span>
//                     <span>Likes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 4 */}
//             <div className="flex flex-col gap-3 group cursor-pointer">
//               <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
//                 <img
//                   src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg"
//                   alt="thumbnail"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//               <div className="flex gap-3">
//                 <div className="w-9 h-9 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0 mt-0.5" />
//                 <div className="flex flex-col">
//                   <h2 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-blue-500 transition">
//                     Title of the video
//                   </h2>
//                   <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
//                     Channel name
//                   </p>
//                   <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
//                     <span>Views</span>
//                     <span>•</span>
//                     <span>Likes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 5 */}
//             <div className="flex flex-col gap-3 group cursor-pointer">
//               <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
//                 <img
//                   src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg"
//                   alt="thumbnail"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//               <div className="flex gap-3">
//                 <div className="w-9 h-9 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0 mt-0.5" />
//                 <div className="flex flex-col">
//                   <h2 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-blue-500 transition">
//                     Title of the video
//                   </h2>
//                   <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
//                     Channel name
//                   </p>
//                   <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
//                     <span>Views</span>
//                     <span>•</span>
//                     <span>Likes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 6 */}
//             <div className="flex flex-col gap-3 group cursor-pointer">
//               <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
//                 <img
//                   src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg"
//                   alt="thumbnail"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//               <div className="flex gap-3">
//                 <div className="w-9 h-9 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0 mt-0.5" />
//                 <div className="flex flex-col">
//                   <h2 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-blue-500 transition">
//                     Title of the video
//                   </h2>
//                   <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
//                     Channel name
//                   </p>
//                   <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
//                     <span>Views</span>
//                     <span>•</span>
//                     <span>Likes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 7 */}
//             <div className="flex flex-col gap-3 group cursor-pointer">
//               <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
//                 <img
//                   src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg"
//                   alt="thumbnail"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//               <div className="flex gap-3">
//                 <div className="w-9 h-9 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0 mt-0.5" />
//                 <div className="flex flex-col">
//                   <h2 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-blue-500 transition">
//                     Title of the video
//                   </h2>
//                   <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
//                     Channel name
//                   </p>
//                   <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
//                     <span>Views</span>
//                     <span>•</span>
//                     <span>Likes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Card 8 */}
//             <div className="flex flex-col gap-3 group cursor-pointer">
//               <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-200 dark:bg-zinc-800">
//                 <img
//                   src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg"
//                   alt="thumbnail"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//               <div className="flex gap-3">
//                 <div className="w-9 h-9 rounded-full bg-zinc-300 dark:bg-zinc-700 shrink-0 mt-0.5" />
//                 <div className="flex flex-col">
//                   <h2 className="font-semibold text-sm leading-snug line-clamp-2 group-hover:text-blue-500 transition">
//                     Title of the video
//                   </h2>
//                   <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
//                     Channel name
//                   </p>
//                   <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
//                     <span>Views</span>
//                     <span>•</span>
//                     <span>Likes</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }




// youtube ui copy

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <span>
      <img src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg" alt="thumbnail" width="320" height="180" />
      <input type="text" className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer dark:bg-zinc-700"  placeholder="Search videos"/> 
      <button>Mic</button>
      <button>Create</button>
      <button>Notifications</button>
      <button>Profile</button>
      </span>
      <aside>
        <h1>Home</h1>
        <h1>Shorts</h1>
        <h1>Subscription</h1>
        <hr></hr>
        <h2>Subscriptions</h2>
        <h2>You</h2>
        <h2>History</h2>
        <hr></hr>
        <h1>Explore</h1>
        <p>Shopping</p>
        <p>Music</p>
        <p>Movies & TV</p>
        <p>Live</p>
        <p>Gaming</p>
        <hr></hr>
        <h1>More from youtube</h1>
        <p>Youtube Studio</p>
        <p>Youtube Music</p>
        <p>Youtube Movies & TV</p>
        <p>Youtube Live</p>
        <p>Youtube Gaming</p>
        <hr></hr>
        <p>Settings</p>
        <p>Report history</p>
        <p>Help</p>
        <p>Send feedback</p>
      </aside>

      <span>
        <button>All</button>
        <button>Music</button>
        <button>Podcasts</button>
        <button>Compiler</button>
        <button>Algoritms</button>
        <button>Sports</button>
        <button>Music</button>
        <button>Playlists</button>
      </span>

      <main>
        // cards
        <div>
          <img src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg" alt="thumbnail" width="320" height="180" />
          <h2>Title of the video</h2>
          <p>Channel name</p>
          <p>Views</p>
          <p>Likes</p>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg" alt="thumbnail" width="320" height="180" />
          <h2>Title of the video</h2>
          <p>Channel name</p>
          <p>Views</p>
          <p>Likes</p>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg" alt="thumbnail" width="320" height="180" />
          <h2>Title of the video</h2>
          <p>Channel name</p>
          <p>Views</p>
          <p>Likes</p>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg" alt="thumbnail" width="320" height="180" />
          <h2>Title of the video</h2>
          <p>Channel name</p>
          <p>Views</p>
          <p>Likes</p>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg" alt="thumbnail" width="320" height="180" />
          <h2>Title of the video</h2>
          <p>Channel name</p>
          <p>Views</p>
          <p>Likes</p>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg" alt="thumbnail" width="320" height="180" />
          <h2>Title of the video</h2>
          <p>Channel name</p>
          <p>Views</p>
          <p>Likes</p>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg" alt="thumbnail" width="320" height="180" />
          <h2>Title of the video</h2>
          <p>Channel name</p>
          <p>Views</p>
          <p>Likes</p>
        </div>
        <div>
          <img src="https://i.ytimg.com/vi/64v6Q-36t2g/hqdefault.jpg" alt="thumbnail" width="320" height="180" />
          <h2>Title of the video</h2>
          <p>Channel name</p>
          <p>Views</p>
          <p>Likes</p>
        </div>
      </main>
    </div>
  );
}
