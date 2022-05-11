import { FiGithub, FiTwitter } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <>
      <footer className="flex gap-8 justify-center text-2xl">
        <div className="text-[#1da1f2]">
          <FiGithub />
        </div>
        <div>
          <BsLinkedin className="text-[#1da1f2]" />
        </div>
        <div>
          <FiTwitter className="text-[#1DA1F2]" />
        </div>
        <div>
          <SiGmail className="text-[#1da1f2]" />
        </div>
      </footer>
    </>
  );
}
export default Footer;
