import {
  html,
  LitElement,
  PropertyDeclarations,
  TemplateResult,
} from "lit-element";
import "@polymer/paper-input/paper-textarea";
import "@polymer/paper-dropdown-menu/paper-dropdown-menu";
import "@polymer/paper-item/paper-item";
import "@polymer/paper-listbox/paper-listbox";

import "../../../components/ha-service-picker";

import { HomeAssistant } from "../../../types";
import { fireEvent, HASSDomEvent } from "../../../common/dom/fire_event";
import { EditorTarget } from "../editor/types";
import {
  ActionConfig,
  NavigateActionConfig,
  CallServiceActionConfig,
} from "../../../data/lovelace";

declare global {
  // for fire event
  interface HASSDomEvents {
    "action-changed": undefined;
  }
  // for add event listener
  interface HTMLElementEventMap {
    "action-changed": HASSDomEvent<undefined>;
  }
}

export class HuiActionEditor extends LitElement {
  public config?: ActionConfig;
  public label?: string;
  public actions?: string[];
  protected hass?: HomeAssistant;

  static get properties(): PropertyDeclarations {
    return { hass: {}, config: {}, label: {}, actions: {} };
  }

  get _action(): string {
    return this.config!.action || "";
  }

  get _navigation_path(): string {
    const config = this.config! as NavigateActionConfig;
    return config.navigation_path || "";
  }

  get _service(): string {
    const config = this.config! as CallServiceActionConfig;
    return config.service || "";
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this.actions) {
      return html``;
    }
    return html`
      <paper-dropdown-menu
        .label="${this.label}"
        .configValue="${"action"}"
        @value-changed="${this._valueChanged}"
      >
        <paper-listbox
          slot="dropdown-content"
          .selected="${this.actions.indexOf(this._action)}"
        >
          ${
            this.actions.map((action) => {
              return html`
                <paper-item>${action}</paper-item>
              `;
            })
          }
        </paper-listbox>
      </paper-dropdown-menu>
      ${
        this._action === "navigate"
          ? html`
              <paper-input
                label="Navigation Path"
                .value="${this._navigation_path}"
                .configValue="${"navigation_path"}"
                @value-changed="${this._valueChanged}"
              ></paper-input>
            `
          : ""
      }
      ${
        this.config && this.config.action === "call-service"
          ? html`
              <ha-service-picker
                .hass="${this.hass}"
                .value="${this._service}"
                .configValue="${"service"}"
                @value-changed="${this._valueChanged}"
              ></ha-service-picker>
              <h3>Toggle Editor to input Service Data</h3>
            `
          : ""
      }
    `;
  }

  private _valueChanged(ev: Event): void {
    if (!this.hass) {
      return;
    }
    const target = ev.target! as EditorTarget;
    if (
      this.config &&
      this.config[this[`${target.configValue}`]] === target.value
    ) {
      return;
    }
    if (target.configValue === "action") {
      this.config = { action: "none" };
    }
    if (target.configValue) {
      this.config = { ...this.config!, [target.configValue!]: target.value };
      fireEvent(this, "action-changed");
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hui-action-editor": HuiActionEditor;
  }
}

customElements.define("hui-action-editor", HuiActionEditor);
