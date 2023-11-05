import Carousel from 'react-bootstrap/Carousel';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src='/images/image-8.png' alt='image1' text="Leonard John Davies" />
        <Carousel.Caption>
          <h3> Cofounder, CEO</h3>
          <img src='/images/social-row-1.png' alt='social' />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/images/image-7.png' alt='image1' text="Freddy Busby" />
        <Carousel.Caption>
          <h3> Project Manager</h3>
          <img src='/images/social-row-1.png' alt='social' />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/images/image-6.png' alt='image1' text="Francis Weber" />
        <Carousel.Caption>
          <h3> Vice Chairman</h3>
          <img src='/images/social-row-1.png' alt='social' />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/images/image-5.png' alt='image1' text="Kyla Obrien" />
        <Carousel.Caption>
          <h3> Head of Authority</h3>
          <img src='/images/social-row-1.png' alt='social' />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/images/image-4.png' alt='image1' text="Dale Banks" />
        <Carousel.Caption>
          <h3> Accountant, Finance</h3>
          <img src='/images/social-row-1.png' alt='social' />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/images/image-3.png' alt='image1' text="Miriam Middleton" />
        <Carousel.Caption>
          <h3> Cofounder, CEO</h3>
          <img src='/images/social-row-1.png' alt='social' />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/images/image-2.png' alt='image1' text="Adrian Dixon" />
        <Carousel.Caption>
          <h3> Support Executive</h3>
          <img src='/images/social-row-1.png' alt='social' />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/images/image-1.png' alt='image1' text="Ellen Walton" />
        <Carousel.Caption>
          <h3> Vice Chairman</h3>
          <img src='/images/social-row-1.png' alt='social' />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;