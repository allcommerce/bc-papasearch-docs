# Chapter 5: Individual Filter Editing

This chapter covers the detailed configuration of individual filters. When you click "Edit" on any filter from the Customize Filters page, you'll access these advanced settings that control how each filter appears and behaves on your storefront.

---

## Accessing Filter Edit Mode

### From Customize Filters Page
1. Navigate to **Dashboard** → **Customize Filters**
2. Select your desired **Category** from the dropdown
3. Find the filter you want to edit in the table
4. Click the **"Edit"** button (pencil icon) in the Actions column

`[SCREENSHOT: Filter table with Edit button highlighted]`

### From Filter Creation
When creating a new filter, you'll automatically be taken to the edit screen after entering the basic information.

---

## Universal Filter Settings

All filter types share these common configuration options:

### Basic Information Section

`[SCREENSHOT: Basic Information section showing common settings]`

#### Display Name
- **Purpose**: The label customers see on your storefront
- **Example**: Change "manufacturer" to "Brand" for better customer understanding
- **Tips**:
  - Use customer-friendly language
  - Keep names short and clear
  - Consider your store's tone of voice

#### Visible Toggle
- **Purpose**: Show or hide this filter on the storefront
- **Options**:
  - ✅ **Visible**: Filter appears to customers
  - ❌ **Hidden**: Filter is hidden but settings are preserved
- **Use Case**: Temporarily hide filters during testing or seasonal adjustments

#### Collapsed by Default
- **Purpose**: Controls whether the filter starts expanded or collapsed
- **Options**:
  - ✅ **Collapsed**: Filter options are hidden until customer clicks to expand
  - ❌ **Expanded**: All filter options are visible immediately
- **Recommendation**: Collapse less important filters to reduce visual clutter

#### Sort Order
- **Purpose**: Determines the display order of filters on your storefront
- **How it works**: Lower numbers appear first (1, 2, 3...)
- **Note**: You can also reorder by dragging filters in the main table

---

## Filter Type-Specific Settings

### Brand Filter

The Brand filter allows customers to filter by product manufacturers or brands.

`[SCREENSHOT: Brand filter configuration screen]`

#### Brand-Specific Options:

**Maximum Values to Display**
- **Purpose**: Limits how many brand options are shown at once
- **Default**: 10
- **Range**: 1-50
- **Recommendation**:
  - Small stores: 10-15
  - Large stores: 20-25
  - Consider "Show More" functionality for longer lists

**Include Product Count**
- **Purpose**: Shows number of products for each brand
- **Example**: "Apple (23)" instead of just "Apple"
- **Benefits**: Helps customers understand available options
- **Recommendation**: Enable for better user experience

**Sort Options**
- **Alphabetical A-Z**: Brands sorted by name
- **Alphabetical Z-A**: Reverse alphabetical order
- **Product Count (High to Low)**: Most popular brands first
- **Product Count (Low to High)**: Least popular brands first

### Price Filter

The Price filter helps customers find products within their budget range.

`[SCREENSHOT: Price filter configuration screen]`

#### Price Filter Display Types:

**Slider Display**
- **Appearance**: Draggable slider with minimum and maximum handles
- **Best for**: Stores with wide price ranges
- **User experience**: Intuitive and visual price selection
- **Mobile friendly**: Easy to use on touch devices

`[SCREENSHOT: Price slider on storefront]`

**List Display**
- **Appearance**: Predefined price ranges as clickable options
- **Best for**: Stores with distinct price tiers
- **Example**:
  - Under $25
  - $25 - $50
  - $50 - $100
  - Over $100

`[SCREENSHOT: Price list options on storefront]`

#### Price Range Configuration:

**Automatic Range Detection**
- **How it works**: App analyzes your product prices and creates appropriate ranges
- **Updates**: Automatically adjusts as you add new products
- **Recommendation**: Best for most stores

**Custom Price Ranges**
- **Purpose**: Define specific price brackets for your store
- **Format**: Enter ranges like "0-25, 25-50, 50-100, 100+"
- **Use case**: When you have specific price categories or marketing tiers

**Currency Display**
- **Inherited**: Uses your store's currency settings
- **Decimal places**: Automatically formatted based on currency type
- **Multi-currency**: Adjusts for different customer currencies

### Category Filter

Allows customers to filter products by category or subcategory.

`[SCREENSHOT: Category filter configuration screen]`

#### Category Display Options:

**Subcategories Only**
- **Shows**: Only immediate child categories of the current category
- **Example**: In "Electronics" → Shows "Phones", "Laptops", "Tablets"
- **Best for**: Simple category structures

**All Descendants**
- **Shows**: All subcategories and their children
- **Example**: Shows "Phones" → "Smartphones" → "iPhone", "Android"
- **Best for**: Deep category hierarchies

**Entire Category Tree**
- **Shows**: Complete category structure regardless of current page
- **Use case**: Complex stores with multiple product lines
- **Note**: Can become overwhelming with large catalogs

