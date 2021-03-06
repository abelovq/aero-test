import React from 'react';

import './Favourite.scss';

interface Props {
  inFav: boolean;
  handleToggleFav: (id: number) => void;
  id: number;
}

const Favourite: React.FC<Props> = ({ inFav, handleToggleFav, id }) => {
  const handleClick = () => {
    handleToggleFav(id);
  };
  if (!inFav) {
    return (
      <svg
        width="20px"
        height="20px"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
        className="favourite-icon"
      >
        {/* <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --> */}
        <title>001-heart</title>
        <desc>Created with Sketch.</desc>
        <g id="UI" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="Elements"
            transform="translate(-599.000000, -1360.000000)"
            stroke="#0284C6"
            fillRule="nonzero"
          >
            <g id="Group-4-Copy" transform="translate(377.000000, 828.000000)">
              <g id="001-heart" transform="translate(222.000000, 532.000000)">
                <path
                  d="M14.3574505,0.0152087912 C12.6549011,0.0152087912 11.0611429,0.786065934 10,2.07762637 C8.93885714,0.786021978 7.34514286,0.0152087912 5.64254945,0.0152087912 C2.53125275,0.0152087912 0,2.54641758 0,5.65775824 C0,8.09406593 1.45274725,10.912044 4.3178022,14.0334066 C6.52268132,16.4354725 8.92123077,18.2953407 9.60382418,18.8081758 L9.99986813,19.1057143 L10.3959121,18.8082198 C11.0785055,18.2953846 13.4771429,16.4355604 15.6820659,14.0334945 C18.5472088,10.9121319 20,8.09410989 20,5.65775824 C20,2.54641758 17.4687473,0.0152087912 14.3574505,0.0152087912 Z"
                  id="Shape"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleClick}
      className="favourite-icon"
    >
      {/* <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --> */}
      <title>001-heart</title>
      <desc>Created with Sketch.</desc>
      <g id="UI" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          id="Elements"
          transform="translate(-599.000000, -1360.000000)"
          fill="#0284C6"
          fillRule="nonzero"
        >
          <g id="Group-4-Copy" transform="translate(377.000000, 828.000000)">
            <g id="001-heart" transform="translate(222.000000, 532.000000)">
              <path
                d="M14.3574505,0.0152087912 C12.6549011,0.0152087912 11.0611429,0.786065934 10,2.07762637 C8.93885714,0.786021978 7.34514286,0.0152087912 5.64254945,0.0152087912 C2.53125275,0.0152087912 0,2.54641758 0,5.65775824 C0,8.09406593 1.45274725,10.912044 4.3178022,14.0334066 C6.52268132,16.4354725 8.92123077,18.2953407 9.60382418,18.8081758 L9.99986813,19.1057143 L10.3959121,18.8082198 C11.0785055,18.2953846 13.4771429,16.4355604 15.6820659,14.0334945 C18.5472088,10.9121319 20,8.09410989 20,5.65775824 C20,2.54641758 17.4687473,0.0152087912 14.3574505,0.0152087912 Z"
                id="Shape"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default React.memo(Favourite);
