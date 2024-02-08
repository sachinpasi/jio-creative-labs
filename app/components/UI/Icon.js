import Image from "next/image";

const Icon = ({ name, ...props }) => {
  const iconPaths = {
    LOGO_HORIZONTAL: "/images/logo/logo_horizontal.svg.svg",
    LOGO_ROUND: "/images/logo/logo_round_colored.svg",
    HERO: "/images/banner.svg",
    ILLUSRTATION_1: "/images/illustration-1.png",
    VECTOR: "/images/vector.svg",
    LEFT_DOWN_ARROW: "/images/left-down-arrow.svg",
    SMALL_LEFT_DOWN_ARROW: "/images/small-left-down-arrow.svg",
    SMALL_LEFT_DOWN_ARROW_WHITE: "/images/small-left-down-arrow-white.svg",
    ILLUSRTATION_2: "/images/Illustration-2.png",
    ILLUSRTATION_3: "/images/Illustration3.svg",
    SLIDE_1: "/images/Slide1.png",
    SLIDE_2: "/images/Slide2.png",
    SLIDE_3: "/images/Slide3.png",
    SLIDE_4: "/images/Slide4.png",
    SLIDE_5: "/images/Slide5.png",
    BALAJI: "/images/balaji.png",
    COLORS: "/images/colors.png",
    DETTOL: "/images/dettol.png",
    HDFC: "/images/hdfc.png",
    ROSO: "/images/rosso.png",
    SWIGGY: "/images/swiggy.png",
    THOMOS: "/images/thomos.png",
    INSTA: "/images/insta.png",
    VERIFED: "/images/verfied.png",
    INSTA_1: "/images/insta1.png",
    INSTA_2: "/images/insta2.png",
    INSTA_3: "/images/insta3.png",
    INSTA_4: "/images/insta4.png",
    INSTA_5: "/images/insta5.png",
    JCL_LOGO_ROUND: "/images/logo/jcl-round.svg",
    FB: "/images/fb.svg",
    YT: "/images/Icon/Youtubeyt.svg",
    INSTA_WHITE: "/images/Icon/Instagraminstawhite.svg",
    X: "/images/Icon/Xx.svg",
    QOUTES_UP: "/images/qoutes-up.png",
    QOUTES_DOWN: "/images/qoutes-down.png",
    AVATAR: "/images/avatar.png",
    PITCH: "/images/pitch-please.png",
    CONTACT_1: "/images/contact1.png",
    CONTACT_2: "/images/contact2.png",
    WORK_1: "/images/work1.png",
  };

  if (name in iconPaths) {
    const iconPath = iconPaths[name];
    return <Image src={iconPath} alt={name} {...props} quality={100} />;
  } else {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
};

export default Icon;
