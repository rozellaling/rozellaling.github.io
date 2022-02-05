import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Navigation, SwiperOptions, Pagination, Autoplay } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  // autoplayOptions: AutoplayOptions = {
  //   delay: 3000,
  // };

  images: {
    imageUrl?: string;
    backgroundPosition?: string;
    quote?: string;
    videoUrl?: string;
  }[] =
    [
      {
        imageUrl: 'assets/images/new/earring1.jpg',
        // backgroundPosition: "0 -180px",
        // quote: "Accessories"
      },
      {
        imageUrl: 'assets/images/slider/accessories15.jpg',
        backgroundPosition: "0 -120px",
        // quote: "Imagination leads to innovation."
        quote: "Accessories"
      },

      {
        imageUrl: 'assets/images/new/handylight1_new.jpg',
        // backgroundPosition: "0 -200px",
        quote: "3D Models"
      },

      {
        imageUrl: 'assets/images/metalart/product8.jpg',
        backgroundPosition: "0 -180px",
        quote: "Metal Art"
      },

    ];

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true }
  };
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
