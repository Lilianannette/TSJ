import image1 from "../assets/10.jpg"
import image2 from "../assets/11.jpg"

export default function Choose() {
  return (
    <section id='choose'>
      <div className='choose'>
        <div className="img_tem">
          <a href="">
            <img src={image1} alt="Temple"/>
            <h1>Temple - 神殿 </h1>
          </a>
        </div>
        <div className="img_sanc">
          <a href="">
            <img src={image2} alt="Sanctuaire" />
            <h1>Sanctuaire - 社 </h1>
          </a>
        </div>
      </div>
    </section>
  );
}
