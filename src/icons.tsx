import React from "react";
import { styled } from "styled-components";

const IconContainer = styled.div.withConfig({
  shouldForwardProp(prop) {
    return !["size", "isStroke"].includes(prop);
  },
})<IconProps>`
  svg {
    width: ${(p) => (p.size || 16) + "px"};
    height: ${(p) => (p.size || 16) + "px"};
    display: block;
  }

  ${(p) =>
    p.isStroke
      ? `
    svg > [stroke] {
      stroke: currentColor;
    }
    
    svg > [fill] {
      fill: none;
    }
    
  `
      : `
  
    svg > [stroke] {
      fill: none;
    }
    
    svg > [fill] {
      fill: currentColor;
    }
    
  `}
`;

type IconProps = {
  size?: number;
  isStroke?: boolean;
};

export type Icon = React.ComponentType<IconProps>;

function createIcon(svg: JSX.Element, isStroke = false): Icon {
  return (props: IconProps) => {
    return (
      <IconContainer {...props} isStroke={isStroke}>
        {svg}
      </IconContainer>
    );
  };
}

const Dropdown = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.35355 10.0606L8.70711 9.70709L11.7071 6.70709L11 5.99998L8.35355 8.64643L5.70711 5.99998L5 6.70709L8 9.70709L8.35355 10.0606Z"
      fill="black"
    />
  </svg>,
);

const MaxHeight = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 2H2.5V1H14V2ZM8.54545 2.82172L8.88332 3.13142L11.0651 5.13142L10.3894 5.86858L9.04545 4.63662V10.8634L10.3894 9.63142L11.0651 10.3686L8.88332 12.3686L8.54545 12.6783L8.20759 12.3686L8.54545 12L8.20758 12.3686L8.20753 12.3685L8.20735 12.3684L8.20663 12.3677L8.20375 12.3651L8.19245 12.3547L8.14879 12.3147L7.9865 12.1659L7.4362 11.6615L6.02577 10.3686L6.7015 9.63142L8.04545 10.8634V4.63662L6.7015 5.86858L6.02577 5.13142L8.20759 3.13142L8.54545 2.82172ZM8.54545 15H2.5V14H8.54545H14V15H8.54545Z"
      fill="black"
    />
  </svg>,
);

const Add = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 2V14M2 8H14" stroke="black" />
  </svg>,
  true,
);

const AlignLeft = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 3H15V4H1V3ZM1 7H9V8H1V7ZM11 11H1V12H11V11Z" fill="black" />
  </svg>,
);

const AlignCenter = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 3H15V4H1V3ZM4 7H12V8H4V7ZM13 11H3V12H13V11Z" fill="black" />
  </svg>,
);

const AlignRight = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 3H15V4H1V3ZM7 7H15V8H7V7ZM15 11H5V12H15V11Z" fill="black" />
  </svg>,
);

const Close = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.76732 7.06025L12.2584 2.56918L12.9655 3.27629L8.47443 7.76735L12.9655 12.2584L12.2584 12.9655L7.76732 8.47446L3.2763 12.9655L2.56919 12.2584L7.06021 7.76735L2.56919 3.27637L3.2763 2.56926L7.76732 7.06025Z"
      fill="black"
    />
  </svg>,
);

const Desktop = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 13H6V12H10V13Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 3H2V10H14V3ZM1 2V11H15V2H1Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 13L5 13V12L11 12V13Z"
      fill="black"
    />
  </svg>,
);

const Mobile = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2H6C5.44772 2 5 2.44772 5 3V13C5 13.5523 5.44772 14 6 14H10C10.5523 14 11 13.5523 11 13V3C11 2.44772 10.5523 2 10 2ZM6 1C4.89543 1 4 1.89543 4 3V13C4 14.1046 4.89543 15 6 15H10C11.1046 15 12 14.1046 12 13V3C12 1.89543 11.1046 1 10 1H6Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 13H6V12H10V13Z"
      fill="black"
    />
  </svg>,
);

