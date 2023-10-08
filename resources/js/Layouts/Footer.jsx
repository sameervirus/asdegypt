import React from "react";

export default function Footer() {
  return (
    <div id="footer">
      <div className="bg-[#f8f8f8] flex flex-col gap-12 justify-center lg:flex-row lg:p-10 p-2">
        <div className="mb-0 text-sm">
          <strong>SALES AND GALLERY</strong>
          <hr className="border-t-[rgba(116,116,116,0.3)] border-t border-solid" />
          <div itemScope="" itemType="https://schema.org/Organization">
            <div
              itemProp="address"
              itemScope=""
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">
                145 Elkhalig Elmasry, Beside Elzohour
              </span>
              <br />
              <span itemProp="addressLocality">
                Hospital, Hdaek Alkoba, Cairo, Egypt.
              </span>
              <br />
              <br />
            </div>
            Tel.:
            <span itemProp="telephone">+20 223310935, Fax: +20 223310935</span>
            <br />
            MOB: - 0
            <span itemProp="telephone">
              +20 (0) 1148825599, +20 (0) 1119006079
            </span>
            <br />
          </div>
        </div>
        <div className="mb-0 text-sm">
          <strong>SERVICE CENTER AND SPARE PARTS</strong>
          <hr className="border-t-[rgba(116,116,116,0.3)] border-t border-solid" />
          <div itemScope="" itemType="https://schema.org/Organization">
            <div
              itemProp="address"
              itemScope=""
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">
                25 Ahmed Zaki, Masr we Al Sodan,
              </span>
              <br />
              <span itemProp="addressLocality">
                Hdaek Alkoba, Cairo, Egypt.
              </span>
              <br />
              <br />
            </div>
            Tel.:
            <span itemProp="telephone">+20 223304119, Fax: +20 223304119</span>
            <br />
            MOB: - 0<span itemProp="telephone">+20 (0) 1149998553</span>
            <br />
          </div>
        </div>
        <div className="mb-0 text-sm">
          <strong>MANAGEMENT</strong>
          <hr className="border-t-[rgba(116,116,116,0.3)] border-t border-solid" />
          <div itemScope="" itemType="https://schema.org/Organization">
            <div
              itemProp="address"
              itemScope=""
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">
                10 Nagib Al Rihani st., Al Azbakeya,
              </span>
              <br />
              <span itemProp="addressLocality">Cairo, Egypt.</span>
              <br />
              <br />
            </div>
            Tel.:
            <span itemProp="telephone">
              +20 25797581, +20 25740078, +20 25797519
            </span>
            <br />
            MOB: <span itemProp="telephone">+20 (0) 1007552232</span>
            <br />
          </div>
        </div>
      </div>
      <div className="flex gap-12 justify-center lg:px-10 p-2 lg:py-4 text-sm">
        <a aria-label="link https://www.facebook.com/GESPASAFluidTec" href="#">
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
        <a aria-label="link https://twitter.com/GespasaFluidTec" href="#">
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
        <a
          aria-label="link https://www.linkedin.com/company/totcomercial/mycompany/?viewAsMember=true"
          href="#"
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
        <a aria-label="link https://www.youtube.com/user/InfoGespasa" href="#">
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
      </div>
      <div className="flex gap-12 justify-center lg:px-10 p-2 lg:py-4 text-sm bg-[#e1001a]">
        <span className="text-white font-bold">@2023 ASDEgypt</span>
      </div>
    </div>
  );
}
