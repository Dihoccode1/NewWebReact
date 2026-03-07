import "./Hero.css"
import HeroURL from "../../../assets/images/banner/hero.jpg"
export default function HeroSection() {
    return(
<section className="awe-section-2">
            <div className="container">
                <div className="section_slider swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href="#" title="Slider 1">
                                <picture>
                                    <source media="(min-width:1200px)" srcSet={HeroURL} />
                                    <source media="(min-width:992px)" srcSet={HeroURL} />
                                    <source media="(min-width:569px)" srcSet={HeroURL} />
                                    <img src={HeroURL} alt="Ưu đãi sáp vuốt tóc" className="img-responsive" />
                                </picture>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}