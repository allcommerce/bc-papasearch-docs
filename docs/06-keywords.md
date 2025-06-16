# Chapter 6: Keyword Management

Keyword management is crucial for optimizing your store's search experience. This chapter covers how to manage suggested keywords that appear as customers type, helping them find products more easily and improving your search conversion rates.

---

## Understanding Keywords in Search

### What Are Suggested Keywords?

Suggested keywords are search terms that appear as customers type in your search box, helping them:
- Find products faster with autocomplete suggestions
- Discover related products they might not have considered
- Reduce typos and search errors
- Navigate your catalog more efficiently

`[SCREENSHOT: Search box showing suggested keywords dropdown]`

### Types of Keywords

The app manages three types of keywords:

1. **Popular Keywords**: Most frequently searched terms by customers
2. **Manual Keywords**: Keywords you add manually for strategic purposes
3. **Auto-Generated Keywords**: Keywords extracted from your product data

---

## Accessing Keyword Management

### From Dashboard
1. Click **Dashboard** in the main navigation
2. Click the **"Suggested Keywords"** button (hashtag icon)
3. You'll see the main keyword management interface

`[SCREENSHOT: Dashboard with Suggested Keywords button highlighted]`

### Direct Navigation
- Use the left sidebar menu to access **Keywords** section
- Page loads with current keyword data and management tools

---

## Keyword Management Interface

### Overview Section

The top of the page shows key statistics:

`[SCREENSHOT: Keyword statistics overview section]`

#### Key Metrics:
- **Total Keywords**: Number of active keywords in your system
- **Manual Keywords**: Keywords you've added manually
- **Auto Keywords**: Keywords generated from product data
- **Popular Keywords**: Most searched terms by customers
- **Last Updated**: When keyword data was last refreshed

### Main Action Buttons

Located at the top of the keyword table:

`[SCREENSHOT: Main keyword action buttons]`

#### Add Manual Keywords
- **Purpose**: Add specific keywords you want to promote
- **Use case**: Seasonal terms, brand names, product categories
- **Best practice**: Add 10-20 high-value keywords initially

#### Extract Keywords
- **Purpose**: Automatically generate keywords from your product catalog
- **Source**: Product names, descriptions, categories, and brands
- **Recommendation**: Run monthly to capture new products

#### Delete Tracking Keywords
- **Purpose**: Remove low-quality or irrelevant search terms
- **Target**: Misspellings, inappropriate searches, or outdated terms
- **Caution**: Use carefully to avoid removing valuable data

---

## Adding Manual Keywords

### Step-by-Step Process

1. Click **"Add Manual Keywords"** button
2. A modal dialog appears for keyword entry
3. Enter keywords and configure settings
4. Save to activate immediately

`[SCREENSHOT: Add Manual Keywords dialog box]`

### Keyword Entry Methods

#### Single Keyword Addition
- **Format**: Enter one keyword per line
- **Example**:
  - "wireless headphones"
  - "gaming laptop"
  - "summer dresses"

#### Bulk Keyword Import
- **Format**: Paste multiple keywords separated by commas or new lines
- **Example**: "iPhone case, Samsung phone, wireless charger, USB cable"
- **Limit**: Up to 100 keywords per import

#### CSV Import
- **Format**: Upload CSV file with keywords and optional settings
- **Columns**: Keyword, Weight, Category (optional)
- **Use case**: Large keyword lists from external tools

### Keyword Configuration Options

#### Weight/Priority Setting
- **Purpose**: Control how prominently keywords appear in suggestions
- **Scale**: 1-10 (10 = highest priority)
- **Default**: 5 (medium priority)
- **Strategy**: Set 8-10 for your most important product categories

`[SCREENSHOT: Keyword weight/priority slider]`

#### Category Association
- **Purpose**: Show keywords only for specific product categories
- **Options**:
  - All Categories (default)
  - Specific category selection
  - Multiple category selection
- **Use case**: "running shoes" only for Sports category

#### Keyword Type Selection
- **Manual**: Keywords you control completely
- **Promoted**: Boost existing keywords from customer searches
- **Seasonal**: Keywords active only during specific periods

---

## Automatic Keyword Extraction

### Extraction Process

