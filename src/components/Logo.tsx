const Logo = (props: { name: string; size?: number }) => {
  const size = props.size || 36;

  switch (props.name.toLowerCase()) {
    case "th8ta":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.2083 0.439257C21.5889 2.20997 25.3315 8.82777 23.5607 15.2083C21.79 21.5889 15.1722 25.3315 8.79169 23.5607C2.41113 21.79 -1.33147 15.1722 0.439257 8.79169C2.20997 2.41113 8.82777 -1.33147 15.2083 0.439257ZM13.5613 13.3523C16.2031 14.0836 17.7668 16.8021 17.0706 19.4533C16.3745 22.1046 13.6771 23.7043 11.0168 23.0435L10.9584 23.0279C10.9138 23.016 10.8692 23.0041 10.8246 22.9917C6.41946 21.7692 3.98262 16.5112 5.13426 11.0136L13.5613 13.3523ZM6.92938 4.54666C6.23326 7.19792 7.79694 9.91642 10.4387 10.6477L18.8658 12.9864C20.0174 7.48882 17.5806 2.23082 13.1754 1.0083C13.1302 0.995742 13.0849 0.983651 13.0396 0.97158C13.0208 0.966557 13.002 0.961538 12.9832 0.95649C10.323 0.295706 7.62549 1.8954 6.92938 4.54666Z"
            fill="#F5F5F5"
          />
        </svg>
      );
    case "verto":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.8438 0.76785C15.0789 0.297434 15.5613 0 16.0893 0C18.0368 0 22.6091 0 22.6091 0C23.0906 0 23.5379 0.247806 23.7915 0.655092C24.045 1.06238 24.0689 1.57121 23.8545 2.00022C21.5346 6.64312 15.7887 18.1423 13.2454 23.2322C13.0104 23.7026 12.5279 24 12 24C11.4721 24 10.9896 23.7026 10.7546 23.2322C8.2113 18.1423 2.46542 6.6431 0.145461 2.00022C-0.0689155 1.57121 -0.0450476 1.06238 0.208536 0.655092C0.462136 0.247806 0.909366 0 1.39086 0C1.39086 0 5.96323 0 7.91073 0C8.43867 0 8.92111 0.297434 9.15616 0.76785C9.73243 1.92111 10.7546 3.96678 10.7546 3.96678C10.9896 4.43718 11.4721 4.73461 12 4.73461C12.5279 4.73461 13.0104 4.43718 13.2454 3.96678C13.2454 3.96678 14.2676 1.92111 14.8438 0.76785V0.76785Z"
              fill="#888"
            />
            <mask
              id="mask0"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.8438 0.76785C15.0789 0.297434 15.5613 0 16.0893 0C18.0368 0 22.6091 0 22.6091 0C23.0906 0 23.5379 0.247806 23.7915 0.655092C24.045 1.06238 24.0689 1.57121 23.8545 2.00022C21.5346 6.64312 15.7887 18.1423 13.2454 23.2322C13.0104 23.7026 12.5279 24 12 24C11.4721 24 10.9896 23.7026 10.7546 23.2322C8.2113 18.1423 2.46542 6.6431 0.145461 2.00022C-0.0689155 1.57121 -0.0450476 1.06238 0.208536 0.655092C0.462136 0.247806 0.909366 0 1.39086 0C1.39086 0 5.96323 0 7.91073 0C8.43867 0 8.92111 0.297434 9.15616 0.76785C9.73243 1.92111 10.7546 3.96678 10.7546 3.96678C10.9896 4.43718 11.4721 4.73461 12 4.73461C12.5279 4.73461 13.0104 4.43718 13.2454 3.96678C13.2454 3.96678 14.2676 1.92111 14.8438 0.76785V0.76785Z"
                fill="#F5F5F5"
              />
            </mask>
            <g mask="url(#mask0)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.17285 0H-0.853447L11.1395 24H17.1658L5.17285 0V0Z"
                fill="#F5F5F5"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="#F5F5F5" />
            </clipPath>
          </defs>
        </svg>
      );
    case "arverify":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.16783 11.8136C1.0652 12.711 1.96256 13.6083 2.85993 14.5057C4.28574 15.9315 5.71156 17.3573 7.14735 18.7931C7.47638 19.1221 7.80541 19.4512 8.13445 19.7802C9.08167 20.7274 10.6969 20.7274 11.6441 19.7802C12.1726 19.2518 12.7609 18.7632 13.2395 18.1849C16.9885 13.6781 23.8483 3.24873 23.8583 3.23876C24.7756 2.32145 20.9768 -0.789416 19.9897 0.187716C19.4612 0.716165 11.4447 12.9403 10.1087 14.2764C9.46056 14.9245 8.79252 15.5626 8.15439 16.2306C8.14442 16.2406 8.13445 16.2506 8.12448 16.2605C9.29105 16.2605 10.4576 16.2605 11.6342 16.2605C10.7368 15.3632 9.83944 14.4658 8.94208 13.5684C7.51626 12.1426 6.09045 10.7168 4.65466 9.28103C4.32563 8.95199 3.99659 8.62296 3.66756 8.29393C2.76022 7.38659 -0.809302 10.8365 0.16783 11.8136Z"
            fill="#F5F5F5"
          />
        </svg>
      );
    default:
      return <></>;
  }
};

export default Logo;