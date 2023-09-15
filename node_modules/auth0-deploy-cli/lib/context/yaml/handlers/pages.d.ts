import { YAMLHandler } from '.';
import { ParsedAsset } from '../../../types';
import { Page } from '../../../tools/auth0/handlers/pages';
type ParsedPages = ParsedAsset<'pages', Page[]>;
declare const pagesHandler: YAMLHandler<ParsedPages>;
export default pagesHandler;
