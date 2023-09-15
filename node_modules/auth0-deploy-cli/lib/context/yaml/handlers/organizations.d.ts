import { YAMLHandler } from '.';
import { Asset } from '../../../types';
type ParsedOrganizations = {
    organizations: Asset[] | null;
};
declare const organizationsHandler: YAMLHandler<ParsedOrganizations>;
export default organizationsHandler;
