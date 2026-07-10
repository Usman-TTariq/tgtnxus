const imgShape01Svg = "/agenio/assets/images/logo/shape-01.svg";
const imgShape02Svg = "/agenio/assets/images/logo/shape-02.svg";
const footerLogo = "/agenio/assets/images/footer-logo.png";
const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Our Team", href: "#team" },
] as const;

const SOCIAL_LINKS = [
  "Instagram",
  "Linkedin",
  "Dribbble",
  "Behance",
] as const;

export default function Footer() {
  return (
    <section
      className="h-full w-full border border-solid border-[rgba(3,7,18,0.1)] bg-[#f3f4f6]"
      data-node-id="61:1913"
      data-name="wpr footer area start"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Top navigation */}
        <nav
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 pt-10 pb-8 font-secondary text-lg font-semibold leading-6 text-[#030712] md:px-8 lg:flex-nowrap lg:justify-between lg:gap-x-0 lg:px-[152px] lg:pt-[64px] lg:pb-[62px] lg:text-2xl"
          aria-label="Footer navigation"
          data-node-id="61:1914"
          data-name="List"
        >
          {NAV_LINKS.map((item, index) => (
            <span key={item.label} className="contents">
              <a
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
              </a>
              {index < NAV_LINKS.length - 1 ? (
                <span
                  className="hidden size-3 shrink-0 bg-[#d1d5db] lg:block"
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

        {/* Logo band */}
        <div
          className="relative flex min-h-[240px] items-center justify-center border-y border-solid border-[rgba(3,7,18,0.1)] px-4 py-10 sm:min-h-[320px] md:min-h-[400px] lg:min-h-[475px] lg:py-0"
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

          <img
            alt="TGT Nexus"
            className="relative z-[1] block h-auto max-h-[80px] w-auto max-w-[min(752px,88vw)] object-contain sm:max-h-[120px] lg:max-h-[157px]"
            src={footerLogo}
          />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-5 px-4 py-8 font-secondary text-[#030712] md:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-9">
          <ul
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold leading-[14px] lg:justify-start"
            data-node-id="61:1967"
            data-name="List"
          >
            {SOCIAL_LINKS.map((label, index) => (
              <li
                key={label}
                data-node-id={
                  index === 0
                    ? "61:1968"
                    : index === 1
                      ? "61:1969"
                      : index === 2
                        ? "61:1970"
                        : "61:1971"
                }
              >
                {label}
              </li>
            ))}
          </ul>

          <p
            className="text-center text-base font-medium leading-[14px] text-black lg:flex-1"
            data-node-id="61:1962"
          >
            © 2026 TGTNexus - All Rights Reserved
          </p>

          <p
            className="text-center text-sm font-semibold leading-normal lg:text-right"
            data-node-id="61:1964"
          >
            Terms & Conditions | Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}
