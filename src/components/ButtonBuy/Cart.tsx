import React, { useRef } from 'react';
import useHover from '../customhooks/useHover';
import './ButtonBuy.scss';

const Cart: React.FC = () => {
  const cartRef = useRef(null);
  const isHover = useHover(cartRef);
  if (!isHover) {
    return (
      <svg
        width="17px"
        height="16px"
        viewBox="0 0 17 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com --> */}
        <title>cart</title>
        <desc>Created with Sketch.</desc>
        <g id="UI" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="Elements" transform="translate(-519.000000, -402.000000)">
            <g id="Stacked-Group" transform="translate(60.000000, 393.000000)">
              <g id="button-cart" transform="translate(444.000000, 0.000000)">
                <g id="cart" transform="translate(15.000000, 8.000000)">
                  <rect
                    id="Rectangle"
                    x="0"
                    y="0"
                    width="18"
                    height="18"
                  ></rect>
                  <circle
                    id="Oval"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                    cx="14.25"
                    cy="15"
                    r="1.5"
                  ></circle>
                  <circle
                    id="Oval"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                    cx="6.75"
                    cy="15"
                    r="1.5"
                  ></circle>
                  <path
                    d="M15.7875,5.25 L4.5375,4.6275 L3.75,2.01 C3.64275456,1.6909718 3.33611427,1.4824564 3,1.5 L0.75,1.5 C0.335786438,1.5 5.07265313e-17,1.83578644 0,2.25 C-5.07265313e-17,2.66421356 0.335786438,3 0.75,3 L2.46,3 L3.1575,5.085 L5.0325,12.21 C5.15991821,12.5286188 5.48732749,12.7201224 5.8275,12.675 L15.8475,10.59 C16.223244,10.5407491 16.5032141,10.2189445 16.5,9.84 L16.5,6 C16.5005003,5.59999988 16.1870001,5.26999971 15.7875,5.25 Z"
                    id="Path"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
  return (
    <svg
      ref={cartRef}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="19"
      viewBox="0 0 20 19"
    >
      <g fill="none" fillRule="evenodd">
        <path fill="#DFDFDF" d="M-55-550h716V80H-55z" />
        <path fill="#FFF" d="M-35-530h308V60H-35z" />
        <path fill="#0284C6" d="M-11.078-6.001H88.6v35h-99.677z" />
        <g stroke="#FFF" strokeWidth="1.5" transform="translate(.088 .999)">
          <path d="M.191.674c.503 0 4.529.018 4.529.018.1.498 1.525 11.077 1.525 11.077h9.713l2.082-6.923H5.55" />
          <ellipse cx="6.938" cy="14.538" rx="2.082" ry="2.077" />
          <ellipse cx="15.264" cy="14.538" rx="2.082" ry="2.077" />
        </g>
      </g>
    </svg>
  );
};

export default Cart;
