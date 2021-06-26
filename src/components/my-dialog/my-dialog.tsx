import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-dialog',
  styleUrl: 'my-dialog.css',
  shadow: true,
})
export class MyDialog {
  @Prop() visible: boolean = false;
  @Prop() dialogTitle: string;
  @Prop() confirmText: string = 'Confirm';
  @Prop() cancelText: string = 'Cancel';
  @Prop() showConfirmBtn: boolean = true;
  @Prop() showCancelBtn: boolean = true;
  
  @Event() confirm: EventEmitter;
  _cancelBtnHandler() {
    this.confirm.emit()
    this._closeHandler()
  }
  
  @Event() cancel: EventEmitter;
  _confirmBtnHandler() {
    this.confirm.emit()
    this._closeHandler()
  }

  @Event() close: EventEmitter;
  _closeHandler() {
    this.close.emit()
  }

  _clickCloseHandler() {
    this.close.emit()
  }
  
  render() {
    return (
      <Host>
				<div class={`my-dialog ${this.visible ? 'open' : ''}`}>
					<div class="mask"></div>
					<div class="content">
						<div class="dialog-hd">
							<div class="title">{this.dialogTitle}</div>
							<span class="btn-close" onClick={() => this._clickCloseHandler()}></span>
						</div>
						<div class="dialog-bd">
							<slot></slot>
						</div>
						<div class="dialog-ft">
							<button class={`btn btn-secondary ${this.showCancelBtn ? 'show' : ''}`} onClick={() => this._cancelBtnHandler()}>
								{this.cancelText}
							</button>
							<button class={`btn btn-primary ${this.showConfirmBtn ? 'show' : ''}`} onClick={() => this._confirmBtnHandler()}>
								{this.confirmText}
							</button>
						</div>
					</div>
				</div>
      </Host>
    );
  }

}
