import React from 'react';

import { Button } from '../../Button';
import { CheckBoxWithLabel, CheckBoxFieldSet } from '../CheckBox';
import { Aside, FieldSet } from '../FieldSet';
import { Form, FormTitle, FormHeader, FormHeaderWithTitle, FormActions, FormFooter } from '../Form';
import { InputFieldSet, InputWithLabel, InputRaw } from '../Input';
import { Label } from '../Label';
import { PasswordInput, PasswordRaw } from '../Password';
import { Select, SelectRaw, OptGroup } from '../Select';
import { TextArea, TextAreaRaw } from '../TextArea';
import { RadioWithLabel } from '../Radio';
import { Toggle } from '../Toggle';

class FormWithRefs extends React.Component {
  input = React.createRef<HTMLInputElement>();
  inputWithLabel = React.createRef<HTMLInputElement>();
  inputRaw = React.createRef<HTMLInputElement>();
  password = React.createRef<HTMLInputElement>();
  passwordRaw = React.createRef<HTMLInputElement>();
  select = React.createRef<HTMLSelectElement>();
  selectRaw = React.createRef<HTMLSelectElement>();
  textArea = React.createRef<HTMLTextAreaElement>();
  textAreaRaw = React.createRef<HTMLTextAreaElement>();
  checkBox = React.createRef<HTMLInputElement>();
  checkBoxRaw = React.createRef<HTMLInputElement>();
  radioWithLabel1 = React.createRef<HTMLInputElement>();
  radioWithLabel2 = React.createRef<HTMLInputElement>();
  radioWithLabel3 = React.createRef<HTMLInputElement>();
  toggle = React.createRef<Toggle>();

  click = () => this.setState({
    input: this.input.current?.value,
    inputWithLabel: this.inputWithLabel.current?.value,
    inputRaw: this.inputRaw.current?.value,
    password: this.password.current?.value,
    passwordRaw: this.passwordRaw.current?.value,
    select: this.select.current?.value,
    selectRaw: this.selectRaw.current?.value,
    textArea: this.textArea.current?.value,
    textAreaRaw: this.textAreaRaw.current?.value,
    checkBox: this.checkBox.current?.checked,
    checkBoxRaw: this.checkBoxRaw.current?.checked,
    radioWithLabel1: this.radioWithLabel1.current?.checked,
    radioWithLabel2: this.radioWithLabel2.current?.checked,
    radioWithLabel3: this.radioWithLabel3.current?.checked,
    toggle: this.toggle.current?.checked,
  });

  render () {
    return <Form style={{ minWidth: '35em' }}>
      <FormHeaderWithTitle>FormHeaderWithTitle</FormHeaderWithTitle>
      <FormHeader>
        <FormTitle>FormTitle in FormHeader</FormTitle>
      </FormHeader>

      <div className="childa"/>
      <div><div className="childb">
        <h1>hi</h1>
      </div>
      </div>
      <InputFieldSet ref={this.input} label="InputFieldSet" aside="aside" required={false} />

      <FieldSet>
        <InputWithLabel ref={this.inputWithLabel} label="InputWithLabel" aside="aside" />
        <Label htmlFor="InputRaw">
          InputRaw
        </Label>
        <InputRaw ref={this.inputRaw} id="InputRaw"/>
      </FieldSet>
      <hr/>

      <PasswordInput label="PasswordInput" ref={this.password} required={false} />
      <Label htmlFor="PasswordRaw">
        PasswordRaw
      </Label>
      <PasswordRaw id="passwordRaw" ref={this.passwordRaw}/>

      <hr/>

      <Select ref={this.select} label="Select" required={false}>
        <OptGroup label="OptGroup 1">
          <option value="1">One</option>
          <option value="2">Two</option>
        </OptGroup>
        <OptGroup label="OptGroup 2">
          <option value="3">Three</option>
          <option value="4">Four</option>
        </OptGroup>
      </Select>

      <Label htmlFor="selectRaw">SelectRaw</Label>
      <SelectRaw id="selectRaw" ref={this.selectRaw}>
        <OptGroup label="OptGroup 1">
          <option value="1">One</option>
          <option value="2">Two</option>
        </OptGroup>
        <OptGroup label="OptGroup 2">
          <option value="3">Three</option>
          <option value="4">Four</option>
        </OptGroup>
      </SelectRaw>

      <hr />

      <TextArea ref={this.textArea} label="TextArea" required={false} legend="Text Areas" />

      <Label htmlFor="TextAreaRaw">TextAreaRaw</Label>
      <TextAreaRaw id="TextAreaRaw" ref={this.textAreaRaw}/>

      <hr />

      <CheckBoxFieldSet label="CheckBoxFieldSet" aside="aside" ref={this.checkBox} />

      <FieldSet legend="CheckBox legend">
        <Aside isHint> check some stuff or not</Aside>
        <CheckBoxWithLabel id="CheckBoxRaw1" ref={this.checkBoxRaw} label="CheckBox 1" />
        <CheckBoxWithLabel id="CheckBoxRaw2" ref={this.checkBoxRaw} label="CheckBox 1" />
        <CheckBoxWithLabel id="CheckBoxRaw3" ref={this.checkBoxRaw} label="CheckBox 3" />
      </FieldSet>

      <hr />

      <FieldSet legend="Radio legend">
        <Aside isHint> check some stuff or not</Aside>
        <RadioWithLabel defaultChecked label="RadioWithLabel 1" ref={this.radioWithLabel1} name="RadioWithLabel1" value="RadioWithLabel1"/>
        <RadioWithLabel label="RadioWithLabel 2" ref={this.radioWithLabel2} name="RadioWithLabel1" value="RadioWithLabel1"/>
        <RadioWithLabel label="RadioWithLabel 3" ref={this.radioWithLabel3} name="RadioWithLabel1" value="RadioWithLabel1"/>
      </FieldSet>
      <br/>
      <hr />

      <Label htmlFor="toggle">Toggle</Label>
      <Toggle id="toggle" ref={this.toggle}/>
      <pre>
        {
          this.state
            ? JSON.stringify(this.state, null, 2)
            : ''
        }
      </pre>

      <br/>
      <FormFooter>
        <FormActions>
          <Button isSecondary>No</Button>
          <Button name="Button" onClick={this.click}>Make JSON</Button>
        </FormActions>
      </FormFooter>
      <br/>
      <FormFooter className="special-extra">
        By clicking Button, you implicitly agree to this form footer.
        <br />
        <a href="#">Link</a>
        <br />
      </FormFooter>
    </Form>;
  }
}

export default <FormWithRefs />;