const Drag = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 3H5V5H7V3ZM7 7H5V9H7V7ZM5 11H7V13H5V11ZM11 3H9V5H11V3ZM9 7H11V9H9V7ZM11 11H9V13H11V11Z"
      fill="black"
      fillOpacity="0.8"
    />
  </svg>,
);

const ArrowDown = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 12L8 2.5M8 12L5 9M8 12L11 9" stroke="black" />
  </svg>,
  true,
);

const ArrowUp = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 4L8 13.5M8 4L5 7M8 4L11 7" stroke="black" />
  </svg>,
  true,
);

const ArrowRight = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 8L2.5 8M12 8L9 11M12 8L9 5" stroke="black" />
  </svg>,
  true,
);

const Master = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.75417 5.29515L8.04931 3L10.3445 5.29515L8.04931 7.59029L5.75417 5.29515Z"
      fill="black"
    />
    <path
      d="M5.75417 10.8035L8.04931 8.50835L10.3445 10.8035L8.04931 13.0986L5.75417 10.8035Z"
      fill="black"
    />
    <path
      d="M3 8.04933L5.29515 5.75418L7.59029 8.04933L5.29515 10.3445L3 8.04933Z"
      fill="black"
    />
    <path
      d="M8.50835 8.04933L10.8035 5.75418L13.0986 8.04933L10.8035 10.3445L8.50835 8.04933Z"
      fill="black"
    />
  </svg>,
);

const Redo = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0858 6.35355L9.43934 9L10.1464 9.70711L13.6464 6.20711L14 5.85355L13.6464 5.5L10.1464 2L9.43934 2.70711L12.0858 5.35355H8.29289C4.71675 5.35355 1.79289 8.27741 1.79289 11.8536L1.79289 13.3536H2.79289L2.79289 11.8536C2.79289 8.8297 5.26904 6.35355 8.29289 6.35355H12.0858Z"
      fill="black"
    />
  </svg>,
);

const Undo = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.91421 6.35355L6.56066 9L5.85355 9.70711L2.35355 6.20711L2 5.85355L2.35355 5.5L5.85355 2L6.56066 2.70711L3.91421 5.35355H7.70711C11.2832 5.35355 14.2071 8.27741 14.2071 11.8536L14.2071 13.3536H13.2071L13.2071 11.8536C13.2071 8.8297 10.731 6.35355 7.70711 6.35355H3.91421Z"
      fill="black"
    />
  </svg>,
);
const Remove = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 8.5H2V7.5H14V8.5Z"
      fill="black"
      fillOpacity="0.8"
    />
  </svg>,
);
const ChevronRight = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0607 8.64645L9.70711 8.29289L6.70711 5.29289L6 6L8.64645 8.64645L6 11.2929L6.70711 12L9.70711 9L10.0607 8.64645Z"
      fill="black"
    />
  </svg>,
);

const Back = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.5 3L6 7.5L10.5 12" stroke="black" />
  </svg>,
  true,
);

const Share = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.35355 0.646461L8 0.292908L7.64645 0.646461L4.64645 3.64646L5.35355 4.35357L7.5 2.20712L7.5 10.5H8.5L8.5 2.20712L10.6464 4.35357L11.3536 3.64646L8.35355 0.646461ZM3 5.50001C2.72386 5.50001 2.5 5.72387 2.5 6.00001V15C2.5 15.2762 2.72386 15.5 3 15.5H13C13.2761 15.5 13.5 15.2762 13.5 15V6.00001C13.5 5.72387 13.2761 5.50001 13 5.50001H10.5V6.50001H12.5V14.5H3.5V6.50001H5.5V5.50001H3Z"
      fill="black"
    />
  </svg>,
);

