import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: "40px",
          color: "#f4f4f0",
          fontSize: "110px",
          fontWeight: 900,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-2px",
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
