# Changelog

All notable changes to PapaSearch are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Fixed

## [1.6.8] - 2026-09-21

### Fixed

- Products you set to **Hide price** in BigCommerce now look the same in PapaSearch as on your own product cards. PapaSearch shows your price label (for example "Call for pricing") where the price would be, or leaves the space empty if you did not set a label. This applies to search results, filtered results and the quick search popup. Until now PapaSearch still showed the price.
- Products with a hidden price no longer turn up when shoppers filter by a price range, and they are listed after priced products when shoppers sort by price. This way the hidden price cannot be worked out from the results.
- Products set to **This product cannot be purchased in my online store** no longer show an Add to Cart button in PapaSearch results, matching your store's own product cards. Other buttons, such as a quote request button, stay where they are. Pre-order products can still be added to the cart.
- The usage figures on your PapaSearch dashboard now count every search and every indexed product. Until now part of this activity was left out, so the monthly numbers looked lower than your real usage. September's figures have been corrected.

## [1.6.7] - 2026-09-18

### Fixed

- If you turned off product suggestions in the quick search popup, the popup no longer tells shoppers "No results found" and "Check your spelling" when they type a full product name. It now offers a "Search for …" link that opens your search results page. The same link also replaces the empty popup that could appear when a shopper clicked back into a search box that already had text in it.
- With product suggestions turned off, screen readers no longer announce "0 products found" in the quick search popup. They now announce only the number of suggestions shown.
- Stores that show product suggestions in the popup are not affected.

## [1.6.6] - 2026-09-17

### Fixed

