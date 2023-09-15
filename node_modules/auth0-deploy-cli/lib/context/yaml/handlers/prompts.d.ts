import { YAMLHandler } from '.';
import { ParsedAsset } from '../../../types';
import { Prompts } from '../../../tools/auth0/handlers/prompts';
type ParsedPrompts = ParsedAsset<'prompts', Prompts>;
declare const promptsHandler: YAMLHandler<ParsedPrompts>;
export default promptsHandler;
