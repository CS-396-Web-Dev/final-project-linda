export default function ({ buttonText, buttonId, buttonType, onClick }) {
  return (
    <button
      id={buttonId}
      type={buttonType}
      className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
