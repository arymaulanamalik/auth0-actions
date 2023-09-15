import { DirectoryHandler } from '.';
import { ParsedAsset } from '../../../types';
import { Prompts } from '../../../tools/auth0/handlers/prompts';
type ParsedPrompts = ParsedAsset<'prompts', Prompts>;
declare const promptsHandler: DirectoryHandler<ParsedPrompts>;
export default promptsHandler;
