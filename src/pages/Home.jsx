import { ThemeToggle } from "../Componentts/ThemeToggle"
import { StarBackground } from "../Componentts/StarBackGround"

export const Home = () =>{

    return (
         <div className= "min-h-screen bg-background text-foreground overflow-x-hidden">

        {/*Load screen */}

        {/* Theme Toggle */}
        <ThemeToggle/>

        {/* BackGround Effecct Toggle */}
        <StarBackground/>
        {/* Navbar */}

        {/* Main Content */}

        {/* footer  */}




    </div>
    )
}