import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-10 md:pl-20 lg:pl-40 pb-20 md:pb-55 flex flex-col gap-5 z-[10] max-w-[90%] md:max-w-[750px]">
          <h1 className="text-[36px] md:text-[50px] text-white font-semibold mt-[15%] md:mt-[20%]">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-400 to-green-300 bg-clip-text text-transparent text-[32px] md:text-[45px] font-bold">
              Adarsh
            </span>
          </h1>

          <p className="text-sm md:text-base bg-gradient-to-r from-purple-300 via-white to-blue-300 bg-clip-text text-transparent font-semibold">
            I am an aspiring software developer. Welcome to my portfolio! Here,
            you will find a showcase of my skills, projects, and passion for web
            development. I have leveraged my knowledge of modern technologies to
            craft intuitive and dynamic digital experiences. Feel free to
            explore my work, and I hope you find it insightful ! 🚀
          </p>

          <div className="flex-col md:flex-row flex gap-3 md:gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-red-500 px-4 py-2 md:px-5 md:py-3 text-sm md:text-lg text-white max-w-[200px] text-center"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              Learn More
            </Link>

            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent border border-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-lg text-white max-w-[200px] text-center"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              My Projects
            </Link>

            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-4 py-2 md:px-5 md:py-3 text-sm md:text-lg text-white max-w-[200px] text-center"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        {/* Horse: hidden on small screens */}
        <div className="hidden md:block">
          <Image
            src="/horse.png"
            alt="horse"
            height={300}
            width={300}
            className="absolute right-20 md:right-55 top-20 md:top-40"
          />
        </div>

        {/* Cliff: always shown */}
        <Image
          src="/cliff.webp"
          alt="cliff"
          width={480}
          height={480}
          className="w-[300px] md:w-[480px] hidden md:block"
        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-full">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full object-cover"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        width={800}
        height={800}
        className="absolute top-10 left-0 z-[10] w-[300px] md:w-[500px] lg:w-[800px]"
      />
    </main>
  );
}