#### Category-Specific Settings:

**Maximum Depth**
- **Purpose**: Limits how many category levels to show
- **Range**: 1-5 levels
- **Recommendation**: 2-3 levels for most stores

**Show Empty Categories**
- **Purpose**: Include categories with no products
- **Options**:
  - ✅ **Show**: All categories appear (may show "0" counts)
  - ❌ **Hide**: Only categories with products are shown
- **Recommendation**: Hide empty categories for cleaner appearance

### Custom Field Filters

For products with custom fields like Size, Color, Material, etc.

`[SCREENSHOT: Custom field filter configuration]`

#### Custom Field Setup:

**Field Selection**
- **Process**: Choose from available custom fields in your products
- **Common fields**: Size, Color, Material, Style, Model
- **Requirement**: Products must have this custom field populated

**Display Format Options**:

**Text List**
- **Appearance**: Simple text options with checkboxes
- **Best for**: Text-based attributes like "Material: Cotton, Polyester"

**Color Swatches**
- **Appearance**: Colored squares or circles
- **Requirements**:
  - Custom field must contain color names or hex codes
  - Colors must be recognized by the system
- **Example**: Red, Blue, Green appear as colored swatches

`[SCREENSHOT: Color swatches display on storefront]`

**Image Swatches**
- **Appearance**: Small thumbnail images
- **Requirements**: Image URLs must be provided in custom field
- **Use case**: Texture samples, pattern previews

**Size Chart**
- **Appearance**: Organized size options (XS, S, M, L, XL)
- **Auto-sorting**: Automatically orders common size formats
- **Custom order**: Define your own size sequence

#### Custom Field Advanced Options:

**Multi-Select Behavior**
- **Allow multiple selections**: Customers can choose multiple options
- **Single selection only**: Customers can only choose one option
- **Example**: Multiple colors OK, but only one size at a time

**Required vs Optional**
- **Required**: Customer must select from this filter
- **Optional**: Customer can skip this filter
- **Use case**: Size might be required for clothing, optional for accessories

### Rating Filter

Allows customers to filter by product review ratings.

`[SCREENSHOT: Rating filter configuration]`

#### Rating Options:

**Star Display**
- **Format**: ⭐⭐⭐⭐⭐ (4 stars & up)
- **Thresholds**: 1-star minimum, 2-star minimum, etc.
- **Product count**: Shows how many products meet each rating level

**Minimum Rating Filter**
- **Options**: "3 stars & up", "4 stars & up", "5 stars only"
- **Behavior**: Shows products with rating equal to or higher than selected
- **No reviews handling**: Choose whether to include unrated products

### Stock Status Filter

Helps customers find available products.

`[SCREENSHOT: Stock status filter configuration]`

#### Stock Options:

**In Stock Only**
- **Purpose**: Show only available products
- **Recommendation**: Most useful filter for customer experience

**Include Out of Stock**
- **Purpose**: Show all products regardless of availability
- **Use case**: When customers want to see full product range
- **Note**: Out of stock products should be clearly marked

**Pre-order Available**
- **Purpose**: Show products available for pre-order
- **Requirements**: BigCommerce pre-order functionality enabled

---

## Advanced Filter Behavior

### Filter Interaction Settings

`[SCREENSHOT: Advanced behavior settings section]`

#### Multi-Select Logic:

**AND Logic (Default)**
- **Behavior**: Products must match ALL selected options
- **Example**: Red AND Large = only products that are both red and large
- **Best for**: Narrowing down specific products

**OR Logic**
- **Behavior**: Products match ANY selected option
- **Example**: Red OR Blue = products that are either red or blue (or both)
- **Best for**: Expanding search results

#### Filter Dependencies:

**Conditional Filters**
- **Purpose**: Show certain filters only when others are selected
- **Example**: Show "Size" filter only when "Clothing" category is selected
- **Setup**: Define parent-child relationships between filters

**Auto-Hide Empty Options**
- **Behavior**: Hide filter options that would return zero results
- **Example**: If no red products are in stock, hide "Red" option
- **Benefits**: Prevents customer frustration with zero results

### Performance Optimization

#### Lazy Loading
- **Purpose**: Load filter options only when needed
- **Benefits**: Faster initial page load
- **Trade-off**: Slight delay when expanding filters

#### Caching Strategy
- **Auto-cache**: Filter options are cached for faster loading
- **Update frequency**: Cache refreshes when products change
- **Manual refresh**: Use Cache Manager to force immediate updates

---

## Mobile Optimization

### Mobile-Specific Settings

`[SCREENSHOT: Mobile filter display options]`

#### Mobile Display Options:

**Collapsible Sections**
- **Default**: All filters start collapsed on mobile
- **Expansion**: Tap to expand individual filter sections
- **Benefits**: Saves screen space, reduces scrolling

**Modal Overlay**
- **Trigger**: "Filters" button opens full-screen modal
- **Content**: All filters in easily scrollable format
- **Apply**: Changes take effect when modal is closed

