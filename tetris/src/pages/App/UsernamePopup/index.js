//@flow
import { Field, Form } from "react-final-form";
import React from "react";

import { Footer, FormElement, FormSC, FormTitle, Label } from "./styled";
import { Modal } from "../../../components/Loading/styled";
import { PauseButton } from "../../../components/GameInfo/styled";

const validate = values => {
  const result = {};
  const { username } = values;
  if (username == null || username.trim() === "") {
    result.username = "required";
  }
  return result;
};

type Props = { onUsernameSet: (values: { username: string }) => any };
export default ({ onUsernameSet }: Props) => (
  <Modal>
    <Form
      onSubmit={onUsernameSet}
      validate={validate}
      render={({ handleSubmit, pristine, invalid }) => (
        <FormSC onSubmit={handleSubmit}>
          <FormTitle>Enter username</FormTitle>
          <FormElement>
            <Label>User name*</Label>
            <Field name="username" component="input" placeholder="Username" />
          </FormElement>
          <Footer>
            <PauseButton type="submit" disabled={pristine || invalid}>
              Save
            </PauseButton>
          </Footer>
        </FormSC>
      )}
    />
  </Modal>
);
