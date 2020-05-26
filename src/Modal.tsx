import React, { ReactNode, ComponentProps } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import { Button } from './Button';

export type ModalType = 'primary' | 'secondary' | 'danger';

type ModalEvent = React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | React.SyntheticEvent<HTMLButtonElement>;

export type ModalProps = Omit<ComponentProps<'div'>, 'title' | 'ref'> & {
  cancellable?: boolean;
  disabled?: boolean;
  onCancel?: Function;
  submitBtnTxt?: ReactNode;
  submit: Function;
  title?: ReactNode;
  isDanger?: boolean;
};

export class Modal extends React.Component<ModalProps> {
  public static setAppElement = ReactModal.setAppElement;
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { cancellable, children, disabled, submitBtnTxt, title, className, submit, isDanger, ...rest } = this.props;

    return <ReactModal isOpen shouldCloseOnOverlayClick onRequestClose={this.close} className="ods-modal" style={this.style}>
      <div className={classNames('ods-modal--overlay', className)}  {...rest}>
        <div className="ods-modal--dialog">
          <div className="ods-modal--header">
            <button className="ods-modal--close" aria-label="Close modal" data-micromodal-close onClick={this.close} />
            <h1 className="ods-modal--title">{ title }</h1>
          </div>
          <main className="ods-modal--content">
            { children }
          </main>
          <footer className="ods-modal--footer">
            <Button isDanger={isDanger} disabled={disabled} onClick={this.submit}>
              { submitBtnTxt }
            </Button>
            { cancellable && <Button isSecondary isDanger={isDanger} disabled={disabled} onClick={this.close} aria-label="Close">
              Cancel
            </Button> }
          </footer>
        </div>
      </div>
    </ReactModal>;
  }
}
