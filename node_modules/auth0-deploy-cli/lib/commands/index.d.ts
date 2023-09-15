import importCMD from './import';
import exportCMD from './export';
declare const _default: {
    import: typeof importCMD;
    export: typeof exportCMD;
    deploy: typeof importCMD;
    dump: typeof exportCMD;
};
export default _default;
