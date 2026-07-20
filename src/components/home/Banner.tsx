/* Local assets — Figma MCP URLs expire and are not publicly reachable */
const CENTER_LOGO = "/assets/images/center-logo.png";
const HERO_BG = "/assets/images/home-hero-bg.png";
const imgGroup = "/agenio/assets/images/banner/icon/arrow-left.svg";
const imgGroup1 = "/agenio/assets/images/banner/icon/arrow-left.svg";
const imgGroup2 = "/agenio/assets/images/banner/icon/arrow-right.svg";
const imgGroup3 = "/agenio/assets/images/banner/icon/arrow-right.svg";

import BannerWordRotator from "./BannerWordRotator";
import BannerCtaButton from "./BannerCtaButton";
import BannerMobile from "./BannerMobile";

export default function Banner() {
  return (
    <>
      <BannerMobile />
      <div className="tgt-banner-section tgt-banner-desktop hidden md:block border-[rgba(3,7,18,0.1)] border-b border-solid border-t relative size-full" data-node-id="3:2935" data-name="Section - wpr banner area start">
      <div className="tgt-banner-inner absolute border-[rgba(3,7,18,0.1)] border-l border-r border-solid h-[800px] left-[160px] overflow-clip right-[160px] top-0" data-node-id="3:2936" data-name="Border">
        <div className="tgt-banner-bg absolute inset-0 z-0 overflow-hidden" data-name="hero-bg">
          <img
            alt=""
            className="absolute inset-0"
            src={HERO_BG}
          />
        </div>
        <div className="tgt-banner-spine -translate-x-1/2 absolute z-[1] bg-[#f3f4f6] border-[rgba(67,67,67,0.5)] border-dashed border-l border-r bottom-[70%] left-[calc(50%-60px)] top-0 w-[100px]" data-node-id="3:2940" data-name="Background+Border" />
        <div className="tgt-hero-stack absolute z-[1] h-[303px] left-0 right-[-1px] top-[172px]" data-node-id="3:2941" data-name="Heading 1">
          <div className="tgt-hero-icon -translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-57.5px)] rounded-[21px] size-[304px] top-[calc(50%-0.5px)] tgt-animate-scale-in" data-node-id="3:3438">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[21px] size-full" src={CENTER_LOGO} />
          </div>
          <div className="tgt-hero-word-right -translate-y-1/2 absolute bg-[#f3f4f6] border-[rgba(67,67,67,0.5)] border-b border-dashed border-t h-[201px] left-[894px] right-0 top-1/2 tgt-animate-fade-right" data-node-id="3:2943" data-name="Background+Border">
            <BannerWordRotator className="tgt-hero-word-rotator-slot" />
            <div className="absolute h-[16px] left-[-0.71%] overflow-clip right-0 top-[-35px] tgt-arrow-track" data-node-id="3:2945" data-name="Container">
              <div className="-translate-y-1/2 absolute h-[16px] left-[-17.47px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:2946" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:2947" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:2948" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:2960" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[33.53px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:2962" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:2963" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:2964" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:2976" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[84.53px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:2978" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:2979" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:2980" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:2992" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[135.53px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:2994" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:2995" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:2996" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3008" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[186.53px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3010" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3011" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3012" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3024" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[237.53px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3026" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3027" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3028" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3040" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[288.53px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3042" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3043" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3044" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3056" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[339.53px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3058" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3059" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3060" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3072" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[390.53px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3074" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3075" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3076" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3088" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[441.53px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3090" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3091" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3092" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3104" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[492.53px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3106" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3107" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3108" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3120" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[544px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3441" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3442" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3443" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3455" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[595.47px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3457" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3458" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3459" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3471" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[646.93px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3473" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3474" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3475" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3487" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] left-[698.4px] opacity-15 overflow-clip top-1/2 w-[13px]" data-node-id="3:3489" data-name="arrow-left.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3490" data-name="arrow-left.svg">
                  <div className="absolute contents inset-[0_2.57%_0_0]" data-node-id="3:3491" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-33.33%_-16.67%_-25.64%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[3.333px_2.666px] mask-size-[12.666px_16px]" data-node-id="3:3503" style={{ maskImage: `url("${imgGroup}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#030712] left-[-3px] size-[6px] top-[-3px]" data-node-id="3:3122" data-name="Background" />
            <div className="absolute bg-[#030712] bottom-[-3.04px] left-[-3px] size-[6px]" data-node-id="3:3123" data-name="Background" />
          </div>
          <div className="tgt-hero-word-left -translate-y-1/2 absolute bg-[#f3f4f6] border-[rgba(67,67,67,0.5)] border-b border-dashed border-t h-[201px] left-0 right-[1009px] top-1/2 tgt-animate-fade-left" data-node-id="3:3124" data-name="Background+Border">
            <div className="tgt-hero-heading tgt-banner-title -translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute bg-clip-text flex flex-col justify-center left-[calc(50%+0.5px)] text-transparent text-center top-[97.98px] whitespace-nowrap" data-node-id="3:3125" style={{ backgroundImage: "linear-gradient(147.02860246353544deg, rgb(85, 89, 92) 21.13%, rgb(0, 0, 0) 80.53%)" }}>
              <p>We BUILD</p>
            </div>
            <div className="absolute bottom-[-35px] h-[16px] left-0 overflow-clip right-[1.36%] tgt-arrow-track" data-node-id="3:3126" data-name="Container">
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[557.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3127" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3128" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3129" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3141" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[506.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3143" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3144" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3145" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3157" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[455.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3159" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3160" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3161" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3173" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[404.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3175" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3176" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3177" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3189" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[353.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3191" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3192" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3193" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3205" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[302.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3207" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3208" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3209" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3221" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[251.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3223" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3224" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3225" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3237" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[200.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3239" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3240" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3241" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3253" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[149.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3255" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3256" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3257" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3269" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[98.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3271" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3272" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3273" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3285" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="-translate-y-1/2 absolute h-[16px] opacity-15 overflow-clip right-[47.06px] top-[calc(50%+0.04px)] w-[13px]" data-node-id="3:3287" data-name="arrow-right.svg">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-1/2 overflow-clip top-1/2 w-[13px]" data-node-id="3:3288" data-name="arrow-right.svg">
                  <div className="absolute contents inset-[0_2.56%_0_0]" data-node-id="3:3289" data-name="Mask group">
                    <div className="absolute inset-[-16.66%_-23.08%_-16.67%_-35.9%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[4.667px_2.666px] mask-size-[12.667px_16px]" data-node-id="3:3301" style={{ maskImage: `url("${imgGroup2}")` }} data-name="Group">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-[#030712] right-[-3px] size-[6px] top-[-3px]" data-node-id="3:3303" data-name="Background" />
            <div className="absolute bg-[#030712] bottom-[-3.04px] right-[-3px] size-[6px]" data-node-id="3:3304" data-name="Background" />
          </div>
        </div>
        <div className="tgt-banner-desc -translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute z-[1] flex flex-col justify-center left-[calc(50%-57.5px)] text-[#030712] text-center top-[572px] w-[665px] tgt-animate-fade-up" data-node-id="3:3305">
          <p className="leading-[24px]">At TGT Nexus, we are committed to helping businesses thrive in the digital age. Our expert team leverages cutting-edge technologies to drive your growth, providing tailored solutions designed to meet your unique business needs. Whether it’s strategic guidance or round-the-clock support, we’re here to ensure your success at every step of the journey.</p>
        </div>
        <BannerCtaButton className="-translate-x-1/2 absolute left-1/2 top-[664px] z-[1] tgt-animate-fade-up" />
      </div>
    </div>
    </>
  );
}