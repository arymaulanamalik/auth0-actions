import { ConfigFunction } from '../configFactory';
import { Assets, Auth0APIClient } from '../types';
export default function deploy(assets: Assets, client: Auth0APIClient, config: ConfigFunction): Promise<{}>;
