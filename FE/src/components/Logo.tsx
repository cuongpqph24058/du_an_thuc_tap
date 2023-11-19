import { useNavigate } from "react-router-dom";

type LogoProps = {
  large?: boolean;
};

const Logo = ({ large }: LogoProps) => {
  const navigate = useNavigate();

  return (
    <>
      <img
        alt="Logo"
        width={large ? 150 : 100}
        height={100}
        src="https://png.pngtree.com/template/20191021/ourlarge/pngtree-coffee-logo-book-template-icon-illustration-design-isolated-image_321771.jpg"
        onClick={() => navigate("/")}
        className="hidden md:block cursor-pointer"
      />
    </>
  );
};

export default Logo;
