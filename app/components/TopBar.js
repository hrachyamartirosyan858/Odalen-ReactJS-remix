import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TopBar({ bgColor, iconsColor }) {

  return (
    <div>
      <div
        className={`${bgColor} flex flex-row items-center justify-center space-x-4`}
      >
        <div style={{ color: `${iconsColor}` }}>Հետևեք մեզ</div>
        <a href="https://www.facebook.com/odalen.restaurant">
          <FontAwesomeIcon
            icon={["fab", "facebook-f"]}
            size="1x"
            className="p-5.5"
            color={iconsColor}
          />
        </a>
        <a href="https://www.instagram.com/odale_restaurant">
          <FontAwesomeIcon
            icon={["fab", "instagram"]}
            size="1x"
            color={iconsColor}
          />
        </a>
        <a href="https://g.page/odalenarmenia?share">
          <svg
            className="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            aria-labelledby="title"
            aria-describedby="desc"
            role="img"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <title>Tripadvisor</title>
            <desc>A solid styled icon from Orion Icon Library.</desc>
            <path
              data-name="layer4"
              d="M39.1 13.516a50.1 50.1 0 0 1 5.3 1.209 32.624 32.624 0 0 1 8.492 3.929 1.435 1.435 0 0 0 .7.2h10.189v.1a4.39 4.39 0 0 0-.4.705 16.853 16.853 0 0 0-2.5 5.239.477.477 0 0 0 .1.6 15.734 15.734 0 0 1 2.5 13.3 15.315 15.315 0 0 1-7.094 9.772 15.97 15.97 0 0 1-8.487 2.422 15.691 15.691 0 0 1-3.8-.5 16.211 16.211 0 0 1-7.893-4.634 9.057 9.057 0 0 1-.9-1.007c-1.1 1.713-2.3 3.425-3.4 5.138-1.2-1.713-2.3-3.425-3.4-5.037-.1 0-.1 0-.1.1l-.1.1a15.544 15.544 0 0 1-9.891 5.641 14.656 14.656 0 0 1-6.594-.4 15.314 15.314 0 0 1-7.793-4.936 15.784 15.784 0 0 1-3.8-8.16 13.951 13.951 0 0 1 .3-6.347 13.547 13.547 0 0 1 2.4-5.339.76.76 0 0 0 .1-.5 21.114 21.114 0 0 0-2.2-4.836 7.687 7.687 0 0 0-.8-1.108v-.1h9.9c.1 0 .3-.1.4-.1a34.036 34.036 0 0 1 7.194-3.526 50.8 50.8 0 0 1 5.6-1.511 33.995 33.995 0 0 1 5.6-.705 41.028 41.028 0 0 1 10.377.291zm-4 21.458a12.789 12.789 0 1 0 12.6-12.895 12.8 12.8 0 0 0-12.593 12.895zM15.924 22.079a12.846 12.846 0 1 0 12.788 12.895 12.706 12.706 0 0 0-12.788-12.895zm.7-3.324a15.746 15.746 0 0 1 10.091 4.231 16.211 16.211 0 0 1 5.2 9.772A16.351 16.351 0 0 1 37 23.087a15.491 15.491 0 0 1 10-4.231 36.237 36.237 0 0 0-14.187-3.022 38.507 38.507 0 0 0-16.19 2.921z"
              fill={iconsColor}
            ></path>
            <path
              data-name="layer3"
              d="M47.8 26.814a7.963 7.963 0 0 1 .3 15.917 7.962 7.962 0 1 1-.3-15.917zm5.2 7.959a5.146 5.146 0 1 0-10.291-.1 5.245 5.245 0 0 0 5.2 5.239 5.012 5.012 0 0 0 5.082-5.139zm-37.176-7.959a7.966 7.966 0 0 1 .4 15.917 7.971 7.971 0 0 1-8.293-7.959 7.756 7.756 0 0 1 7.893-7.958zm5.1 7.959a5.036 5.036 0 0 0-5.2-5.138 5.24 5.24 0 0 0 .1 10.477 5.316 5.316 0 0 0 5.095-5.339z"
              fill={iconsColor}
            ></path>
            <path
              data-name="layer2"
              d="M47.8 32.153a2.591 2.591 0 0 1 2.6 2.619 2.656 2.656 0 0 1-2.6 2.619 2.591 2.591 0 0 1-2.6-2.619 2.656 2.656 0 0 1 2.6-2.619z"
              fill={iconsColor}
            ></path>
            <path
              data-name="layer1"
              d="M15.724 32.153a2.677 2.677 0 0 1 2.7 2.619 2.763 2.763 0 0 1-2.7 2.72 2.67 2.67 0 1 1 0-5.339z"
              fill={iconsColor}
            ></path>
          </svg>
        </a>
      </div>
      <div
        className={`${bgColor} flex flex-row items-center justify-center space-x-4`}
      >
        <div style={{ color: `${iconsColor}` }}>
          Ամրագրում 033 27-07-77, 010 37-07-77
        </div>
      </div>
    </div>
  );
}
