import Image from "react-bootstrap/Image";

export const Album = ({ src }) => {
  return (
    <div className="d-flex flex-column align-items-center mb-4">
      <Image
        src={src}
        fluid
        className="mb-2"
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "contain",
          borderRadius: "0.5rem",
          background: "#f8f9fa"
        }}
        alt="Album cover"
      />
      <div
        className="album-info-card shadow-sm bg-white rounded-bottom w-100 text-center px-2 pt-1 pb-2"
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: "-0.5rem",
          zIndex: 1,
          position: "relative"
        }}
      >
        <h1 className="h6 fw-semibold mb-0" style={{ fontSize: "1rem" }}>The Life of Pablo</h1>
        <div className="text-secondary" style={{ fontSize: "0.85rem", lineHeight: 1 }}>¥$, Kanye West & Ty Dolla $ign</div>
        <div className="text-muted" style={{ fontSize: "0.8rem", lineHeight: 1 }}>2024</div>
      </div>
    </div>
  );
};