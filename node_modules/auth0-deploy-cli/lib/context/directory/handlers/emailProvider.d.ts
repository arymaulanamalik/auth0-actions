import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedEmailProvider = ParsedAsset<'emailProvider', Asset>;
declare const emailProviderHandler: DirectoryHandler<ParsedEmailProvider>;
export default emailProviderHandler;
