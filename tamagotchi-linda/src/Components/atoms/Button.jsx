export default function ({ buttonText, buttonId, buttonType, onClick }) {
  return (
    <button
      id={buttonId}
      type={buttonType}
      className="w-12 h-12 rounded-full bg-periwinkle text-white flex items-center justify-center hover:bg-hoverperiwinkle focus:outline-none focus:ring-2 focus:ring-lightblue"
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}
