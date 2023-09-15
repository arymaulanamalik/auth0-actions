import { DirectoryHandler } from '.';
import { ParsedAsset } from '../../../types';
import { Theme } from '../../../tools/auth0/handlers/themes';
type ParsedThemes = ParsedAsset<'themes', Theme[]>;
declare const themesHandler: DirectoryHandler<ParsedThemes>;
export default themesHandler;
