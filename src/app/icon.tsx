import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#131310",
          borderRadius: "8px",
          color: "#f4f4f0",
          fontSize: "20px",
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-0.5px",
        }}
      >
        <span>A</span>
        <span style={{ color: "#83c42e" }}>.</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
