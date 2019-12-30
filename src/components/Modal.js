import React from "react";
import { Modal as ModalB } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { openCloseAddTweetModalAction } from "../actions/modalActions";

export default function Modal(props) {
  const { children } = props;

  //dispatch para ejecutar nuestra acciones
  const dispatch = useDispatch();
  const openCloseAddTweetModal = state =>
    dispatch(openCloseAddTweetModalAction(state));

  const closeModal = () => {
    openCloseAddTweetModal(false);
  };

  //useSelector para acceder a un valor en el store
  const isOpenModal = useSelector(state => state.modals.stateModalAddTweet);

  return (
    <ModalB show={isOpenModal} onHide={closeModal} size="lg">
      {children}
    </ModalB>
  );
}
