import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6 text-black">
        Welcome to Our Site
      </h1>

      <div className="space-x-4">
        <button className="px-6 py-2 bg-periwinkle text-white rounded hover:bg-hoverperiwinkle">
          Create User
        </button>
        <button className="px-6 py-2 bg-lightblue text-white rounded hover:bg-hoverlightblue">
          Login
        </button>
      </div>
    </div>
  );
}