The app can automatically generate keywords from your existing product data:

`[SCREENSHOT: Keyword extraction configuration screen]`

### Data Sources for Extraction

#### Product Names
- **Extracts**: Individual words and phrases from product titles
- **Example**: "Apple iPhone 13 Pro Max" → "Apple", "iPhone", "iPhone 13", "Pro Max"
- **Benefits**: Captures exact product terminology customers use

#### Product Descriptions
- **Extracts**: Key phrases and descriptive terms
- **Filters**: Common words (the, and, or) are excluded
- **Example**: "Waterproof Bluetooth speaker" → "waterproof", "Bluetooth", "speaker"

#### Category Names
- **Extracts**: Category and subcategory names
- **Hierarchy**: Includes parent and child category relationships
- **Example**: "Electronics > Audio > Headphones" → all three terms

#### Brand Names
- **Extracts**: All brand names from your product catalog
- **Automatic**: Updates when you add products with new brands
- **Priority**: Brands typically get higher weights automatically

#### Custom Fields
- **Extracts**: Data from product custom fields
- **Common fields**: Color, Size, Material, Style
- **Configuration**: Choose which custom fields to include

### Extraction Settings

#### Minimum Frequency
- **Purpose**: Only extract terms that appear multiple times
- **Range**: 1-10 occurrences
- **Recommendation**: Set to 2-3 for quality control
- **Example**: Extract "wireless" only if it appears in 3+ products

#### Keyword Length
- **Minimum**: Exclude very short words (1-2 characters)
- **Maximum**: Exclude very long phrases (50+ characters)
- **Optimal**: 3-25 characters work best for most searches

#### Language Filtering
- **Purpose**: Extract keywords only in your store's primary language
- **Auto-detection**: App identifies language automatically
- **Manual override**: Specify language if auto-detection is incorrect

### Running Extraction

1. Click **"Extract Keywords"** button
2. Configure extraction settings in the modal
3. Select data sources (product names, descriptions, etc.)
4. Set minimum frequency and length requirements
5. Click **"Start Extraction"**
6. Monitor progress with the progress bar
7. Review extracted keywords before activating

`[SCREENSHOT: Keyword extraction progress screen]`

---

## Managing Existing Keywords

### Keyword Table Interface

The main table shows all your keywords with management options:

`[SCREENSHOT: Keyword management table with all columns]`

#### Table Columns:

**Keyword**
- **Content**: The actual search term
- **Clickable**: Click to edit keyword details
- **Format**: Displays exactly as customers will see it

**Type**
- **Popular**: High-frequency customer searches
- **Manual**: Keywords you added manually
- **Auto**: Generated from product data
- **Icons**: Visual indicators for each type

**Search Count**
- **Meaning**: Number of times customers searched for this term
- **Period**: Usually last 30 days
- **Trend**: Up/down arrows show if searches are increasing

**Results Count**
- **Meaning**: Number of products found for this keyword
- **Zero results**: Red warning if no products match
- **High results**: Green indicator for good keyword coverage

**Weight/Priority**
- **Scale**: 1-10 priority level
- **Editable**: Click to change priority directly
- **Visual**: Bar chart showing relative importance

**Status**
- **Active**: Keyword is live and appearing in suggestions
- **Inactive**: Keyword is paused but settings preserved
- **Pending**: Recently added, activation in progress

**Actions**
- **Edit**: Modify keyword settings
- **Delete**: Remove keyword permanently
- **View Results**: See products that match this keyword

### Bulk Operations

#### Select Multiple Keywords
- **Method**: Use checkboxes to select multiple keywords
- **Limit**: Up to 50 keywords per bulk operation
- **Actions**: Delete, activate, deactivate, or change priority

`[SCREENSHOT: Bulk keyword selection interface]`

#### Bulk Actions Available:
- **Activate All**: Turn on selected keywords
- **Deactivate All**: Turn off selected keywords
- **Delete Selected**: Remove multiple keywords at once
- **Export**: Download selected keywords as CSV
- **Change Priority**: Set same priority for multiple keywords

### Filtering and Sorting

