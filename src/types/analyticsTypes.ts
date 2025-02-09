/*
  This module defines the interfaces for website analytics configurations,
  including settings for Umami and Google Analytics, as well as overall configuration.
  Depending on your project requirements, you may selectively enable one or more analytics tools.
*/

export interface UmamiConfig {
  // Flag indicating whether Umami analytics is enabled
  enable: boolean;
  // Unique identifier for Umami analytics
  id: string;
  // The base URL for the Umami service (e.g., the deployment URL of the Umami instance)
  url: string;
}

export interface GAConfig {
  // Flag indicating whether Google Analytics tracking is enabled
  enable: boolean;
  // Tracking ID for Google Analytics (e.g., "UA-XXXXXX-X" or "G-XXXXXXXXXX")
  id: string;
}

export interface AnalyticsConfig {
  // Global flag to enable or disable overall analytics functionality
  enable: boolean;
  // Optional configuration for Umami analytics; if not provided, Umami will not be active
  umamiConfig?: UmamiConfig;
  // Optional configuration for Google Analytics; if not provided, Google Analytics will not be active
  gaConfig?: GAConfig;
  // Optional configuration for Busuanzi Analytics;
  busuanzi?: boolean;
}
