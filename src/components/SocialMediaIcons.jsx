import { facebook, instagram, linkedin, twitter } from "../assets";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src={linkedin} alt="linkedin-link" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src={twitter} alt="twitter-link" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src={facebook} alt="facebook-link" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="hover:opacity-50 transition duration-500"
      >
        <img src={instagram} alt="instagram-link" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
