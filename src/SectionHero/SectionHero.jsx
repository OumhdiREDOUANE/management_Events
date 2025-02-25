import AnimationSection from "../AnimationSection/AnimationSection"
import NaveBar from "../navbar/NavBar";
import style from "./SectionHero.module.css";


function SectionHero() {
 

  return (
    <div>
      
        <div className={style.container}>
         
          <NaveBar />
          <AnimationSection />
        </div>
     
      
    </div>
  );
}
export default SectionHero;
