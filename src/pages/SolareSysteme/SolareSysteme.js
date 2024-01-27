import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import bg from '../../img/bg.mp4';
import earth from '../../img/earth1.mp4';
import sun from '../../img/Sun.mp4';
import jupiter from '../../img/jupiter.mp4';
import mars from '../../img/mars.mp4';
import mercury from '../../img/mercury.mp4';
import venus from '../../img/venus.mp4';
import neptune from '../../img/neptune.mp4';
import saturn from '../../img/saturn.mp4';
import uranus from '../../img/uranus.mp4';
import '../../styles/SolareSysteme.css';
import { Link, Outlet } from 'react-router-dom';

function SolareSysteme() {
  return (
    <div className="text-dark">
      <NavBar />
      <video className="Video_Background" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="side-nav rounded-4 flex-column justif-content-center ">
        <ul className="list rounded-4">
          <li className='rounded-5'>
            <Link to={"sun"} className="nav-link ">
              <div
                className="video-container rounded-5"
                style={{

                  overFlow:"hidden",
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <source src={sun}type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
          <li className='rounded-5'>
            <Link to={"earth"} className="nav-link ">
              <div
                className="video-container rounded-5"
                style={{

                  overFlow:"hidden",
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <source src={earth}type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
          <li className='rounded-5'>
            <Link to={""} className="nav-link ">
              <div
                className="video-container rounded-5"
                style={{

                  overFlow:"hidden",
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <source src={jupiter}type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
          <li className='rounded-5'>
            <Link to={""} className="nav-link ">
              <div
                className="video-container rounded-5"
                style={{

                  overFlow:"hidden",
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <source src={mars}type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
          <li className='rounded-5'>
            <Link to={""} className="nav-link ">
              <div
                className="video-container rounded-5"
                style={{

                  overFlow:"hidden",
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <source src={mercury}type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
          <li className='rounded-5'>
            <Link to={""} className="nav-link ">
              <div
                className="video-container rounded-5"
                style={{

                  overFlow:"hidden",
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <source src={venus}type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
          <li className='rounded-5'>
            <Link to={""} className="nav-link ">
              <div
                className="video-container rounded-5"
                style={{

                  overFlow:"hidden",
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <source src={neptune}type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
          <li className='rounded-5'>
            <Link to={""} className="nav-link ">
              <div
                className="video-container rounded-5"
                style={{

                  overFlow:"hidden",
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <source src={saturn}type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
          <li className='rounded-5'>
            <Link to={"uranus"} className="nav-link ">
              <div
                className="video-container rounded-5"
                style={{

                  overFlow:"hidden",
                  width: '60px',
                  height: '60px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <source src={uranus}type="video/mp4" />
                </video>
              </div>
            </Link>
          </li>
        
        </ul>
      </div>
      <div className='text-black bg-light rounded-5 col-6 ms-5 p-4 mt-4'>
          <Outlet/>
      </div>
    </div>
  );
}

export default SolareSysteme;


