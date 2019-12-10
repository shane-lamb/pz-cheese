import { combineEpics } from 'redux-observable';
import { flatMap } from 'lodash';

import * as cheesesEpics from '../features/cheeses/epics';

const epics = [cheesesEpics];

export default combineEpics(...flatMap(epics, Object.values));
