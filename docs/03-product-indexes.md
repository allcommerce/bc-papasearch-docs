# Chapter 3: Product Index Management

The Product Index Management page is where you control which products are searchable in your store and manage the synchronization process. This chapter explains every feature and function on this important page.

## Accessing Product Index Management

From the Dashboard, click the **"Manage Indexes"** button (green button with database icon).

`[SCREENSHOT: Dashboard with Manage Indexes button highlighted]`

---

## Page Overview

The Product Index Management page contains several key sections:

`[SCREENSHOT: Full Product Index Management page showing all sections]`

### Page Header
- **Page title**: "Manage Indexes"
- **Back to Dashboard button**: Returns you to the main dashboard
- **Last sync information**: Shows when products were last updated

---

## Main Action Buttons

### Top Action Bar

`[SCREENSHOT: Top action bar with all main buttons]`

#### 1. Back to Dashboard Button
- **Location**: Top left
- **Icon**: Arrow back icon
- **Function**: Returns to main dashboard
- **When to use**: When you're done managing indexes

#### 2. Delete All Products Button
- **Location**: Top center
- **Color**: Red
- **Icon**: Trash icon
- **Function**: Removes ALL products from the search index
- **⚠️ Warning**: This action cannot be undone!

`[SCREENSHOT: Delete All Products button highlighted]`

**When to use Delete All:**
- Starting fresh with a completely new catalog
- Troubleshooting search issues
- Major store restructuring

**How to use Delete All:**
1. Click the "Delete All Products" button
2. A confirmation dialog will appear
3. Type "DELETE" in the confirmation box
4. Click "Confirm Delete"
5. Wait for the process to complete

`[SCREENSHOT: Delete All confirmation dialog]`

#### 3. Reindex All Products Button
- **Location**: Top center-right
- **Color**: Blue
- **Icon**: Sync icon
- **Function**: Completely rebuilds the search index from scratch
- **Time**: Can take 30-120 minutes for large catalogs

`[SCREENSHOT: Reindex All button highlighted]`

**When to use Reindex All:**
- First-time setup
- After major product changes
- If search results seem outdated
- Monthly maintenance

**How to use Reindex All:**
1. Click "Reindex All Products"
2. Choose sync options in the dialog
3. Click "Start Reindex"
4. Monitor progress on the page

`[SCREENSHOT: Reindex All dialog with options]`

#### 4. Sync New & Modified Button
- **Location**: Top right
- **Color**: Green
- **Icon**: Refresh icon
- **Function**: Only syncs products that have changed since last sync
- **Time**: Usually 2-15 minutes

`[SCREENSHOT: Sync New & Modified button highlighted]`

**When to use Sync New & Modified:**
- Daily/weekly updates
- After adding new products
- After editing existing products
- Regular maintenance

---

## Search and Filter Controls

### Product Search Bar

Located below the main buttons, you'll find search and filter controls:

`[SCREENSHOT: Search and filter controls section]`

#### Search Input Field
- **Purpose**: Find specific products in your index
- **Location**: Left side of the search bar
- **Placeholder**: "Search products..."

**How to search:**
1. Type product name, SKU, or keyword
2. Press Enter or click the search button
3. Results will filter in the table below

#### Items Per Page Dropdown
- **Purpose**: Control how many products show per page
- **Options**: Usually 10, 25, 50, 100
- **Default**: 25

`[SCREENSHOT: Items per page dropdown showing options]`

**How to change items per page:**
1. Click the dropdown
2. Select desired number
3. Page will refresh with new results

---

## Product Index Table

The main table shows all your indexed products with detailed information:

`[SCREENSHOT: Product index table with sample products]`

### Table Columns

#### 1. Checkbox Column
- **Purpose**: Select multiple products for batch operations
- **Location**: Far left column
- **Function**: Check to select products

`[SCREENSHOT: Table with checkboxes highlighted]`

#### 2. Product Name Column
- **Content**: Full product name as it appears in BigCommerce
- **Sortable**: Click header to sort alphabetically
- **Searchable**: Included in search results

#### 3. SKU Column
- **Content**: Product SKU/identifier
- **Sortable**: Click header to sort
- **Purpose**: Unique product identification

#### 4. Price Column
- **Content**: Product price in store currency
- **Sortable**: Click header to sort by price
- **Format**: Displays with currency symbol