#### Filter Options:
- **By Type**: Show only Popular, Manual, or Auto keywords
- **By Status**: Active, Inactive, or Pending keywords
- **By Results**: Keywords with/without matching products
- **By Search Count**: High-traffic vs low-traffic keywords

#### Sort Options:
- **Alphabetical**: A-Z or Z-A by keyword
- **Popularity**: Most to least searched
- **Results**: Most to least matching products
- **Priority**: Highest to lowest weight
- **Recent**: Most recently added or modified

---

## Keyword Analytics and Optimization

### Performance Metrics

#### Search Analytics
Track how your keywords are performing:

`[SCREENSHOT: Keyword analytics dashboard]`

**Key Performance Indicators:**
- **Click-through Rate**: How often suggested keywords are clicked
- **Conversion Rate**: Sales from keyword-driven searches
- **Zero-Result Rate**: Percentage of keywords with no matching products
- **Suggestion Frequency**: How often keywords appear in suggestions

#### Popular vs Manual Keywords
- **Popular keywords**: Based on actual customer behavior
- **Manual keywords**: Your strategic additions
- **Comparison**: Track which type performs better for your store
- **Balance**: Aim for 70% popular, 30% manual keywords

### Optimization Strategies

#### Identifying High-Value Keywords

**High Search, High Results**
- **Status**: Excellent keywords to promote
- **Action**: Increase priority/weight
- **Example**: "wireless headphones" with 500+ searches, 50+ products

**High Search, Low Results**
- **Status**: Opportunity to add more products
- **Action**: Source products for these popular searches
- **Example**: "blue running shoes" with 200 searches, 2 products

**Low Search, High Results**
- **Status**: Potential for growth
- **Action**: Promote these keywords more prominently
- **Example**: "ergonomic office chair" with 10 searches, 30+ products

#### Seasonal Keyword Management

**Adding Seasonal Keywords**
- **Timing**: Add 2-4 weeks before peak season
- **Examples**: "Christmas gifts", "back to school", "summer sale"
- **Priority**: Set high priority during active season

**Removing Outdated Keywords**
- **Review**: Monthly review of keyword performance
- **Criteria**: Remove keywords with no searches for 90+ days
- **Archive**: Keep data for next year's seasonal planning

---

## Advanced Keyword Features

### Keyword Synonyms and Variations

#### Synonym Management
- **Purpose**: Handle different ways customers search for same products
- **Example**: "sofa" = "couch" = "sectional"
- **Setup**: Link related keywords to show same results

#### Spelling Variations
- **Auto-handling**: App automatically handles common misspellings
- **Manual additions**: Add specific misspellings common to your products
- **Example**: "jewelery" → "jewelry", "recieve" → "receive"

### Multi-Language Support

#### Language Detection
- **Automatic**: App detects customer's language preference
- **Manual**: Customers can select language in search interface
- **Keywords**: Maintain keyword lists for each supported language

#### Translation Integration
- **Source**: Use product translations for keyword generation
- **Consistency**: Ensure keywords match product language
- **Maintenance**: Update translations when products change

---

## Integration with Search Results

### How Keywords Affect Search

#### Search Suggestion Priority
1. **Exact matches**: Keywords that exactly match typed text
2. **Partial matches**: Keywords containing the typed text
3. **Fuzzy matches**: Keywords similar to typed text
4. **Weighted priority**: Higher weight keywords appear first

#### Search Result Influence
- **Boosting**: Products matching high-priority keywords rank higher
- **Filtering**: Keywords can pre-filter results by category
- **Personalization**: Keywords adapt based on customer history

### Testing Keyword Effectiveness

#### A/B Testing Keywords
- **Method**: Test different keyword sets with different customer segments
- **Metrics**: Track conversion rates, click-through rates, time on site
- **Duration**: Run tests for at least 2 weeks for statistical significance

#### Keyword Impact Analysis
- **Before/After**: Compare search performance before and after keyword changes
- **Segmentation**: Analyze keyword performance by customer type, device, time
- **ROI**: Calculate revenue impact of keyword optimization efforts

---

## Troubleshooting Keyword Issues

### Common Problems

#### Keywords Not Appearing in Suggestions

**Possible Causes:**
1. **Keyword is inactive** - Check status in keyword table
2. **Weight too low** - Increase priority/weight setting
3. **Cache issues** - Clear cache in Cache Manager
4. **No matching products** - Verify products exist for keyword

