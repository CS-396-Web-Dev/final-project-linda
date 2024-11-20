import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Our Site</h1>
      
      <div className="space-x-4">
        <button className="px-6 py-2 bg-[#8F99FB-500 text-[#F8F7FF] rounded hover:bg-blue-600">Create User</button>
        <button className="px-6 py-2 bg-green-500 text-[#F8F7FF] rounded hover:bg-green-600">Login</button>
      </div>
    </div>
  );
}
