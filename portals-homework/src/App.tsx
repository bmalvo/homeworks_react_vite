import { useState } from "react";
import { Modal } from "./Modal/Modal";
import { Page } from "./Page/Page";

export const App = () => {

  const [isModal, setIsModal] = useState<boolean>(false);

  const handleShowModal = () => {

    setIsModal(true)
  }

  const handleClose = () => {

    setIsModal(false)
  }

  return <>
    <Page>
      <button onClick={handleShowModal}>show modal</button>
      {isModal? <Modal onClose={handleClose} title='modal title' text='modal text'/> : null}
    </Page>
  </>
}