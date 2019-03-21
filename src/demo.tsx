import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Callout, Callouts }  from './Callout';
import { FormTitle, TextInput, PasswordInput, CheckBox, TextArea, FormActions, FormFooter } from './Form';

const CalloutDemo = () => <React.Fragment>
  {["pending", "info", "warning", "error"].map(t =>
    <Callout key={t} kind={t as Callouts} title={t}>
      <p>info</p>
    </Callout>
  )}
  <Callout kind={"error" as Callouts}>
    <p>no title</p>
  </Callout>
</React.Fragment>;

class FormDemo extends React.Component {
  private ref1 = React.createRef<HTMLInputElement>();
  private ref2 = React.createRef<HTMLInputElement>();
  private ref3 = React.createRef<HTMLInputElement>();
  private ref4 = React.createRef<HTMLTextAreaElement>();

  render () {
    return <React.Fragment>
      <form className="form">
        <FormTitle>Title</FormTitle>
        <p>
          This is a form!
        </p>
        <TextInput label="Text Input" defaultValue="default value"  autoSave="off" autoComplete="off" autoFocus={false} ref={this.ref1} />
        <TextInput label={<h5>a text input React Node as Label</h5>} />
        <PasswordInput label="Password Input" ref={this.ref2} />
        <CheckBox label="Check Box" ref={this.ref3} />
        <TextArea label="Text Area" ref={this.ref4} />
        <FormActions>
          <button className="button is-button-primary" type="button">Button</button>
          <button className="button is-button-secondary" type="button">Other Button</button>
        </FormActions>
        <FormFooter>
          By clicking Button, you implicitly agree to this form footer.
        </FormFooter>
      </form>
    </React.Fragment>;
  }
}

const App = () => <div style={{ maxWidth: 1248, margin: 'auto', padding: 20 }}>
  <h1>React Nim Hot Loaded Demo</h1>

  <h3 id="callouts">Callouts</h3>
  <CalloutDemo />

  <h3 id="forms">Forms</h3>
  <FormDemo />
</div>;
ReactDom.render(<App />, document.body);