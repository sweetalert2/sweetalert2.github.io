import { e as dequal } from "./index-b3e8266c.js";
var SandpackClient = (
  /** @class */
  function() {
    function SandpackClient2(iframeSelector, sandboxSetup, options) {
      if (options === void 0) {
        options = {};
      }
      this.status = "idle";
      this.options = options;
      this.sandboxSetup = sandboxSetup;
      this.iframeSelector = iframeSelector;
    }
    SandpackClient2.prototype.updateOptions = function(options) {
      if (!dequal(this.options, options)) {
        this.options = options;
        this.updateSandbox();
      }
    };
    SandpackClient2.prototype.updateSandbox = function(_sandboxSetup, _isInitializationCompile) {
      if (_sandboxSetup === void 0) {
        _sandboxSetup = this.sandboxSetup;
      }
      throw Error("Method not implemented");
    };
    SandpackClient2.prototype.destroy = function() {
      throw Error("Method not implemented");
    };
    SandpackClient2.prototype.dispatch = function(_message) {
      throw Error("Method not implemented");
    };
    SandpackClient2.prototype.listen = function(_listener) {
      throw Error("Method not implemented");
    };
    return SandpackClient2;
  }()
);
export {
  SandpackClient as S
};
