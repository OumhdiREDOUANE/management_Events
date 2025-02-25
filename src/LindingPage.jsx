import SectionHero from "./SectionHero/SectionHero";
import { useMediaQuery } from "react-responsive";
function LindingPage(){
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

return  <div style={{'height':'1000px'}}>
<SectionHero/>

</div>
  
}



export default LindingPage