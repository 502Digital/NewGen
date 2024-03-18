// import Header from '../../components/Header'
// import HeaderImage from '../../images/car1.jpeg'
import './gallery.css'


const Gallery = () => {
  const galleryLength = 11;
  const images = []

  for(let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/car${i}.jpg`))
  }


  return (
    <>
      {/* <Header title="Gallery" image={HeaderImage}> 
      </Header> */}
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Pic ${index + 1}`} />  
              </article>
            })
          }
        </div>  
      </section>
    </>
  )
}

export default Gallery