const Reset = createIcon(
  <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m1.751 6.349 2.287 2.858 3.381-2.255-.555-.832-2.618 1.746-1.714-2.142-.78.625Z"
      />
      <path d="M13.858 8a4.56 4.56 0 0 1-4.56 4.56h-.042v1h.042A5.56 5.56 0 1 0 3.754 8.42c.039-.036.077-.079.115-.127l.876-.044A4.56 4.56 0 1 1 13.859 8Z" />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m1.751 6.349 2.287 2.858 3.381-2.255-.555-.832-2.618 1.746-1.714-2.142-.78.625Z"
      fill="#000"
    />
    <path
      d="M13.858 8a4.56 4.56 0 0 1-4.56 4.56h-.042v1h.042A5.56 5.56 0 1 0 3.754 8.42c.039-.036.077-.079.115-.127l.876-.044A4.56 4.56 0 1 1 13.859 8Z"
      fill="#000"
    />
    <path
      d="m1.751 6.349-.624-.781-.781.625.624.78.781-.624Zm2.287 2.858-.781.624.572.716.763-.508-.554-.832Zm3.381-2.255.555.832.832-.554-.555-.832-.832.554Zm-.555-.832.832-.554-.554-.832-.832.554.554.832ZM4.246 7.866l-.781.625.573.716.762-.509-.554-.832ZM2.532 5.724l.781-.625-.625-.78-.78.624.624.781Zm6.724 6.836.01-1-1.01-.01v1.01h1Zm0 1h-1v.993l.993.007.007-1ZM3.754 8.42l-.998.074.154 2.06 1.52-1.398-.676-.736Zm.115-.127-.05-1-.46.024-.282.365.792.61Zm.876-.044.05.998 1.002-.05-.054-1.002-.998.054Zm1.287-1.573.555.832 1.664-1.11-.555-.831-1.664 1.109ZM4.8 8.698 7.42 6.952l-1.11-1.664-2.618 1.746 1.11 1.664Zm-3.049-2.35 1.714 2.143 1.562-1.25L3.313 5.1 1.751 6.35Zm.625.782.78-.625-1.249-1.562-.78.625L2.376 7.13Zm2.442 1.452L2.532 5.724.97 6.974 3.257 9.83l1.561-1.249ZM6.864 6.12 3.483 8.375l1.11 1.664 3.38-2.255L6.865 6.12Zm2.434 7.44A5.56 5.56 0 0 0 14.858 8h-2a3.56 3.56 0 0 1-3.56 3.56v2Zm-.051 0h.051v-2h-.033l-.018 2Zm1.01 0v-1h-2v1h2Zm-1.008 1h.05v-2h-.035l-.015 2Zm.05 0A6.56 6.56 0 0 0 15.858 8h-2a4.56 4.56 0 0 1-4.56 4.56v2ZM15.858 8a6.56 6.56 0 0 0-6.56-6.56v2A4.56 4.56 0 0 1 13.858 8h2Zm-6.56-6.56A6.56 6.56 0 0 0 2.738 8h2a4.56 4.56 0 0 1 4.56-4.56v-2ZM2.738 8c0 .166.005.33.017.493l1.995-.149A4.639 4.639 0 0 1 4.738 8h-2Zm.338-.319c-.007.009-.007.008 0 .001L4.43 9.155c.086-.079.162-.164.23-.253L3.078 7.681Zm1.617-.432-.875.044.1 1.997.876-.044-.1-1.997ZM3.738 8c0 .1.003.201.008.301l1.997-.107A3.629 3.629 0 0 1 5.738 8h-2Zm5.56-5.56A5.56 5.56 0 0 0 3.738 8h2a3.56 3.56 0 0 1 3.56-3.56v-2ZM14.858 8a5.56 5.56 0 0 0-5.56-5.56v2A3.56 3.56 0 0 1 12.858 8h2Z"
      fill="#000"
      mask="url(#a)"
    />
  </svg>,
);

