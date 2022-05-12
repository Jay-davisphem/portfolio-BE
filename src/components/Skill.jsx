export default function Skill({ name, img }) {
  return (
    <div className="p-4 rounded-full bg-gray-800 mx-1 hover:bg-gray-700 hover:border-4 cursor-pointer hover:ring md:hover:ring-4 hover:ring-gray-400">
      <p className="inline text-lg">
        {name}
        {"  "}
      </p>
      <img src={img} className="inline w-12 h-12 md:w-24 md:h-24" alt={name} />
    </div>
  );
}
