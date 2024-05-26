import { NameSpace } from '../root-reducer';

const getHeader = (state) => state[NameSpace.HEADER].header;

export { getHeader };
