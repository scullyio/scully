import {isScullyGenerated} from '@scullyio/ng-lib';
import {TRANSFER_STATE_ERRORS as ERRORS, SCULLY_SCRIPT as SCULLY} from './constants';

export default class TransferStateService {
  constructor(initialState) {
    if (initialState && typeof initialState !== 'object') throw ERRORS.NOT_AN_OBJECT;

    this.state = initialState || null;
    this.script = isScullyGenerated() ? document.createElement('script') : {};
  }

  setState(newStates) {
    if (!newStates) throw ERRORS.NO_STATES;
    if (typeof newStates !== 'object') throw ERRORS.NOT_AN_OBJECT;

    this.state = {
      ...this.state,
      ...newStates,
    };

    this.script.textContent = `window['${SCULLY.ID}']=${SCULLY.START}${JSON.stringify(this.state)}${
      SCULLY.END
    }`;

    if (isScullyGenerated()) this._injectScript();
  }

  getState(stateName) {
    const currentState = isScullyGenerated() ? this._readStateFromScript() : this.state;
    if (!currentState.hasOwnProperty(stateName)) throw ERRORS.NONEXISTING_STATE;
    return currentState[stateName];
  }

  _injectScript() {
    this.script.setAttribute('id', SCULLY.ID);
    document.body.appendChild(this.script);
  }

  _readStateFromScript() {
    const stateStr = document
      .getElementById(SCULLY.ID)
      .innerHTML.split(SCULLY.START)[1]
      .split(SCULLY.END)[0];

    return JSON.parse(stateStr);
  }
}
