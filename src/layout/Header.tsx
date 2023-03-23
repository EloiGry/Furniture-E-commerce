import { motion } from "framer-motion";
import PopoverDecoration from "./Popover/PopoverDecoration";
import PopoverLiving from "./Popover/PopoverLiving";
import ModalUser from "@/components/Modal/User/ModalUser";
import { useState} from 'react';
import ModalCart from "@/components/Modal/Cart/ModalCart";
import ModalSearch from "@/components/Modal/Search/ModalSearch";
import ModalLike from "@/components/Modal/Like/ModalLike";
import { useAppStore } from "@/lib/store";
import { useSession } from "next-auth/react";
import ModalMobile from "@/components/Modal/MobileMenu/ModalMobile";
import { CartIcon, LikeIcon, MenuIcon, SearchIcon, SmallUserIcon } from "@/assets/icon/Icon";


export default function Header() {
  const { cart } = useAppStore()
  const {data : session} = useSession()
  let [isCartOpen, setIsCartOpen] = useState(false)
  let [isSearchOpen, setIsSearchOpen] = useState(false)
  let [isLikeOpen, setIsLikeOpen] = useState(false)
  let [isUserOpen, setIsUserOpen] = useState(false)
  let [isMobileOpen, setIsMobileOpen] = useState(false)




  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 3,
        type: "tween"
      }
    }
  }

  return (
    <header aria-label="Site Header" className="border-b border-gray-100 fixed z-50 bg-white w-full">
      <div
        className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8"
      >
        <div className="flex items-center gap-4">
        <button className="p-2 lg:hidden" onClick={() => setIsMobileOpen(true)}>
              <MenuIcon/>
            </button>
            {isMobileOpen && <ModalMobile isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />}

          <a href="#" className="flex">
            <motion.svg className="framerLogo" initial='hidden' animate='visible' fill="none" version="1.1" xmlns="http://www.w3.org/2000/svg" width="80px" height="60px" viewBox="0, 0, 429.403, 232.946">
              <motion.path variants={pathVariants} d="M215.637,-0 C209.596,-0 204.322,3.311 201.506,8.207 C195.756,8.647 190.006,9.44 184.316,10.703 C180.856,11.493 177.426,12.458 174.043,13.609 C170.667,14.793 167.346,16.184 164.127,17.812 C157.697,21.064 151.651,25.338 146.682,30.803 C144.192,33.521 142.006,36.564 140.244,39.904 C139.121,42.122 138.143,44.449 137.521,46.984 C132.039,46.778 126.535,47.513 121.398,49.293 C114.889,51.522 109.014,55.4 104.564,60.449 C100.092,65.478 97.061,71.621 95.711,78.006 C94.337,84.399 94.628,90.977 96.109,97.145 C95.326,90.843 95.803,84.426 97.775,78.564 C99.726,72.704 103.158,67.454 107.611,63.459 C112.05,59.441 117.492,56.716 123.178,55.463 C128.87,54.191 134.779,54.382 140.357,55.76 L144.578,56.803 L145.395,51.953 C145.788,49.613 147.005,47.028 148.531,44.705 C150.101,42.368 152.013,40.194 154.189,38.271 C158.523,34.4 163.741,31.441 169.309,29.32 C172.093,28.257 174.969,27.387 177.898,26.688 C180.841,26.018 183.831,25.502 186.85,25.133 C191.705,24.573 196.628,24.394 201.572,24.51 C204.404,29.345 209.642,32.605 215.637,32.605 C221.639,32.605 226.878,29.338 229.709,24.496 C234.02,24.462 238.316,24.66 242.557,25.148 C245.574,25.518 248.562,26.035 251.504,26.705 C254.435,27.404 257.312,28.274 260.098,29.338 C265.664,31.457 270.879,34.416 275.213,38.287 C277.39,40.209 279.302,42.384 280.871,44.721 C282.398,47.044 283.617,49.63 284.01,51.971 L284.824,56.818 L289.045,55.775 C294.624,54.397 300.535,54.207 306.227,55.479 C311.912,56.731 317.354,59.458 321.793,63.475 C326.246,67.47 329.677,72.721 331.627,78.582 C333.6,84.444 334.078,90.859 333.295,97.16 C334.775,90.993 335.067,84.415 333.693,78.021 C332.343,71.637 329.311,65.496 324.838,60.467 C320.39,55.418 314.515,51.539 308.004,49.309 C302.868,47.529 297.363,46.797 291.883,47.002 C291.261,44.467 290.282,42.138 289.158,39.92 C287.396,36.581 285.212,33.537 282.723,30.818 C277.755,25.354 271.707,21.08 265.277,17.828 C262.059,16.199 258.737,14.811 255.361,13.627 C251.979,12.475 248.547,11.509 245.088,10.719 C240.051,9.601 234.966,8.853 229.877,8.389 C227.088,3.392 221.754,-0 215.637,-0 z M215.803,4.271 C222.367,4.272 227.688,9.594 227.688,16.158 C227.687,22.722 222.366,28.042 215.803,28.043 C209.238,28.043 203.917,22.722 203.916,16.158 C203.916,9.593 209.238,4.271 215.803,4.271 z" />
              <motion.path variants={pathVariants} d="M307.096,180.205 L308.038,180.231 L309.224,180.201 C310.018,180.204 310.801,180.039 311.59,179.945 C314.715,179.359 317.719,177.991 320.17,175.939 C322.627,173.896 324.599,171.229 325.75,168.187 C326.359,166.68 326.712,165.074 326.905,163.457 L326.989,162.238 L327.019,161.657 L327.03,161.195 L327.069,159.349 L327.119,157.04 C327.123,156.896 327.112,156.648 327.109,156.456 L327.063,155.226 C326.92,153.592 326.622,151.953 326.059,150.398 C324.999,147.262 323.084,144.451 320.616,142.243 C318.152,140.026 315.062,138.494 311.787,137.768 C310.961,137.639 310.136,137.441 309.299,137.416 L308.043,137.341 L307.096,137.322 L303.402,137.26 C293.553,137.073 283.703,136.986 273.854,136.859 L269.438,136.824 L275.132,109.417 L265.294,136.791 L244.305,136.624 L216.84,136.557 L214.537,90.046 L212.531,136.559 L185.208,136.634 L165.259,136.794 L156.041,111.146 L161.375,136.826 L155.661,136.873 C145.812,136.994 135.961,137.091 126.112,137.276 L122.419,137.337 L121.472,137.356 L120.217,137.431 C119.38,137.457 118.555,137.654 117.73,137.783 C114.459,138.507 111.368,140.038 108.911,142.257 C106.445,144.462 104.531,147.271 103.472,150.405 C102.908,151.957 102.611,153.596 102.468,155.228 L102.422,156.457 C102.419,156.648 102.407,156.896 102.412,157.04 L102.421,157.502 L102.501,161.195 L102.51,161.657 L102.541,162.238 L102.625,163.456 C102.819,165.07 103.175,166.675 103.782,168.18 C104.932,171.22 106.901,173.884 109.355,175.926 C111.805,177.976 114.807,179.345 117.928,179.929 C118.716,180.022 119.499,180.189 120.292,180.184 L121.477,180.212 L122.419,180.187 L126.112,180.074 C135.961,179.785 145.812,179.45 155.661,179.078 C175.359,178.258 195.058,177.473 214.758,176.148 C195.058,174.823 175.359,174.038 155.661,173.219 C145.812,172.846 135.961,172.511 126.112,172.222 L122.419,172.109 L121.515,172.078 L120.854,172.012 C120.412,172.005 119.99,171.857 119.558,171.802 C117.87,171.371 116.282,170.548 115.021,169.358 C113.758,168.174 112.788,166.695 112.294,165.083 C112.013,164.29 111.905,163.454 111.833,162.626 L111.823,162 C111.821,161.882 111.81,161.821 111.814,161.657 L111.825,161.195 L111.903,157.502 L111.913,157.04 C111.916,156.877 111.933,156.817 111.94,156.701 L111.99,156.086 C112.113,155.277 112.279,154.475 112.605,153.727 C113.189,152.21 114.213,150.875 115.465,149.856 C116.718,148.833 118.217,148.174 119.755,147.883 C120.151,147.862 120.53,147.746 120.93,147.77 L121.52,147.75 L122.419,147.763 L126.112,147.824 C135.961,148.009 145.812,148.105 155.661,148.227 L185.208,148.466 L214.758,148.547 L244.305,148.475 L273.854,148.241 C283.703,148.114 293.553,148.027 303.402,147.84 L307.096,147.777 L307.995,147.766 L308.584,147.785 C308.982,147.76 309.361,147.877 309.756,147.898 C311.292,148.188 312.79,148.845 314.038,149.87 C315.287,150.887 316.31,152.218 316.893,153.733 C317.219,154.479 317.385,155.279 317.509,156.088 L317.558,156.702 C317.565,156.817 317.582,156.877 317.585,157.04 L317.635,159.349 L317.684,161.657 C317.688,161.821 317.678,161.882 317.677,161.999 L317.667,162.625 C317.593,163.451 317.482,164.284 317.203,165.077 C316.71,166.685 315.742,168.163 314.483,169.344 C313.225,170.533 311.639,171.355 309.953,171.786 C309.521,171.841 309.102,171.99 308.659,171.996 L308,172.059 L307.096,172.091 L303.402,172.205 C293.553,172.495 283.703,172.831 273.854,173.202 C254.155,174.028 234.455,174.813 214.758,176.148 C234.455,177.483 254.155,178.268 273.854,179.094 C283.703,179.466 293.553,179.802 303.402,180.092 z" />
              <motion.path variants={pathVariants} d="M250.185,67.192 C250.185,65.193 248.564,63.574 246.565,63.574 C244.566,63.574 242.946,65.193 242.946,67.192 C242.946,69.191 244.566,70.812 246.565,70.812 C248.564,70.812 250.185,69.191 250.185,67.192" />
              <motion.path variants={pathVariants} d="M299.781,92.637 C299.781,90.639 298.161,89.018 296.162,89.018 C294.164,89.018 292.544,90.639 292.544,92.637 C292.544,94.636 294.164,96.256 296.162,96.256 C298.161,96.256 299.781,94.636 299.781,92.637" />
              <motion.path variants={pathVariants} d="M429.264,124.96 C428.659,117.641 426.107,110.457 422.035,104.348 C417.922,98.25 412.378,93.326 406.311,89.734 C400.189,86.14 393.171,83.71 385.992,83.108 C378.818,82.486 371.621,83.489 365.061,85.839 C361.777,87.008 358.621,88.452 355.644,90.175 C352.676,91.913 349.874,93.895 347.264,96.099 C344.648,98.298 342.255,100.756 340.103,103.431 C337.958,106.109 336.027,109.002 334.526,112.186 C333.771,113.774 333.115,115.431 332.6,117.16 C332.347,118.001 332.102,118.959 331.953,119.731 C331.785,120.54 331.611,121.345 331.491,122.165 C330.957,125.424 330.647,128.717 330.642,132.008 C330.664,138.583 331.78,145.16 334.308,151.156 C335.576,154.145 337.166,156.996 339.179,159.512 C341.21,161.987 343.613,164.24 346.468,165.533 C344.084,163.527 342.333,161.013 341.031,158.323 C339.693,155.652 338.805,152.795 338.166,149.924 C336.944,144.15 336.909,138.223 337.761,132.502 C338.175,129.637 338.832,126.818 339.685,124.068 C339.89,123.378 340.126,122.697 340.353,122.016 C340.586,121.293 340.796,120.775 341.06,120.164 C341.571,118.984 342.195,117.824 342.907,116.699 C345.749,112.177 349.79,108.224 354.267,105.024 C356.514,103.426 358.896,102.023 361.361,100.84 C363.819,99.643 366.363,98.664 368.947,97.933 C374.123,96.498 379.438,95.984 384.545,96.684 C389.651,97.352 394.547,99.128 398.977,101.911 C403.476,104.664 407.315,108.198 410.079,112.365 C412.896,116.496 414.615,121.29 415.131,126.263 C415.694,131.233 414.942,136.372 413.11,141.019 C411.273,145.669 408.214,149.749 404.334,152.573 C403.361,153.276 402.334,153.897 401.261,154.429 C400.181,154.962 399.101,155.391 397.909,155.761 C395.55,156.489 393.002,156.878 390.496,156.879 C387.989,156.87 385.494,156.552 383.17,155.749 C382.007,155.354 380.881,154.854 379.804,154.252 C378.72,153.662 377.686,152.96 376.716,152.15 C374.758,150.552 373.065,148.523 371.615,146.229 C371.443,145.95 371.231,145.634 371.092,145.385 C370.941,145.134 370.802,144.879 370.673,144.618 C370.419,144.095 370.185,143.56 370.011,143.002 C369.647,141.89 369.456,140.712 369.413,139.487 C369.268,134.564 371.999,129.149 376.25,125.479 C377.242,124.628 378.326,123.866 379.482,123.229 C378.135,124.759 377.312,126.76 377.312,128.959 C377.312,133.754 381.199,137.643 385.995,137.643 C390.789,137.643 394.678,133.754 394.678,128.959 C394.678,126.593 393.729,124.45 392.192,122.884 L392.361,122.969 C390.152,120.764 386.889,119.507 383.552,119.493 C380.209,119.486 376.891,120.55 373.99,122.255 C371.069,123.954 368.505,126.292 366.465,129.115 C364.43,131.933 362.963,135.318 362.476,139.035 C362.234,140.89 362.276,142.817 362.61,144.711 C362.771,145.661 363.021,146.593 363.32,147.51 C363.472,147.968 363.641,148.419 363.826,148.862 C364.008,149.314 364.182,149.667 364.361,150.075 C365.065,151.659 365.92,153.204 366.91,154.686 C367.882,156.179 369.025,157.59 370.279,158.917 C372.772,161.591 375.887,163.772 379.265,165.318 C382.648,166.871 386.29,167.786 389.938,168.089 C393.593,168.393 397.251,168.154 400.871,167.37 C402.673,166.991 404.519,166.409 406.256,165.686 C408.001,164.966 409.687,164.098 411.286,163.1 C417.731,159.115 422.596,153.07 425.608,146.397 C428.652,139.706 429.837,132.275 429.264,124.96" />
              <motion.path variants={pathVariants} d="M348.865,180.421 C346.841,185.688 345.594,191.121 344.968,196.506 C344.325,201.896 344.334,207.246 344.783,212.492 C345.015,215.115 345.37,217.714 345.842,220.293 C345.883,220.519 345.931,220.743 345.973,220.969 L214.375,226.639 L353.537,232.65 L360.376,232.946 L359.342,225.112 L359.15,223.669 C359.087,223.14 359.027,222.598 358.979,222.054 C358.877,220.964 358.805,219.863 358.759,218.761 C358.667,216.552 358.676,214.338 358.788,212.144 C359.025,207.754 359.636,203.431 360.727,199.334 C361.8,195.234 363.314,191.351 365.279,187.839 C367.203,184.298 369.655,181.186 372.379,178.424 L357.14,165.45 C353.692,170.084 350.838,175.138 348.865,180.421" />
              <motion.path variants={pathVariants} d="M288.924,202.895 C288.924,204.894 290.545,206.514 292.544,206.514 C294.543,206.514 296.162,204.894 296.162,202.895 C296.162,200.896 294.543,199.274 292.544,199.274 C290.545,199.274 288.924,200.896 288.924,202.895" />
              <motion.path variants={pathVariants} d="M216.93,202.895 C216.93,204.894 218.551,206.514 220.549,206.514 C222.547,206.514 224.168,204.894 224.168,202.895 C224.168,200.896 222.547,199.274 220.549,199.274 C218.551,199.274 216.93,200.896 216.93,202.895" />
              <motion.path variants={pathVariants} d="M129.622,199.274 C129.622,201.274 131.242,202.895 133.242,202.895 C135.24,202.895 136.861,201.274 136.861,199.274 C136.861,197.276 135.24,195.656 133.242,195.656 C131.242,195.656 129.622,197.276 129.622,199.274" />
              <motion.path variants={pathVariants} d="M186.458,67.176 C186.458,65.177 184.838,63.557 182.838,63.557 C180.84,63.557 179.22,65.177 179.22,67.176 C179.22,69.174 180.84,70.794 182.838,70.794 C184.838,70.794 186.458,69.174 186.458,67.176" />
              <motion.path variants={pathVariants} d="M136.861,92.621 C136.861,90.623 135.24,89.002 133.242,89.002 C131.242,89.002 129.622,90.623 129.622,92.621 C129.622,94.62 131.242,96.24 133.242,96.24 C135.24,96.24 136.861,94.62 136.861,92.621" />
              <motion.path variants={pathVariants} d="M59.124,157.188 C60.379,155.862 61.523,154.45 62.494,152.957 C63.484,151.476 64.339,149.931 65.042,148.347 C65.223,147.939 65.396,147.585 65.578,147.134 C65.765,146.69 65.933,146.24 66.085,145.781 C66.383,144.865 66.634,143.931 66.794,142.983 C67.128,141.089 67.171,139.161 66.929,137.306 C66.441,133.59 64.974,130.205 62.939,127.386 C60.899,124.564 58.335,122.226 55.415,120.527 C52.515,118.822 49.195,117.758 45.852,117.765 C42.516,117.778 39.252,119.036 37.043,121.241 L37.211,121.156 C35.676,122.722 34.727,124.864 34.727,127.23 C34.727,132.026 38.614,135.914 43.41,135.914 C48.206,135.914 52.093,132.026 52.093,127.23 C52.093,125.032 51.269,123.03 49.922,121.5 C51.078,122.138 52.163,122.9 53.154,123.751 C57.406,127.42 60.137,132.835 59.991,137.759 C59.948,138.983 59.758,140.162 59.394,141.274 C59.221,141.832 58.985,142.366 58.731,142.89 C58.602,143.15 58.463,143.406 58.314,143.656 C58.172,143.906 57.96,144.221 57.79,144.501 C56.339,146.794 54.646,148.823 52.689,150.422 C51.719,151.232 50.685,151.934 49.6,152.523 C48.523,153.125 47.398,153.625 46.234,154.02 C43.91,154.824 41.414,155.142 38.908,155.151 C36.403,155.149 33.855,154.761 31.495,154.033 C30.304,153.663 29.224,153.233 28.144,152.7 C27.07,152.168 26.043,151.547 25.07,150.844 C21.19,148.021 18.131,143.94 16.294,139.29 C14.462,134.643 13.71,129.505 14.273,124.535 C14.789,119.562 16.508,114.767 19.326,110.637 C22.089,106.469 25.929,102.934 30.428,100.183 C34.858,97.4 39.753,95.622 44.86,94.956 C49.967,94.256 55.281,94.771 60.457,96.204 C63.04,96.936 65.585,97.915 68.043,99.113 C70.508,100.294 72.891,101.697 75.138,103.296 C79.614,106.496 83.655,110.448 86.498,114.971 C87.209,116.095 87.834,117.255 88.345,118.436 C88.609,119.047 88.818,119.565 89.052,120.288 C89.278,120.969 89.516,121.65 89.719,122.339 C90.572,125.089 91.229,127.91 91.643,130.773 C92.496,136.494 92.46,142.421 91.238,148.196 C90.6,151.067 89.711,153.924 88.373,156.595 C87.071,159.285 85.321,161.799 82.937,163.804 C85.792,162.512 88.194,160.259 90.225,157.783 C92.238,155.268 93.828,152.417 95.096,149.428 C97.624,143.431 98.74,136.855 98.763,130.28 C98.757,126.989 98.447,123.696 97.913,120.437 C97.793,119.617 97.619,118.812 97.451,118.002 C97.304,117.23 97.058,116.273 96.805,115.432 C96.289,113.703 95.634,112.045 94.878,110.458 C93.377,107.273 91.446,104.381 89.301,101.703 C87.149,99.028 84.756,96.569 82.141,94.37 C79.53,92.167 76.729,90.185 73.761,88.447 C70.783,86.724 67.627,85.28 64.343,84.111 C57.783,81.761 50.585,80.758 43.412,81.379 C36.233,81.981 29.215,84.412 23.094,88.005 C17.027,91.598 11.483,96.522 7.368,102.62 C3.297,108.729 0.746,115.913 0.14,123.231 C-0.433,130.546 0.751,137.977 3.796,144.669 C6.809,151.341 11.673,157.387 18.118,161.372 C19.718,162.369 21.404,163.237 23.149,163.958 C24.886,164.681 26.732,165.261 28.534,165.642 C32.154,166.426 35.811,166.665 39.466,166.36 C43.114,166.058 46.756,165.143 50.139,163.59 C53.518,162.043 56.631,159.863 59.124,157.188" />
              <motion.path variants={pathVariants} d="M214.703,226.623 L75.868,232.389 L69.274,232.664 L70.498,223.701 C70.565,223.17 70.626,222.626 70.676,222.08 C70.783,220.989 70.86,219.881 70.909,218.774 C71.008,216.56 71.007,214.338 70.901,212.134 C70.678,207.728 70.08,203.383 68.998,199.26 C67.934,195.134 66.425,191.219 64.459,187.67 C62.535,184.095 60.074,180.943 57.336,178.145 L71.954,165.698 C75.387,170.294 78.231,175.308 80.205,180.555 C82.228,185.786 83.48,191.188 84.115,196.547 C84.768,201.912 84.771,207.24 84.335,212.468 C84.111,215.083 83.765,217.674 83.3,220.246 C83.244,220.554 83.181,220.863 83.121,221.17 L214.703,226.623" />

            </motion.svg>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end gap-8">
          <nav
            aria-label="Site Nav"
            className="hidden lg:flex lg:gap-8 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-black"
          >
            <PopoverLiving />

            <PopoverDecoration />

            <a
              href="/contact"
              className="block h-16 leading-[4rem] underlined"
            >
              à propos
            </a>

            <a
              href="/contact"
              className="block h-16 leading-[4rem] underlined"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center">
            <div
              className="flex items-center divide-x divide-gray-100 border-x border-gray-100"
            >
              <span onClick={() => setIsCartOpen(true)} className="relative block p-6 underlined text-black cursor-pointer">
                <div className="bg-black text-white rounded-full absolute right-3 top-3 w-4 h-4 flex items-center justify-center font-TitleFont text-xs">
                  <span> {cart.length} </span>
                </div>
                <CartIcon/>
                <span className="sr-only">Cart</span>
                {isCartOpen && <ModalCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />}
              </span>
              <span onClick={() => setIsLikeOpen(true)} className="block p-6 underlined text-black cursor-pointer">

                <LikeIcon/>
                <span className="sr-only">Like</span>
                {isLikeOpen && <ModalLike isLikeOpen={isLikeOpen} setIsLikeOpen={setIsLikeOpen} />}
              </span>
              <span onClick={() => setIsUserOpen(true)} className="block p-6 underlined text-black cursor-pointer">
                {session?.user?.image ? (<img src={session?.user?.image} className="h-4 w-4 rounded-full"/>) : (<SmallUserIcon/>)}
                <span className="sr-only"> Se connecter </span>
                {isUserOpen && <ModalUser isUserOpen={isUserOpen} setIsUserOpen={setIsUserOpen} />}
              </span>
              <span onClick={() => setIsSearchOpen(true)} className="hidden sm:block p-6 underlined text-black cursor-pointer">
                <SearchIcon/>
                <span className="sr-only"> Search </span>
                {isSearchOpen && <ModalSearch isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}