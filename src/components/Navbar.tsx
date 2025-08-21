"use client"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between px-14 py-4">
      <div>
            <h1 className="text-4xl font-bold text-center text-[#00ADB5]">Logo</h1>
      </div>
      <div className="bg-[#222831]/30 backdrop-blur-lg border border-[#00ADB5] shadow-md shadow-[#00ADB5] rounded-4xl w-[30vw] mx-auto">
        <div className="px-4">
          <div className="flex items-center justify-center h-16 pr-5 pl-5">
              <div className="flex gap-8 text-white">
                  <a href="#">Dashboard</a>
                  <a href="#">About</a>
                  <a href="#">Skils</a>
                  <a href="#">Projects</a>
                  <a href="#">Contact</a>
              </div>
          </div>
        </div>
      </div>
      <div>
            <h1 className="text-2xl font-sm text-center text-[#00ADB5]">Fajarundesu</h1>
      </div>
    </nav>
  );
}