#### 5. Status Column
- **Content**: Current indexing status of the product
- **Types**: Indexed, Not Indexed, Outdated, Indexing, Not in Channel

`[SCREENSHOT: Status column showing different status types with color coding]`

**Status Meanings:**
- **🟢 Indexed**: Product is fully searchable
- **🔴 Not Indexed**: Product not in search index
- **🟡 Outdated**: Product changed since last index
- **🔵 Indexing**: Currently being processed
- **⚪ Not in Channel**: Product not available in current channel

#### 6. Last Modified Column
- **Content**: When the product was last updated in BigCommerce
- **Format**: Date and time
- **Purpose**: Shows if product might need reindexing

#### 7. Date Indexed Column
- **Content**: When the product was last indexed for search
- **Format**: Date and time
- **Purpose**: Compare with Last Modified to see if update needed

#### 8. Actions Column
- **Content**: Individual product action buttons
- **Functions**: Reindex single product, Delete single product

`[SCREENSHOT: Actions column showing individual action buttons]`

### Individual Product Actions

#### Reindex Single Product Button
- **Icon**: Sync icon
- **Color**: Blue
- **Function**: Reindexes just this one product
- **When to use**: After editing a specific product

**How to reindex single product:**
1. Find the product in the table
2. Click the blue sync icon in Actions column
3. Wait for confirmation message

#### Delete Single Product Button
- **Icon**: Trash icon
- **Color**: Red
- **Function**: Removes just this product from search index
- **When to use**: To remove discontinued products from search

**How to delete single product:**
1. Find the product in the table
2. Click the red trash icon in Actions column
3. Confirm deletion in popup dialog

---

## Bulk Operations

### Selecting Multiple Products

To perform operations on multiple products:

1. **Select individual products**: Check boxes next to desired products
2. **Select all on page**: Check the header checkbox
3. **Select all matching search**: Use "Select All" option if available

`[SCREENSHOT: Multiple products selected with checkboxes]`

### Bulk Action Buttons

When products are selected, additional buttons appear:

`[SCREENSHOT: Bulk action buttons appearing after product selection]`

#### Reindex Selected Button
- **Appears**: When products are selected
- **Color**: Blue
- **Function**: Reindexes all selected products
- **Time**: Depends on number of products selected

#### Delete Selected Button
- **Appears**: When products are selected
- **Color**: Red
- **Function**: Removes selected products from index
- **⚠️ Warning**: Cannot be undone

**How to use bulk operations:**
1. Select desired products using checkboxes
2. Click the appropriate bulk action button
3. Confirm action in dialog
4. Wait for operation to complete

---

## Pagination and Navigation

### Pagination Controls

At the bottom of the product table:

`[SCREENSHOT: Pagination controls at bottom of table]`

#### Elements:
- **Page numbers**: Click to jump to specific page
- **Previous/Next arrows**: Navigate one page at a time
- **First/Last buttons**: Jump to beginning or end
- **Page info**: Shows "Showing X to Y of Z products"

#### How to navigate:
1. Click page numbers to jump to specific pages
2. Use arrow buttons for step-by-step navigation
3. Change "Items per page" to see more/fewer products

---

## Sync Progress Monitoring

### Active Sync Indicator

When a sync operation is running, you'll see:

`[SCREENSHOT: Active sync progress bar and status]`

#### Progress Elements:
- **Progress bar**: Shows percentage complete
- **Status message**: Describes current sync step
- **Product count**: Shows "X of Y products processed"
- **Estimated time**: Remaining time (if available)
- **Cancel button**: Option to stop sync if needed

#### Sync Steps You Might See:
1. **"Fetching products from BigCommerce"**
2. **"Processing product data"**
3. **"Updating search index"**
4. **"Generating embeddings"** (for AI search)
5. **"Sync complete"**

### Completed Sync Information

After sync completes:

`[SCREENSHOT: Completed sync status showing results]`

#### Completion Elements:
- **Success message**: Confirms sync finished
- **Products processed**: Total number updated
- **Time taken**: How long sync took
- **Last sync timestamp**: When this sync completed
- **Errors encountered**: Any issues during sync

---

## Understanding Product Status

### Status Details and Actions

#### 🟢 Indexed Products
- **Meaning**: Fully searchable and up-to-date
- **Action needed**: None
- **Best practice**: Monitor for changes

