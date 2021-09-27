import {AnalyticsDriverConstructor, AnalyticsDriverToken} from "../interfaces/analytics-driver";
import {TRACKIFY_DEBUG, TRACKIFY_GTM} from "../tokens";
import {isBrowser} from "../helpers/fns";

export const analyticsDrivers: Map<AnalyticsDriverToken, () => Promise<AnalyticsDriverConstructor>> = new Map<AnalyticsDriverToken, () => Promise<AnalyticsDriverConstructor>>(
  [
    [TRACKIFY_DEBUG, () => isBrowser() ? import('./debug.browser-driver').then(module => module.default) : import('./debug.server-driver').then(module => module.default)],
    [TRACKIFY_GTM, () => isBrowser() ? import('./gtm.browser-driver').then(module => module.default) : import('./gtm.server-driver').then(module => module.default)],
  ]
);
