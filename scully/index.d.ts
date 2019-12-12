/**
 * Returns a route ina more usable form, and a
 * @param route to split
 */
export declare function routeSplit(route: string): {
  parts: SplitRoute[];
  params: SplitRoute[];
  createPath: (...data: string[]) => string;
};
export interface SplitRoute {
  part: string;
  position: number;
}

export declare const configValidator: unique symbol;
export declare type PluginHandler = (...args: any) => Promise<any>;
export interface Plugin {
    handler: PluginHandler;
}
export declare type ErrorString = string;
export declare type ConfigValidator = (HandledRoute: any) => ErrorString[];
export interface FilePlugin {
    alternateExtensions?: string[];
    handler: PluginHandler;
}
interface Plugins {
    render: {
        [html: string]: PluginHandler;
    };
    router: {
        [path: string]: PluginHandler;
    };
    fileHandler: {
        [fileExtension: string]: FilePlugin;
    };
}
export declare const plugins: Plugins;
export declare type PluginTypes = keyof Plugins;
export declare const registerPlugin: (type: "render" | "router" | "fileHandler", name: string, plugin: any) => void;

