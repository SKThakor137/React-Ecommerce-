import React, { useState } from "react";
import styled from "styled-components";

const MyImage = ({ images }) => {
  // const MyImage = ({ images = [{ url: "" }] }) => {
  //   console.log(images);
  if (!images || !Array.isArray(images)) {
    return null; // or handle the case where imgs is not valid
  }
  const [mainImage, setMainImage] = useState(images[0]);
  //   console.log(mainImage);
  return (
    <Wrapper>
      <div className="grid grid-four-column">
        {images.map((curImg, index) => {
          return (
            <figure key={index}>
              <img
                src={curImg.url}
                alt={curImg.filename}
                className="box-image--style"
                // key={index}
                onClick={() => setMainImage(curImg)}
              />
            </figure>
          );
        })}
      </div>

      {/* 2nd column */}

      <div className="main-screen">
        {/* <img src={ images[0].url} alt={images[0].filename} /> */}
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 1rem;

  .grid {
    flex-direction: row;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 1rem;
    /* order: 2; */

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: contain;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      max-width: 100%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
  .grid-four-column {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
