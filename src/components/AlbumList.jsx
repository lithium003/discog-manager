import { Album } from "./Album";
import { AddAlbum } from "./AddAlbum";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";

const images = [
  "albums/Donda/donda.png",
  "albums/Donda 2/Donda 2.jpg",
  "albums/WAR/WAR.jpg",
  "albums/Vultures 1/Vultures 1.jpg",
  "albums/Vultures 2/Vultures 2.png",
  "albums/Vultures 3/Vultures 3.jpg",
];

export const AlbumList = () => {
  return (
    <Container>
      <Row>
        {images.map((src, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Album src={src} />
          </Col>
        ))}
        <Col xs={12} sm={6} md={4} lg={3}>
          <AddAlbum />
        </Col>
      </Row>
    </Container>
  );
};
