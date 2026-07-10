const ARROW_LEFT = "/agenio/assets/images/cta/arrow-left.svg";
const ARROW_RIGHT = "/agenio/assets/images/cta/arrow-right.svg";

export default function CtaSection() {
  return (
    <div className="border border-[rgba(3,7,18,0.1)] border-solid relative size-full" data-node-id="54:1337" data-name="Border">
      <div className="absolute h-[615px] overflow-clip right-[-1px] top-0 w-[1600px]" data-node-id="54:1338" data-name="grid.svg">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[616px] left-1/2 top-[calc(50%+0.5px)] w-[1600px]" data-node-id="54:1339" data-name="grid.svg">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={"/agenio/assets/images/career-bg-2.png"} />
        </div>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute bg-clip-text flex flex-col font-primary font-medium justify-center leading-[0] left-[380.02px] right-[372.98px] text-[120px] text-[transparent] text-center top-[calc(50%-110px)] tracking-[-7.2px] uppercase whitespace-nowrap" data-node-id="54:1341" style={{ backgroundImage: "linear-gradient(140.4438116569271deg, rgb(85, 89, 92) 21.13%, rgb(0, 0, 0) 80.53%)" }}>
        <p className="leading-[120px] mb-0">start Your</p>
        <p className="leading-[120px]">Career With Us</p>
      </div>
      <div className="-translate-y-1/2 absolute aspect-[105/105] left-[746.5px] overflow-clip right-[746.5px] top-[calc(50%+93.5px)]" data-node-id="54:1342" data-name="cta-logo.svg">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[105px] top-1/2" data-node-id="54:1343" data-name="cta-logo.svg" />
      </div>
      <div className="-translate-y-1/2 absolute contents left-[72px] right-[1405px] top-[calc(50%-161px)]">
        <div className="-translate-y-1/2 absolute aspect-[27/32] left-[73px] opacity-15 overflow-clip right-[1500px] top-[calc(50%-161px)] tgt-cta-arrow-left-1">
          <img
            alt=""
            className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 block h-[32px] w-[26px]"
            height={32}
            src={ARROW_RIGHT}
            width={26}
          />
        </div>
        <div className="-translate-y-1/2 absolute aspect-[26/32] left-[120px] opacity-15 overflow-clip right-[1454px] top-[calc(50%-161px)] tgt-cta-arrow-left-2">
          <img
            alt=""
            className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 block h-[32px] w-[26px]"
            height={32}
            src={ARROW_RIGHT}
            width={26}
          />
        </div>
        <div className="-translate-y-1/2 absolute aspect-[26/32] left-[168px] opacity-15 overflow-clip right-[1406px] top-[calc(50%-161px)] tgt-cta-arrow-left-3">
          <img
            alt=""
            className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 block h-[32px] w-[26px]"
            height={32}
            src={ARROW_RIGHT}
            width={26}
          />
        </div>
      </div>
      <div className="-translate-y-1/2 absolute contents left-[1405px] right-[72px] top-[calc(50%-161px)]">
        <div className="-translate-y-1/2 absolute aspect-[26/32] left-[1406px] opacity-15 overflow-clip right-[168px] top-[calc(50%-161px)] tgt-cta-arrow-1">
          <img
            alt=""
            className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 block h-[32px] w-[26px]"
            height={32}
            src={ARROW_LEFT}
            width={26}
          />
        </div>
        <div className="-translate-y-1/2 absolute aspect-[26/32] left-[1454px] opacity-15 overflow-clip right-[120px] top-[calc(50%-161px)] tgt-cta-arrow-2">
          <img
            alt=""
            className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 block h-[32px] w-[26px]"
            height={32}
            src={ARROW_LEFT}
            width={26}
          />
        </div>
        <div className="-translate-y-1/2 absolute aspect-[27/32] left-[1500px] opacity-15 overflow-clip right-[73px] top-[calc(50%-161px)] tgt-cta-arrow-3">
          <img
            alt=""
            className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 block h-[32px] w-[26px]"
            height={32}
            src={ARROW_LEFT}
            width={26}
          />
        </div>
      </div>
    </div>
  );
}
