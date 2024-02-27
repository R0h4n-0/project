import React from 'react';
import bgimg from '../images/bgimg.jpg';

export default function Home() {
  return (
    <div
      className={`bg-cover bg-no-repeat h-screen -mt-0`}
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="flex items-center justify-center h-full">
        Hello !!!! Welcome to the official guitar website where I sell guitar unofficially (Without a contract).
        Welcome to our Guitar Sale Website!
Explore our wide selection of guitars, meticulously curated to cater to every musician's taste and style. Whether you're a seasoned professional or a beginner taking your first steps into the world of music, we have the perfect instrument waiting for you.
Each guitar in our collection is a masterpiece in its own right, crafted with precision and passion by renowned brands and skilled artisans. From the warm tones of acoustic guitars to the electrifying sounds of electric guitars, we offer a diverse range of options to suit every genre and preference.
Our detailed product descriptions provide comprehensive information about each guitar, including its specifications, features, and unique characteristics. Browse through stunning images and immersive videos to get a closer look at the craftsmanship and quality of our instruments.
We understand that price is an important consideration, which is why we strive to offer competitive pricing without compromising on quality. Take advantage of our special discounts and promotions to make your dream guitar a reality without breaking the bank.
Shopping with us is not just about finding the perfect guitar; it's about enjoying a seamless and hassle-free experience from start to finish. Our transparent shipping and returns policy ensures that your purchase reaches you safely and securely, with the option to return or exchange if needed.
But don't just take our word for it hear what our satisfied customers have to say. Their glowing testimonials speak volumes about the exceptional quality of our guitars and the excellence of our service.
Got questions or need assistance? Our friendly team is here to help. Reach out to us via email, phone, or through our convenient contact form, and we'll be delighted to assist you every step of the way. Thank you for choosing us as your destination for all things guitar. Let the music begin!
      </div>
    </div>
  );
}