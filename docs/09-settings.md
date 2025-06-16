# Chapter 9: App Settings

The Settings page is the central control panel for configuring how your search functionality behaves. This chapter covers every setting available and how to optimize them for your store's specific needs.

---

## Understanding App Settings

### What Settings Control

App settings determine:
- **Search behavior**: How searches work and what results are returned
- **Product display**: How products appear in search results
- **Filter functionality**: How filters work and appear
- **Performance options**: Caching, indexing, and optimization settings
- **Theme integration**: How the app integrates with your storefront

`[SCREENSHOT: Settings page overview showing all configuration sections]`

### Settings Categories

Settings are organized into logical groups:
1. **Search Settings**: Core search functionality
2. **Product Settings**: Product display and information
3. **Filter Settings**: Filter behavior and appearance
4. **Indexing Settings**: Background processing and sync
5. **Customer Settings**: Customer-specific configurations

---

## Accessing Settings

### From Dashboard
1. Navigate to the main **Dashboard**
2. Click the **"Settings"** button (gear icon)
3. The Settings page opens with all configuration options

`[SCREENSHOT: Dashboard with Settings button highlighted]`

### Direct Navigation
- Use the left sidebar menu to access **Settings**
- Page loads with expandable sections for each settings category

---

## Search Settings

### Core Search Configuration

`[SCREENSHOT: Search Settings section expanded with all options]`

#### Enable Semantic Search
- **Purpose**: Activates AI-powered search that understands meaning and context
- **Default**: Enabled
- **When to disable**: If you prefer traditional keyword-only search
- **Impact**: Disabled = faster but less intelligent search results

**How Semantic Search Works:**
- **Traditional search**: Looks for exact keyword matches
- **Semantic search**: Understands intent and context
- **Example**: "phone case" also finds "mobile cover", "cell phone protection"
- **Benefits**: Better results for natural language queries

#### Search Lowest Score
- **Purpose**: Sets minimum relevance threshold for search results
- **Format**: Decimal number between 0.0 and 2.0
- **Default**: 1.0
- **Lower values**: More results, potentially less relevant
- **Higher values**: Fewer results, but more relevant

**Score Guidelines:**
- **0.1-0.5**: Very permissive, includes loosely related products
- **0.6-1.0**: Balanced approach, good for most stores
- **1.1-1.5**: Strict relevance, only highly relevant products
- **1.6-2.0**: Very strict, may exclude valid results

**Optimization Tips:**
- Start with default (1.0) and adjust based on customer feedback
- Lower if customers complain about too few results
- Raise if customers complain about irrelevant results
- Test with your most common search terms

#### Default Products Per Page
- **Purpose**: Number of products shown per page in search results
- **Range**: 12-60 products
- **Default**: 24 products
- **Mobile consideration**: Fewer products (12-18) work better on mobile

**Performance Impact:**
- **Fewer products**: Faster page loading, more pages to browse
- **More products**: Slower loading, fewer clicks to find products
- **Recommendation**: Match your category page settings

#### Default Sort Order
- **Purpose**: How search results are ordered by default
- **Options**:
  - **Relevance**: Best match to search term (recommended)
  - **Price: Low to High**: Cheapest products first
  - **Price: High to Low**: Most expensive products first
  - **Newest**: Most recently added products first
  - **Name A-Z**: Alphabetical by product name
  - **Name Z-A**: Reverse alphabetical order

**Strategic Considerations:**
- **Relevance**: Best for customer experience and conversions
- **Price Low-High**: Good for budget-conscious customers
- **Newest**: Highlights new inventory for fashion/tech stores
- **Name**: Useful for stores with standard product naming

#### Redirect to Search Page
- **Purpose**: Controls where search results are displayed
- **Options**:
  - ✅ **Enabled**: Searches take customers to dedicated search results page
  - ❌ **Disabled**: Searches display results in overlay/popup

**When to Enable:**
- You have a well-designed search results page
- You want search results to have their own URL for sharing/bookmarking
- You have many products and need full-page space for results

**When to Disable:**
- You prefer overlay/popup search for faster interaction
- Your search results page design needs improvement
- You want to keep customers on the current page

#### Suggest Products While Searching
- **Purpose**: Shows instant search suggestions as customers type
- **Default**: Enabled
- **Benefits**: Faster product discovery, reduced typing
- **Considerations**: Requires good keyword management for best results

---

## Product Settings

### Product Display Configuration

`[SCREENSHOT: Product Settings section with all product display options]`

#### Price Display Options

