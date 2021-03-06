import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() label: string = 'Click Me!';

  @Event() clicked: EventEmitter;

  handleButtonClick() {
    this.clicked.emit()
  }

  render() {
    return (
      <Host>
        <button onClick={() => this.handleButtonClick()}>{this.label}</button>
      </Host>
    );
  }
}
