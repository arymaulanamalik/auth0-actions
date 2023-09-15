import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type ParsedEmailTemplates = ParsedAsset<'emailTemplates', Asset[]>;
declare const emailTemplatesHandler: YAMLHandler<ParsedEmailTemplates>;
export default emailTemplatesHandler;
