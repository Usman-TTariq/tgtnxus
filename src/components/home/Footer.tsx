import Link from "next/link";
import { FOOTER_LOGO, FOOTER_NAV, FOOTER_SOCIAL } from "./footer-data";

const imgShape01Svg = "/agenio/assets/images/logo/shape-01.svg";
const imgShape02Svg = "/agenio/assets/images/logo/shape-02.svg";

export default function Footer() {
  return (
    <section
      className="tgt-footer-desktop relative w-full border border-solid border-[rgba(3,7,18,0.1)] bg-[#f3f4f6]"
      data-node-id="61:1913"
      data-name="wpr footer area start"
    >
        <div className="mx-auto w-full max-w-[1600px]">
          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 pt-10 pb-8 font-secondary text-lg font-semibold leading-6 text-[#030712] md:px-8 lg:flex-nowrap lg:justify-between lg:gap-x-0 lg:px-[152px] lg:pt-[64px] lg:pb-[62px] lg:text-2xl"
            aria-label="Footer navigation"
            data-node-id="61:1914"
            data-name="List"
          >
            {FOOTER_NAV.map((item, index) => (
              <span key={item.label} className="contents">
                <Link
                  href={item.href}
                  className="whitespace-nowrap transition-opacity hover:opacity-70"
                  data-node-id={
                    index === 0
                      ? "61:1915"
                      : index === 1
                        ? "61:1916"
                        : index === 2
                          ? "61:1917"
                          : "61:1918"
                  }
                >
                  {item.label}
                </Link>
                {index < FOOTER_NAV.length - 1 ? (
                  <span
                    className="size-3 shrink-0 bg-[#d1d5db]"
                    aria-hidden
                    data-node-id={
                      index === 0
                        ? "61:1919"
                        : index === 1
                          ? "61:1920"
                          : "61:1921"
                    }
                    data-name="Item"
                  />
                ) : null}
              </span>
            ))}
          </nav>

          <div
            className="relative flex min-h-[200px] items-center justify-center border-y border-solid border-[rgba(3,7,18,0.1)] px-4 py-10 sm:min-h-[240px] md:min-h-[280px] lg:min-h-[475px] lg:py-0"
            data-node-id="61:1922"
            data-name="Border"
          >
            <span
              className="pointer-events-none absolute left-[-4px] top-[-3px] hidden size-[6px] bg-[#030712] lg:block"
              data-node-id="61:1958"
              data-name="Background"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute bottom-[-3px] left-[-3px] hidden size-[6px] bg-[#030712] lg:block"
              data-node-id="61:1960"
              data-name="Background"
              aria-hidden
            />
            <span
              className="pointer-events-none absolute bottom-[-3px] right-[-3px] hidden size-[6px] bg-[#030712] lg:block"
              data-node-id="61:1961"
              data-name="Background"
              aria-hidden
            />

            <div
              className="pointer-events-none absolute left-0 top-0 hidden h-[120px] w-[140px] overflow-hidden opacity-60 sm:block md:h-[180px] md:w-[210px] lg:h-[240px] lg:w-[281px] lg:opacity-100"
              data-node-id="61:1946"
              data-name="shape-01.svg"
            >
              <img
                alt=""
                className="size-full object-contain object-left-top"
                src={imgShape01Svg}
              />
            </div>

            <div
              className="pointer-events-none absolute bottom-0 right-0 hidden h-[120px] w-[140px] overflow-hidden opacity-60 sm:block md:h-[180px] md:w-[210px] lg:h-[240px] lg:w-[281px] lg:opacity-100"
              data-node-id="61:1952"
              data-name="shape-02.svg"
            >
              <img
                alt=""
                className="size-full object-contain object-right-bottom"
                src={imgShape02Svg}
              />
            </div>

            <Link href="/" className="relative z-[1]">
              <img
                alt="TGT Nexus"
                className="block h-auto max-h-[80px] w-auto max-w-[min(752px,88vw)] object-contain sm:max-h-[120px] lg:max-h-[157px]"
                src={FOOTER_LOGO}
              />
            </Link>
          </div>

          <div className="tgt-footer-copyright flex flex-col items-center gap-5 px-0 py-9 font-secondary text-[#030712] md:flex-row md:items-center md:justify-between md:px-0">
            <ul
              className="tgt-footer-social flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold leading-[14px] md:justify-start"
              data-node-id="61:1967"
              data-name="List"
            >
              {FOOTER_SOCIAL.map((item, index) => (
                <li
                  key={item.href}
                  data-node-id={
                    index === 0
                      ? "61:1968"
                      : "61:1969"
                  }
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-70"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <p
              className="text-center text-base font-medium leading-[14px] text-black md:flex-1"
              data-node-id="61:1962"
            >
              &copy; 2026 TGTNexus - All Rights Reserved
            </p>

            <p
              className="text-center text-sm font-semibold leading-normal md:text-right"
              data-node-id="61:1964"
            >
              Terms & Conditions | Privacy Policy
            </p>
          </div>
        </div>
    </section>
  );
}
