/// <reference types="cypress" />

// The following tells TypeScript that navigateTo() is a valid custom command.
declare namespace Cypress {
  interface Chainable {
    /**
     * Navigate to a specific URL
     * @param url - The URL to visit
     */
    navigateTo(url: string): Chainable<void>

    /**
     * Custom command to suppress telemetry (Backtrace 401s)
     */
    suppressTelemetry(): Chainable<void>;
  }
}
