import { f as dequal } from './Sandpack-DiCmmEWu.js';

var SandpackClient = /** @class */ (function () {
    function SandpackClient(iframeSelector, sandboxSetup, options) {
        if (options === undefined) { options = {}; }
        this.status = "idle";
        this.options = options;
        this.sandboxSetup = sandboxSetup;
        this.iframeSelector = iframeSelector;
    }
    /**
     * Clients handles
     */
    SandpackClient.prototype.updateOptions = function (options) {
        if (!dequal(this.options, options)) {
            this.options = options;
            this.updateSandbox();
        }
    };
    SandpackClient.prototype.updateSandbox = function (_sandboxSetup, _isInitializationCompile) {
        if (_sandboxSetup === undefined) { _sandboxSetup = this.sandboxSetup; }
        throw Error("Method not implemented");
    };
    SandpackClient.prototype.destroy = function () {
        throw Error("Method not implemented");
    };
    /**
     * Bundler communication
     */
    SandpackClient.prototype.dispatch = function (_message) {
        throw Error("Method not implemented");
    };
    SandpackClient.prototype.listen = function (_listener) {
        throw Error("Method not implemented");
    };
    return SandpackClient;
}());

export { SandpackClient as S };
