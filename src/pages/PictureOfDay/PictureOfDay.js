import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/NavBar';
import bg from '../../img/bg4.mp4';


export default function PictureOfDay() {
  const [showInfo, setShowInfo] = useState(false);
  const [photoData, setPhotoData] = useState(null);
  const [photoDatainfo, setPhotoDatainfo] = useState({});

  useEffect(() => {
    fetchLatestImage();
  async function fetchLatestImage() {
    const res = await fetch(
      `https://images-api.nasa.gov/search?media_type=image&keywords=astronomy`
    );
    const data = await res.json();
    const photo=await fetch(data.collection.items[0].href)
    const dataPhoto=data.collection.items[0].data[0];
    const data2 = await photo.json();
    // console.log(data.collection.items[0].data[0])


    if (data.collection.items.length > 0) {
      setPhotoData(data2[0]);
      setPhotoDatainfo(dataPhoto);
    }
    // console.log(photo)
  }
}

  , []);

  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      <video className="Video_Background" autoPlay loop muted>
        <source src={bg} type="video/mp4" />
      </video>
      <div className="AnyPhoto">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div className="info-button">
                <div className="info-icon btn btn-success mb-4" onClick={() => setShowInfo(true)}>
                  Info about
                </div>
              </div>
            </div>
          </div>
          {showInfo && (
            <div className="row bg-white text-dark p-5 rounded-3">
              <div className="col-md-12">
                <div className="info-modal d-flex ">
                  <div className="info-header text-dark me-5 ">
                    <span className="h2">Photo of the day :</span>
                    <div className="mt-3" style={{
                      backgroundImage:`url(${photoData})`,
                      backgroundRepeat:"no-repeat",backgroundSize:"cover",
                      width:"300px",
                      height:"300px"
                    }}>

                      </div>
                  </div>
                  <div className="info-body ms-5 mt-5 ">
                    <h3 className="text-primary">{photoDatainfo.title}</h3>
                    <p className="text-dark">Date created :{photoDatainfo.date_created}<br/> By : {photoDatainfo.center}
                    <br/>
                    Location :{photoDatainfo.location}</p>
                    <p className="text-secondary w-100">
                      {photoDatainfo.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
