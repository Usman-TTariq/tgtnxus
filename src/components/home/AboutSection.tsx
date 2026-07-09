import {AboutIcon01, AboutIcon02, AboutIcon03} from "./AboutFeatureIcons";

const PATTERN = "/agenio/assets/images/pattern.png";
const IMG_ABOUT_HOME = "/agenio/assets/images/about-us-home.png";

const features = [
    {
        icon: AboutIcon01,
        title: "Strategic Guidance",
        description: "Providing insightful guidance and strategic direction to help you achieve your business objectives and outshine the competition."
    }, {
        icon: AboutIcon02,
        title: "24/7 Support",
        description: "Round-the-clock assistance, ensuring that your needs are met anytime, anywhere, with our 24/7 dedicated support."
    }, {
        icon: AboutIcon03,
        title: "Custom Request",
        description: "Unleash your imagination and let us create a bespoke solution that perfectly aligns with your specific needs and aspirations."
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="relative h-full w-full" data-node-id="3:3887">
            <div className="relative h-[1020px] w-full border border-solid border-[rgba(3,7,18,0.1)] bg-white" data-node-id="3:3741">
                {/* ABOUT US label */}
                <div className="absolute left-[56px] top-[80px] h-[24.561px] bg-[#f3f4f6] pr-[28px]" data-node-id="3:3749">
                    <div className="tgt-sub-title absolute left-[28px] top-1/2 -translate-y-1/2 text-[#030712]">
                        <p>ABOUT US</p>
                    </div>
                    <div className="absolute left-[4.68px] top-1/2 size-[14px] -translate-y-1/2 bg-[#ba161c]"/>
                </div>

                {/* Main quote */}
                <p className="tgt-about-quote tgt-quote-reveal absolute left-[56px] top-[132px] max-w-[1488px] pr-[56px] font-normal text-[#030712]" data-node-id="3:3744">
                    <span className="font-secondary font-bold border-b-[6px] border-solid border-[#ff0d16] pb-[2px]">
                        TGT Nexus
                    </span>
                    {" "}
                    is a full-service web development and design company delivering innovative digital solutions. We specialize in
                              custom websites, e-commerce, mobile apps, and digital marketing. Our team creates scalable, user-focused
                              solutions that help businesses strengthen their online presence, reach the right audience, and achieve
                              sustainable growth.
                </p>

                {/* Divider */}
                <div className="absolute left-[-3px] right-[1595px] top-[451px] h-[6px] bg-[#030712]"/> {/* Left column — features */}
                <div className="absolute left-0 top-[451px] w-[795px]">
                    <div className="border-t border-solid border-[#dee2e6] px-[56px] py-[26px]">
                        <p className="font-secondary text-[18px] font-medium leading-[21px] text-[#535353]">
                            OUR RESULTS SPEAK FOR THEMSELVES. EACH NUMBER
                            <br/>
                            REPRESENTS THE TRUST WE&apos;VE BUILT.
                        </p>
                    </div>

                    {
                    features.map((feature) => {
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

                {/* Right column — single composite image */}
                <div className="absolute left-[795px] right-0 top-[451px] h-[504px] overflow-hidden" data-node-id="3:3857">
                    <img alt="TGT Nexus team and CEO quote" className="size-full object-cover object-left-top"
                        src={IMG_ABOUT_HOME}/>
                </div>

                {/* Bottom divider */}
                <div className="absolute left-[-3px] right-[1595px] top-[951px] h-[6px] bg-[#030712]"/> {/* Bottom pattern */}

                <div className="absolute left-[-3px] right-[1595px] top-[1015px] h-[6px] bg-[#030712]"/>
                <div className="absolute left-[1596px] right-[-4px] top-[1015px] h-[6px] bg-[#030712]"/>
                <div className="absolute left-[-3px] top-[-3px] size-[6px] bg-[#030712]"/>
                <div className="absolute bottom-[-3px] left-[-3px] size-[6px] bg-[#030712]"/>
            </div>
            <div className="overflow-hidden">
                <img src={PATTERN}
                    alt=""
                    className="w-full h-auto"/>
            </div>
        </section>
    );
}
