import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-cener w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp" }}
      >
        <div className="pl-20 md:pl-40 pb-55 md:pb-20 flex flex-col gap-5 z-[10]  max-w-[750px] ">
          <h1 className="text-[50px] text-white font-semibold mt-[10%]">
            Make anything possible with{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent text-[45px] font-bold">
              Web Development
            </span>
          </h1>

          <p className="text-white hidden md:block ">
            Hi, I'm <b>Adarsh</b>, an aspiring web developer. Welcome to my
            portfolio! Here, you'll find a showcase of my skills, projects, and
            passion for web development. I've leveraged my knowledge of modern
            technologies to craft intuitive and dynamic digital experiences.
            Feel free to explore my work, and I hope you find it insightful.
            Let’s connect and create something amazing! 🚀
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5 ">
            <Link
              href="/my-skills"
              className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200] "
            >
              Learn More
            </Link>
            <Link
              href="/my-skills"
              className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200] "
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 " />
              My Projects
            </Link>
            <Link
              href="/my-skills"
              className="rounded-[20px] group bg-blue-500 hover:bg-red-400 px-5 py-3 text-lg text-white max-w-[200] "
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20 " />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 z-[20] right-5 flex-col md:hidden ">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-600 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200] "
        >
          Learn More
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-blue-600 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200] "
        >
          My projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-blue-600 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200] "
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-full ">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        width={100}
        height={100}
        className="absolute top-10 left-0 z-[10] "
      />
    </main>
  );
}