const Grid3x3 = createIcon(
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3.34674H5V5.34674H3V3.34674ZM3 7.34674H5V9.34674H3V7.34674ZM5 11.3467H3V13.3467H5V11.3467ZM7 3.34674H9V5.34674H7V3.34674ZM9 7.34674H7V9.34674H9V7.34674ZM7 11.3467H9V13.3467H7V11.3467ZM13 3.34674H11V5.34674H13V3.34674ZM11 7.34674H13V9.34674H11V7.34674ZM13 11.3467H11V13.3467H13V11.3467Z"
      fill="black"
    />
  </svg>,
);

const ChevronLeft = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.5 3L6 7.5L10.5 12" stroke="black" />
  </svg>,
);

const ChevronUp = createIcon(
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: "rotate(180deg)" }}
  >
    <path
      d="M8.35355 10.0606L8.70711 9.70709L11.7071 6.70709L11 5.99998L8.35355 8.64643L5.70711 5.99998L5 6.70709L8 9.70709L8.35355 10.0606Z"
      fill="black"
    />
  </svg>,
);

const Link = createIcon(
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 5.34674V6.63245H11V5.34674C11 3.68989 9.65685 2.34674 8 2.34674C6.34315 2.34674 5 3.68989 5 5.34674V6.63245H6V5.34674C6 4.24217 6.89543 3.34674 8 3.34674C9.10457 3.34674 10 4.24217 10 5.34674ZM10 10.061H11V11.3467C11 13.0036 9.65685 14.3467 8 14.3467C6.34315 14.3467 5 13.0036 5 11.3467V10.061H6V11.3467C6 12.4513 6.89543 13.3467 8 13.3467C9.10457 13.3467 10 12.4513 10 11.3467V10.061ZM7.5 5.77531V10.9182H8.5V5.77531H7.5Z"
      fill="black"
    />
  </svg>,
);

const MarginBottom = createIcon(
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 15.3467H2V14.3467H14V15.3467Z"
      fill="black"
    />
    <rect x="4.5" y="4.84674" width="7" height="7" stroke="black" />
  </svg>,
);

const MarginHorizontal = createIcon(
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.999999 14.3467L1 2.34674L2 2.34674L2 14.3467L0.999999 14.3467Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 14.3467L14 2.34674L15 2.34674L15 14.3467L14 14.3467Z"
      fill="black"
    />
    <rect x="4.5" y="4.84674" width="7" height="7" stroke="black" />
  </svg>,
);

const MarginTop = createIcon(
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 2.34674H2V1.34674H14V2.34674Z"
      fill="black"
    />
    <rect x="4.5" y="4.84674" width="7" height="7" stroke="black" />
  </svg>,
);

const CornerRadius = createIcon(
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 3.34674H10C6.13401 3.34674 3 6.48075 3 10.3467V14.3467H2V10.3467C2 5.92846 5.58172 2.34674 10 2.34674H14V3.34674Z"
      fill="black"
    />
  </svg>,
);

const ThreeDotsHorizontal = createIcon(
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.80444 8.47266C3.80444 7.92037 4.25216 7.47266 4.80444 7.47266C5.35673 7.47266 5.80444 7.92037 5.80444 8.47266C5.80444 9.02494 5.35673 9.47266 4.80444 9.47266C4.25216 9.47266 3.80444 9.02494 3.80444 8.47266ZM7.80444 8.47266C7.80444 7.92037 8.25216 7.47266 8.80444 7.47266C9.35673 7.47266 9.80444 7.92037 9.80444 8.47266C9.80444 9.02494 9.35673 9.47266 8.80444 9.47266C8.25216 9.47266 7.80444 9.02494 7.80444 8.47266ZM12.8044 7.47266C12.2522 7.47266 11.8044 7.92037 11.8044 8.47266C11.8044 9.02494 12.2522 9.47266 12.8044 9.47266C13.3567 9.47266 13.8044 9.02494 13.8044 8.47266C13.8044 7.92037 13.3567 7.47266 12.8044 7.47266Z"
      fill="black"
    />
  </svg>,
);

const OpenInNew = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
  </svg>,
);

