import { PlusLg } from "react-bootstrap-icons";

export const AddAlbum = () => {
  return (
    <div className="d-flex flex-column align-items-center mb-4">
      <div
        className="d-flex justify-content-center align-items-center mb-2"
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "contain",
          borderRadius: "0.5rem",
          background: "#f8f9fa",
        }}
      >
        <PlusLg
          size="48%"
          className="text-secondary"
          style={{ width: "48%", height: "48%" }}
        />
      </div>
      <div
        className="album-info-card shadow-sm bg-white rounded-bottom w-100 text-center px-2 pt-1 pb-2"
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          marginTop: "-0.5rem",
          zIndex: 1,
          position: "relative",
        }}
      >
        <h1 className="h6 fw-semibold mb-0" style={{ fontSize: "1rem" }}>
          The Life of Pablo
        </h1>
        <div
          className="text-secondary"
          style={{ fontSize: "0.85rem", lineHeight: 1 }}
        >
          ¥$, Kanye West & Ty Dolla $ign
        </div>
        <div
          className="text-muted"
          style={{ fontSize: "0.8rem", lineHeight: 1 }}
        >
          2024
        </div>
      </div>
    </div>
  );
};
