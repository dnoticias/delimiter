/**
 * Build styles
 */
require('./index.css').toString();

/**
 * @typedef {Object} PaywallDelimiterData
 * @description Tool's input and output data format
 */
class PaywallDelimiter {

  /**
   * Notify core that read-only mode is supported
   * @return {boolean}
   */
  static get isReadOnlySupported() {
    return true;
  }

  /**
   * Allow Tool to have no content
   * @return {boolean}
   */
  static get contentless() {
    return true;
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: PaywallDelimiterData, config: object, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({data, config, api}) {
    this.api = api;

    this._CSS = {
      block: this.api.styles.block,
      wrapper: 'ce-delimiter'
    };

    this._data = {};
    this._element = this.drawView();

    this.data = data;
  }

  /**
   * Create Tool's view
   * @return {HTMLElement}
   * @private
   */
  drawView() {
    let div = document.createElement('DIV');

    div.classList.add(this._CSS.wrapper, this._CSS.block);

    return div;
  }

  /**
   * Return Tool's view
   * @returns {HTMLDivElement}
   * @public
   */
  render() {
    return this._element;
  }

  /**
   * Extract Tool's data from the view
   * @param {HTMLDivElement} toolsContent - Paragraph tools rendered view
   * @returns {PaywallDelimiterData} - saved data
   * @public
   */
  save(toolsContent) {
    return {};
  }

  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="18" height="18" viewBox="0 0 18 18" xml:space="preserve" fill="#ffffff"><path d="M15.03 9.25h-.26V6.26h-2.92v2.99H8.87v2.92h2.98v2.99h2.92v-2.99h2.99V9.25z"/><path class="st0" d="M6.16 16.03c-.47.58-1.15.86-2.04.86-.73 0-1.32-.12-1.76-.35-.44-.24-.77-.55-1-.94-.24-.39-.39-.84-.47-1.35-.08-.5-.12-1.03-.12-1.57V9.11c0-.68.05-1.29.16-1.82.1-.53.28-.98.54-1.35.24-.36.59-.64 1.02-.84.43-.19.98-.29 1.65-.29.45 0 .84.05 1.16.15.33.1.62.28.86.54V0h3.65v16.78H6.16v-.75zm-.8-2.22c.3 0 .5-.11.61-.32.1-.21.17-.51.19-.89V8.99c-.02-.31-.08-.56-.2-.73-.11-.18-.35-.26-.7-.26-.33 0-.55.12-.66.34-.1.23-.16.6-.16 1.1v3.09c0 .37.05.67.14.92.1.23.36.36.78.36z"/></svg>`,
      title: 'PaywallDelimiter'
    };
  }
}

module.exports = PaywallDelimiter;
