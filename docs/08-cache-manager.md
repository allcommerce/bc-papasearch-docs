# Chapter 8: Cache Management

Cache management is essential for maintaining optimal search performance in your store. This chapter explains what cache is, how it affects your search functionality, and how to manage it effectively for the best customer experience.

---

## Understanding Cache in Search

### What Is Cache?

Cache is a temporary storage system that saves frequently accessed data to improve performance. In your search app, cache stores:

- **Search results** for popular queries
- **Filter options** for different categories
- **Product data** for faster loading
- **Keyword suggestions** for quick autocomplete
- **Category structures** for navigation

`[SCREENSHOT: Cache concept diagram showing how cache speeds up search]`

### Why Cache Matters

**Performance Benefits:**
- **Faster search results**: Cached searches load instantly
- **Reduced server load**: Less processing required for repeat requests
- **Better user experience**: Customers get quicker responses
- **Lower hosting costs**: More efficient resource usage

**When Cache Helps Most:**
- Popular product searches
- Frequently used filters
- Common keyword suggestions
- Category browsing patterns
- Repeat customer visits

---

## Accessing Cache Manager

### From Dashboard
1. Navigate to the main **Dashboard**
2. Click the **"Cache Manager"** button (gauge/speedometer icon)
3. The Cache Manager page opens with current cache data

`[SCREENSHOT: Dashboard with Cache Manager button highlighted]`

### Direct Navigation
- Use the left sidebar menu to access **Cache Manager**
- Page loads with cache statistics and management tools

---

## Cache Manager Interface

### Cache Statistics Overview

At the top of the page, you'll see important cache metrics:

`[SCREENSHOT: Cache statistics overview section]`

#### Key Performance Indicators:

**Total Cache Entries**
- **Meaning**: Number of items currently stored in cache
- **Range**: Typically 1,000-50,000 entries for active stores
- **Impact**: Higher numbers indicate more cached data for faster performance

**Cache Hit Rate**
- **Meaning**: Percentage of requests served from cache vs. database
- **Target**: 70-90% is excellent performance
- **Low rate**: Indicates cache may need optimization or clearing

**Cache Size**
- **Meaning**: Total storage space used by cache data
- **Monitoring**: Watch for excessive growth that may impact performance
- **Management**: Regular cleanup prevents storage issues

**Last Updated**
- **Meaning**: When cache data was last refreshed
- **Frequency**: Should update regularly as customers search and browse
- **Stale data**: Very old timestamps may indicate cache issues

### Cache Type Filter

Filter cache entries by type to focus on specific areas:

`[SCREENSHOT: Cache type filter dropdown with options]`

#### Available Cache Types:

**Search Results**
- **Contains**: Cached search query results
- **Purpose**: Speed up repeat searches for same terms
- **Example**: "wireless headphones" search results cached for 1 hour

**Filter Options**
- **Contains**: Product filter data for categories
- **Purpose**: Quickly load filter options for different categories
- **Example**: Available brands, price ranges, sizes for "Electronics" category

**Category Tree**
- **Contains**: Product category hierarchy structure
- **Purpose**: Fast navigation menu loading
- **Example**: Electronics > Audio > Headphones structure

**Popular Keywords**
- **Contains**: Most searched terms and suggestions
- **Purpose**: Quick autocomplete suggestions
- **Example**: Top 100 search terms for instant suggestions

**Auto-suggest Keywords**
- **Contains**: Keyword suggestions for search autocomplete
- **Purpose**: Real-time search suggestions as customers type
- **Example**: Typing "wir" shows "wireless", "wireless mouse", "wire"

**Semantic Search Status**
- **Contains**: AI search feature configuration
- **Purpose**: Faster semantic search processing
- **Example**: Cached AI model responses for product similarity

**Other**
- **Contains**: Miscellaneous cache data
- **Purpose**: Various performance optimizations
- **Example**: User preferences, temporary calculations

---

## Cache Entries Table

The main table shows detailed information about each cache entry:

`[SCREENSHOT: Complete cache entries table with all columns]`

### Table Columns Explained

