export default function ApplicationLogo(props) {
  return (
    <a {...props} href="/">
      <img
        className="h-[50px] lg:h-[90px]"
        src="https://asdegypt.com/images/logo.png"
      />
    </a>
  );
}
