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

export class Modal extends React.Component<ModalProps> {
  public static setAppElement = ReactModal.setAppElement;

  public static defaultProps = {
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

  public style = {
    content: { display: 'block' },
    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  };

  public close = (e?: ModalEvent) => {
    if (e) {
      e.preventDefault();
    }
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  public submit = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
    }
    this.props.submit();
  }

  public render () {
    const { cancellable, children, disabled, submitBtnTxt, title, type } = this.props;
    return <ReactModal isOpen shouldCloseOnOverlayClick onRequestClose={this.close} className="modal" style={this.style}>
      <div className={classNames('modal--overlay', `is-modal-${type}`)}>
        <div className="modal--dialog">
          <div className="modal--header">
            <h1 className="modal--title">{title}</h1>
            <button className="modal--close" aria-label="Close modal" data-micromodal-close onClick={this.close} />
          </div>
          <div className="modal--content">
            {children}
          </div>
          <div className="modal--footer">
            <button type="button" className={`button is-button-${type}`} disabled={disabled} onClick={this.submit}>
              {submitBtnTxt}
            </button>
            { cancellable && <button type="button" className="button is-button-secondary" disabled={disabled} onClick={this.close}>
              Cancel
            </button> }
          </div>
        </div>
      </div>
    </ReactModal>;
  }
}
