import { __ } from "@/Util/lang";
import { usePage } from "@inertiajs/react";
import React from "react";
import CopyRight from "./CopyRight";

export default function Footer() {
  const { site_content, locale } = usePage().props;
  function getContentItem(str) {
    const item = site_content.find((s) => s.code === str && s.lang === locale);
    return item.content;
  }
  return (
    <div className="mt-10 border-t-4 border-black" id="footer">
      <div className="bg-[#f8f8f8] flex flex-col gap-12 justify-center lg:flex-row lg:p-10 p-2">
        <div className="mb-0 text-sm">
          <strong>{__("SALES AND GALLERY")}</strong>
          <hr className="border-t-[rgba(116,116,116,0.3)] border-t border-solid" />
          <div itemScope="" itemType="https://schema.org/Organization">
            <div
              itemProp="address"
              itemScope=""
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">{getContentItem("address")}</span>

              <br />
              <br />
            </div>
            {__("Tel.")}:
            <span itemProp="telephone">
              {getContentItem("tel")}, {__("Fax")}: {getContentItem("fax")}
            </span>
            <br />
            {__("Mob")}:
            <span itemProp="telephone">{getContentItem("mob")}</span>
            <br />
          </div>
        </div>
        <div className="mb-0 text-sm">
          <strong>{__("SERVICE CENTER AND SPARE PARTS")}</strong>
          <hr className="border-t-[rgba(116,116,116,0.3)] border-t border-solid" />
          <div itemScope="" itemType="https://schema.org/Organization">
            <div
              itemProp="address"
              itemScope=""
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">{getContentItem("address2")}</span>
              <br />
              <br />
            </div>
            {__("Tel.")}:{" "}
            <span itemProp="telephone">
              {getContentItem("tel2")}, {__("Fax")}: {getContentItem("fax2")}
            </span>
            <br />
            {__("Mob")}:{" "}
            <span itemProp="telephone">{getContentItem("mob2")}</span>
            <br />
          </div>
        </div>
        <div className="mb-0 text-sm">
          <strong>{__("MANAGEMENT")}</strong>
          <hr className="border-t-[rgba(116,116,116,0.3)] border-t border-solid" />
          <div itemScope="" itemType="https://schema.org/Organization">
            <div
              itemProp="address"
              itemScope=""
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">
                {getContentItem("address-management")}
              </span>

              <br />
              <br />
            </div>
            {__("Tel.")}:
            <span itemProp="telephone">{getContentItem("tel-management")}</span>
            <br />
            {__("Mob")}:{" "}
            <span itemProp="telephone">{getContentItem("mob-management")}</span>
            <br />
          </div>
        </div>
      </div>
      <div className="flex gap-12 justify-center lg:px-10 p-2 lg:py-4 text-sm">
        {getContentItem("social_facebook") && (
          <a
            aria-label={`link ${getContentItem("social_facebook")}`}
            href={getContentItem("social_facebook")}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M17.316 9.675h-2.105c-.249 0-.526.327-.526.765v1.52h2.631v2.166h-2.631v6.506H12.2v-6.506H9.947v-2.167H12.2v-1.275c0-1.828 1.27-3.315 3.011-3.315h2.105v2.306zM14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0z"
                fill="#777777"
              ></path>
            </svg>
          </a>
        )}
        {getContentItem("social_twitter") && (
          <a
            aria-label={`link ${getContentItem("social_twitter")}`}
            href={getContentItem("social_twitter")}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.758 20.04a7.958 7.958 0 0 1-1.554.574c-.465.11-.967.165-1.506.165-.613 0-1.154-.079-1.625-.235a3.515 3.515 0 0 1-1.204-.669c-.332-.29-.563-.598-.691-.924-.128-.327-.192-.8-.192-1.42v-4.755h-1.48v-1.918c.525-.173.977-.421 1.351-.744.376-.323.677-.712.904-1.165.227-.452.383-1.029.469-1.728h1.904v3.427h3.18v2.128h-3.18v3.477c0 .786.042 1.29.125 1.514.082.223.235.401.458.535.297.179.636.269 1.017.269.679 0 1.353-.223 2.024-.67v2.139zM14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0z"
                fill="#777777"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
        )}
        {getContentItem("social_linkedin") && (
          <a
            aria-label={`link ${getContentItem("social_linkedin")}`}
            href={getContentItem("social_linkedin")}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <path id="a" d="M.002 0h27.711v28H.002z"></path>
              </defs>
              <g fill="none" fillRule="evenodd">
                <path
                  d="M20.712 19.802h-2.806v-5.056c0-1.175-.407-1.977-1.422-1.977-.775 0-1.236.541-1.44 1.063-.074.187-.092.448-.092.71v5.26h-2.806V13.59c0-1.138-.037-2.09-.074-2.91h2.437l.13 1.268h.054c.37-.597 1.274-1.473 2.789-1.473 1.846 0 3.23 1.25 3.23 3.936v5.391zM9.044 9.56c-.886 0-1.458-.634-1.458-1.417 0-.803.59-1.418 1.495-1.418.905 0 1.46.615 1.477 1.418 0 .783-.572 1.417-1.514 1.417zM7.66 19.802h2.806V10.68H7.66v9.122zM13.857 0C6.205 0 .002 6.268.002 14s6.203 14 13.855 14c7.653 0 13.856-6.268 13.856-14S21.51 0 13.857 0z"
                  fill="#777777"
                  mask="url(#b)"
                ></path>
              </g>
            </svg>
          </a>
        )}
        {getContentItem("social_whatsapp") && (
          <a
            aria-label={`link ${getContentItem("social_whatsapp")}`}
            href={getContentItem("social_whatsapp")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
            >
              <path
                fill="#777777"
                mask="url(#b)"
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
          </a>
        )}
        {getContentItem("social_youtube") && (
          <a
            aria-label={`link ${getContentItem("social_youtube")}`}
            href={getContentItem("social_youtube")}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <circle fill="#777777" cx="14" cy="14" r="14"></circle>
                <path fill="#FFF" d="M10 10v9l10-4.5z"></path>
              </g>
            </svg>
          </a>
        )}
      </div>
      <CopyRight />
    </div>
  );
}