**Slide-out Panel**
- **Trigger**: Swipe or button reveals filter panel from side
- **Behavior**: Slides over content, doesn't push it
- **Dismissal**: Tap outside or swipe to close

#### Touch-Friendly Elements:

**Larger Touch Targets**
- **Size**: Minimum 44px for easy tapping
- **Spacing**: Adequate space between options
- **Feedback**: Visual feedback on tap/selection

**Gesture Support**
- **Swipe**: Navigate between filter sections
- **Pinch**: Zoom on complex filters like size charts
- **Tap-hold**: Quick access to filter details

---

## Testing and Validation

### Preview Mode

Before saving changes, use the preview functionality:

1. Click **"Preview"** button
2. View appears in new tab/window
3. Test filter behavior with sample products
4. Check mobile responsiveness
5. Verify filter interactions

`[SCREENSHOT: Preview mode showing filter in action]`

### A/B Testing Filters

**Test Different Configurations**:
- Compare collapsed vs expanded default states
- Test different maximum value limits
- Evaluate slider vs list for price filters
- Measure customer engagement with different display names

**Metrics to Monitor**:
- **Filter usage rates**: Which filters are used most
- **Conversion rates**: Do filtered searches convert better
- **Bounce rates**: Do filters help or hurt engagement
- **Mobile vs desktop**: Different behavior on different devices

---

## Common Filter Configurations

### Recommended Settings by Store Type

#### Fashion/Apparel Stores:
- **Size**: Required, single-select, custom order (XS, S, M, L, XL)
- **Color**: Multi-select, color swatches, show product count
- **Brand**: Multi-select, sort by popularity, max 15 displayed
- **Price**: Slider display, automatic ranges
- **Category**: Subcategories only, 2 levels deep

#### Electronics Stores:
- **Brand**: Single-select, alphabetical, show all brands
- **Price**: List display, custom ranges ($0-100, $100-500, etc.)
- **Features**: Multi-select, text list, AND logic
- **Rating**: 3 stars & up default
- **Stock**: In stock only

#### Home & Garden:
- **Category**: All descendants, 3 levels deep
- **Price**: Slider, automatic ranges
- **Material**: Multi-select, text list
- **Color**: Multi-select, color swatches when available
- **Size/Dimensions**: Custom field, specific to product type

### Performance Recommendations:

**For Large Catalogs (1000+ products)**:
- Limit filter options to 20 or fewer per filter
- Use lazy loading for better performance
- Consider pagination for filter results
- Enable auto-hide for empty options

**For Small Catalogs (Under 100 products)**:
- Show all available options
- Use expanded default states
- Enable product counts for all filters
- Consider fewer filter types to avoid over-filtering

---

## Troubleshooting Filter Issues

### Common Problems and Solutions

#### Filter Not Appearing on Storefront

**Possible Causes**:
1. Filter is set to "Hidden" - Check visibility toggle
2. No products match filter criteria - Add products or adjust settings
3. Category mismatch - Verify filter is configured for correct category
4. Cache issues - Clear cache in Cache Manager

**Solution Steps**:
1. Go to **Edit Filter** screen
2. Verify **Visible** toggle is ON
3. Check **Category** assignment
4. Save changes and clear cache
5. Test on storefront in private/incognito browser

#### Filter Options Missing Values

**Possible Causes**:
1. Products don't have required custom fields populated
2. Maximum display limit is too low
3. Products are out of stock (if stock filter is enabled)
4. Recent product changes haven't been indexed

**Solution Steps**:
1. Check product data in BigCommerce admin
2. Increase **Maximum Values** setting
3. Run product sync from **Manage Indexes**
4. Verify product visibility settings

#### Filter Performance Issues

**Symptoms**:
- Slow loading when applying filters
- Browser freezing with large catalogs
- Mobile performance problems

**Solutions**:
1. Reduce maximum displayed options
2. Enable lazy loading
3. Use collapsed default state
4. Consider fewer active filters
5. Clear and rebuild cache

---

## Best Practices Summary

### User Experience:
- ✅ Use customer-friendly filter names
- ✅ Show product counts for transparency
- ✅ Limit options to prevent overwhelming customers
- ✅ Test on mobile devices regularly
- ✅ Provide clear visual feedback for selections

### Performance:
- ✅ Monitor filter usage with analytics
- ✅ Regular cache maintenance
- ✅ Optimize for your most common customer paths
- ✅ Test with realistic product data
- ✅ Balance functionality with load times

### Maintenance:
- ✅ Review filter performance monthly
- ✅ Update custom field mappings when products change
- ✅ Test after major product catalog updates
- ✅ Monitor customer feedback and behavior
- ✅ Keep filter options current and relevant

---

**Next Steps**: After configuring your individual filters, move on to [Chapter 6: Keyword Management](./06-keywords.md) to optimize your search functionality with suggested keywords.

---

*Need help with filter configuration? Contact our support team through the app dashboard for personalized assistance.*