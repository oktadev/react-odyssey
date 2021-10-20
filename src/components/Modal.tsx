import React, { ReactNode, ComponentProps } from 'react';
import ReactModal from 'react-modal';
import classNames from 'classnames';

import { Button } from './Button';

export type ModalType = 'primary' | 'secondary' | 'danger';

type ModalEvent = React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element> | React.SyntheticEvent<HTMLButtonElement>;

export interface ModalProps extends Omit<ComponentProps<'div'>, 'title' | 'ref'> {
  cancellable?: boolean;
  disabled?: boolean;
  onCancel?: () => any;
  submitBtnTxt?: ReactNode;
  submit: () => any;
  title?: ReactNode;
  isDanger?: boolean;
  parentselector?(): HTMLElement;
}

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
    const { cancellable, children, disabled, submitBtnTxt, title, parentselector, className, submit, isDanger, ...rest } = this.props;

    return <ReactModal isOpen shouldCloseOnOverlayClick onRequestClose={this.close} className="ods-modal" style={this.style} parentSelector={parentselector} >
      <div tabIndex={-1} data-micromodal-close className={classNames('ods-modal--overlay', className)} {...rest}>
        <div role="dialog" aria-modal="true" aria-labelledby="ods-modal-standard-title" className="ods-modal--dialog">
          <div className="ods-modal--header">
            <button className="ods-modal--close" aria-label="Close modal" data-micromodal-close onClick={this.close} />
            <h1 className="ods-modal--title" id="ods-modal-standard-title">{ title }</h1>
          </div>
          <main className="ods-modal--content" id="ods-modal-standard-content">
            { children }
          </main>
          <footer className="ods-modal--footer">
            { cancellable && <Button isClear isDanger={isDanger} onClick={this.close} data-micromodal-close aria-label="Close this dialog window">
              Cancel
            </Button> }
            <Button isDanger={isDanger} disabled={disabled} onClick={this.submit}>
              { submitBtnTxt }
            </Button>
          </footer>
        </div>
      </div>
    </ReactModal>;
  }
}
