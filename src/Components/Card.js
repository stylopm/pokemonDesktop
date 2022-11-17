import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import { useState } from "react";

const Card = ({ pokemon, loading }) => {
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
              <div className="col-md-3" onClick={() => openPokeInfo(item)}>
                {/* <img className="card-img-top card-img" src={ item.sprites.front_default }></img> */}
                <div className="card-body">
                  <h5 className="card-title ">{item.name} </h5>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Card;
