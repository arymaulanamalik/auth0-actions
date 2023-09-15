import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedActions = ParsedAsset<'actions', Asset[]>;
declare const actionsHandler: DirectoryHandler<ParsedActions>;
export default actionsHandler;