**Show Price Including Tax**
- **Purpose**: Display prices with tax included
- **Default**: Follows your BigCommerce tax settings
- **Benefit**: Transparency for customers about final price
- **Consideration**: May make products appear more expensive

**Show Both Tax and Non-Tax Prices**
- **Purpose**: Display both pre-tax and post-tax prices
- **Format**: "$99.99 (Tax: $109.99)"
- **Use case**: B2B stores where business customers see pre-tax prices
- **Complexity**: More information may clutter product display

**Show Retail Price**
- **Purpose**: Display manufacturer's suggested retail price (MSRP)
- **Benefit**: Highlights savings when your price is lower
- **Example**: "Our Price: $79.99 (Retail: $99.99)"
- **Requirement**: Products must have retail price data in BigCommerce

#### Product Information Display

**Show Out of Stock Badge**
- **Purpose**: Clearly mark products that are out of stock
- **Default**: Enabled
- **Appearance**: Usually red badge or overlay on product image
- **Customer benefit**: Immediate visibility of availability

**Show Add to Cart Button**
- **Purpose**: Include "Add to Cart" button in search results
- **Default**: Enabled
- **Benefit**: Faster purchase process, fewer clicks to buy
- **Alternative**: Link to product page for more details first

**Show Compare Button**
- **Purpose**: Allow customers to compare products from search results
- **Requirement**: BigCommerce product comparison feature must be enabled
- **Use case**: Stores with similar products that benefit from comparison

**Show Quick View Button**
- **Purpose**: Preview product details without leaving search results
- **Default**: Usually enabled
- **Benefit**: Fast product browsing, maintains search context
- **Requirement**: Theme must support quick view functionality

#### Product Data Inclusion

**Fields to Index for Search**
- **Product Name**: Always included (required)
- **Description**: Include for more comprehensive search
- **SKU**: Enable if customers search by SKU/model numbers
- **Brand**: Include for brand-based searches
- **Categories**: Include for category-based filtering
- **Custom Fields**: Include relevant custom attributes

**Optimization Strategy:**
- **Include more fields**: Better search coverage, potentially slower indexing
- **Include fewer fields**: Faster indexing, potentially missed search matches
- **Balance**: Include fields customers actually search for

---

## Filter Settings

### Filter Behavior Configuration

`[SCREENSHOT: Filter Settings section showing filter behavior options]`

#### Filter Container Selector
- **Purpose**: CSS selector for where filters appear on your storefront
- **Default**: Auto-detected based on your theme
- **Common selectors**:
  - `#sidebar-filters`
  - `.filter-container`
  - `[data-filters]`
- **Customization**: Work with developer to customize placement

#### Products Container Selector
- **Purpose**: CSS selector for where search results appear
- **Default**: Auto-detected based on your theme
- **Common selectors**:
  - `#product-listing`
  - `.product-grid`
  - `[data-products]`
- **Impact**: Determines where filtered results are displayed

#### AJAX Category Links
- **Purpose**: Load category pages without full page refresh
- **Default**: Enabled
- **Benefits**: Faster browsing, maintains filter selections
- **Requirements**: Theme must support AJAX category navigation

### Filter Appearance Settings

#### Default Filter State
- **Purpose**: Whether filters start expanded or collapsed
- **Options**:
  - **Expanded**: All filter options visible immediately
  - **Collapsed**: Filters show only titles, click to expand
- **Mobile**: Usually collapsed to save screen space

#### Filter Value Limits
- **Purpose**: Maximum number of filter options to show at once
- **Default**: 10-15 options per filter
- **"Show More"**: Link to reveal additional options
- **Performance**: Too many options can slow page loading

---

## Indexing Settings

### Background Processing Configuration

`[SCREENSHOT: Indexing Settings section with sync and processing options]`

#### Enable Hooks for Auto-Update
- **Purpose**: Automatically sync when products change in BigCommerce
- **Default**: Enabled
- **How it works**: BigCommerce sends notifications when products are modified
- **Benefits**: Always up-to-date search results without manual sync

**When to Disable:**
- You prefer manual control over sync timing
- You experience sync performance issues
- You have very frequent product updates that cause excessive syncing

#### Auto-Check Update Interval
- **Purpose**: How often the app checks for product changes
- **Options**:
  - **Real-time**: Immediate updates (highest server load)
  - **5 minutes**: Very frequent updates
  - **15 minutes**: Frequent updates (recommended)
  - **30 minutes**: Moderate updates
  - **1 hour**: Infrequent updates (lowest server load)

