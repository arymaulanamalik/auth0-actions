import { DirectoryHandler } from '.';
import { ParsedAsset } from '../../../types';
import { Page } from '../../../tools/auth0/handlers/pages';
type ParsedPages = ParsedAsset<'pages', Page[]>;
declare const pagesHandler: DirectoryHandler<ParsedPages>;
export default pagesHandler;
