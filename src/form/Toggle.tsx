import React from 'react';
import classNames from 'classnames';

interface ToggleProps extends Omit<React.ComponentProps<'button'>, 'onChange'|'ref'> {
  defaultChecked?: boolean;
  checked?: boolean;
  isDanger?: boolean;
  onChange?: (isChecked: boolean) => void;
}

type ToggleState = {
  isChecked: boolean;
};

export class Toggle extends React.Component<ToggleProps, ToggleState> {
  state: ToggleState = {
    isChecked: this.props.checked ?? this.props.defaultChecked,
  };

  public get checked (): boolean {
    return this.state.isChecked;
  }

  public set checked (isChecked: boolean) {
    this.setState({ isChecked });
  }

  componentDidUpdate (prevProps: ToggleProps, prevState: ToggleState) {
    if (prevState.isChecked !== this.state.isChecked) {
      this.props.onChange?.(this.state.isChecked);
    }
  }

  toggle = () => this.setState({ isChecked: !this.state.isChecked });

  render () {
    /* eslint @typescript-eslint/no-unused-vars: ["error", { "ignoreRestSiblings": true }] */
    const { onClick, checked, isDanger, onChange, className: cn, ...props } = this.props;
    const isChecked = checked ?? this.state.isChecked;
    const className = classNames(cn, 'odious-toggle', {
      'checked': isChecked,
      isDanger,
    });
    return <button {...props} role="switch" aria-checked={isChecked} type="button" className={className} onClick={onClick ?? this.toggle}>
    </button>;
  }
}
