import "./Loader.css";

export function Loader({ size = 16, color = "var(--dark-gray-color)" }) {
  return (
    <div style={{ width: size, height: size }} className="loader">
      <div
        style={{ transformOrigin: `${0.5 * size}px ${0.5 * size}px` }}
        className="loader__dot-outer"
      >
        <div
          style={{
            width: 0.0875 * size,
            height: 0.0875 * size,
            backgroundColor: color,
            marginTop: -0.05 * size,
            marginLeft: -0.05 * size,
            top: 0.7875 * size,
            left: 0.7875 * size,
          }}
          className="loader__dot"
        ></div>
      </div>
      <div
        style={{ transformOrigin: `${0.5 * size}px ${0.5 * size}px` }}
        className="loader__dot-outer"
      >
        <div
          style={{
            width: 0.0875 * size,
            height: 0.0875 * size,
            backgroundColor: color,
            marginTop: -0.05 * size,
            marginLeft: -0.05 * size,
            top: 0.85 * size,
            left: 0.7 * size,
          }}
          className="loader__dot"
        ></div>
      </div>
      <div
        style={{ transformOrigin: `${0.5 * size}px ${0.5 * size}px` }}
        className="loader__dot-outer"
      >
        <div
          style={{
            width: 0.0875 * size,
            height: 0.0875 * size,
            backgroundColor: color,
            marginTop: -0.05 * size,
            marginLeft: -0.05 * size,
            top: 0.8875 * size,
            left: 0.6 * size,
          }}
          className="loader__dot"
        ></div>
      </div>
      <div
        style={{ transformOrigin: `${0.5 * size}px ${0.5 * size}px` }}
        className="loader__dot-outer"
      >
        <div
          style={{
            width: 0.0875 * size,
            height: 0.0875 * size,
            backgroundColor: color,
            marginTop: -0.05 * size,
            marginLeft: -0.05 * size,
            top: 0.9 * size,
            left: 0.5 * size,
          }}
          className="loader__dot"
        ></div>
      </div>
      <div
        style={{ transformOrigin: `${0.5 * size}px ${0.5 * size}px` }}
        className="loader__dot-outer"
      >
        <div
          style={{
            width: 0.0875 * size,
            height: 0.0875 * size,
            backgroundColor: color,
            marginTop: -0.05 * size,
            marginLeft: -0.05 * size,
            top: 0.8875 * size,
            left: 0.4 * size,
          }}
          className="loader__dot"
        ></div>
      </div>
      <div
        style={{ transformOrigin: `${0.5 * size}px ${0.5 * size}px` }}
        className="loader__dot-outer"
      >
        <div
          style={{
            width: 0.0875 * size,
            height: 0.0875 * size,
            backgroundColor: color,
            marginTop: -0.05 * size,
            marginLeft: -0.05 * size,
            top: 0.85 * size,
            left: 0.3 * size,
          }}
          className="loader__dot"
        ></div>
      </div>
      <div
        style={{ transformOrigin: `${0.5 * size}px ${0.5 * size}px` }}
        className="loader__dot-outer"
      >
        <div
          style={{
            width: 0.0875 * size,
            height: 0.0875 * size,
            backgroundColor: color,
            marginTop: -0.05 * size,
            marginLeft: -0.05 * size,
            top: 0.7875 * size,
            left: 0.2125 * size,
          }}
          className="loader__dot"
        ></div>
      </div>
      <div
        style={{ transformOrigin: `${0.5 * size}px ${0.5 * size}px` }}
        className="loader__dot-outer"
      >
        <div
          style={{
            width: 0.0875 * size,
            height: 0.0875 * size,
            backgroundColor: color,
            marginTop: -0.05 * size,
            marginLeft: -0.05 * size,
            top: 0.7 * size,
            left: 0.15 * size,
          }}
          className="loader__dot"
        ></div>
      </div>
    </div>
  );
}