**Solution Steps:**
1. Go to **Keywords** page
2. Find the keyword in the table
3. Check **Status** column (should be "Active")
4. Verify **Results Count** is greater than 0
5. Increase **Weight** to 7 or higher
6. Clear cache and test

#### Poor Search Results for Keywords

**Possible Causes:**
1. **Keyword too broad** - "shoes" returns too many unrelated results
2. **Keyword too specific** - "red leather running shoes size 9" too narrow
3. **Product data issues** - Products not properly tagged or categorized
4. **Index outdated** - Products changed but search index not updated

**Solution Steps:**
1. Review product data for keyword matches
2. Run product sync from **Manage Indexes**
3. Adjust keyword specificity
4. Consider adding category filters
5. Test with different keyword variations

#### Keyword Extraction Not Working

**Possible Causes:**
1. **No product data** - Products missing descriptions or titles
2. **Language mismatch** - Extraction settings don't match product language
3. **Frequency threshold too high** - Minimum occurrence set too high
4. **Data source not selected** - Forgot to select product names/descriptions

**Solution Steps:**
1. Verify products have rich descriptions and titles
2. Check extraction language settings
3. Lower minimum frequency to 1-2
4. Select all relevant data sources
5. Run extraction again

---

## Best Practices for Keyword Management

### Strategic Keyword Planning

#### Research Customer Language
- **Method**: Monitor customer support queries for product terminology
- **Tools**: Use Google Analytics search data from your website
- **Survey**: Ask customers how they would search for your products
- **Competitor analysis**: See what keywords competitors target

#### Keyword Hierarchy
- **Broad keywords**: "electronics", "clothing", "home decor"
- **Category keywords**: "smartphones", "dresses", "kitchen appliances"
- **Specific keywords**: "iPhone 13 case", "summer maxi dress", "coffee maker"
- **Balance**: Include all levels for comprehensive coverage

### Maintenance Schedule

#### Weekly Tasks:
- ✅ Review new popular keywords from customer searches
- ✅ Check for zero-result keywords and address issues
- ✅ Monitor keyword performance metrics

#### Monthly Tasks:
- ✅ Run keyword extraction for new products
- ✅ Review and update seasonal keywords
- ✅ Analyze keyword conversion rates
- ✅ Clean up low-performing keywords

#### Quarterly Tasks:
- ✅ Complete keyword strategy review
- ✅ Benchmark against competitor keywords
- ✅ Plan seasonal keyword campaigns
- ✅ Review and update keyword weights

### Quality Control

#### Keyword Quality Checklist:
- ✅ **Relevant**: Keywords match actual products in your store
- ✅ **Customer-friendly**: Use language customers naturally use
- ✅ **Specific enough**: Not too broad to be useful
- ✅ **Current**: Remove outdated products or seasonal terms
- ✅ **Balanced**: Mix of popular and strategic keywords

#### Regular Audits:
- **Zero-result keywords**: Review monthly and fix or remove
- **Duplicate keywords**: Consolidate similar terms
- **Inactive keywords**: Remove keywords with no recent searches
- **Competitor keywords**: Ensure coverage of competitor brand names (where legal)

---

## Integration with Other Features

### Keywords and Filters
- **Synergy**: Keywords work with filters to narrow search results
- **Example**: "running shoes" keyword + "Size" filter + "Brand" filter
- **Optimization**: Ensure popular keywords have relevant filter options

### Keywords and Analytics
- **Tracking**: Monitor which keywords drive the most sales
- **Attribution**: Track customer journey from keyword to purchase
- **ROI**: Calculate return on investment for keyword optimization efforts

### Keywords and Cache
- **Performance**: Popular keywords are cached for faster suggestions
- **Updates**: Clear cache when making major keyword changes
- **Monitoring**: Watch cache hit rates for keyword suggestions

---

**Next Steps**: After optimizing your keywords, move on to [Chapter 7: User Search Analytics](./07-user-search-keywords.md) to understand how customers are actually searching in your store.

---

*Need help with keyword strategy? Our support team can provide personalized keyword recommendations based on your product catalog and customer behavior.*