#### Cache Key
- **Content**: Unique identifier for the cached data
- **Format**: Usually includes type, store, and specific parameters
- **Example**: `search:wireless_headphones:electronics:USD`
- **Clickable**: Click to view detailed cache information

#### Type
- **Content**: Category of cache data (Search, Filter, etc.)
- **Color coding**: Different colors for easy visual identification
- **Grouping**: Use for filtering and organizing cache data
- **Icons**: Visual indicators for each cache type

#### Size
- **Content**: Storage space used by this cache entry
- **Format**: Displayed in KB, MB, or bytes
- **Monitoring**: Large entries may indicate optimization opportunities
- **Cleanup**: Target largest entries for cleanup if storage is concern

#### Created
- **Content**: When this cache entry was first created
- **Format**: Date and time stamp
- **Age tracking**: Older entries may be candidates for cleanup
- **Pattern analysis**: See when cache entries are typically created

#### Expires
- **Content**: When this cache entry will automatically expire
- **Format**: Date and time, or "Never" for permanent cache
- **TTL (Time To Live)**: Different cache types have different lifespans
- **Auto-cleanup**: Expired entries are automatically removed

#### Hit Count
- **Content**: Number of times this cache entry has been accessed
- **Usage indicator**: Higher numbers show more valuable cache entries
- **Performance**: High-hit entries provide the most performance benefit
- **Optimization**: Low-hit entries may be candidates for removal

#### Last Accessed
- **Content**: Most recent time this cache entry was used
- **Format**: Date and time stamp
- **Activity tracking**: Shows which cache entries are actively used
- **Cleanup guidance**: Old access dates indicate unused cache

#### Actions
- **View**: See detailed cache entry information
- **Delete**: Remove this specific cache entry
- **Refresh**: Force update of this cache entry
- **Export**: Download cache data for analysis

---

## Cache Operations

### Individual Cache Management

#### Viewing Cache Details
1. Click on any **Cache Key** in the table
2. A detailed view shows the cached data content
3. Review the data structure and content
4. Check for data accuracy and completeness

`[SCREENSHOT: Cache detail view showing cached data content]`

#### Deleting Individual Cache Entries
1. Locate the cache entry you want to remove
2. Click the **"Delete"** button in the Actions column
3. Confirm the deletion in the popup dialog
4. The cache entry is immediately removed

**When to Delete Individual Entries:**
- **Outdated data**: Product information has changed
- **Incorrect results**: Cache contains wrong information
- **Testing**: Need to force fresh data for testing
- **Troubleshooting**: Suspected cache corruption

#### Refreshing Cache Entries
1. Find the cache entry that needs updating
2. Click the **"Refresh"** button in the Actions column
3. The system fetches fresh data from the database
4. Cache entry is updated with current information

### Bulk Cache Operations

#### Selecting Multiple Entries
- **Method**: Use checkboxes to select multiple cache entries
- **Limit**: Select up to 100 entries for bulk operations
- **Filter first**: Use filters to narrow down before bulk selection
- **Select all**: Option to select all visible entries

`[SCREENSHOT: Bulk cache selection interface with checkboxes]`

#### Bulk Actions Available:

**Delete Selected**
- **Purpose**: Remove multiple cache entries at once
- **Use case**: Clean up outdated or incorrect cache data
- **Caution**: Deleted cache will need to be rebuilt on next access

**Refresh Selected**
- **Purpose**: Update multiple cache entries with fresh data
- **Use case**: After product updates or configuration changes
- **Performance**: May temporarily slow response times during refresh

**Export Selected**
- **Purpose**: Download cache data for analysis or backup
- **Format**: CSV or JSON export options
- **Use case**: Performance analysis, troubleshooting, data backup

### Cache Type Operations

#### Flush by Cache Type

Clear all cache entries of a specific type:

`[SCREENSHOT: Cache type flush options with buttons for each type]`

**Search Results Cache**
- **When to flush**: After major product updates or search configuration changes
- **Impact**: Next searches will be slower until cache rebuilds
- **Recovery time**: Usually 1-2 hours for full cache rebuild

