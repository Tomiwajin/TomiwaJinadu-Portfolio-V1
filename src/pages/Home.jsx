import { ThemeToggle } from "../Componentts/ThemeToggle"
import { StarBackground } from "../Componentts/StarBackGround"
import { Navbar } from "../Componentts/Navbar"

export const Home = () =>{

    return (
         <div className= "min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Load screen */}
        
        {/* BackGround Effecct Toggle */}
        <StarBackground/>

        {/* Navbar */}
        <Navbar/>

        {/* Main Content */}

        {/* footer  */}




    </div>
    )
}