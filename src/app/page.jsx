import Link from "next/link";
import Navbar from "./Components/Navbar";
import { FaCode, FaDatabase, FaTools, FaServer, FaLanguage, FaFlask } from "react-icons/fa";

const categories = [
  { name: "Frontend Frameworks", href: "/Category/FrontendFrameworks", icon: <FaCode />, description: "React, Vue, Angular, and more." },
  { name: "Backend Frameworks", href: "/category/backend-frameworks", icon: <FaServer /> },
  { name: "DevOps & Infrastructure", href: "/category/devops-infrastructure", icon: <FaTools /> },
  { name: "Database & Data", href: "/category/database-data", icon: <FaDatabase /> },
  { name: "Programming Languages", href: "/category/programming-languages", icon: <FaLanguage /> },
  { name: "Testing Tools", href: "/category/testing-tools", icon: <FaFlask /> },
];

function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="min-h-screen p-8 sm:p-20">
        <h1 className="mb-8 text-3xl font-bold">Search My Doc</h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {categories.map((category) => (
            <Link
              href={category.href}
              key={category.name}
              className="block p-6 text-center transition-shadow border border-gray-200 rounded-lg shadow-md bg-white/50 backdrop-blur-md hover:shadow-lg"

            >
              <div className="flex flex-col items-center">
                <div className="mb-4 text-4xl text-blue-500">{category.icon}</div>
                <h2 className="text-lg font-semibold">{category.name}</h2>
                <p className="mt-2 text-sm text-gray-600">{category.description}</p>

              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
