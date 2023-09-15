import { YAMLHandler } from '.';
import { ParsedAsset } from '../../../types';
import { Action } from '../../../tools/auth0/handlers/actions';
type ParsedActions = ParsedAsset<'actions', Partial<Action>[]>;
declare const ActionsHandler: YAMLHandler<ParsedActions>;
export default ActionsHandler;