**Choosing Interval:**
- **High-change stores**: More frequent updates (5-15 minutes)
- **Stable catalogs**: Less frequent updates (30-60 minutes)
- **Performance priority**: Longer intervals reduce server load

#### Semantic Search Processing
- **Purpose**: Enable AI processing for semantic search
- **Default**: Enabled if semantic search is enabled
- **Impact**: Disabled = semantic search won't work properly
- **Resource usage**: AI processing requires additional server resources

### Sync Behavior Settings

#### Product Sync Priority
- **Purpose**: Which products to sync first during large updates
- **Options**:
  - **Newest first**: Recently added products get priority
  - **Most popular**: High-traffic products get priority
  - **Alphabetical**: Systematic A-Z processing
  - **Category order**: Sync by category hierarchy

#### Error Handling
- **Purpose**: How to handle products that fail to sync
- **Options**:
  - **Retry automatically**: Attempt to sync failed products again
  - **Skip and report**: Continue sync, log failed products for review
  - **Stop on error**: Halt sync process if any product fails

#### Batch Processing Size
- **Purpose**: Number of products processed in each sync batch
- **Range**: 10-100 products per batch
- **Large batches**: Faster overall sync, more server memory usage
- **Small batches**: Slower sync, less server impact

---

## Customer Settings

### Customer-Specific Configurations

`[SCREENSHOT: Customer Settings section with pricing and group options]`

#### Guest Customer Group
- **Purpose**: Default customer group for non-logged-in visitors
- **Impact**: Affects pricing and product visibility for guest shoppers
- **Selection**: Choose from your BigCommerce customer groups
- **Common choice**: "Guest" or default customer group

#### Customer Group Pricing
- **Purpose**: Show different prices based on customer group membership
- **Default**: Enabled
- **B2B benefit**: Different pricing for wholesale vs. retail customers
- **Complexity**: Requires customer group setup in BigCommerce

#### Currency Handling
- **Purpose**: How to handle multiple currencies in search/filters
- **Auto-detection**: Use customer's browser/location to determine currency
- **Manual selection**: Let customers choose their preferred currency
- **Search impact**: Prices and ranges adjust based on selected currency

---

## Advanced Settings

### Performance Optimization

`[SCREENSHOT: Advanced Settings section with performance options]`

#### Cache Configuration
- **Purpose**: Control how search data is cached
- **Cache lifetime**: How long to keep cached search results
- **Cache size limits**: Maximum cache storage allowed
- **Auto-cleanup**: Automatically remove old cache data

#### Search Timeout Settings
- **Purpose**: Maximum time to wait for search results
- **Default**: 30 seconds
- **Too short**: May cut off complex searches
- **Too long**: Customers may abandon slow searches

#### Rate Limiting
- **Purpose**: Prevent excessive API calls from single users
- **Limits**: Number of searches per minute/hour
- **Protection**: Prevents abuse and ensures fair usage
- **Adjustment**: May need tuning for high-traffic stores

### Integration Settings

#### BigCommerce API Configuration
- **Purpose**: Settings for communicating with BigCommerce
- **API version**: Which BigCommerce API version to use
- **Request limits**: How many API calls per hour
- **Error handling**: How to handle BigCommerce API errors

#### Webhook Configuration
- **Purpose**: Settings for receiving BigCommerce notifications
- **Event types**: Which BigCommerce events trigger app updates
- **Retry policy**: How to handle failed webhook deliveries
- **Security**: Webhook authentication and validation

---

## Settings Validation and Testing

### Configuration Testing

#### Search Functionality Test
1. **Save settings** after making changes
2. **Clear cache** to ensure fresh data
3. **Test common searches** to verify behavior
4. **Check different devices** (desktop, mobile, tablet)
5. **Verify filter functionality** across categories

#### Performance Impact Assessment
- **Before/after comparisons**: Measure search speed before and after changes
- **User experience testing**: Have team members test the search experience
- **Analytics monitoring**: Watch for changes in search usage patterns
- **Customer feedback**: Monitor for complaints or compliments

### Rollback and Recovery

#### Settings Backup
- **Export settings**: Download current configuration before major changes
- **Version history**: Keep record of previous working configurations
- **Recovery plan**: Know how to quickly revert problematic changes

#### Common Rollback Scenarios
- **Performance degradation**: New settings cause slower search
- **Reduced functionality**: Changes break existing features
- **Customer complaints**: New behavior confuses or frustrates customers
- **Technical issues**: Settings cause errors or crashes

---

## Optimization Strategies

### Store Type Recommendations

