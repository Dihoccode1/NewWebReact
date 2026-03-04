import Footer from "../Footer/Footer"   
import Header from "../Header/Header" 
import Topbar from "./Topbar/Topbar"
import PolicyBox from "./Policy/PolicyBox"
import HeroSection from "./Hero-slider/Hero"
import Banner from "./ThreeBanner/Banner"
import MoreButton from "./More/MoreButton"
export default function HomePage() {
    return (
        <>
            <Topbar/>
            <Header />
            <PolicyBox />
            <HeroSection />
            <Banner />
            <MoreButton />
            <Footer />
            
        </>
    )
}