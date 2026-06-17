// import Navbar from "@/components/shared/Navbar";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <main className="section-container py-20">
//         <h1 className="text-5xl font-bold">
//           Portfolio Coming Soon
//         </h1>

//         <p className="mt-5 text-lg">
//           Full Stack Developer
//         </p>
//       </main>
//     </>
//   );
// }

import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
    </>
  );
}