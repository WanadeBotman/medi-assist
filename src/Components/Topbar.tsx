export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-lg border-b border-gray-200">
      
      {/* Left */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-bold text-blue-700">
          Medi-Assist
        </h1>
      </div>

      {/* Center - Search */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search conversations..."
          className="w-[60%] max-w-md px-4 py-2 rounded-full border outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="text-xl cursor-pointer hover:scale-110 transition">
          🔔
        </div>

        <div className="w-10 h-10 bg-gray-300 rounded-full cursor-pointer hover:scale-105 transition" />
      </div>
    </div>
  );
}