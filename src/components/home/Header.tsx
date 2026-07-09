const imgGroup = "https://www.figma.com/api/mcp/asset/cc2c06cd-9a50-4ed8-84d8-fcf52c15dd8c";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/1435748f-c8bf-41b7-afdf-f1c58f068308";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/3800b096-7964-4fe0-b2e7-aa87c3d37273";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/1e6dc01d-5914-4fb3-ba06-416336d11993";
const imgGroup427321650 = "https://www.figma.com/api/mcp/asset/fe6d99e8-a818-4dd5-bdd4-86a142564055";
const imgGroup427321649 = "https://www.figma.com/api/mcp/asset/9c0c11cf-5722-4974-be02-466b4a7aebec";

type LinkProps = {
  className?: string;
  property1?: "Default";
};

function Link({ className, property1 = "Default" }: LinkProps) {
  return (
    <div className={className || "h-[48px] overflow-clip relative rounded-[12px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.1)] w-[150.47px]"} data-node-id="3:3424">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 150.47 48' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(9.4134 0 0 3.0029 42.342 -5.0016)'><stop stop-color='rgba(255,255,255,0.2)' offset='0'/><stop stop-color='rgba(255,255,255,0)' offset='1'/></radialGradient></defs></svg>\"), linear-gradient(137.66000177120696deg, rgb(64, 69, 74) 21.13%, rgb(41, 44, 46) 80.53%)" }} />
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Urbanist:Bold'] font-bold justify-center leading-[0] left-[calc(50%-0.24px)] text-[16px] text-center text-white top-1/2 whitespace-nowrap" data-node-id="3:3420">
        <p className="leading-[16px]">CONTACT US</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.6),inset_0px_-3px_0px_0px_#1a1a1a,inset_0px_-4px_0px_1px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

export default function Header() {
  return (
    <div className="relative size-full" data-node-id="2:2800" data-name="Header - header area start">
      <div className="absolute bg-[#060606] h-[40px] left-0 right-0 top-0" data-node-id="2:2801" data-name="Background">
        <div className="absolute aspect-[13/16] left-[730.42px] overflow-clip right-[1176.58px] top-[13px]" data-node-id="2:2802" data-name="green-left.svg">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="2:2803" data-name="green-left.svg">
            <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="2:2804" data-name="Mask group">
              <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.666px_16px]" data-node-id="2:2816" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[829.58px] right-[829.38px] top-[12.27px]" data-node-id="2:2881">
          <div className="[word-break:break-word] absolute contents font-['Space_Grotesk:Medium'] font-medium leading-[0] left-[829.58px] right-[829.38px] text-[15.47px] top-[12.27px] whitespace-nowrap" data-node-id="3:2933">
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[829.58px] right-[983.42px] text-white top-[20.27px]" data-node-id="2:2818">
              <p className="leading-[15.47px]">WE ARE HIRING</p>
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[939.62px] right-[829.38px] text-[#ff0d16] top-[20.27px]" data-node-id="2:2819">
              <p className="leading-[15.47px]">MULTIPLE POSITIONS</p>
            </div>
          </div>
        </div>
        <div className="absolute aspect-[13/16] left-[1176.58px] overflow-clip right-[730.42px] top-[13px]" data-node-id="2:2820" data-name="green-right.svg">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="2:2821" data-name="green-right.svg">
            <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="2:2822" data-name="Mask group">
              <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="2:2834" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white border border-[rgba(3,7,18,0.1)] border-solid h-[74px] left-[160px] right-[160px] top-[56px]" data-node-id="2:2836" data-name="Background+Border">
        <div className="-translate-x-1/2 absolute contents left-[calc(50%+0.09px)] top-[25px]" data-node-id="3:2934">
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Space_Grotesk:Bold'] font-bold h-[22.834px] justify-center leading-[0] left-[calc(50%-277.35px)] text-[#030712] text-[17.759px] text-center top-[37.42px] w-[49.304px]" data-node-id="2:2839">
            <p className="leading-[17.759px]">HOME</p>
          </div>
          <div className="absolute bg-[#ff0e16] bottom-[26.43px] h-[1.269px] left-[498px] right-[1053.1px]" data-node-id="2:2840" data-name="Horizontal Divider" />
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Space_Grotesk:Regular'] font-normal h-[22.834px] justify-center leading-[0] left-[646.04px] text-[#030712] text-[17.759px] text-center top-[calc(50%+0.42px)] w-[84.283px]" data-node-id="2:2841">
            <p className="leading-[17.759px]">ABOUT US</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Space_Grotesk:Regular'] font-normal h-[22.834px] justify-center leading-[0] left-[785.18px] text-[#030712] text-[17.759px] text-center top-[calc(50%+0.42px)] w-[79.997px]" data-node-id="2:2842">
            <p className="leading-[17.759px]">SERVICES</p>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Space_Grotesk:Regular'] font-normal justify-center leading-[0] left-[920.18px] text-[#030712] text-[17.759px] text-center top-1/2 whitespace-nowrap" data-node-id="2:2843">
            <p className="leading-[17.759px]">CAREERS</p>
          </div>
          <a className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute cursor-pointer flex flex-col font-['Space_Grotesk:Regular'] font-normal justify-center leading-[0] left-[1058.68px] text-[#030712] text-[17.759px] text-center top-1/2 whitespace-nowrap" data-node-id="2:2844">
            <p className="leading-[17.759px]">OUR TEAM</p>
          </a>
        </div>
        <div className="-translate-y-1/2 absolute border-[rgba(3,7,18,0.1)] border-r border-solid h-[72px] left-[-1px] top-1/2 w-[253px]" data-node-id="2:2846" data-name="VerticalBorder">
          <div className="absolute bg-[#030712] left-[-3px] size-[6px] top-[-3px]" data-node-id="2:2867" data-name="Background" />
          <div className="absolute bg-[#030712] bottom-[-3px] left-[-3px] size-[6px]" data-node-id="2:2868" data-name="Background" />
          <div className="absolute bg-[#030712] right-[-3px] size-[6px] top-[-3px]" data-node-id="2:2869" data-name="Background" />
          <div className="absolute bg-[#030712] bottom-[-3px] right-[-3px] size-[6px]" data-node-id="2:2870" data-name="Background" />
          <div className="absolute contents inset-[28.54%_calc(20.16%-0.8px)_29.31%_calc(20.42%+0.2px)]" data-node-id="3:2917">
            <div className="absolute inset-[36.39%_20.16%_37.46%_33.22%]" data-node-id="3:2918">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup427321650} />
            </div>
            <div className="absolute inset-[28.54%_67.48%_29.31%_20.42%]" data-node-id="3:2927">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup427321649} />
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute border-[rgba(3,7,18,0.1)] border-l border-solid h-[72px] left-[1348px] top-1/2 w-[251.47px]" data-node-id="2:2871" data-name="VerticalBorder">
          <Link className="absolute h-[48px] left-[50px] overflow-clip rounded-[12px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.1)] top-[12px] w-[150.47px]" />
          <div className="absolute bg-[#030712] left-[-3px] size-[6px] top-[-3px]" data-node-id="2:2874" data-name="Background" />
          <div className="absolute bg-[#030712] bottom-[-3px] left-[-3px] size-[6px]" data-node-id="2:2875" data-name="Background" />
          <div className="absolute bg-[#030712] right-[-3px] size-[6px] top-[-3px]" data-node-id="2:2876" data-name="Background" />
          <div className="absolute bg-[#030712] bottom-[-3px] right-[-3px] size-[6px]" data-node-id="2:2877" data-name="Background" />
        </div>
      </div>
    </div>
  );
}
