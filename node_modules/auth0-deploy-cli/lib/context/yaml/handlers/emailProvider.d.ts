import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedEmailProvider = ParsedAsset<'emailProvider', Asset>;
declare const emailProviderHandler: YAMLHandler<ParsedEmailProvider>;
export default emailProviderHandler;
