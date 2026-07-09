const imgGridSvg = "https://www.figma.com/api/mcp/asset/a0117d0b-2cd7-4f25-917b-9a90597822bc";
const imgGroup = "https://www.figma.com/api/mcp/asset/698def2b-dc78-440b-9126-4499bfd4b061";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/163e2e1d-3fbd-4875-a315-b7ec22f2efd5";

export default function CtaSection() {
  return (
    <div className="border border-[rgba(3,7,18,0.1)] border-solid relative size-full" data-node-id="54:1337" data-name="Border">
      <div className="absolute h-[615px] overflow-clip right-[-1px] top-0 w-[1600px]" data-node-id="54:1338" data-name="grid.svg">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[616px] left-1/2 top-[calc(50%+0.5px)] w-[1600px]" data-node-id="54:1339" data-name="grid.svg">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={"/agenio/assets/images/career bg.png"} />
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute bg-clip-text flex flex-col font-primary font-medium justify-center leading-[0] left-[380.02px] right-[372.98px] text-[120px] text-[transparent] text-center top-[calc(50%-110px)] tracking-[-7.2px] uppercase whitespace-nowrap" data-node-id="54:1341" style={{ backgroundImage: "linear-gradient(140.4438116569271deg, rgb(85, 89, 92) 21.13%, rgb(0, 0, 0) 80.53%)" }}>
        <p className="leading-[120px] mb-0">start Your</p>
        <p className="leading-[120px]">Career With Us</p>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[105/105] left-[746.5px] overflow-clip right-[746.5px] top-[calc(50%+93.5px)]" data-node-id="54:1342" data-name="cta-logo.svg">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[105px] top-1/2" data-node-id="54:1343" data-name="cta-logo.svg" />
      </div>
      <div className="-translate-y-1/2 absolute contents left-[1405px] right-[72px] top-[calc(50%-161px)]" data-node-id="54:1461">
        <div className="-translate-y-1/2 absolute aspect-[26/32] left-[1406px] opacity-15 overflow-clip right-[168px] top-[calc(50%-161px)] tgt-cta-arrow-1" data-node-id="54:1351" data-name="arrow-left.svg">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[32px] left-[calc(50%+0.67px)] overflow-clip top-1/2 w-[26px]" data-node-id="54:1352" data-name="arrow-left.svg">
            <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="54:1353" data-name="Mask group">
              <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.667px_5.333px] mask-size-[25.333px_32px]" data-node-id="54:1365" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute aspect-[26/32] left-[1454px] opacity-15 overflow-clip right-[120px] top-[calc(50%-161px)] tgt-cta-arrow-2" data-node-id="54:1367" data-name="arrow-left.svg">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[32px] left-[calc(50%+0.02px)] overflow-clip top-1/2 w-[26px]" data-node-id="54:1368" data-name="arrow-left.svg">
            <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="54:1369" data-name="Mask group">
              <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.667px_5.333px] mask-size-[25.333px_32px]" data-node-id="54:1381" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute aspect-[27/32] left-[1500px] opacity-15 overflow-clip right-[73px] top-[calc(50%-161px)] tgt-cta-arrow-3" data-node-id="54:1383" data-name="arrow-left.svg">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[32px] left-[calc(50%+0.85px)] overflow-clip top-1/2 w-[26px]" data-node-id="54:1384" data-name="arrow-left.svg">
            <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="54:1385" data-name="Mask group">
              <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.667px_5.333px] mask-size-[25.333px_32px]" data-node-id="54:1397" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
