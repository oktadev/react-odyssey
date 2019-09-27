import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Button, Callout, Callouts, Card,
  FieldSet, FormHeaderWithTitle, TextInput, PasswordInput, CheckBox, TextArea, FormActions, FormFooter,
  Modal, Select, ExternalA, Meter } from '../src';

const ButtonDemo = () => <>
  <Button onClick={() => window.alert('onclick')}>Primary!</Button>
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
  <Button isSecondary isDanger>Oh no!</Button>
  <Button>Cool!</Button>
</>;

const CardDemo = () => <Card
  title="Computer Overheated!"
  meta="Thermite may have been involved"
  src="https://geoff.greer.fm/photos/thermite/thumbs/P1010014_crop.jpg"
  actions={CardActions}>
  This card is about a computer getting thermited.
</Card>;

const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
class FormDemo extends React.Component<{}, {msg: string; inputValue: string}> {
  ref1 = React.createRef<HTMLInputElement>();
  ref2 = React.createRef<HTMLInputElement>();
  ref3 = React.createRef<HTMLInputElement>();
  ref4 = React.createRef<HTMLTextAreaElement>();
  ref5 = React.createRef<HTMLSelectElement>();
  ref6 = React.createRef<HTMLButtonElement>();

  state = {
    msg: '',
    inputValue: '',
  };

  render () {
    const { msg, inputValue } = this.state;
    return <form className="form" onSubmit={e => {
      e.preventDefault();
      const formValues = {
        [this.ref1.current.name]: this.ref1.current.value,
        'controlled input': inputValue,
        [this.ref2.current.name]: this.ref2.current.value,
        [this.ref3.current.name]: this.ref3.current.checked ? 'checked' : 'not checked',
        [this.ref4.current.name]: this.ref4.current.value,
        [this.ref5.current.name]: this.ref5.current.value,
        [this.ref6.current.name]: this.ref6.current.type,
      };
      this.setState({ msg: JSON.stringify(formValues, null, 2) });
    }
    }>
      <FormHeaderWithTitle>Title</FormHeaderWithTitle>
      <p>
        This is a form!
      </p>
      <FieldSet legend="I'm a FieldSet legend">
        <TextInput label="Text Input" defaultValue="default value" autoSave="off" autoComplete="off" autoFocus={false} ref={this.ref1} name="TextInput" />
        <TextInput legend="I'm a TextInput legend" label={<h5>I&rsquo;m a text input React Node as Label (controlled input)</h5>} required={false} value={inputValue} onChange={e => this.setState({ inputValue: e.target.value })}/>
        <PasswordInput label="Password Input" ref={this.ref2} name="PasswordInput" required={false} />
      </FieldSet>
      <CheckBox label="Check Box" ref={this.ref3} name="CheckBox" id="asdf"/>
      <TextArea label="Text Area" ref={this.ref4} name="TextArea" required={false} />
      <Select label="Select me" ref={this.ref5} aside="This is a select thingy." name="Select">
        <option value="1">One</option>
        <option value="2">Two</option>
      </Select>

      <TextInput label="Error Input" error="Oh no." aside={LoremIpsum} />
      <FormActions>
        <Button isSecondary onClick={() => this.setState({ msg: '' })}>Hide values</Button>
        <Button type="submit" ref={this.ref6} name="Button">Show values</Button>
      </FormActions>
      <pre>{ msg }</pre>
      <FormFooter className="special-extra">
        By clicking Button, you implicitly agree to this form footer.
        <br />
        <a href="#">Link</a>
        <br />
        <ExternalA href="https://okta.com">External Link</ExternalA>
      </FormFooter>
    </form>;
  }
}

Modal.setAppElement('body');

class ModalDemo extends React.Component<{}, { submitted: boolean; open: boolean }> {
  state = {
    submitted: false,
    open: false,
  };

  private submit () {
    this.setState({ submitted: true, open: false });
  }

  render () {
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
  <h1>React Odyssey Hot Loaded Demo</h1>
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


  <Spacer />
  <h2 id="Meter">Meter</h2>
  <Meter label="meter" min={0} max={100} low={89} high={99} optimum={80} value={30} aria-valuemin={0} />
  <Meter label="meter" min={0} max={100} low={89} high={99} optimum={0} value={80} aria-valuemin={0} />


</div>;

ReactDom.render(<App />, document.body);
