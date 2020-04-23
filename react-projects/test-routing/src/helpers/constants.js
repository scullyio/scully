export const TRANSFER_STATE_ERRORS = {
  NOT_AN_OBJECT: 'State must be an object',
  NO_STATES: 'You must provide a state to set',
  NONEXISTING_STATE: `The state hasn't been set`,
};

export const SCULLY_SCRIPT = {
  ID: 'ScullyIO-transfer-state',
  START: '/** ___SCULLY_STATE_START___ */',
  END: '/** ___SCULLY_STATE_END___ */',
};