#### 🔴 Not Indexed Products
- **Meaning**: Not in search database
- **Possible reasons**: New product, sync failed, product disabled
- **Action needed**: Run sync or check product settings

#### 🟡 Outdated Products
- **Meaning**: Product changed since last index
- **Action needed**: Reindex to update search data
- **How to fix**: Use "Sync New & Modified" or individual reindex

#### 🔵 Indexing Products
- **Meaning**: Currently being processed
- **Action needed**: Wait for completion
- **Time**: Usually 1-5 minutes per product

#### ⚪ Not in Channel Products
- **Meaning**: Product not available in selected channel
- **Action needed**: Check product channel settings or switch channels
- **How to fix**: Enable product for current channel in BigCommerce

---

## Troubleshooting Index Issues

### Common Problems and Solutions

#### Problem: Products not appearing in search
**Possible causes:**
- Product not indexed
- Product disabled in BigCommerce
- Search settings exclude product

**Solutions:**
1. Check product status in index table
2. Reindex the specific product
3. Verify product is enabled in BigCommerce
4. Check search score settings

#### Problem: Search results outdated
**Possible causes:**
- Product modified but not reindexed
- Cache serving old results

**Solutions:**
1. Run "Sync New & Modified"
2. Clear cache from Cache Manager
3. Check last sync timestamp

#### Problem: Sync fails or takes too long
**Possible causes:**
- Large product catalog
- Server issues
- Network connectivity

**Solutions:**
1. Try smaller batch sizes
2. Check internet connection
3. Contact support for large catalogs (>10k products)
4. Try syncing during off-peak hours

#### Problem: Some products missing from table
**Possible causes:**
- Channel restrictions
- Product visibility settings
- Search filters applied

**Solutions:**
1. Check channel selection
2. Clear any applied search filters
3. Verify product visibility in BigCommerce
4. Check pagination - product might be on another page

---

## Best Practices for Index Management

### Regular Maintenance Schedule

#### Daily (Automated if possible):
- Sync new & modified products
- Check for any failed products
- Monitor sync status

#### Weekly:
- Review outdated products
- Clean up discontinued products
- Check sync performance

#### Monthly:
- Full reindex of all products
- Review product performance in search
- Optimize based on search analytics

### Performance Optimization

#### For Large Catalogs (>5,000 products):
1. Schedule syncs during low-traffic hours
2. Use incremental syncs instead of full reindex
3. Monitor server resources during sync
4. Consider breaking large operations into batches

#### For Small Catalogs (<1,000 products):
1. Full reindex is usually quick and safe
2. Can sync more frequently
3. Real-time updates are more feasible

### Data Quality Tips

1. **Keep BigCommerce data clean**: Accurate product info improves search
2. **Use consistent naming**: Helps with search relevance
3. **Maintain good SKUs**: Useful for tracking and debugging
4. **Regular price updates**: Keep pricing current in search
5. **Product descriptions**: Rich descriptions improve AI search quality

---

## Advanced Features

### Filter by Status

You can filter the product table by status:

`[SCREENSHOT: Status filter dropdown in table]`

1. Click the status filter dropdown
2. Select desired status (Indexed, Not Indexed, etc.)
3. Table will show only products with that status
4. Use "All" to remove filter

### Export Product Data

Some implementations may include export functionality:

`[SCREENSHOT: Export button if available]`

1. Select products (or use filters)
2. Click "Export" button
3. Choose export format (CSV, Excel)
4. Download file with product index data

### Sync Scheduling

Advanced users may have access to scheduled sync options:

`[SCREENSHOT: Scheduled sync settings if available]`

1. Set regular sync intervals
2. Choose optimal times for sync
3. Configure automatic retry on failure
4. Set notification preferences

---

## Integration with Other Features

### Relationship to Other Pages

#### Filter Customization:
- Products must be indexed to appear in filters
- Changes to products may affect filter options
- Reindexing updates filter data

#### Keyword Management:
- Search keywords work better with fully indexed products
- Product names and descriptions feed into keyword suggestions

#### Analytics:
- Search analytics depend on indexed products
- Product performance tracking requires current index

---

**Product Index Mastery Complete!** 📊

You now understand how to manage your product search index effectively, ensuring customers can find exactly what they're looking for.

---

[← Back to Dashboard](./02-dashboard.md) | [Next: Filter Customization →](./04-customize-filters.md)