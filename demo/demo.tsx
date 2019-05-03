import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Button, Callout, Callouts, Card,
  FieldSet, FormTitle, TextInput, PasswordInput, CheckBox, TextArea, FormActions, FormFooter,
  Modal, Select } from '../src';

const ButtonDemo = () => <>
  <Button>Primary!</Button>
  <Button isSecondary>Secondary!</Button>
  <Button isDanger>Danger!</Button>
  <Button isDanger isSecondary>Secondary Danger!</Button>
</>;

const CalloutDemo = () => <React.Fragment>
  {["pending", "info", "warning", "error"].map(t =>
    <Callout key={t} kind={t as Callouts} title={`${t[0].toUpperCase()}${t.substr(1)}`}>
      <p>Callout body</p>
    </Callout>
  )}
  <Callout kind={"error" as Callouts}>
    <p>No title</p>
  </Callout>
</React.Fragment>;

const CardActions = <>
  <Button>Cool!</Button>
  <Button isSecondary isDanger>Oh no!</Button>
</>;

const CardDemo = () => <Card
  title="Computer Overheated!"
  meta="Thermite may have been involved"
  mediaSrc="https://geoff.greer.fm/photos/thermite/thumbs/P1010014_crop.jpg"
  actions={CardActions}>
  This card is about a computer getting thermited.
</Card>;

class FormDemo extends React.Component {
  private ref1 = React.createRef<HTMLInputElement>();
  private ref2 = React.createRef<HTMLInputElement>();
  private ref3 = React.createRef<HTMLInputElement>();
  private ref4 = React.createRef<HTMLTextAreaElement>();
  private ref5 = React.createRef<HTMLSelectElement>();

  public render () {
    return <form className="form">
      <FormTitle>Title</FormTitle>
      <p>
        This is a form!
      </p>
      <FieldSet legend="I'm a FieldSet">
        <TextInput label="Text Input" defaultValue="default value" autoSave="off" autoComplete="off" autoFocus={false} ref={this.ref1} />
        <TextInput label={<h5>a text input React Node as Label</h5>} />
        <PasswordInput label="Password Input" ref={this.ref2} />
      </FieldSet>
      <CheckBox label="Check Box" ref={this.ref3} />
      <TextArea label="Text Area" ref={this.ref4} />
      <Select label="Select me" ref={this.ref5} aside="This is a select thingy.">
        <option value="1">One</option>
        <option value="2">Two</option>
      </Select>
      <FormActions>
        <Button>Button</Button>
        <Button isSecondary>Other Button isSecondary</Button>
      </FormActions>
      <FormFooter>
        By clicking Button, you implicitly agree to this form footer.
      </FormFooter>
    </form>;
  }
}

Modal.setAppElement('body');

class ModalDemo extends React.Component<{}, { submitted: boolean; open: boolean }> {
  public state = {
    submitted: false,
    open: false,
  };

  private submit () {
    this.setState({ submitted: true, open: false });
  }

  public render () {
    return <>
      {this.state.open && <Modal
        title="Example Modal"
        submitBtnTxt="Submit!"
        onCancel={() => this.setState({ open: false })}
        submit={this.submit.bind(this)}>
        <p>
          Example modal text?
        </p>
      </Modal>}
      <Button onClick={() => this.setState({ open: true })}>Open modal</Button>
      { this.state.submitted && <h4>SUBMITTED</h4>}
    </>;
  }
}

const Spacer = () => <div style={{ height: 50 }} />;

const App = () => <div style={{ maxWidth: 1248, margin: 'auto', padding: 20 }}>
  <h1>React Nim Hot Loaded Demo</h1>

  <h2 id="button">Button</h2>
  <ButtonDemo />
  <Spacer />

  <h2 id="callout">Callout</h2>
  <CalloutDemo />
  <Spacer />

  <h2 id="card">Card</h2>
  <CardDemo />
  <Spacer />

  <h2 id="form">Form</h2>
  <FormDemo />
  <Spacer />

  <h2 id="modal">Modal</h2>
  <ModalDemo />
  <Spacer />
</div>;

ReactDom.render(<App />, document.body);