const LoadingSpinner = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    width="40"
    height="40"
    style={{
      shapeRendering: "auto",
      display: "block",
      background: "rgb(255, 255, 255)",
    }}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g>
      <circle
        strokeDasharray="164.93361431346415 56.97787143782138"
        r="35"
        strokeWidth="10"
        stroke="#0099e5"
        fill="none"
        cy="50"
        cx="50"
      >
        <animateTransform
          keyTimes="0;1"
          values="0 50 50;360 50 50"
          dur="1s"
          repeatCount="indefinite"
          type="rotate"
          attributeName="transform"
        />
      </circle>
    </g>
  </svg>,
);

const Save = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path d="M219.31,72,184,36.69A15.86,15.86,0,0,0,172.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V83.31A15.86,15.86,0,0,0,219.31,72ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H172.69L208,83.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z"></path>
    </g>
  </svg>,
);

const Save1 = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="#000000"
    style={{ opacity: 1 }}
  >
    <path d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M6 6h9v4H6z" />
  </svg>,
);

const SaveAs = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="#000000"
    style={{ opacity: 1 }}
  >
    <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.81c-.36-.62-.61-1.3-.73-2H5V5h11.17L19 7.83v4.25c.7.12 1.38.37 2 .73V7l-4-4zm1 3v4h9V6zm6 6c-1.66 0-3 1.34-3 3s1.34 3 3 3c0-1.89.89-3.66 2.39-4.79C13.85 12.5 13 12 12 12m5 2v3h-3v2h3v3h2v-3h3v-2h-3v-3z" />
  </svg>,
);

const Preview = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z"></path>
    </g>
  </svg>,
);

const Duplicate = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-copy-plus-icon lucide-copy-plus"
  >
    <line x1="15" x2="15" y1="12" y2="18" />
    <line x1="12" x2="18" y1="15" y2="15" />
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>,
);

const Trash = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-trash2-icon lucide-trash-2"
  >
    <path d="M10 11v6" />
    <path d="M14 11v6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
    <path d="M3 6h18" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>,
);

