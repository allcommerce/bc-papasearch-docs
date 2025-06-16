# Chapter 13: Support & Troubleshooting

This comprehensive troubleshooting guide helps you resolve common issues, understand error messages, and get the most out of your BigCommerce Semantic Search & Filters app. When you need additional help, we'll show you how to contact our support team effectively.

## 13.1 Getting Support

### Support Channels
- **Documentation:** Complete user guide (this document)
- **Online Support:** https://papathemes.com/contact-us/
- **Email Support:** Direct support ticket system
- **Live Chat:** Real-time assistance during business hours

### Before Contacting Support
1. **Check this guide:** Review relevant chapters for your issue
2. **Note error messages:** Copy exact error text
3. **Gather information:** Store details, browser version, steps taken
4. **Try basic fixes:** Clear cache, refresh browser, try different browser

**Screenshot Description:** *Support links in the app header showing "Documentation" and "Support" buttons that link to external help resources.*

## 13.2 Common Installation Issues

### Script Installation Problems

**Issue: Script not appearing on frontend**
- **Cause:** JavaScript not properly installed or cached
- **Solution:**
  1. Verify script installation from dashboard
  2. Clear BigCommerce cache
  3. Check browser console for JavaScript errors
  4. Re-install script if necessary

**Issue: Search not working after installation**
- **Cause:** Products not indexed or script conflicts
- **Solution:**
  1. Check product index status
  2. Run "Sync New & Modified Products"
  3. Wait for indexing to complete
  4. Test with simple search terms

**Issue: Filters not displaying**
- **Cause:** Category filters disabled or no products in category
- **Solution:**
  1. Check filter status in Customize Filters
  2. Ensure category has products
  3. Enable filters for category
  4. Clear cache and refresh

### Installation Verification

**Check Installation Status:**
1. Dashboard shows "Script Installed" indicator
2. Frontend search box appears on category pages
3. Filter sidebar displays on category pages
4. Search returns relevant results

**Common Installation Errors:**
- **"Installation failed"** - Check BigCommerce API permissions
- **"Script conflict detected"** - Disable conflicting apps temporarily
- **"Theme not supported"** - Contact support for theme compatibility

## 13.3 Dashboard Issues

### Sync and Indexing Problems

**Issue: Sync stuck or taking too long**
- **Cause:** Large product catalog or server load
- **Solution:**
  1. Wait for current sync to complete (can take hours)
  2. Don't start multiple syncs simultaneously
  3. Check sync progress regularly
  4. Contact support if stuck for >24 hours

**Issue: Products showing "Not Indexed" status**
- **Cause:** Failed indexing or recent product changes
- **Solution:**
  1. Select products and click "Reindex Selected"
  2. For bulk issues, use "Reindex All"
  3. Check if products are in selected channel
  4. Verify products are published and visible

**Issue: Sync fails with error message**
- **Cause:** API rate limits or data issues
- **Solution:**
  1. Note exact error message
  2. Wait 30 minutes and retry
  3. Check product data for special characters
  4. Contact support with error details

### Channel Selection Issues

**Issue: Wrong channel selected**
- **Cause:** Multiple channels in store
- **Solution:**
  1. Check channel dropdown in dashboard header
  2. Select correct channel for your storefront
  3. Product counts will update automatically
  4. Filters are channel-specific

**Issue: No channels available**
- **Cause:** Store configuration or API issues
- **Solution:**
  1. Verify store has published channels
  2. Check BigCommerce API permissions
  3. Re-install app if necessary
  4. Contact support for channel issues

## 13.4 Search Performance Issues

### Search Not Returning Results

**Issue: Search returns no results for valid terms**
- **Cause:** Products not indexed or search settings
- **Solution:**
  1. Check if products are indexed
  2. Review search settings (lowest score threshold)
  3. Try broader search terms
  4. Verify product names and descriptions

**Issue: Search returns irrelevant results**
- **Cause:** Search algorithm needs optimization
- **Solution:**
  1. Adjust search lowest score in settings
  2. Check product data quality
  3. Use AI search features if available
  4. Report specific examples to support

**Issue: Search is too slow**
- **Cause:** Large product catalog or server load
- **Solution:**
  1. Enable search cache in settings
  2. Reduce products per page limit
  3. Optimize product data
  4. Consider plan upgrade for larger catalogs

### AI Search Issues

**Issue: Semantic search not working**
- **Cause:** AI features not enabled or insufficient data
- **Solution:**
  1. Check if AI search is enabled in settings
  2. Ensure sufficient product data for training
  3. Allow time for AI model training
  4. Verify plan includes AI features

