/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ItemType } from "./components/my-dropdown/models.js";
export namespace Components {
    interface MyButton {
        "label": string;
    }
    interface MyDialog {
        "cancelText": string;
        "confirmText": string;
        "dialogTitle": string;
        "showCancelBtn": boolean;
        "showConfirmBtn": boolean;
        "visible": boolean;
    }
    interface MyDropdown {
        "data": ItemType[];
        "placeholder": string;
        "selectedValue": any;
    }
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyDialogElement extends Components.MyDialog, HTMLStencilElement {
    }
    var HTMLMyDialogElement: {
        prototype: HTMLMyDialogElement;
        new (): HTMLMyDialogElement;
    };
    interface HTMLMyDropdownElement extends Components.MyDropdown, HTMLStencilElement {
    }
    var HTMLMyDropdownElement: {
        prototype: HTMLMyDropdownElement;
        new (): HTMLMyDropdownElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-dialog": HTMLMyDialogElement;
        "my-dropdown": HTMLMyDropdownElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        "label"?: string;
        "onClicked"?: (event: CustomEvent<any>) => void;
    }
    interface MyDialog {
        "cancelText"?: string;
        "confirmText"?: string;
        "dialogTitle"?: string;
        "onCancel"?: (event: CustomEvent<any>) => void;
        "onConfirm"?: (event: CustomEvent<any>) => void;
        "showCancelBtn"?: boolean;
        "showConfirmBtn"?: boolean;
        "visible"?: boolean;
    }
    interface MyDropdown {
        "data"?: ItemType[];
        "onSelected"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "selectedValue"?: any;
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-dialog": MyDialog;
        "my-dropdown": MyDropdown;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-dialog": LocalJSX.MyDialog & JSXBase.HTMLAttributes<HTMLMyDialogElement>;
            "my-dropdown": LocalJSX.MyDropdown & JSXBase.HTMLAttributes<HTMLMyDropdownElement>;
        }
    }
}
