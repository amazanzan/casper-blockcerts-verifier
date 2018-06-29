import * as ACTIONS from '../constants/actionTypes';
import updateCertificateUrl from './updateCertificateUrl';
import validateUrlInput from './validateUrlInput';
import updateCertificateDefinition from './updateCertificateDefinition';
import stepVerified from './stepVerified';
import updateParentStepStatus from './updateParentStepStatus';

export function app (state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_CERTIFICATE_DEFINITION:
      return updateCertificateDefinition(state, action);

    case ACTIONS.UPDATE_CERTIFICATE_URL:
      return updateCertificateUrl(state, action);

    case ACTIONS.UPDATE_PARENT_STEP_STATUS:
      return updateParentStepStatus(state, action);

    case ACTIONS.VALIDATE_URL_INPUT:
      return validateUrlInput(state, action);

    case ACTIONS.STEP_VERIFIED:
      return stepVerified(state, action);

    default:
      return state;
  }
}