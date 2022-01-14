import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Navigation, SwiperOptions, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

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