- Search now finds a brand however shoppers write its spaces, hyphens or dots. Typing "vicfirth", "RayBan" or "zman" now shows Vic Firth, Ray-Ban or Z-Man products, where before shoppers got no results. It also works the other way round: a brand saved as "fabdog" is found when a shopper types "Fab Dog".
- Brands saved with a curly apostrophe (’) are now found when shoppers type a regular one ('). Searching "Arnott's" now shows Arnott’s products first, where before it showed products from unrelated brands.
- Shoppers can type the start of a longer brand name without spaces: "FisherPrice" now finds "Fisher-Price Power Wheels".
- Searches that already found products still find them.

## [1.6.5] - 2026-09-17

### Fixed

- Filters no longer get stuck on a loading screen when a shopper's connection drops. Until now, if a filter click never got an answer, the loading overlay stayed over the old products for good. Now the storefront stops waiting after 30 seconds and shows "Error loading products. Please try again." so the shopper can simply click again.
- If the filter panel cannot refresh after a shopper picks a filter, the updated product list now still appears after the same 30-second wait. Before, the new products never showed up.
- When search results fail to load, shoppers are no longer told "No products found". A filter click shows the error message above, and a page that is just opening falls back to your store's own product list.
- The quick search popup can always be closed by clicking outside it. Before, if suggested keywords failed to load when a shopper clicked into the search box, the popup could not be dismissed until the page was reloaded.

## [1.6.4] - 2026-09-17

### Fixed

- Error messages in the PapaSearch app no longer show technical details. When something goes wrong — saving settings, managing filters, keywords or your subscription — you now see a short, clear message instead of internal system text.
- If connecting your store to PapaSearch fails, the error page now simply asks you to try again, without technical wording.
- On the Settings page, if setting up automatic product updates does not finish, the notice now simply asks you to save the setting again.

## [1.6.3] - 2026-09-16

### Fixed

- The search page no longer flickers when it opens. Until now a shopper landing on search saw your old product list appear for about a second and then vanish before the search results arrived. Search now puts up its own loading frame the moment the page opens and goes straight to the results, so there is no flicker in between.
- The search page also appears sooner: the search frame now shows up in well under half a second to about a second, instead of three to four seconds.
- Your theme's own filter panel no longer flashes into view while the page is still loading on some stores.
- If a shopper's connection stalls and search cannot load, the storefront now hands the page back to BigCommerce's own search results instead of leaving them in front of a spinner that never finishes.

## [1.6.2] - 2026-09-16

### Fixed

- Filter links written by your theme's own navigation work again. Some themes build filter links in a format search could not read, so a shopper arriving from one of those links got no products — sometimes an empty page — even when the category had matches. Those links now return the filtered set, with the matching boxes ticked in the filter panel.
- A search page with no results no longer goes blank. When search has nothing to show for a keyword, the storefront hands the page back to BigCommerce's own search results instead of leaving an empty area between your header and footer.
- When a shopper's own filter choice returns nothing, the page now says so and keeps their selection visible, instead of quietly showing an unfiltered list.

## [1.6.1] - 2026-09-15

### Changed

- Search now keeps serving your storefront while a subscription lapses, instead of switching off the moment it expires. Your shoppers are not the ones who should notice a billing gap.

### Fixed

- When search is unavailable for a store, the storefront now falls back to BigCommerce's own search and filters instead of showing an empty product grid with a technical error message. Previously a shopper could land on a search page that reported no products even though the catalog had matches.

## [1.6.0] - 2026-09-15

### Changed

- **Filter counts now follow what a shopper has already picked.** Each count shows how many products remain once the current selection is applied, so the number next to a value matches the grid a shopper gets when they tick it. Previously a value could read `DW (302)` and return 71 products.
- A filter group a shopper is currently using keeps counting as if that group were open. Ticking **In Stock** no longer drives **Out of Stock** to zero, so the other choices in the same group stay usable and a shopper can always step back.
- Values that no longer match anything are hidden, and a value a shopper has ticked always stays visible even when its count reaches zero — so a selection can always be undone.

### Fixed

- Choosing several brands at once now works. Previously it could leave the filter panel frozen on the previous numbers.
- The filter panel no longer briefly shows the previous numbers after a shopper ticks a value while the page is still loading.
- Filters on mobile now match the desktop panel exactly, including which values are ticked.

## [1.5.0] - 2026-09-10

### Added

- **Protected words** — a per-store list of words that search must never treat as common filler. Brand and product names that are also everyday words, such as "NeverLeak", "On" and "All", are now findable. Set it under Settings; no re-index needed.
- Your catalog is indexed automatically the first time you open the Dashboard after installing. Search works on your storefront straight away instead of waiting for you to find and press **Index products**.
- Installing the app now also connects it to BigCommerce's product notifications, so later catalog edits reach search on their own. Installing the storefront script on an additional channel connects that channel too.

### Changed

- Searches of several words now require a product to match most of them. Searching `over the top` no longer returns products that happen to contain only "top".
- Result ordering was rebuilt so the ranking rules actually decide it. An exact product-name match is no longer pushed below a product whose long description merely mentions the same words.
- The **Price range** filter now uses the price shoppers actually see. A product reduced to $49.90 is correctly excluded from a $50–$100 range even though its regular price is $51.50.
- Changes to **Semantic search** and **Hide out of stock products** now take effect within a minute. Previously a change could take up to an hour to reach the storefront.

### Fixed

- Products deleted in BigCommerce are now removed from search on every channel, not just the one they were deleted from.
- Products that no longer exist in your catalog are now cleared out of search results automatically, instead of lingering until the next full re-index.
- Products you edit while a sync is running are no longer skipped. Previously such an edit could stay missing from search until you changed the product again or ran a full re-index.
- A single damaged product option set no longer stops the rest of your catalog from indexing.
- Large catalogs now finish indexing. Syncs wait for BigCommerce's rate limit and resume, instead of stopping part-way through your catalog.
- Your saved settings are no longer replaced with defaults when they cannot be read.
- Reinstalling the app no longer resets your Indexing settings to their defaults.
- On a store whose subscription has lapsed, shoppers no longer see filter groups with product counts next to an empty product grid.
- Upgrading a plan using your wallet balance is now recorded in billing history with the amount paid.
- On trial accounts, a top-up made between the end of the trial and the first billing date is now applied to your balance.
- Every figure shown around **Next Billing** on the Dashboard now comes from the same charge, so they agree with each other.
- All messages shown to shoppers and merchants are in English.

### Security

- Maintenance endpoints used only by PapaSearch's own background jobs now require a credential. No action is needed on your side.

## [1.4.0] - 2026-08-21

### Added

- Search now matches partial words and tolerates typos in product names and brands. Searching `Noodl` finds "Noodle Boxes", `Never` finds "NeverLeak", and `Loomas` finds the brand "Looma's" — previously only an exact word match worked.
- Search by SKU, MPN, UPC and GTIN, including the SKUs of individual product variants. Identifiers containing hyphens, such as `LP1516-BZ`, now match correctly.
- **Best Selling** sort option on the storefront and in both default-sort settings, based on each product's lifetime total sold.
- Searches that return no products now still show brand suggestions, so shoppers have somewhere to go instead of an empty page.

### Changed

- Semantic search was rebuilt so that meaning-based matching and keyword matching no longer compete with each other. Searches return noticeably more of the relevant catalog: on a live store, `chocolate cake` went from 287 to 424 products and `coffee cups` from 73 to 128, with the closest matches still ranked first.
- **Search lowest score** is now called **Semantic match threshold**, and it applies only to meaning-based matching. Products found by keyword, SKU or brand are never removed by this setting. The valid range is 0.1 to 3.0, and the recommended value remains 1.5.
- Storefront results now scroll back to the top when shoppers change page, filter or sort, instead of leaving them at the bottom of the previous page. Screen readers announce the new page and result count.
- Plan usage now counts the products actually indexed for your store rather than estimating from catalog size, so the number shown on Plans & Pricing matches what is searchable.

### Fixed

- The storefront script is no longer removed when a settings save fails part-way. Previously this could silently uninstall search and filters from a live storefront, leaving BigCommerce's built-in search in their place.
- Filter values now keep the order you set by drag-and-drop in Edit Filters. Previously the saved order was ignored and values were shown by product count. Filters you have never reordered are unchanged.
- Products no longer disappear from search when they are removed from a channel and added back, or when a bulk product edit touches channel assignments.
- **Flush by type** in Cache Manager now also clears cached filter values. Previously only Flush All Cache cleared them, so filter changes could appear to have no effect.
- Product sync no longer skips a block of products when one page of a catalog fetch fails.
- Subscription and billing notification emails are no longer sent repeatedly for the same event.

### Security

- Settings validation errors are no longer returned before the caller is authenticated.

## [1.3.0] - 2026-05-25

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1rem 0;">
  <iframe src="https://www.youtube.com/embed/YLTUnc0tmok" title="PapaSearch v1.3.0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
</div>

### Added

- Filter indexed products by when they were last modified, with quick presets for the last 1 day, 3 days, 1 week, 1 month, or since your last full sync.
- Custom modified date range (From / To) on Manage Indexes for pinpointing exactly which products to review.
- One-click "Re-index all products matching the current filter", with a confirmation step so you can re-index a targeted set instead of your entire catalog.

### Changed

- The custom date range now applies only when you click Apply, so the list no longer reloads while you are still picking dates.
- The modified date range is pre-filled with a sensible default so you can get started without typing.

### Fixed

- Re-indexing a filtered set of products no longer changes your store's last full-sync timestamp, keeping "Index new & modified products" and the scheduled auto-index accurate.
- Re-indexing one or a few products no longer skips older outdated products on the next incremental sync.
- The product list now keeps your active search and filter after re-indexing or deleting, instead of resetting to all products.

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