**Issue: Search suggestions not appearing**
- **Cause:** Insufficient search data or feature disabled
- **Solution:**
  1. Enable search suggestions in settings
  2. Ensure users have performed searches
  3. Check keyword extraction status
  4. Wait for data accumulation

## 13.5 Filter Configuration Issues

### Filters Not Displaying

**Issue: No filters showing on category pages**
- **Cause:** Filters disabled for category or no filterable products
- **Solution:**
  1. Check category filter status in Customize Filters
  2. Enable filters for specific categories
  3. Ensure products have filterable attributes
  4. Check filter visibility settings

**Issue: Wrong filters appearing**
- **Cause:** Inherited settings or category misconfiguration
- **Solution:**
  1. Check category hierarchy and inheritance
  2. Set category-specific filter configurations
  3. Clear filter cache
  4. Verify product attributes match filter types

**Issue: Filter values missing or incorrect**
- **Cause:** Product data issues or cache problems
- **Solution:**
  1. Check product attribute data in BigCommerce
  2. Clear filter cache
  3. Re-sync products with updated data
  4. Verify filter type matches product attributes

### Performance Issues

**Issue: Filters loading slowly**
- **Cause:** Large product catalogs or inefficient queries
- **Solution:**
  1. Enable filter caching
  2. Limit number of visible filters
  3. Optimize product attribute structure
  4. Consider upgrading plan for better performance

**Issue: Filter interactions causing errors**
- **Cause:** JavaScript conflicts or theme issues
- **Solution:**
  1. Check browser console for JavaScript errors
  2. Test with different browsers
  3. Disable other apps temporarily
  4. Contact support for theme compatibility

## 13.6 Subscription and Billing Issues

### Payment Problems

**Issue: Payment failed during plan upgrade**
- **Cause:** Insufficient wallet balance or PayPal issues
- **Solution:**
  1. Check wallet balance and top up if needed
  2. Verify PayPal account is active
  3. Try payment again
  4. Contact support if payments continue failing

**Issue: Plan change not reflected**
- **Cause:** Changes take effect on next billing cycle
- **Solution:**
  1. Check "Next Plan" indicators in subscription info
  2. Plan downgrades usually take effect on next cycle
  3. Upgrades typically apply immediately
  4. Contact support if status seems incorrect

**Issue: Wallet top-up failing**
- **Cause:** PayPal payment issues or validation errors
- **Solution:**
  1. Check amount is between $5-$1000 in $5 increments
  2. Verify PayPal account has sufficient funds
  3. Try smaller amounts if large payments fail
  4. Contact PayPal support for payment issues

### Usage and Limits

**Issue: Features disabled due to plan limits**
- **Cause:** Exceeded plan limits or usage caps
- **Solution:**
  1. Check current plan limits in Plans & Pricing
  2. Upgrade plan if consistently hitting limits
  3. Optimize usage patterns
  4. Set appropriate add-on limits

**Issue: Add-on charges higher than expected**
- **Cause:** High usage or unlimited spending caps
- **Solution:**
  1. Set monthly spending limits on add-ons
  2. Monitor usage regularly
  3. Optimize search and indexing patterns
  4. Consider plan upgrade for better rates

## 13.7 Cache and Performance Issues

### Cache Management Problems

**Issue: Changes not appearing on frontend**
- **Cause:** Cache not cleared after configuration changes
- **Solution:**
  1. Clear app cache using Cache Manager
  2. Clear BigCommerce template cache
  3. Clear browser cache
  4. Wait a few minutes for changes to propagate

**Issue: Cache Manager showing errors**
- **Cause:** Cache server issues or connectivity problems
- **Solution:**
  1. Refresh Cache Manager page
  2. Try clearing specific cache types
  3. Wait and retry if server is busy
  4. Contact support for persistent cache issues

**Issue: Poor performance despite caching**
- **Cause:** Cache configuration or server capacity
- **Solution:**
  1. Check cache hit rates in Cache Manager
  2. Optimize cache settings
  3. Clear outdated cache data
  4. Consider plan upgrade for better performance

## 13.8 Data Import and Export Issues

### Keyword Management

**Issue: Keywords not extracting from products**
- **Cause:** Insufficient product data or extraction task errors
- **Solution:**
  1. Ensure products have detailed descriptions
  2. Check extraction task status
  3. Manually add important keywords
  4. Wait for extraction process to complete

**Issue: User search keywords not tracking**
- **Cause:** Frontend script issues or settings disabled
- **Solution:**
  1. Verify script is properly installed
  2. Check tracking settings are enabled
  3. Test search functionality
  4. Wait for search data to accumulate

### Settings and Configuration

**Issue: Settings changes not saving**
- **Cause:** Validation errors or permission issues
- **Solution:**
  1. Check for form validation errors
  2. Ensure all required fields are completed
  3. Try saving sections individually
  4. Check browser console for errors

