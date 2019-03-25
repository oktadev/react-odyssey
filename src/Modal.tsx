import React, { ReactNode } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export type ModalType = 'primary' | 'secondary' | 'danger';

type ModalEvent = MouseEvent | KeyboardEvent | React.SyntheticEvent<HTMLButtonElement>;

export type ModalProps = {
  cancellable?: boolean;
  children: ReactNode;
  disabled?: boolean;
  onCancel?: Function;
  submitBtnTxt?: string;
  submit: Function;
  title?: string;
  type?: ModalType;
};

export class Modal extends React.Component<ModalProps, { showModal: boolean }> {
  public static setAppElement = ReactModal.setAppElement;

  private static defaultProps = {
    submitBtnTxt: 'Submit',
    type: 'primary',
  };

  public static propTypes = {
    cancellable: PropTypes.bool,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    onCancel: PropTypes.func,
    submitBtnTxt: PropTypes.string,
    submit: PropTypes.func.isRequired,
    title: PropTypes.string,
    type: PropTypes.string, // TODO: use oneOf() + ModalType here
  }

  public constructor (props: ModalProps) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  public open (ev?: ModalEvent) {
    if (ev) {
      ev.preventDefault();
    }
    this.setState({ showModal: true });
  }

  public close (ev?: ModalEvent) {
    if (ev) {
      ev.preventDefault();
    }
    if (this.props.onCancel) {
      this.props.onCancel();
    }
    this.setState({ showModal: false });
  }

  public submit (ev: React.SyntheticEvent<HTMLButtonElement>) {
    if (ev) {
      ev.preventDefault();
    }
    this.props.submit();
  }

  public render () {
    const { cancellable, children, disabled, submitBtnTxt, title, type } = this.props;
    const close = (e: ModalEvent) => this.close(e);
    return <ReactModal
      isOpen={this.state.showModal}
      onRequestClose={close}
      shouldCloseOnOverlayClick={true}
      className="modal"
      style={{
        content: { display: 'block' },
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
      }}>
      <div className={classNames('modal--overlay', `is-modal-${type}`)} >
        <div className="modal--dialog">
          <div className="modal--header">
            <h1 className="modal--title">{title}</h1>
            <button className="modal--close" aria-label="Close modal" data-micromodal-close onClick={close} />
          </div>
          <div className="modal--content">
            {children}
          </div>
          <div className="modal--footer">
            <button type="button" className={`button is-button-${type}`} disabled={disabled} onClick={e => this.submit(e)}>
              {submitBtnTxt}
            </button>
            { cancellable && <button type="button" className="button is-button-secondary" disabled={disabled} onClick={close}>
              Cancel
            </button> }
          </div>
        </div>
      </div>
    </ReactModal>;
  }
}
