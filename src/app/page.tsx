import Image from "next/image";
import backgroungImg from "@/public/images/background.jpeg";
import profileImg from "@/public/images/image.png";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-18 sm:p-14 bg-[#222831] text-white">
      <div className="w-full flex items-center justify-center relative rounded-lg py-20 mt-80">
        <Image
          src={backgroungImg}
          alt="background"
          fill
          className="object-cover object-center rounded-lg opacity-60"
          style={{ zIndex: 0 }}
        />
        <div className="flex flex-col items-center justify-center relative z-10">
          <Image src={profileImg} alt="profile" className="cover rounded-full" width={200} height={100} />
          <h1 className="text-4xl font-bold">Fajar Eka Sandiyuda</h1>
          <p className="text-sm">Web Developer</p>
        </div>
      </div>
    </div>
  );
}
