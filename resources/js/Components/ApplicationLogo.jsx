import { Link, usePage } from "@inertiajs/react";

export default function ApplicationLogo(props) {
  const { site_content, locale } = usePage().props;
  function getContentItem(str) {
    const item = site_content.find((s) => s.code === str && s.lang === locale);
    return item.content;
  }
  return (
    <Link {...props} href="/">
      <img
        className="h-[70px] lg:h-[100px]"
        src={`https://asdegypt.com/images/${getContentItem("logo")}`}
      />
    </Link>
  );
}
