import React from "react";
import Link from "next/link";
import { SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiSvelte } from "react-icons/si";

const items = [
  { name: "React", link: "https://react.dev/", icon: <SiReact className="text-blue-500" /> },
  { name: "Next.js", link: "https://nextjs.org/docs", icon: <SiNextdotjs className="text-black" /> },
  { name: "Vue.js", link: "https://vuejs.org/guide/", icon: <SiVuedotjs className="text-green-500" /> },
  { name: "Angular", link: "https://angular.io/docs", icon: <SiAngular className="text-red-600" /> },
  { name: "Svelte", link: "https://svelte.dev/docs", icon: <SiSvelte className="text-orange-500" /> },
];


function FrontendFrameworks() {
  return (
    <div className="min-h-screen p-8 sm:p-20">
      <h1 className="mb-8 text-2xl font-bold">Frontend Frameworks</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 text-center transition-shadow bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg"
          >
            <div className="flex flex-col items-center">
              {/* Icon */}
              <div className="mb-4 text-5xl">{item.icon}</div>
              {/* Tech Name */}
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <Link href="/" className="inline-block mt-8 text-gray-500 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}

export default FrontendFrameworks;