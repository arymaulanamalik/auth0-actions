import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedBranding = ParsedAsset<'branding', Asset>;
declare const brandingHandler: DirectoryHandler<ParsedBranding>;
export default brandingHandler;
