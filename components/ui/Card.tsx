const Card = ({ title, content }: any) => {
  return (
    <div className="bg-gray-800 border border-white/10 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="text-gray-400">{content}</p>
    </div>
  );
};

export default Card;
