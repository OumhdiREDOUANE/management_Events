import AnimationSection from "./AnimationSection"
import NaveBar from "./NavBar"
import style from "./SectionHero.module.css"


function SectionHero(){
    return<div className={style.container}>
        <NaveBar/>
        <AnimationSection/>
    </div>
}
export default  SectionHero