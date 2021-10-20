import React from 'react';
import classNames from 'classnames';

export interface SwitchProps extends Omit<React.ComponentProps<'button'>, 'type'|'role'|'onChange'|'ref'> {
  defaultChecked?: boolean;
  checked?: boolean;
  isDanger?: boolean;
  onChange?: (isChecked: boolean) => void;
}

type SwitchState = {
  isChecked: boolean;
};

export class Switch extends React.Component<SwitchProps, SwitchState> {
  state: SwitchState = {
    isChecked: this.props.checked ?? this.props.defaultChecked,
  };

  public get checked (): boolean {
    return this.state.isChecked;
  }

  public set checked (isChecked: boolean) {
    this.setState({ isChecked });
  }

  componentDidUpdate (prevProps: SwitchProps, prevState: SwitchState) {
    if (prevState.isChecked !== this.state.isChecked) {
      this.props.onChange?.(this.state.isChecked);
    }
  }

  toggle = () => this.setState({ isChecked: !this.state.isChecked });

  render () {
    const { onClick, checked, isDanger, onChange, className, ...props } = this.props;
    const isChecked = checked ?? this.state.isChecked;
    const classes = classNames(className, 'ods-switch', {
      isDanger,
    });
    return (
      <button type="button" role="switch" {...props} aria-checked={isChecked} className={classes} onClick={onClick ?? this.toggle}>
        <span className="ods-switch--dial" />
        <span className="ods-switch--dial" />
      </button>
    );
  }
}
