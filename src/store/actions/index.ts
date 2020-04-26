import { ActionType } from 'typesafe-actions';

import * as actions from './creators';

export * from './creators';
export type AllActions = ActionType<typeof actions>;