const ColorAndFonts = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="87.5%"
    height="100%"
    viewBox="0 0 21 19"
    fill="none"
  >
    <g clipPath="url(#clip0_7276_22190)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2305 10.1904C16.4101 10.1905 16.57 10.2498 16.7197 10.3496C16.8697 10.4496 16.9996 10.61 17.0996 10.8398L17.6299 12L18.3096 13.5098L20.2803 17.8604C20.3701 18.0502 20.3999 18.2102 20.3799 18.3701C20.3499 18.52 20.2898 18.6395 20.1699 18.7295C20.06 18.8094 19.9103 18.8495 19.7305 18.8496C19.5107 18.8496 19.3302 18.7903 19.2002 18.6904C19.0803 18.5805 18.9699 18.4103 18.8799 18.1904L18.2803 16.79H14.1504L13.5596 18.1904C13.4596 18.4201 13.3501 18.5905 13.2402 18.6904C13.1302 18.7904 12.9697 18.8496 12.7598 18.8496C12.5699 18.8496 12.41 18.7999 12.29 18.71C12.1801 18.63 12.1099 18.5101 12.0898 18.3701C12.0599 18.2102 12.09 18.0502 12.1699 17.8604L13.7998 14.25L14.4805 12.75L15.3398 10.8398C15.4398 10.6099 15.57 10.4496 15.71 10.3496C15.8599 10.2497 16.0305 10.1904 16.2305 10.1904ZM16.2002 11.96L15.8701 12.75L15.2402 14.25L14.6797 15.5703H17.7598L17.1504 14.1396L16.5596 12.7295L16.2305 11.96H16.2002Z"
        fill="#5D5D5D"
        style={{
          fill: "color(display-p3 0.3647 0.3647 0.3647)",
          fillOpacity: 1,
        }}
      ></path>
      <path
        d="M9.75 0C12.3 0 14.7603 0.999805 16.5703 2.7998C17.4903 3.69979 18.2197 4.76046 18.7197 5.94043C19.2296 7.12033 19.49 8.39004 19.5 9.66992C19.51 10.4199 19.4198 11.1799 19.2598 11.9199C19.2198 12.1199 19.1503 12.3102 19.0703 12.4902L17.9697 10.3799C17.9897 10.1499 18 9.90966 18 9.67969C17.9699 7.50985 17.0897 5.43031 15.5498 3.90039C14.0098 2.37039 11.92 1.51 9.75 1.5H9.66016C7.49016 1.52 5.40965 2.4002 3.88965 3.9502C2.35982 5.49017 1.5 7.58013 1.5 9.75C1.5 13.13 3.61 15.9702 7 17.1602C7.22995 17.2401 7.47002 17.2704 7.70996 17.2305C7.93996 17.2005 8.17012 17.1097 8.37012 16.9697C8.55993 16.8298 8.72012 16.6502 8.83008 16.4404C8.94008 16.2304 9 15.99 9 15.75C9 14.95 9.31988 14.1899 9.87988 13.6299C10.4399 13.0699 11.2 12.75 12 12.75H13.2197L12.4902 14.25H12C11.6 14.25 11.2204 14.4104 10.9404 14.6904C10.6604 14.9704 10.5 15.35 10.5 15.75C10.5 16.2299 10.3801 16.6999 10.1602 17.1299C9.9402 17.5498 9.62037 17.9202 9.23047 18.2002C8.84052 18.4802 8.39008 18.6497 7.91016 18.7197C7.44017 18.7897 6.94999 18.7401 6.5 18.5801C2.49 17.1601 0 13.78 0 9.75C0 7.18 1.01031 4.71965 2.82031 2.88965C4.63028 1.06985 7.08055 0.0299982 9.65039 0H9.75Z"
        fill="#5D5D5D"
        style={{
          fill: "color(display-p3 0.3647 0.3647 0.3647)",
          fillOpacity: 1,
        }}
      ></path>
      <path
        d="M5.62988 11.25C5.91988 11.25 6.20992 11.3701 6.41992 11.5801C6.62992 11.7901 6.75 12.0801 6.75 12.3701C6.74998 12.6001 6.67955 12.82 6.55957 13C6.43957 13.1799 6.2595 13.3302 6.05957 13.4102C5.84976 13.5 5.61995 13.5204 5.41016 13.4805C5.19016 13.4305 4.99008 13.3299 4.83008 13.1699C4.67008 13.0099 4.56953 12.8098 4.51953 12.5898C4.47962 12.38 4.50003 12.1502 4.58984 11.9404C4.66981 11.7405 4.82009 11.5604 5 11.4404C5.17997 11.3204 5.39993 11.25 5.62988 11.25Z"
        fill="#5D5D5D"
        style={{
          fill: "color(display-p3 0.3647 0.3647 0.3647)",
          fillOpacity: 1,
        }}
      ></path>
      <path
        d="M5.62988 6C5.91988 6 6.20992 6.12008 6.41992 6.33008C6.62989 6.54005 6.74997 6.82992 6.75 7.12988C6.75 7.34988 6.67957 7.57 6.55957 7.75C6.43957 7.92991 6.2595 8.08019 6.05957 8.16016C5.84976 8.24997 5.61995 8.27038 5.41016 8.23047C5.19016 8.18047 4.99008 8.07992 4.83008 7.91992C4.67008 7.75992 4.56953 7.55984 4.51953 7.33984C4.47962 7.13005 4.50003 6.90024 4.58984 6.69043C4.66981 6.4905 4.82009 6.31043 5 6.19043C5.17997 6.07045 5.39993 6.00002 5.62988 6Z"
        fill="#5D5D5D"
        style={{
          fill: "color(display-p3 0.3647 0.3647 0.3647)",
          fillOpacity: 1,
        }}
      ></path>
      <path
        d="M13.8701 6C14.1701 6.00003 14.4599 6.12011 14.6699 6.33008C14.8799 6.54005 15 6.82992 15 7.12988C15 7.34988 14.9296 7.57 14.8096 7.75C14.6896 7.92991 14.5095 8.08019 14.3096 8.16016C14.0998 8.24997 13.87 8.27038 13.6602 8.23047C13.4402 8.18047 13.2401 8.07992 13.0801 7.91992C12.9201 7.75992 12.8195 7.55984 12.7695 7.33984C12.7296 7.13005 12.75 6.90024 12.8398 6.69043C12.9198 6.4905 13.0701 6.31043 13.25 6.19043C13.43 6.07043 13.6501 6 13.8701 6Z"
        fill="#5D5D5D"
        style={{
          fill: "color(display-p3 0.3647 0.3647 0.3647)",
          fillOpacity: 1,
        }}
      ></path>
      <path
        d="M9.75 3.75C10.05 3.75 10.3298 3.87012 10.5498 4.08008C10.7598 4.29008 10.8701 4.58012 10.8701 4.87012C10.8701 5.09999 10.8103 5.32007 10.6904 5.5C10.5604 5.68 10.3897 5.83016 10.1797 5.91016C9.97987 5.99999 9.75005 6.02036 9.53027 5.98047C9.3103 5.93047 9.11019 5.82989 8.9502 5.66992C8.8002 5.50992 8.69039 5.30984 8.65039 5.08984C8.60044 4.87999 8.63008 4.6503 8.70996 4.44043C8.79992 4.24053 8.94002 4.06043 9.12988 3.94043C9.30988 3.82043 9.53 3.75 9.75 3.75Z"
        fill="#5D5D5D"
        style={{
          fill: "color(display-p3 0.3647 0.3647 0.3647)",
          fillOpacity: 1,
        }}
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_7276_22190">
        <rect
          width="20.39"
          height="18.85"
          fill="white"
          style={{ fill: "white", fillOpacity: 1 }}
        ></rect>
      </clipPath>
    </defs>
  </svg>,
);

