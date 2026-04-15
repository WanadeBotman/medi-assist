export default function Sidebar() {
  return (
    <div className="h-full flex flex-col justify-between items-center py-6 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      
      {/* Logo */}
      <div className="text-2xl">🧠</div>

      {/* Navigation */}
      <div className="flex flex-col gap-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/30 shadow-md cursor-pointer">
          🏠
        </div>

        <div className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white/20 hover:scale-105 transition cursor-pointer">
          💬
        </div>

        <div className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white/20 hover:scale-105 transition cursor-pointer">
          📹
        </div>

        <div className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white/20 hover:scale-105 transition cursor-pointer">
          📄
        </div>
      </div>

      {/* Bottom */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-white/20 hover:scale-105 transition cursor-pointer">
        ⚙️
      </div>
    </div>
  );
}