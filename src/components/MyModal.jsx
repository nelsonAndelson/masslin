import React, { useState } from "react";
import { Modal, Image, Header, Button, Icon } from "semantic-ui-react";

const MyModal = ({ open, close }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Modal dimmer="blurring" open={open} onClose={close}>
        <Modal.Header>Washable</Modal.Header>
        <Modal.Content image scrolling>
          <Image
            wrapped
            size="medium"
            src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
          />
          <Modal.Description>
            <Header>Washable interior paint</Header>
            <h4>Description:</h4>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>

            <Button
              color="black"
              icon
              labelPosition="left"
              onClick={() => setQuantity(quantity + 1)}
            >
              <Icon name="plus" />
              More
            </Button>
            <Button
              icon
              labelPosition="right"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              Less
              <Icon name="minus" />
            </Button>

            <h4>
              Quantity: <span>{quantity}</span>
            </h4>

            <h4>
              Quantity:{" "}
              <span>
                {" "}
                UGX{" "}
                {(300 * quantity)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </h4>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button animated onClick={close}>
            <Button.Content visible>Back</Button.Content>
            <Button.Content hidden>
              <Icon name="arrow left" />
            </Button.Content>
          </Button>

          <Button
            color="black"
            icon="shopping cart"
            labelPosition="right"
            content="Add to Cart"
            loading={loading}
            secondary
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                close();
                setLoading(false);
              }, 2000);
            }}
          />
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default MyModal;
