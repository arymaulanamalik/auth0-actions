import { YAMLHandler } from '.';
import { Asset, ParsedAsset } from '../../../types';
type BrandingTemplate = {
    template: string;
    body: string;
};
type ParsedBranding = ParsedAsset<'branding', {
    [key: string]: Asset;
} & {
    templates?: BrandingTemplate[];
}>;
declare const brandingHandler: YAMLHandler<ParsedBranding>;
export default brandingHandler;
