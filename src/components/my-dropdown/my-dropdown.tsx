import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import {ItemType} from './models.js';

@Component({
  tag: 'my-dropdown',
  styleUrl: 'my-dropdown.css',
  shadow: true,
})
export class MyDropdown {

  @Prop() placeholder: string = 'Please select';
  @Prop() data: ItemType[];
  @Prop() selectedValue: any;

  @State() showDropDown: boolean = false;

  private get _selectedLabel() {
		const selectedItem = this.data.find(item => item.value === this.selectedValue)
		if (selectedItem) {
			return selectedItem.label as string
		}
		return ''
  }
  _showDropDownPanel() {
    this.showDropDown = true;
  }

  @Event() selected: EventEmitter<any>;

  _selectItemHandler(e) {
    console.log(e)
		const dataset = e.target.dataset

		if (dataset) {
			this.selectedValue = dataset.value
			this.selected.emit(this.selectedValue)
		}
		this.showDropDown = false;
  }

  render() {
    return (
      <Host>
        <div class="my-dropdown">
          <div class="label" onClick={() => this._showDropDownPanel()}>{this._selectedLabel || this.placeholder}</div>
          <ul class={`list ${this.showDropDown ? 'show' : ''}`} onClick={(e) => this._selectItemHandler(e)}>
            {this.data.map(item => <li class={`item ${this.selectedValue === item.value ? 'selected' : ''}`} data-value={item.value}>{item.label}</li>)}
          </ul>
        </div>
      </Host>
    );
  }

}
