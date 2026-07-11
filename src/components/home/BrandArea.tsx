import BrandMarquee from "./BrandMarquee";

const imgGroup = "https://www.figma.com/api/mcp/asset/0feb499f-4d6a-4d80-8224-16251848fdea";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/6abece79-36ca-4891-adf1-0d0cbcce9229";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/52e01849-fd3e-4816-97ea-cfccfb64dec2";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/2cadbca6-2993-4c2f-9661-7aa7ca06b63e";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/1b4bcc51-2e35-447e-9715-1c55a346b808";
const imgGroup5 = "https://www.figma.com/api/mcp/asset/883e3784-622a-4cad-93cd-8f2c1c0d301d";
const imgGroup10 = "https://www.figma.com/api/mcp/asset/0a6d5067-610b-46db-927f-1c5c112bc75e";
const imgGroup11 = "https://www.figma.com/api/mcp/asset/e0a69106-96df-423e-a986-30cb080a47c0";
const imgVector = "https://www.figma.com/api/mcp/asset/87e6789f-2750-4b72-aeda-e9d5ceffd99e";

const brands = [
  { mask: imgGroup, src: imgGroup1, width: "w-[79px]", height: "h-[64px]", maskSize: "79px 64px" },
  { mask: imgGroup2, src: imgGroup3, width: "w-[164px]", height: "h-[30px]", maskSize: "164px 30px", inset: "inset-[0_0.13%_0_0]" },
  { mask: imgGroup4, src: imgGroup5, width: "size-[64px]", height: "size-[64px]", maskSize: "64px 64px" },
  { mask: imgGroup10, src: imgGroup11, width: "w-[153px]", height: "h-[30px]", maskSize: "153px 30px" },
];

type BrandAreaProps = {
  variant?: "canvas" | "page";
};

function BrandLabel() {
  return (
    <>
      <p className="mb-0">{"//WE'RE"}</p>
      <p>TRUSTED BY</p>
    </>
  );
}

export default function BrandArea({ variant = "canvas" }: BrandAreaProps) {
  const isHome = variant === "canvas";

  return (
    <div
      className={`tgt-brand-area tgt-brand-area--strip ${
        isHome ? "tgt-brand-area--home" : "tgt-brand-area--page"
      } border border-solid border-[rgba(3,7,18,0.1)] bg-white`}
      data-node-id={isHome ? "3:3664" : undefined}
    >
      <div className="tgt-brand-label tgt-brand-label--strip text-[#030712]">
        <BrandLabel />
      </div>

      <div className="tgt-brand-logos-track tgt-brand-logos-track--strip">
        <BrandMarquee brands={brands} fullWidth />
        {isHome ? <div className="tgt-brand-track-divider" aria-hidden /> : null}
      </div>

      {isHome ? (
        <>
          <div className="tgt-brand-corner-decor tgt-brand-corner-decor--home" aria-hidden>
            {/* <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgVector} /> */}
          </div>
          <div className="tgt-brand-pixel tgt-brand-pixel--tl" aria-hidden />
          <div className="tgt-brand-pixel tgt-brand-pixel--bl" aria-hidden />
        </>
      ) : null}
    </div>
  );
}
