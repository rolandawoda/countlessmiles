import React, {Component} from 'react';
import Hero from '../components/hero';
import Card from '../components/card';
import Review from '../components/review';
import Wavy from '../components/wavy';
import Footer from '../components/footer';
import Form from '../components/form';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClose: false
    }
  }

  toggleClose = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        isClose: !prevState.isClose
      }
    }
    )
  }

  renderContemt = () => {
    let content = "";

    if(!this.state.isClose) {
      content = (
        <>
        <Hero clicked={this.toggleClose}/>
        <section className="home__experience row">
          <div className="home__experience__text">
            <h2 className="heading-secondary" style={{marginBottom: "10px"}}>Experience Travel <br /> Differently</h2>
            <p className="paragraph">Tute enim adipisicing eu <br /> occaecat enim eu eu represnt.</p>
            <a href="#" className="home__experience__button">Get Started</a>
          </div>
          <div className="home__experience__cards">
            <Card />
            <Card />
            <Card />
          </div>
        </section >
        <Wavy />
        <section className="home__review">
          <div className=" row home__review__header">
            <div>
              <h2 className="heading-secondary">Our Traveler’s Experience</h2>
              <p className="paragraph">Here’s some travel experience from our traveller’s to help you travel</p>
            </div>
            <a href="#" className="home__review__seemore"> SEE MORE</a>           
          </div>
          <div className="home__review__body">
            <Review />
            <Review />
            <Review />         
            <Review />      
          </div>
          <div className=" row home__review__footer">
            <span className="home__review__arrowleft">
              <svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0.145888 5.83705C0.198103 5.88889 0.260035 5.92991 0.328133 5.95777C0.396232 5.98563 0.469159 5.99977 0.542735 5.9994C0.612418 6.00281 0.682054 5.99175 0.747251 5.96691C0.812447 5.94208 0.871792 5.904 0.921543 5.85509L3.51908 3.40186C3.57144 3.34988 3.61299 3.28805 3.64135 3.21995C3.66971 3.15184 3.68431 3.07879 3.68431 3.00501C3.68431 2.93123 3.66971 2.85819 3.64135 2.79008C3.61299 2.72197 3.57144 2.66014 3.51908 2.60817L0.921543 0.154935C0.869921 0.104271 0.808665 0.0644688 0.741398 0.0378824C0.674131 0.011296 0.602217 -0.00153536 0.529906 0.00014629C0.457595 0.00182794 0.386355 0.0179889 0.320396 0.0476735C0.254438 0.0773582 0.195099 0.119964 0.145888 0.172973C0.0491059 0.276473 -0.00321937 0.413805 0.0001535 0.555466C0.00352637 0.697126 0.0623286 0.831812 0.163927 0.930589L2.34658 3.00501L0.163927 5.07943C0.0623286 5.17821 0.00352637 5.3129 0.0001535 5.45456C-0.00321937 5.59622 0.0491059 5.73355 0.145888 5.83705Z" fill="#039785"/>
              </svg>
            </span>
            <span className="home__review__arrowright">
              <svg width="4" height="6" viewBox="0 0 4 6" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M0.145888 5.83705C0.198103 5.88889 0.260035 5.92991 0.328133 5.95777C0.396232 5.98563 0.469159 5.99977 0.542735 5.9994C0.612418 6.00281 0.682054 5.99175 0.747251 5.96691C0.812447 5.94208 0.871792 5.904 0.921543 5.85509L3.51908 3.40186C3.57144 3.34988 3.61299 3.28805 3.64135 3.21995C3.66971 3.15184 3.68431 3.07879 3.68431 3.00501C3.68431 2.93123 3.66971 2.85819 3.64135 2.79008C3.61299 2.72197 3.57144 2.66014 3.51908 2.60817L0.921543 0.154935C0.869921 0.104271 0.808665 0.0644688 0.741398 0.0378824C0.674131 0.011296 0.602217 -0.00153536 0.529906 0.00014629C0.457595 0.00182794 0.386355 0.0179889 0.320396 0.0476735C0.254438 0.0773582 0.195099 0.119964 0.145888 0.172973C0.0491059 0.276473 -0.00321937 0.413805 0.0001535 0.555466C0.00352637 0.697126 0.0623286 0.831812 0.163927 0.930589L2.34658 3.00501L0.163927 5.07943C0.0623286 5.17821 0.00352637 5.3129 0.0001535 5.45456C-0.00321937 5.59622 0.0491059 5.73355 0.145888 5.83705Z" fill="#039785"/>
              </svg>
            </span>   
          </div>
        </section>

        <section className="home__about">
          <div className="home__about__video">

          <img src={require("../assets/video.jpg")} style={{width:"100%", height:"100%", objectFit:"cover"}}/>
          <span className="home__about__video__control">
            <span className="home__about__video__ctrller">
              <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.2817 8.58754L2.55404 0.270694C1.46857 -0.439791 0 0.333383 0 1.60808V18.2209C0 19.5165 1.46857 20.2687 2.55404 19.5583L15.2817 11.2414C16.2394 10.6354 16.2394 9.21444 15.2817 8.58754Z" fill="black"/>
              </svg>
            </span>
          </span>

          </div>
          <div className="home__about__info">
              <h2 className="heading-secondary" style={{marginBottom: "10px"}}>About Us</h2>
              <p className="paragraph" style={{marginBottom: "25px"}}>
                CountlessMiles is a technology-enabled travel startup and our <br /> 
                mission is to establish the value narrative of Africans travelers <br /> 
                globally..is a technology-enabled
              </p>
              <a href="#" className="home__about__button">Learn More</a>
          </div>
        </section>
        <section className="home__contact">
          <h2 className="heading-secondary" style={{marginBottom: "20px"}}>Do eu eiusmod reprehenderit?</h2>
          <a href="#" className="home__contact__button" style={{marginBottom: "20px"}}>Start Planning</a>
          <p className="">or contact us</p>
        </section>
        <Footer />
      </>
      );
    }else {
      content =  <Form close={this.toggleClose} />;
    }

    return content;
  }

  render(){
    return (
      <div className="home">
        {this.renderContemt()};
      </div>
    );
  }
}

export default Home;