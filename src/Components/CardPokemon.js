import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useState } from "react";

const CardPokemon = ({ pokemon, loading }) => {
  /// [variable, funcionLlenaVariable ]
  const [showModal, setShow] = useState(false);
  const [selectPokemon, setSelectPokemon] = useState({});
  const handleClose = () => setShow(false);
  const openPokeInfo = async (item) => {
    setShow(true);
    const respPokemon = await axios.get(item.url);
    setSelectPokemon({
      name: respPokemon.data.name,
      weight: respPokemon.data.weight,
      height: respPokemon.data.height,
      img: respPokemon.data.sprites.front_default,
    });
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectPokemon.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>weight : {selectPokemon.weight}</p>
          <p>height : {selectPokemon.height}</p>
          <img className="card-img-top card-img" src={selectPokemon.img}></img>
        </Modal.Body>
      </Modal>

      <div className="row card-row">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          pokemon.map((item) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Button onClick={() => openPokeInfo(item)} variant="primary">
                    Go show
                  </Button>
                </Card.Body>
              </Card>
            );
          })
        )}
      </div>
    </>
  );
};

export default CardPokemon;
