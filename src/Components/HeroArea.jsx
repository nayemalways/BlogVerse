import Carousel from 'react-bootstrap/Carousel';

function HeroArea() {
  return (
    <Carousel fade='true'>
      <Carousel.Item interval={3000}>
        <div className="carousel-img">
            <img  className="d-block w-100 hero-img" src="../../public/assets/image/Carousel_image/image_one.jpg" alt="" />
            <div className="overlay"></div>
        </div>
        <Carousel.Caption>
          <h1 className='carousel_h1'>আপনার চিন্তা, গল্প আর সৃজনশীলতার সেরা ঠিকানা</h1>
          <p className='carousel_p'>আপনার চিন্তা, অভিজ্ঞতা এবং সৃজনশীলতাকে সবার সাথে ভাগ করে নিন Blogverse-এ। লেখকদের জন্য একটি অনন্য প্ল্যাটফর্ম যেখানে আপনার শব্দগুলো ছুঁয়ে যাবে হাজারো পাঠকের হৃদয়। আজই যোগ দিন এবং শুরু করুন আপনার গল্প।</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <div className="carousel-img">
        <img  className="d-block w-100 hero-img" src="../../public/assets/image/Carousel_image/image_two.jpg" alt="" />
        <div className="overlay"></div>
      </div>
        <Carousel.Caption>
          <h1 className='carousel_h1'>মনের কথা এবং সৃজনশীলতাকে বিশ্বজুড়ে ছড়িয়ে দেওয়ার প্ল্যাটফর্ম</h1>
          <p className='carousel_p'>আপনার চিন্তা, ধারণা ও গল্প Blogverse-এর মাধ্যমে বিশ্বজুড়ে পৌঁছে দিন। এখানে আপনি পাবেন আপনার কণ্ঠস্বরকে মুক্তভাবে প্রকাশ করার সুযোগ। যোগ দিন এবং শুরু করুন আপনার যাত্রা।</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroArea;