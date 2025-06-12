import { InputOptions, OutputOptions } from 'rollup';
export declare class AssetBundler {
    static DEFAULT_EXTENSIONS: string[];
    static DEFAULT_GLOBALS: {
        react: string;
        redux: string;
        'react-feather': string;
        '@adminjs/design-system/styled-components': string;
        'prop-types': string;
        'react-dom': string;
        'react-redux': string;
        'react-router': string;
        'react-router-dom': string;
        adminjs: string;
        '@adminjs/design-system': string;
    };
    static DEFAULT_EXTERNALS: string[];
    protected inputOptions: InputOptions;
    protected outputOptions: OutputOptions;
    constructor(input: InputOptions, output: OutputOptions);
    build(): Promise<void>;
    watch(): Promise<void>;
    createEntry({ dir, content, }: {
        write?: boolean;
        dir?: string;
        content: string;
    }): Promise<void>;
    getOutput(): Promise<string | null>;
    createConfiguration(input: InputOptions, output: OutputOptions): void;
    setInputOption<T = any>(key: string, value: T): this;
    setOutputOption<T = any>(key: string, value: T): this;
}