**Issue: Settings reset to defaults**
- **Cause:** App update or data corruption
- **Solution:**
  1. Re-configure settings to preferred values
  2. Save settings immediately after changes
  3. Export settings as backup if feature available
  4. Contact support if settings continue resetting

## 13.9 Browser and Compatibility Issues

### Browser-Specific Problems

**Issue: App not working in specific browser**
- **Cause:** Browser compatibility or JavaScript disabled
- **Solution:**
  1. Enable JavaScript in browser settings
  2. Clear browser cache and cookies
  3. Try in incognito/private mode
  4. Update browser to latest version

**Issue: Interface elements not displaying correctly**
- **Cause:** CSS conflicts or browser compatibility
- **Solution:**
  1. Try different browser to isolate issue
  2. Disable browser extensions temporarily
  3. Check browser zoom level (100% recommended)
  4. Contact support with browser details

### Mobile and Responsive Issues

**Issue: App not working on mobile devices**
- **Cause:** Responsive design issues or mobile browser limitations
- **Solution:**
  1. Use desktop/laptop for app administration
  2. Check if issue is with frontend or backend
  3. Test with different mobile browsers
  4. Contact support for mobile-specific issues

## 13.10 Error Messages Reference

### Common Error Codes

**"Authentication failed"**
- **Meaning:** Invalid or expired authentication token
- **Solution:** Refresh page or re-install app

**"Rate limit exceeded"**
- **Meaning:** Too many API requests in short time
- **Solution:** Wait 30-60 minutes and retry

**"Product not found"**
- **Meaning:** Product was deleted or made private
- **Solution:** Remove from index or check product status

**"Insufficient permissions"**
- **Meaning:** App lacks required BigCommerce permissions
- **Solution:** Re-install app or check store user permissions

**"Server error (500)"**
- **Meaning:** Internal server error
- **Solution:** Try again later or contact support

**"Validation failed"**
- **Meaning:** Input data doesn't meet requirements
- **Solution:** Check form inputs and correct errors

### API and Integration Errors

**"BigCommerce API error"**
- **Meaning:** Issue communicating with BigCommerce
- **Solution:** Check BigCommerce store status and retry

**"PayPal payment failed"**
- **Meaning:** Payment processing issue
- **Solution:** Check PayPal account and payment method

**"Cache operation failed"**
- **Meaning:** Unable to clear or access cache
- **Solution:** Retry operation or contact support

## 13.11 Performance Optimization

### Best Practices for Performance

**For Large Product Catalogs:**
1. **Batch Operations:** Use bulk actions for efficiency
2. **Scheduled Syncs:** Run major updates during off-peak hours
3. **Cache Management:** Regularly clear outdated cache data
4. **Plan Selection:** Choose appropriate plan for catalog size

**For High Traffic Stores:**
1. **Enable Caching:** Use all available cache options
2. **Optimize Filters:** Limit number of visible filters
3. **Monitor Usage:** Track search and index operations
4. **Plan Upgrades:** Consider higher-tier plans

**For Better Search Results:**
1. **Product Data Quality:** Ensure complete product information
2. **Keyword Optimization:** Use relevant product descriptions
3. **Regular Updates:** Keep product data current
4. **AI Features:** Enable semantic search for better relevance

## 13.12 Contacting Support

### When to Contact Support

**Immediate Support Needed:**
- App completely non-functional
- Data loss or corruption
- Payment/billing issues
- Security concerns

**Standard Support Requests:**
- Configuration questions
- Performance optimization
- Feature requests
- Training needs

### Information to Provide

**Always Include:**
1. **Store URL:** Your BigCommerce store domain
2. **Error Messages:** Exact text of any errors
3. **Browser Details:** Browser type and version
4. **Steps to Reproduce:** What you did when issue occurred
5. **Screenshots:** Visual evidence of the problem

**For Technical Issues:**
- **Console Errors:** JavaScript errors from browser console
- **Network Errors:** Failed requests from browser developer tools
- **Timing:** When issue started occurring
- **Frequency:** How often issue occurs

### Support Response Times

**Priority Levels:**
- **Critical:** 4-8 hours (business days)
- **High:** 24-48 hours
- **Normal:** 2-5 business days
- **Low:** 5-10 business days

**Business Hours:**
- Monday-Friday, 9 AM - 5 PM EST
- Emergency support available for critical issues
- Response times may be longer during holidays

Remember: The more detailed information you provide, the faster we can resolve your issue!

**Screenshot Description:** *Support contact form showing fields for store URL, issue category, detailed description, and file upload for screenshots, with priority level selection options.*