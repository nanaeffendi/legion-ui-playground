import React, { useState } from 'react'
import { Modal, Button } from 'legion-ui'
import { Image } from 'legion-ui';

export default function ModalPage() {
  const [isActive, setIsActive] = useState(false);
  const [isActiveModal2, setIsActiveModal2] = useState(false);
  const [isActiveModal3, setIsActiveModal3] = useState(false);
  const [isActiveModal4, setIsActiveModal4] = useState(false);

  const modalFooter = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <Button css={{ marginRight: '12px' }}>Cancel</Button>
        <Button>Confirm</Button>
      </div>
    )
  };

  const modalFooter2 = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <Button onClick={toggleCustomModal2} css={{ marginRight: '12px' }}>Okay, got it!</Button>
      </div>
    )
  }

  const modalFooter3 = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={toggleCustomModal3} css={{ marginRight: '12px' }}>Go ahead</Button>
      </div>
    )
  }

  const modalFooter4 = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'right' }}>
        <Button onClick={toggleCustomModal4} css={{ marginRight: '12px' }}>Next</Button>
      </div>
    )
  }

  const toggleCustomModal1 = () => setIsActive(!isActive);
  const toggleCustomModal2 = () => setIsActiveModal2(!isActiveModal2);
  const toggleCustomModal3 = () => setIsActiveModal3(!isActiveModal3);
  const toggleCustomModal4 = () => setIsActiveModal4(!isActiveModal4);

  const closeModal = () => {
    if (isActive) {
      toggleCustomModal1();
    }
  }

  const closeModal2 = () => {
    if (isActiveModal2) {
      toggleCustomModal2();
    }
  }

  const closeModal3 = () => {
    if (isActiveModal3) {
      toggleCustomModal3();
    }
  }

  const closeModal4 = () => {
    if (isActiveModal4) {
      toggleCustomModal4();
    }
  }

  return (
    <div style={{ padding: '24px', marginTop: '24px' }}>
      <div style={{ textAlign: 'left' }}>
        <h3>Modal</h3>
      </div>
      <div style={{ padding: '12px' }}>
        <Button onClick={toggleCustomModal1} css={{ marginBottom: '12px' }}>Modal with header and footer</Button>
        <Button onClick={toggleCustomModal2} css={{ marginBottom: '12px' }}>Modal with custom content</Button>
        <Button onClick={toggleCustomModal3} css={{ marginBottom: '12px' }}>Modal with custom width and height</Button>
        <Button onClick={toggleCustomModal4} css={{ marginBottom: '12px' }}>Modal with another custom content</Button>

        <Modal
          isActive={isActive}
          modalId="legion-modal"
          iconName="Anchor"
          title="Modal Title"
          footer={modalFooter()}
          onClose={closeModal}
        >
          Pass all the necessary components as modal content here.
        </Modal>

        <Modal
          isActive={isActiveModal2}
          modalId="legion-modal-2"
          onClose={closeModal2}
          style={{ padding: 0 }}
          footer={modalFooter2()}
          width="40%"
        >
          <Image 
            src="https://www.treehugger.com/thmb/8he5rIw5n2ukJ44XXOHK7L-6PIc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2017__05__lady-bug-on-leaf-e3cd36cdc3024129b61926ddf6ef386e.jpg"
          />
          <div style={{ padding: '18px' }}>
            <h3>Modal with Images</h3>
            <p>
            This is the modal with custom content, you can pass images, text, and customize modal padding.
            </p>
            <p>
              By removing header and iconName modal properties, the close modal icon will automatically removed.
            </p>

            <p>Have a nice try with Legion-ui Modal!</p>
          </div>
        </Modal>

        <Modal
          isActive={isActiveModal3}
          modalId="legion-modal-3"
          iconName="File"
          title="Custom Modal Width and Height"
          footer={modalFooter3()}
          onClose={closeModal3}
          width="30%"
          height="300px"
        >
          This is an example to custom modal width and modal height.
          <p>
            You can pass the width and height by percent(%) or pixel(px) unit as you need.
          </p>
        </Modal>

        <Modal
          isActive={isActiveModal4}
          modalId="legion-modal-4"
          onClose={closeModal4}
          style={{ padding: 0 }}
          footer={modalFooter4()}
          title=" "
          width="700px"
        >
          <Image 
            src="https://www.pandotrip.com/wp-content/uploads/2014/05/Top-10-Arabic-Architecture-Burj-Al-Arab-740x462.jpg"
          />
          <div style={{ padding: '18px' }}>
            <h3 style={{textAlign: 'center'}}>Modal with Images 2</h3>
            <p>
              This is the modal with custom content, you can pass images, text, and customize modal padding.
              Have a nice try with Legion-ui Modal!
            </p>
          </div>
        </Modal>
      </div>
    </div>
  )
}
