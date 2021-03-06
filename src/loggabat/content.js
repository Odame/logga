/* eslint-disable no-underscore-dangle */
const LoggaBatType = require('./type');

/**
 * Standard Model for all logged items
 */
class LoggedContent {
  /**
   * @constructor
   * @param {LoggaBatType} type - category of the logged item. Example, info, error, warn
   * @param {any} message - logged message
   * @param {boolean} logged - status of a LoggaBat. Either it was logged, or was not;
   * depending on LoggaBat being in production environment,
   * and the `message` being production-friendly
   */
  constructor({ type, message, logged }) {
    this.type = (Object.values(LoggaBatType).includes(type)) ? type : LoggaBatType.LOG;
    this.message = (message) || null;
    this.logged = (typeof logged === 'boolean') ? logged : false;
  }

  /**
   * Set a LoggedContent item as successful, an indicator it was logged to the console.
   * All manipulations for a successful LoggedContent occurs here before the 'logged' flag is set
   */
  setSuccessful() {
    // all manipulations for a successful LoggedContent occurs here
    this._setLogged(true);
  }

  /**
   * Set `logged` parameter
   * @param {boolean} condition
   * @private
   */
  _setLogged(condition) {
    if (typeof condition === 'boolean') this.logged = condition;
  }
}

module.exports = LoggedContent;
