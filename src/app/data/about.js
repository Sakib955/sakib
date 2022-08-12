import { GoDeviceDesktop } from "react-icons/go";
import { MdOutlineAppSettingsAlt, MdOutlineDesignServices } from "react-icons/md";
import { SiAdobeindesign } from "react-icons/si";

export const ABOUT = {
    title: "About Me",
    name: "Md. Sakib",
    description: "I am a web developer with a passion for building beautiful, responsive websites and applications. I have a background in graphic design and I am currently working on a career in web development.",
    exports: ['JavaScript', 'React', 'UI/UX'],
    image: "/Asset/me5.png",
    services: [
        {
            title: "Web Development",
            text: "I am an expert on the ground of web development and can do many things related to the job.",
            icon: <GoDeviceDesktop size={33} />
        },
        {
            title: "Mobile Apps",
            text: "Mobile apps design middle expert me but not expert moblie apps development",
            icon: <MdOutlineAppSettingsAlt size={33} />
        },
        {
            title: "UI/UX Design",
            text: "My UI/UX design very awesome. UI/UX design looks very nice create me",
            icon: <MdOutlineDesignServices size={33} />
        },
        {
            title: "Web Design",
            text: "I am very expert at web design & I can desing professional wwbsite. My design experience 2 years plas. ",
            icon: <SiAdobeindesign size={33} />
        },
    ]
}