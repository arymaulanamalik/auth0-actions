import { DirectoryHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedEmailTemplates = ParsedAsset<'emailTemplates', Asset[]>;
declare const emailTemplatesHandler: DirectoryHandler<ParsedEmailTemplates>;
export default emailTemplatesHandler;