const Pencil = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-pencil-icon lucide-pencil"
  >
    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    <path d="m15 5 4 4" />
  </svg>,
);

const PencilLine = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    className="cursor-pointer"
  >
    <g clip-path="url(#a)">
      <path
        d="M3.459 12.286a.73.73 0 0 0 .107-.01l3.004-.526a.175.175 0 0 0 .094-.05l7.57-7.57a.178.178 0 0 0 0-.251L11.266.909a.177.177 0 0 0-.127-.052.177.177 0 0 0-.127.052l-7.57 7.57a.181.181 0 0 0-.05.094l-.526 3.004a.598.598 0 0 0 .168.532.605.605 0 0 0 .425.177ZM4.663 9.17l6.476-6.475 1.31 1.31L5.97 10.48l-1.587.28.279-1.589Zm9.909 4.615H1.428a.57.57 0 0 0-.572.571V15c0 .079.064.143.143.143h14a.143.143 0 0 0 .143-.143v-.643a.57.57 0 0 0-.572-.571Z"
        fill="#606672"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z"></path>
      </clipPath>
    </defs>
  </svg>,
);

const Layers = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path>
    </g>
  </svg>,
);

const LayerGroup = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    data-hook="symbol"
  >
    <path
      fill-rule="evenodd"
      d="M15 15v1H5v-1h10Zm-.25-8c.689 0 1.25.561 1.25 1.25v3.5c0 .689-.561 1.25-1.25 1.25h-9.5C4.561 13 4 12.439 4 11.75v-3.5C4 7.561 4.561 7 5.25 7Zm0 1h-9.5a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25ZM15 4v1H5V4h10Z"
    ></path>
  </svg>,
);