**Filter Cache**
- **When to flush**: After adding new filters or changing filter configurations
- **Impact**: Filter loading may be slower temporarily
- **Recovery time**: 30-60 minutes for filter cache rebuild

**Category Tree Cache**
- **When to flush**: After category structure changes
- **Impact**: Navigation menus may load slower
- **Recovery time**: 15-30 minutes for category cache rebuild

**Keyword Cache**
- **When to flush**: After keyword updates or search behavior changes
- **Impact**: Autocomplete suggestions may be slower
- **Recovery time**: 20-40 minutes for keyword cache rebuild

#### Complete Cache Flush

Clear ALL cache data at once:

1. Click the **"Flush All Cache"** button
2. Confirm the action in the warning dialog
3. All cache data is immediately cleared
4. System begins rebuilding cache as customers use the site

`[SCREENSHOT: Flush all cache warning dialog]`

**When to Use Complete Flush:**
- **Major app updates**: New features or significant changes
- **Configuration overhauls**: Complete search settings restructure
- **Performance issues**: When cache seems corrupted or problematic
- **Fresh start**: Beginning of new sales seasons or campaigns

**Impact of Complete Flush:**
- **Immediate**: Site performance will be slower for 1-2 hours
- **Recovery**: Cache rebuilds gradually as customers use the site
- **Performance curve**: Speed improves progressively over 24-48 hours

---

## Cache Performance Monitoring

### Cache Health Indicators

#### Optimal Cache Performance:
- **Hit Rate**: 70-90%
- **Average Entry Age**: 1-24 hours
- **Size Growth**: Steady, not exponential
- **Response Times**: Consistent and fast

#### Warning Signs:
- **Low Hit Rate**: Below 50% indicates cache issues
- **Very Old Entries**: Cache not refreshing properly
- **Rapid Size Growth**: Possible memory leaks or inefficient caching
- **Inconsistent Performance**: Cache may be corrupted

### Performance Optimization

#### Cache Tuning Strategies:

**High-Traffic Stores:**
- **Longer cache times**: Keep popular searches cached longer
- **Preemptive caching**: Cache popular terms before they're searched
- **Smart cleanup**: Remove least-used cache more aggressively
- **Load balancing**: Distribute cache across multiple servers

**Low-Traffic Stores:**
- **Shorter cache times**: Ensure data stays fresh with less activity
- **Selective caching**: Cache only the most important data
- **Manual management**: More hands-on cache maintenance
- **Resource conservation**: Use cache to reduce server load

#### Cache Maintenance Schedule:

**Daily (Automated):**
- ✅ Remove expired cache entries
- ✅ Monitor cache hit rates
- ✅ Check for unusual cache growth

**Weekly (Manual Review):**
- ✅ Review cache performance metrics
- ✅ Clear outdated search result cache
- ✅ Monitor cache size and growth trends

**Monthly (Deep Maintenance):**
- ✅ Complete cache performance analysis
- ✅ Optimize cache settings based on usage patterns
- ✅ Clean up long-term accumulated cache data
- ✅ Review and adjust cache expiration times

---

## Troubleshooting Cache Issues

### Common Cache Problems

#### Search Results Not Updating

**Symptoms:**
- New products don't appear in search results
- Product information is outdated in search
- Price changes not reflected in search

**Causes:**
- Search result cache is stale
- Product sync hasn't triggered cache update
- Cache expiration time too long

**Solutions:**
1. **Flush search results cache** for immediate fix
2. **Run product sync** from Manage Indexes page
3. **Adjust cache expiration** settings if problem persists
4. **Check product sync logs** for errors

#### Filters Showing Incorrect Options

**Symptoms:**
- Filter options include products that don't exist
- New product attributes missing from filters
- Filter counts are incorrect

**Causes:**
- Filter cache is outdated
- Product categorization changes not reflected
- Cache rebuild incomplete

**Solutions:**
1. **Flush filter cache** to force fresh data
2. **Wait 30-60 minutes** for cache to rebuild
3. **Verify product data** in BigCommerce admin
4. **Check filter configuration** in Customize Filters

#### Slow Search Performance

**Symptoms:**
- Search results load slowly
- Autocomplete suggestions delayed
- Filter application takes too long

