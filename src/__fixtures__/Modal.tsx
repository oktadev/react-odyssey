import React from 'react';

import { Modal, ModalProps } from '../Modal';
import { Button } from '../Button';


Modal.setAppElement('body');

class ModalDemo extends React.Component<ModalProps, { submitted: boolean; open: boolean }> {
  state = {
    submitted: false,
    open: false,
  };

  ref = React.createRef<Modal>();

  submit = () => this.setState({ submitted: true, open: false });

  render () {
    const { isDanger, cancellable, title, submitBtnTxt } = this.props;
    return <>
      {this.state.open && <Modal
        isDanger={isDanger}
        cancellable={cancellable}
        title={title}
        submitBtnTxt={submitBtnTxt}
        onCancel={() => this.setState({ open: false })}
        submit={this.submit}
        ref={this.ref}>
        <p>
          Example modal text?
        </p>
      </Modal>}
      <Button onClick={() => this.setState({ open: true })}>Open modal</Button>
      { this.state.submitted && <h4>SUBMITTED</h4>}
    </>;
  }
}

export default <ModalDemo isDanger={false} cancellable={false} title="Modal" submitBtnTxt="Submit" submit={() => window.alert('submitted')}/>;
