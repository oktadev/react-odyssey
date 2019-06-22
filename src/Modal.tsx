import React, { HTMLAttributes, ReactNode } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Button } from './Button';
import { Omit } from './util';

export type ModalType = 'primary' | 'secondary' | 'danger';

type ModalEvent = React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | React.SyntheticEvent<HTMLButtonElement>;

export type ModalProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  cancellable?: boolean;
  disabled?: boolean;
  onCancel?: Function;
  submitBtnTxt?: React.ReactNode;
  submit: Function;
  title?: React.ReactNode;
  type?: ModalType;
};

export class Modal extends React.Component<ModalProps> {
  public static setAppElement = ReactModal.setAppElement;

  public static defaultProps = {
    children: '',
    submitBtnTxt: 'Submit',
    type: 'primary',
  };

  public static propTypes = {
    cancellable: PropTypes.bool,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onCancel: PropTypes.func,
    submitBtnTxt: PropTypes.node,
    submit: PropTypes.func.isRequired,
    title: PropTypes.node,
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
    const { cancellable, children, disabled, submitBtnTxt, title, type, className, ...rest } = this.props;

    return <ReactModal isOpen shouldCloseOnOverlayClick onRequestClose={this.close} className="modal" style={this.style}>
      <div className={classNames('modal--overlay', `is-modal-${type}`, className)}  {...rest}>
        <div className="modal--dialog">
          <div className="modal--header">
            <h1 className="modal--title">{ title }</h1>
            <button className="modal--close" aria-label="Close modal" data-micromodal-close onClick={this.close} />
          </div>
          <div className="modal--content">
            { children }
          </div>
          <div className="modal--footer">
            <Button isSecondary={type === 'secondary'} isDanger={type === 'danger'} disabled={disabled} onClick={this.submit}>
              { submitBtnTxt }
            </Button>
            { cancellable && <Button isSecondary disabled={disabled} onClick={this.close}>
              Cancel
            </Button> }
          </div>
        </div>
      </div>
    </ReactModal>;
  }
}