**Causes:**
- Low cache hit rate
- Cache entries too large
- Server resource constraints

**Solutions:**
1. **Monitor cache hit rates** - should be 70%+
2. **Clear cache selectively** to remove inefficient entries
3. **Check server resources** and upgrade if needed
4. **Review search configuration** for optimization opportunities

#### Cache Memory Issues

**Symptoms:**
- Cache size growing rapidly
- Server memory warnings
- Performance degrading over time

**Causes:**
- Cache not expiring properly
- Memory leaks in cache system
- Inefficient cache key generation

**Solutions:**
1. **Implement aggressive cache cleanup** schedule
2. **Reduce cache expiration times** temporarily
3. **Monitor cache growth patterns** to identify issues
4. **Contact support** if memory issues persist

---

## Cache Best Practices

### When to Clear Cache

#### Mandatory Cache Clearing:
- **After product imports**: Major catalog changes require fresh cache
- **Search configuration changes**: Modified settings need cache refresh
- **App updates**: New features may need clean cache
- **Performance issues**: When cache seems corrupted

#### Recommended Cache Clearing:
- **Weekly maintenance**: Regular cleanup for optimal performance
- **Seasonal changes**: Before major sales or season transitions
- **Marketing campaigns**: Before launching new product promotions
- **Monthly reviews**: Part of regular maintenance schedule

### Cache Optimization Strategies

#### Smart Cache Management:
- **Monitor usage patterns**: Clear unused cache, keep popular cache
- **Time-based clearing**: Schedule cache clearing during low-traffic periods
- **Selective clearing**: Target specific cache types rather than complete flush
- **Gradual rebuilding**: Allow cache to rebuild naturally over time

#### Performance Balancing:
- **Cache vs. freshness**: Balance performance with data accuracy
- **Storage vs. speed**: Monitor cache size vs. performance benefits
- **Automation vs. control**: Use automated cleanup with manual oversight
- **User experience**: Prioritize customer-facing cache over admin cache

### Integration with Other Features

#### Cache and Product Sync:
- **Automatic updates**: Product sync should trigger relevant cache clearing
- **Coordination**: Sync cache clearing with product index updates
- **Timing**: Schedule both operations during low-traffic periods

#### Cache and Search Settings:
- **Configuration changes**: Always clear cache after settings updates
- **Testing**: Use cache clearing to test configuration changes
- **Rollbacks**: Clear cache when reverting to previous settings

#### Cache and Performance Monitoring:
- **Metrics correlation**: Connect cache performance to search performance
- **Alerting**: Set up alerts for cache performance issues
- **Reporting**: Include cache metrics in performance reports

---

## Advanced Cache Management

### Cache Analytics

#### Understanding Cache Patterns:
- **Popular searches**: Which searches are cached most often
- **Cache efficiency**: Which cache types provide most performance benefit
- **Usage trends**: How cache usage changes over time
- **Optimization opportunities**: Where cache improvements can help most

#### Cache ROI Analysis:
- **Performance gains**: Measure speed improvements from cache
- **Resource savings**: Calculate server resources saved by cache
- **User experience**: Track customer satisfaction improvements
- **Cost efficiency**: Analyze cache storage costs vs. performance benefits

### Automated Cache Management

#### Smart Cache Policies:
- **Adaptive expiration**: Adjust cache times based on usage patterns
- **Predictive clearing**: Clear cache before it becomes stale
- **Load-based management**: Adjust cache behavior based on server load
- **Seasonal adjustments**: Modify cache strategy for different seasons

#### Cache Monitoring Integration:
- **Performance alerts**: Notifications when cache performance drops
- **Automatic cleanup**: Scheduled cache maintenance without manual intervention
- **Health checks**: Regular automated cache system verification
- **Reporting automation**: Automatic cache performance reports

---

**Next Steps**: After optimizing your cache performance, move on to [Chapter 9: App Settings](./09-settings.md) to configure the core search behavior and features.

---

*Need help with cache optimization? Our technical support team can analyze your cache patterns and provide personalized recommendations for your store's traffic patterns.*