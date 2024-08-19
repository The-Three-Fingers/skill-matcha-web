import { Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-neutral-1000 s:p-m4X600 max:p-m3X1920
                                s:text-bodyX600 max:text-bodyX1920 flex
                                flex-col items-center justify-center gap-8 border-t-2
                                border-t-neutral-500 p-m3X0
                                text-center text-bodyX0 font-bold text-neutral-500"
    >
      <div className="s:gap-g3X600 max:gap-g3X1920 s:flex-row flex flex-col gap-g3X0">
        <div>© {year} SkillMatcha</div>
        <a href="" className="hover:text-primary-500 transition">
          Terms of Use
        </a>
        <a href="" className="hover:text-primary-500 transition">
          Privacy Policy
        </a>
      </div>

      <div className="s:gap-g3X600 max:gap-g3X1920 flex justify-center gap-g3X0">
        {/* <a
          href="/"
          className="group block size-fit transition"
        >
          <Facebook className="group-hover:[&_path]:fill-primary-500 size-8 [&_path]:transition " />
        </a>
        <a
          href="/"
          className="group block size-fit transition"
        >
          <Twitter className="group-hover:[&_path]:fill-primary-500 size-8 [&_path]:transition " />
        </a> */}
        <a
          href="https://www.linkedin.com/company/the-three-fingers/about/?viewAsMember=true"
          className="group block size-fit transition"
        >
          <Linkedin className="group-hover:[&_path]:fill-primary-500 size-8 [&_path]:transition " />
        </a>
        {/* <Tooltip title="Closed HR Community">
          <a
            href="/"
            className="group block size-fit"
          >
            <People className="group-hover:[&_path]:fill-primary-500 size-8 [&_path]:transition " />
          </a>
        </Tooltip> */}
      </div>
    </footer>
  );
}
