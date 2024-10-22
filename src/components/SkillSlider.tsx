import { heroSectionIconsArray, heroSliderSettings } from "@/locals";
import { useRef } from "react";
import Slider from "react-slick";

const SkillSlider = () => {
  const sliderRef = useRef<Slider>(null);
  return (
    <section className="w-full ">
      <Slider ref={sliderRef} {...heroSliderSettings}>
        {heroSectionIconsArray.map((curIcon, i) => (
          <div
            key={curIcon.title}
            className={`!flex !flex-col !items-center   text-3xl md:text-4xl`}
          >
            <p className="">{curIcon.icon}</p>
            <p className="text-xs">{curIcon.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SkillSlider;
