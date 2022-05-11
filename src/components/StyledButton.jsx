function StyledButton({ name }) {
  return (
    <button
      type="button"
      className="text-white  hover:border hover:border-gray-800 hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg px-5 text-center mr-2 mb-2 py-2.5 hover: shadow-md hover:shadow-none shadow-gray-400 dark:focus:ring-gray-800"
    >
      {name}
    </button>
  );
}
export default StyledButton;
