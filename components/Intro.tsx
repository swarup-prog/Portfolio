import Image from "next/image";
import { CustomButton } from ".";

const Intro = () => {
  return (
    <main className="flex mt-[140px] mb-[71px] justify-center items-center gap-[115px] flex-row-reverse sm:flex-row flex-wrap">
      <div className="flex flex-col gap-8">
        <h1 className="intro-heading">
          Hi, I am Swarup,
          <br />
          MERN Stack Developer
        </h1>
        <p className="w-[497px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <CustomButton title="Download Resume" />
      </div>
      <div>
        <Image
          src="/profile.jpg"
          alt="profile"
          width={243}
          height={243}
          className="rounded-full"
        />
      </div>
    </main>
  );
};

export default Intro;
