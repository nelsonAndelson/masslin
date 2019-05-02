import React from "react";
import { Button, Icon } from "semantic-ui-react";

export const ActionBtns = ({ setOpen, styles }) => (
  <>
    <Button animated="vertical" style={{ ...styles.actionBtn }}>
      <Button.Content hidden>Cart</Button.Content>
      <Button.Content visible>
        <Icon name="shop" />
      </Button.Content>
    </Button>

    <Button
      animated="vertical"
      style={{ ...styles.actionBtn }}
      onClick={() => setOpen(true)}
    >
      <Button.Content hidden>View</Button.Content>
      <Button.Content visible>
        <Icon name="eye" />
      </Button.Content>
    </Button>
  </>
);
