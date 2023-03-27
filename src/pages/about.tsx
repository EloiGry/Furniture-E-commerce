import Newslatter from "@/components/Sections/Home/Newslatter";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Timeline from "@/components/Sections/About/Timeline";

const About = () => {
    return (
        <>
            <Timeline />
            <Stats marginTop="0px"/>
            <Testimonials />
            <Newslatter />
        </>
    );
};

export default About;