import { createRoot } from "react-dom/client";
import { ToastManager } from "./ToastManager";

class Toast {
  private _portal?: HTMLElement;
  private _createToast!: (message: string, duration: number) => void;

  public constructor() {
    const portalId = "toast-portal";
    const portalElement = document.getElementById(portalId);

    if (portalElement) {
      this._portal = portalElement;
      return;
    } else {
      this._portal = document.createElement("div");
      this._portal.id = portalId;
      document.body.appendChild(this._portal);
    }

    const root = createRoot(this._portal);

    root.render(
      <ToastManager bind={(createToast) => (this._createToast = createToast)} />
    );
  }

  public show(message: string, duration: number = 2000) {
    this._createToast(message, duration);
  }
}

export const ToastInstance: Toast = new Toast();