#### Fashion/Apparel Stores
- **Semantic search**: Enabled (helps with style/trend searches)
- **Search score**: 0.8-1.0 (balanced relevance)
- **Sort default**: Relevance or Newest
- **Products per page**: 18-24 (good for visual browsing)
- **Filters**: Emphasize Size, Color, Brand, Price

#### Electronics Stores
- **Semantic search**: Enabled (technical term understanding)
- **Search score**: 1.0-1.2 (higher precision for tech specs)
- **Sort default**: Relevance
- **Products per page**: 12-18 (more detailed comparison needed)
- **Filters**: Emphasize Brand, Price, Features, Ratings

#### Home & Garden Stores
- **Semantic search**: Enabled (lifestyle and use-case searches)
- **Search score**: 0.8-1.0 (broad category coverage)
- **Sort default**: Relevance
- **Products per page**: 20-30 (browsing-heavy category)
- **Filters**: Emphasize Category, Price, Brand, Material

### Traffic Level Considerations

#### High-Traffic Stores (1000+ daily visitors)
- **Cache settings**: Longer cache times for better performance
- **Sync intervals**: More frequent updates to handle high change volume
- **Rate limiting**: Higher limits but with monitoring
- **Performance priority**: Optimize for speed over feature richness

#### Medium-Traffic Stores (100-1000 daily visitors)
- **Balanced approach**: Standard settings work well
- **Regular monitoring**: Weekly review of settings performance
- **Gradual optimization**: Make incremental improvements
- **Feature testing**: Good environment for testing new features

#### Low-Traffic Stores (Under 100 daily visitors)
- **Resource conservation**: Longer cache times, less frequent sync
- **Feature focus**: Emphasize features over performance optimization
- **Manual management**: More hands-on settings adjustment
- **Cost efficiency**: Optimize for minimal resource usage

---

## Troubleshooting Settings Issues

### Common Problems

#### Search Not Working After Settings Change

**Symptoms:**
- Search returns no results
- Search page shows errors
- Filters don't appear

**Debugging Steps:**
1. **Check recent changes**: Review what settings were modified
2. **Clear cache**: Force fresh data with current settings
3. **Test with default settings**: Temporarily revert to defaults
4. **Check browser console**: Look for JavaScript errors
5. **Verify theme integration**: Ensure selectors are correct

#### Performance Degradation

**Symptoms:**
- Slower search results
- Page loading delays
- Increased server resource usage

**Investigation:**
1. **Review resource-intensive settings**: Semantic search, large batch sizes
2. **Monitor cache hit rates**: Low cache efficiency indicates problems
3. **Check sync frequency**: Too frequent syncing can impact performance
4. **Analyze search patterns**: Identify which searches are slowest

#### Customer Experience Issues

**Symptoms:**
- Customer complaints about search results
- Reduced search usage in analytics
- Lower conversion rates from search

**Analysis:**
1. **Review search analytics**: Look for patterns in customer behavior
2. **Test customer journeys**: Try common search scenarios yourself
3. **Adjust relevance settings**: Fine-tune search score thresholds
4. **Monitor zero-result searches**: Identify failed search attempts

---

## Best Practices Summary

### Configuration Management
- ✅ **Document changes**: Keep record of what settings were changed and why
- ✅ **Test incrementally**: Make one change at a time to isolate impact
- ✅ **Monitor performance**: Watch for impact on speed and user experience
- ✅ **Backup settings**: Export configuration before major changes
- ✅ **Schedule reviews**: Regular monthly review of settings effectiveness

### Optimization Approach
- ✅ **Start with defaults**: Begin with recommended settings
- ✅ **Measure impact**: Use analytics to guide optimization decisions
- ✅ **Customer feedback**: Listen to customer complaints and suggestions
- ✅ **Seasonal adjustments**: Modify settings for peak seasons or events
- ✅ **Continuous improvement**: Regularly refine based on new data

### Integration Considerations
- ✅ **Theme compatibility**: Ensure settings work with your theme
- ✅ **BigCommerce updates**: Check settings after BigCommerce updates
- ✅ **Third-party apps**: Consider impact on other installed apps
- ✅ **Performance monitoring**: Track overall store performance impact
- ✅ **Mobile optimization**: Test settings on mobile devices

---

**Next Steps**: After configuring your app settings, move on to [Chapter 10: Plans & Pricing](./10-plans-pricing.md) to understand subscription options and manage your billing.

---

*Need help optimizing your settings? Our support team can review your store's specific needs and recommend the best configuration for your business model and customer base.*