// import bentley from "../../../assets/cars-logos/bentley.png";
// import bmw from "../../../assets/cars-logos/bmw.png";
// import bugatti from "../../../assets/cars-logos/bugatti.png";
// import chevrolet from "../../../assets/cars-logos/chevrolet.png";
// import ferrari from "../../../assets/cars-logos/ferrari.png";
// import ford from "../../../assets/cars-logos/ford.png";
// import honda from "../../../assets/cars-logos/honda.png";
// import jaguar from "../../../assets/cars-logos/jaguar.png";
// import jeep from "../../../assets/cars-logos/jeep.png";
// import lamborghini from "../../../assets/cars-logos/lamborghini.png";
// import land from "../../../assets/cars-logos/land-rover.png";
// import maserati from "../../../assets/cars-logos/maserati.png";
// import mercedes from "../../../assets/cars-logos/mercedes.png";
// import porsche from "../../../assets/cars-logos/porsche.png";
// import tesla from "../../../assets/cars-logos/tesla.png";
// import { CarSlide } from "./components/CarSlide";

// import car from "../../../assets/cars/aston-martin.jpg";
// import car2 from "../../../assets/cars/audi.jpg";
// import car3 from "../../../assets/cars/audi2.jpg";
// import car4 from "../../../assets/cars/bmw2.jpg";
// import car5 from "../../../assets/cars/camaro.jpg";
// import car6 from "../../../assets/cars/corvette.jpg";
// import car7 from "../../../assets/cars/ford.jpg";
// import car8 from "../../../assets/cars/ford2.jpg";
// import car9 from "../../../assets/cars/jeep.jpg";
// import car10 from "../../../assets/cars/lamborghini2.jpg";
// import car11 from "../../../assets/cars/mercedes.jpg";
// import car12 from "../../../assets/cars/mustang.jpg";
// import car13 from "../../../assets/cars/nissan.jpg";
// import car14 from "../../../assets/cars/porsche.jpg";
// import car15 from "../../../assets/cars/porsche2.jpg";

// const carsLogos = [
//   lamborghini, bmw, tesla,
//   bugatti, chevrolet, ferrari, 
//   ford, porsche, jaguar, 
// ];

// const cars = [
//   car, car2, car3,
//   car4, car5, car6,
//   car7, car8, car9,
// ];
 
// function SliderSection() {
//   return (
//     <section className="pt-24 lg:pt-40 space-y-12">
//       <div className="w-full h-[100px] m-auto relative overflow-hidden">
//           {/* <div className="itemLeft item1">Lamborghini</div>
//           <div className="itemLeft item2">Ferrari</div>
//           <div className="itemLeft item3">Porsche</div>
//           <div className="itemLeft item4">McLaren</div>
//           <div className="itemLeft item5">Rolls Royce</div>
//           <div className="itemLeft item6">Bentley</div>
//           <div className="itemLeft item7">Maserati</div>
//           <div className="itemLeft item8">Jaguar</div>
//           <div className="itemLeft item9">Mercedes</div>
//           <div className="itemLeft item10">BMW</div>
//           <div className="itemLeft item11">Audi</div>
//           <div className="itemLeft item12">Tesla</div> */}
//           {carsLogos.map((carLogo, index) => (   
//             <div key={index} className={`itemLeft item${index}`}>
//               <img src={carLogo} alt="" className="size-24 grayscale"/>
//             </div>                     
//           ))}
//       </div>

//       <div className="w-full h-[300px] m-auto relative overflow-hidden">
//           {cars.map((car, index) => (   
//             <div key={index} className={`itemRight item${index}`}>
//               <CarSlide key={index} src={car} variant={`clip-${index%3+1}`}/>
//             </div>                     
//           ))}
//       </div>
//     </section>
//   );
// };

// export { SliderSection };
