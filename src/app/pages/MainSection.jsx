import ImageFrame from "../components/ImageFrame";
import CustomButton from "../components/CustomButton";
import HighlightedButton from "../components/HighlightedButton";

const MainSection = () => {
    return (
        <div className="h-full w-full flex flex-row max-w-[65rem] max-h-[30rem] gap-5">
            {/* Image Container */}
            <div className="w-128 bg-blue 300">
                <ImageFrame />
            </div>
            {/* Content Container */}
            <div className="w-full flex flex-col gap-4">
                <h1 className="text-6xl font-bold leading-tight text-white">
                    <span className="opacity-35">Hey,</span> I&#39;m Kylle,<br />
                    <span className="opacity-35">A</span> Full-Stack Developer.
                </h1>
                <p className="text-md opacity-35 text-white">
                    21 y/o • Male • Philippines
                </p>
                <p className="text-lg text-white leading-tight">
                    Software developer delivering functional and modern apps.<br />
                    Automates with Python to simplify workflow.
                </p>
                <div className="flex flex-row pointer-events-auto gap-3 mt-5">
                    <CustomButton textValue={"K-Developer@zofky.com"} iconType="mail"/>
                    <CustomButton textValue={"Download CV"} iconType="download"/>
                    <HighlightedButton textValue={"Available For Work"}/>
                </div>
            </div>
        </div>
    );
};



export default MainSection;