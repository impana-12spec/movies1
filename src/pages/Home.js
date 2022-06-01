import React from 'react'

import MovieList from '../components/MovieList'
import SearchForm from './SearchForm'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Home=()=> {
  const options = { 
    responsive: {
      0: {
          items: 1,
      },
      700: {
          items: 1,
      },
      1000: {
          items: 1,

      }, 
  },
  loop:true ,
  nav:true  ,
  margin:8,
  autoplay: true,
  autoplaySpeed:5000,
  autoplayTimeout:10000,
 /*  smartSpeed:3000, */
  }  

    return (
        <div className="home">
          <SearchForm />
          <div className="home-header">   
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-xs-12 col-md-12 "  >
                    <OwlCarousel {...options}  className="owl-theme"  > 
                    <div style={{ backgroundImage: "url(" + "images/dora.jpg" + ")",  }} className='home-sliders'  > 
                    <div className="container pt-2">
                    </div>
                    </div>
                    <div style={{ backgroundImage: "url(" + "images/us.webp" + ")",}} className='home-sliders'  > 
                    <div className="container pt-2">
                   
                    </div>
                    </div>
                    <div style={{ backgroundImage: "url(" + "images/hulk.webp" + ")",}} className='home-sliders'  > 
                    <div className="container pt-2">
                   </div>
                    </div>
                    <div style={{ backgroundImage: "url(" + "images/RR.webp" + ")",}} className='home-sliders'  > 
                    <div className="container pt-2">
                      </div>
                    </div>
                    <div style={{ backgroundImage: "url(" + "images/1917.jpg" + ")",}} className='home-sliders'  > 
                    <div className="container pt-2">
                  </div>
                    </div>
                    </OwlCarousel>
                    </div>
                </div>
            </div>
            </div>
          <MovieList />
        </div>
    )
}

export default Home
