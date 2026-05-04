# Changelog

All notable changes to PapaSearch are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Fixed

## [1.2.0] - 2026-05-04

### Added

- Default checked values per filter, with the stock filter as the first supported case.

### Changed

- Faster inventory updates.

### Fixed

- Fixed PayPal top-up validation edge case.
- Removed an empty left column shown in the search popup zero state.
- Various stability improvements.

## [1.1.0] - 2026-04-23

### Added

- Plan quota enforcement with a soft cap and a hard stop.
- Usage statistics now reset cleanly at the start of each billing cycle.

### Changed

- Various performance improvements.

### Fixed

- Reactivating a subscription via PayPal top-up now correctly applies the next billing plan.
- Search quota now expires at the end of the billing date instead of the start.
- More accurate usage statistics across channels and billing periods.
- More reliable search filter behavior across category selections.

## [1.0.0] - 2026-04-10

### Added

- Semantic search that understands shopper intent and combines meaning-based matching with keywords for better relevance.
- BigCommerce product sync to keep search results aligned with the store catalog.
- Merchant dashboard for managing the app, monitoring usage, and reviewing activity.
- Customizable filters so merchants can tailor the storefront search experience.
- Keyword management for synonyms, redirects, and curated search terms.
- User search analytics to track shopper search queries and surface trends.
- Cache manager to inspect and refresh cached search responses.
- Settings page for merchant configuration of app preferences and integrations.
- Billing and plans with Free, Pro, and Enterprise tiers.
- Order history and invoices for reviewing past billing transactions.
- Storefront search widget with autocomplete suggestions for embedding into BigCommerce themes.
- Redesigned quick search popup.
- Fast Quote button on storefront search results, with improved product image display.
- Standalone landing page with animations and embedded videos.
- Search box visibility control on filter widgets.
- Grid layout and custom thumbnail size for option filters.
- Thumbnail upload for individual filter values.
- Show SKU and description display controls in storefront search settings.
- Color customization with grid layout, plus expand and collapse for filter groups.
- Configurable default sort order for search results.
- Category tree filter with lazy loading and SVG icons.
- Apply Filter button for the mobile filter drawer.
- Admin panel with one-time password authentication.
- Admin tools for trial extension, wallet management, and additional billing controls.
- Hide price from guests, with an option per pricing rule.
- Recent searches in the storefront quick search.
- Out of Stock badge and Add to Cart button on storefront search results.
- Compare and Quick View product action buttons on storefront search results.
- Mobile filter drawer with responsive layout updates.
- Loading and error overlays for filters and product results.
- Multi-currency price formatting with combined-prices support.
- Customer settings and customer group management.
- BigCommerce webhook management and status view.
- Auto Index Products scheduled job with settings integration.
- Email notification system with templates and scheduled delivery.
- Product short description in search results, with safe truncation.
- Brand and price-range filters with synchronization across the storefront UI.
- Excluded query parameters setting to keep tracking parameters out of search URLs.
- Custom domain setup for the merchant and search experience.

### Changed

- Faster product indexing.
- Hid BigCommerce content flash on storefront search using preloads and loading overlays.
- Faster repeat search requests.
- Removed loading overlays on page init to prevent the UI locking on slow networks.
- Faster filter handling and improved search relevance.
- Storefront search styles are now scoped to prevent conflicts with theme styles.

### Fixed

- Prevented duplicate products in search results during sync.
- Faster category tree loading.
- Prevented stuck sync tasks.
- Filter counts now match the products shown in search results.
- More reliable storefront search widget initialization.
- Fixed brand filter matching and reset of the search box visibility state on filter changes.
- More reliable saving of filter value thumbnails.
- Respected category selections when loading filters.
- Mobile clear button visibility and drawer state management.
- Filter options and custom field visibility.
- Removed a horizontal scrollbar in the search suggestion popup.
- Corrected the currency symbol shown in the suggestion popup.
- More graceful handling when filters are temporarily unavailable.
- Prevented NaN price display when prices are hidden from guests.
- Fixed quick search not redirecting to the search page when used from the homepage.
- Fixed an incorrect search query when using quick search on the Cornerstone theme.
- Corrected product counts shown in category filters.
- Added a subscription guard to the search experience.
- Various stability improvements.
