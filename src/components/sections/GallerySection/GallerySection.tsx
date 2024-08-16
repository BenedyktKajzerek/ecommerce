import car from "../../../assets/cars/audi2.jpg"

const GallerySection = () => {
  return (
    <section className="pt-40">
      <div className="container">

        <div>
          <a href="/get-started/" className="block">
            <div>
              <img src={ car } alt="" className="w-[800px] h-auto"/>
            </div>
            
            <div>

            </div>
          </a>

          <a href="/get-more-info/" className="block">

          </a>
        </div>

      </div>
    </section>
  )
};

export { GallerySection };