const LayerChildren = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    data-hook="symbol"
  >
    <path
      fill-rule="evenodd"
      d="M9 6H6a2 2 0 0 0-2 2v3h5V6zM8 7v3H5V8c0-.551.449-1 1-1h2zm1 5v5H6a2 2 0 0 1-2-2v-3h5zm-1 1H5v2c0 .551.449 1 1 1h2v-3zm7-1v3a2 2 0 0 1-2 2h-3v-5h5zm-1 1h-3v3h2c.551 0 1-.449 1-1v-2zm1-9a2 2 0 0 1 2 2v5h-7V4h5zm0 1h-4v5h5V6c0-.551-.449-1-1-1z"
    ></path>
  </svg>,
);

const Copy = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="lucide lucide-copy-icon lucide-copy"
  >
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>,
);

const Id = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <text
      x="50%"
      y="50%"
      text-anchor="middle"
      dominant-baseline="central"
      font-size="16"
      font-weight="600"
      font-family="Arial, Helvetica, sans-serif"
      fill="currentColor"
    >
      ID
    </text>
  </svg>,
);

const GlobalSections = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path d="M122.34,109.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32ZM128,35.31,156.69,64,128,92.69,99.31,64Zm5.66,111a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32ZM128,220.69,99.31,192,128,163.31,156.69,192Zm109.66-98.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,237.66,122.34ZM192,156.69,163.31,128,192,99.31,220.69,128Zm-82.34-34.35-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,0,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,109.66,122.34ZM64,156.69,35.31,128,64,99.31,92.69,128Z"></path>
    </g>
  </svg>,
);

const Check = createIcon(
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="#25a55a"
    stroke-width="2"
  >
    <path d="M6 12l4 4 8-8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>,
);

const FullScreen = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="24"
    height="24"
    fill="currentColor"
    data-v-d88477d6=""
  >
    <g>
      <path d="M216,48V96a8,8,0,0,1-16,0V67.31l-50.34,50.35a8,8,0,0,1-11.32-11.32L188.69,56H160a8,8,0,0,1,0-16h48A8,8,0,0,1,216,48ZM106.34,138.34,56,188.69V160a8,8,0,0,0-16,0v48a8,8,0,0,0,8,8H96a8,8,0,0,0,0-16H67.31l50.35-50.34a8,8,0,0,0-11.32-11.32Z"></path>
    </g>
  </svg>,
);

const ExitFullScreen = createIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="24"
    height="24"
    fill="currentColor"
    data-v-d88477d6=""
  >
    <g>
      <path d="M213.66,53.66,163.31,104H192a8,8,0,0,1,0,16H144a8,8,0,0,1-8-8V64a8,8,0,0,1,16,0V92.69l50.34-50.35a8,8,0,0,1,11.32,11.32ZM112,136H64a8,8,0,0,0,0,16H92.69L42.34,202.34a8,8,0,0,0,11.32,11.32L104,163.31V192a8,8,0,0,0,16,0V144A8,8,0,0,0,112,136Z"></path>
    </g>
  </svg>,
);

const Section = createIcon(
  <svg
    data-v-a29d6ca1=""
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    width="24"
    height="24"
    fill="currentColor"
  >
    <g>
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"></path>
    </g>
  </svg>,
);

export const Icons = {
  Dropdown,
  MaxHeight,
  Add,
  AlignLeft,
  AlignRight,
  AlignCenter,
  Close,
  Desktop,
  Mobile,
  Drag,
  ArrowUp,
  ArrowDown,
  ArrowRight,
  Master,
  ChevronUp,
  ChevronDown: Dropdown,
  ChevronRight,
  ChevronLeft,
  Back,
  Redo,
  Undo,
  Remove,
  Share,
  Reset,
  Grid3x3,
  Link,
  MarginBottom,
  MarginHorizontal,
  MarginTop,
  CornerRadius,
  ThreeDotsHorizontal,
  OpenInNew,
  LoadingSpinner,
  Save,
  Save1,
  SaveAs,
  Preview,
  Duplicate,
  Trash,
  Pencil,
  PencilLine,
  ColorAndFonts,
  Layers,
  LayerGroup,
  LayerChildren,
  Copy,
  Id,
  GlobalSections,
  Check,
  FullScreen,
  ExitFullScreen,
  Section,
};
