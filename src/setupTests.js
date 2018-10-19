import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { StyleSheetTestUtils } from 'aphrodite';
import { StyleSheetTestUtils as StyleSheetTestUtilsNoImportant } from 'aphrodite/no-important';

StyleSheetTestUtils.suppressStyleInjection();
StyleSheetTestUtilsNoImportant.suppressStyleInjection();

configure({ adapter: new Adapter() });
