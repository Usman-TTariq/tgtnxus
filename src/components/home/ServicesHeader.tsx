import ServicesSectionMobile from "./ServicesSectionMobile";
import { SERVICES_HEADER } from "./services-data";

export default function ServicesHeader() {
  return (
    <>
      <ServicesSectionMobile />

      <div
        className="tgt-services-header-desktop tgt-services-header hidden md:block bg-white border border-[rgba(3,7,18,0.1)] border-solid relative size-full"
        data-node-id="23:14"
      >
        <div
          className="tgt-services-eyebrow absolute bg-[#f3f4f6] h-[25px] left-1/2 -translate-x-1/2 top-[98px] w-[144px]"
          data-node-id="23:112"
          data-name="Background"
        >
          <div className="tgt-sub-title -translate-y-1/2 [word-break:break-word] absolute flex flex-col justify-center left-[28.07px] text-[#030712] top-[12.5px] whitespace-nowrap" data-node-id="23:113">
            <p>OUR SERVICES</p>
          </div>
          <div className="-translate-y-1/2 absolute bg-[#ba161c] left-[4.68px] size-[14.035px] top-1/2" data-node-id="23:114" data-name="Background" />
        </div>
        <div className="tgt-section-title -translate-x-1/2 [word-break:break-word] absolute flex flex-col justify-center left-1/2 text-[#030712] text-center top-[134px] w-[1244px]" data-node-id="23:116">
          <p>{SERVICES_HEADER.title}</p>
        </div>
        <div className="tgt-body-muted -translate-x-1/2 [word-break:break-word] absolute flex flex-col justify-center left-1/2 text-center top-[224px] w-[1070px]" data-node-id="23:122">
          <p>{SERVICES_HEADER.description}</p>
        </div>
      </div>
    </>
  );
}
