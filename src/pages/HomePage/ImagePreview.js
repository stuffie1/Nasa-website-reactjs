import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ImagePreview({ nasaPicture, title, description }) {
  const [show, setShow] = useState(false);
  return (
    <main class="flex">
      <div class="responsive">
        <div class="gallery rounded-5">
          <div
            className="Img_Grid"
            style={{
              backgroundImage: `url(${nasaPicture})`,
              width: "100%",
              height: "230px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            onClick={() => setShow(true)}
          ></div>
          <div
            class="desc"
            style={{ cursor: "pointer" }}
            onClick={() => setShow(true)}
          >
            {title}
          </div>
        </div>
      </div>

      <Modal show={show} onHide={() => setShow(false)} className="Modal">
        <img src={nasaPicture} />
        <div className="container-Modal ms-5 ">
          <h1 className="Title_Modal ">{title}</h1>
          <p className="description_Modal">{description}</p>
        </div>
      </Modal>
    </main>
  );
}
