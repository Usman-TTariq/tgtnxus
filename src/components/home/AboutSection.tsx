import AboutSectionMobile from "./AboutSectionMobile";
import { ABOUT_FEATURES, ABOUT_IMAGE, ABOUT_INTRO, ABOUT_PATTERN } from "./about-data";

export default function AboutSection() {
    return (
        <section id="about" className="tgt-about-section relative h-full w-full" data-node-id="3:3887">
            <AboutSectionMobile />

            <div className="tgt-about-desktop hidden md:block relative h-full w-full">
            <div className="tgt-about-panel relative h-[1020px] w-full border border-solid border-[rgba(3,7,18,0.1)] bg-white" data-node-id="3:3741">
                <div className="tgt-about-hero">
                    <div className="tgt-about-hero-label" data-node-id="3:3749">
                        <div className="tgt-sub-title">
                            <p>ABOUT US</p>
                        </div>
                        <div className="tgt-about-hero-label-mark" />
                    </div>

                    <p
                        className="tgt-about-quote tgt-quote-reveal tgt-about-hero-quote font-normal"
                        data-node-id="3:3744"
                    >
                        <span className="tgt-about-brand font-secondary font-bold">
                            TGT Nexus
                        </span>
                        {" "}
                        {ABOUT_INTRO}
                    </p>
                </div>

                <div className="tgt-about-corner-mark absolute left-[-3px] right-[1595px] top-[451px] h-[6px] bg-[#030712]"/>
                <div className="tgt-about-features absolute left-0 top-[451px] w-[795px]">
                    <div className="border-t border-solid border-[#dee2e6] px-[56px] py-[26px]">
                        <p className="font-secondary text-[18px] font-medium leading-[21px] text-[#535353]">
                            OUR RESULTS SPEAK FOR THEMSELVES. EACH NUMBER
                            <br/>
                            REPRESENTS THE TRUST WE&apos;VE BUILT.
                        </p>
                    </div>

                    {
                    ABOUT_FEATURES.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div key={
                                    feature.title
                                }
                                className="flex items-center gap-[20px] border-t border-solid border-[#dee2e6] px-[56px] py-[26px]">
                                <div className="tgt-about-feature-icon flex size-[72px] shrink-0 items-center justify-center">
                                    <Icon/>
                                </div>
                                <div className="min-w-0">
                                    <p className="tgt-stat-title mb-[10px] capitalize text-[#030712]">
                                        {
                                        feature.title
                                    }</p>
                                    <p className="font-secondary text-[20px] font-medium leading-[24px] text-[#6b7280]">
                                        {
                                        feature.description
                                    } </p>
                                </div>
                            </div>
                        );
                    })
                } </div>

                <div className="tgt-about-image tgt-parallax-wrap absolute left-[795px] right-0 top-[451px] h-[504px] overflow-hidden" data-node-id="3:3857">
                    <img alt="TGT Nexus team and CEO quote" className="tgt-parallax-img size-full object-cover object-left-top"
                        src={ABOUT_IMAGE}/>
                </div>

                <div className="tgt-about-corner-mark absolute left-[-3px] right-[1595px] top-[951px] h-[6px] bg-[#030712]"/>

                <div className="tgt-about-corner-mark absolute left-[-3px] right-[1595px] top-[1015px] h-[6px] bg-[#030712]"/>
                <div className="tgt-about-corner-mark absolute left-[1596px] right-[-4px] top-[1015px] h-[6px] bg-[#030712]"/>
                <div className="tgt-about-corner-mark absolute left-[-3px] top-[-3px] size-[6px] bg-[#030712]"/>
                <div className="tgt-about-corner-mark absolute bottom-[-3px] left-[-3px] size-[6px] bg-[#030712]"/>
            </div>
            <div className="overflow-hidden">
                <img src={ABOUT_PATTERN}
                    alt=""
                    className="w-full h-auto"/>
            </div>
            </div>
        </section>
    );
}
