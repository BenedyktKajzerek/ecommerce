import audi from "../../../assets/cars-logos/audi.png"
import bentley from "../../../assets/cars-logos/bentley.png"
import bmw from "../../../assets/cars-logos/bmw.png"
import bugatti from "../../../assets/cars-logos/bugatti.png"
import chevrolet from "../../../assets/cars-logos/chevrolet.png"
import ferrari from "../../../assets/cars-logos/ferrari.png"
import ford from "../../../assets/cars-logos/ford.png"
import honda from "../../../assets/cars-logos/honda.png"
import jaguar from "../../../assets/cars-logos/jaguar.png"
import jeep from "../../../assets/cars-logos/jeep.png"
import lamborghini from "../../../assets/cars-logos/lamborghini.png"
import land from "../../../assets/cars-logos/land-rover.png"
import maserati from "../../../assets/cars-logos/maserati.png"
import mercedes from "../../../assets/cars-logos/mercedes.png"
import porsche from "../../../assets/cars-logos/porsche.png"
import tesla from "../../../assets/cars-logos/tesla.png"
import { CarSlide } from "../../ui/carSlide/CarSlide"

import car from "../../../assets/cars/aston-martin.jpg"
import car2 from "../../../assets/cars/audi.jpg"
import car3 from "../../../assets/cars/audi2.jpg"
import car4 from "../../../assets/cars/bmw2.jpg"
import car5 from "../../../assets/cars/camaro.jpg"
import car6 from "../../../assets/cars/corvette.jpg"
import car7 from "../../../assets/cars/ford.jpg"
import car8 from "../../../assets/cars/ford2.jpg"
import car9 from "../../../assets/cars/jeep.jpg"
import car10 from "../../../assets/cars/lamborghini2.jpg"
import car11 from "../../../assets/cars/mercedes.jpg"
import car12 from "../../../assets/cars/mustang.jpg"
import car13 from "../../../assets/cars/nissan.jpg"
import car14 from "../../../assets/cars/porsche.jpg"
import car15 from "../../../assets/cars/porsche2.jpg"
import car16 from "../../../assets/cars/porsche3.jpg"

const carsLogos = [
    audi, bentley, bmw, 
    bugatti, chevrolet, ferrari, 
    ford, honda, jaguar, 
    jeep, lamborghini, land, 
    maserati, mercedes, porsche, 
    tesla
]

const cars = [
    car, car2, car3,
    car4, car5, car6,
    car7, car8, car9,
    car10, car11, car12,
    car13, car14, car15
]

export function SectionThree() {
    return (
        <section className="pt-24 lg:pt-40">
                
            <div data-animated="true" data-direction="left" data-speed="fast" className="scroller">
                <ul className="tag-list scroller_inner">
                    <li>Lamborghini</li>
                    <li>Ferrari</li>
                    <li>Porsche</li>
                    <li>McLaren</li>
                    <li>Rolls Royce</li>
                    <li>Bentley</li>
                    <li>Maserati</li>
                    <li>Jaguar</li>
                    <li>Mercedes</li>
                    <li>BMW</li>
                    <li>Audi</li>
                    <li>Tesla</li>
                    <li>Lamborghini</li>
                    <li>Ferrari</li>
                    <li>Porsche</li>
                    <li>McLaren</li>
                    <li>Rolls Royce</li>
                    <li>Bentley</li>
                    <li>Maserati</li>
                    <li>Jaguar</li>
                    <li>Mercedes</li>
                    <li>BMW</li>
                    <li>Audi</li>
                    <li>Tesla</li>
                    <li>Lamborghini</li>
                    <li>Ferrari</li>
                    <li>Porsche</li>
                    <li>McLaren</li>
                    <li>Rolls Royce</li>
                    <li>Bentley</li>
                    <li>Maserati</li>
                    <li>Jaguar</li>
                    <li>Mercedes</li>
                    <li>BMW</li>
                    <li>Audi</li>
                    <li>Tesla</li>
                </ul>
            </div>

            <div data-animated="true" data-direction="right" data-speed="slow" className="scroller" >
                <ul className="tag-list scroller_inner">
                    {cars.map((car, index) => (                        
                        <CarSlide key={index} src={car} variant={`clip-${index%3+1}`}/>
                    ))}
                    {cars.map((car, index) => (                        
                        <CarSlide key={index} src={car} variant={`clip-${index%3+1}`}/>
                    ))}
                </ul>
            </div>

        </section>
    )
}
