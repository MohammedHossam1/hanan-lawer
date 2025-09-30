
export const i18nBoostConfig:I18nBoostConfig = {
  // Path to your translation files folder (relative to workspace root)
  localesPath: 'src/locales',
  
  // Default locale to navigate to on Ctrl+Click
  defaultLocale: 'ar',
  
  // All supported locales in your project
  supportedLocales: ['ar', 'he'],
  
  // Function names that indicate translation keys
  functionNames: ['t', 'translate', '$t', 'i18n.t'],
  
  // File naming pattern for your locale files
  // Options: 'locale.json', 'locale/common.json', 'locale/index.json'
  fileNamingPattern: 'locale.json',
  
  // Enable/disable the extension features
  enabled: true
};

interface I18nBoostConfig {
  localesPath: string;
  defaultLocale: string;
  supportedLocales: string[];
  functionNames: string[];
  fileNamingPattern: "locale.json" | "locale/common.json" | "locale/index.json";
  enabled: boolean;
}