interface FlashPreventionPluginOptions {
  appRootSelector?: string;
  appLoadedClass?: string;
  appRootAttributesBlacklist?: string[];
  mockAttributesBlacklist?: string[];
}
export declare function getFlashPreventionPlugin({
  appRootSelector,
  appLoadedClass,
  appRootAttributesBlacklist,
  mockAttributesBlacklist,
}?: FlashPreventionPluginOptions): string;
export {};
