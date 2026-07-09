import BrandMarquee from "./BrandMarquee";

const imgGroup = "https://www.figma.com/api/mcp/asset/0feb499f-4d6a-4d80-8224-16251848fdea";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/6abece79-36ca-4891-adf1-0d0cbcce9229";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/52e01849-fd3e-4816-97ea-cfccfb64dec2";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/2cadbca6-2993-4c2f-9661-7aa7ca06b63e";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/1b4bcc51-2e35-447e-9715-1c55a346b808";
const imgGroup5 = "https://www.figma.com/api/mcp/asset/883e3784-622a-4cad-93cd-8f2c1c0d301d";
const imgGroup6 = "https://www.figma.com/api/mcp/asset/a3d72404-e083-4dad-93fb-204960bccfbf";
const imgGroup7 = "https://www.figma.com/api/mcp/asset/815fb4a2-a78f-4a86-8dec-aa75041c4ee4";
const imgGroup8 = "https://www.figma.com/api/mcp/asset/5e3ea117-efd4-4daf-81c2-08ab067443de";
const imgGroup9 = "https://www.figma.com/api/mcp/asset/cd86b3c2-185e-4bcb-89ac-80ad9ed59a60";
const imgGroup10 = "https://www.figma.com/api/mcp/asset/0a6d5067-610b-46db-927f-1c5c112bc75e";
const imgGroup11 = "https://www.figma.com/api/mcp/asset/e0a69106-96df-423e-a986-30cb080a47c0";
const imgVector = "https://www.figma.com/api/mcp/asset/87e6789f-2750-4b72-aeda-e9d5ceffd99e";

const brands = [
  { mask: imgGroup, src: imgGroup1, width: "w-[79px]", height: "h-[64px]", maskSize: "79px 64px" },
  { mask: imgGroup2, src: imgGroup3, width: "w-[164px]", height: "h-[30px]", maskSize: "164px 30px", inset: "inset-[0_0.13%_0_0]" },
  { mask: imgGroup4, src: imgGroup5, width: "size-[64px]", height: "size-[64px]", maskSize: "64px 64px" },
  { mask: imgGroup6, src: imgGroup7, width: "w-[139px]", height: "h-[62px]", maskSize: "139px 62px", inset: "inset-[0.91%_0.7%_0.64%_0.52%]", maskPosition: "-0.723px -0.564px" },
  { mask: imgGroup8, src: imgGroup9, width: "w-[80px]", height: "h-[64px]", maskSize: "80px 64px" },
  { mask: imgGroup10, src: imgGroup11, width: "w-[153px]", height: "h-[30px]", maskSize: "153px 30px" },
];

export default function BrandArea() {
  return (
    <div className="relative size-full border border-solid border-[rgba(3,7,18,0.1)] bg-white" data-node-id="3:3664">
      <div className="tgt-brand-label absolute bottom-[77.77px] left-[53.2px] top-[77.77px] flex w-[93.8px] flex-col justify-center text-[#030712]">
        <p className="mb-0">{"//WE'RE"}</p>
        <p>TRUSTED BY</p>
      </div>

      <div className="absolute left-[200px] top-1/2 flex h-[200px] w-[1206px] -translate-y-1/2 overflow-hidden border-l border-solid border-[rgba(3,7,18,0.1)]">
        <BrandMarquee brands={brands} />
        <div
          className="h-[200px] w-[6px] shrink-0 border-l border-r border-solid border-[rgba(3,7,18,0.1)]"
          aria-hidden
        />
      </div>

      <div className="absolute inset-[calc(34.65%-0.31px)_calc(3.69%-0.93px)_calc(33.66%-0.33px)_calc(91.38%+0.83px)]">
        <img alt="" className="absolute inset-0 block size-full max-w-none" src={imgVector} />
      </div>
      <div className="absolute left-[-3px] top-[-3px] size-[6px] bg-[#030712]" />
      <div className="absolute bottom-[-3px] left-[-3px] size-[6px] bg-[#030712]" />
    </div>
  );
}
