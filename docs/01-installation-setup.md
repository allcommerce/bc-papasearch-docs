# Chapter 1: App Installation & Setup

This chapter will guide you through installing the BigCommerce Semantic Search & Filters App and getting it properly configured on your store.

## Prerequisites

Before you begin, make sure you have:
- **Store admin access** to your BigCommerce store
- **Store owner or staff** permissions
- An **active BigCommerce subscription** (Starter, Standard, Plus, Pro, or Enterprise)

---

## Step 1: Installing the App from BigCommerce Marketplace

### 1.1 Access the BigCommerce App Marketplace

1. **Log into your BigCommerce store admin panel**
   - Go to your store's admin URL (usually: `https://store-[your-hash].mybigcommerce.com/manage`)
   - Enter your username and password

   `[SCREENSHOT: BigCommerce login page with username and password fields highlighted]`

2. **Navigate to the Apps section**
   - In the left sidebar menu, click on **"Apps"**
   - Click on **"Marketplace"** from the dropdown menu

   `[SCREENSHOT: BigCommerce admin sidebar showing Apps menu expanded with Marketplace option highlighted]`

### 1.2 Find and Install the App

1. **Search for the app**
   - In the Marketplace search bar, type **"Semantic Search"** or **"PapaSearch"**
   - Press Enter or click the search button

   `[SCREENSHOT: App Marketplace search bar with "Semantic Search" typed in]`

2. **Locate the app**
   - Look for **"BigCommerce Semantic Search & Filters"** in the search results
   - The app should show the PapaThemes logo and description

   `[SCREENSHOT: Search results showing the Semantic Search app with logo and description visible]`

3. **Review app details**
   - Click on the app to view its details page
   - Review the features, pricing, and requirements
   - Check compatibility with your store plan

   `[SCREENSHOT: App details page showing features, pricing, screenshots, and install button]`

4. **Install the app**
   - Click the **"Install"** button (usually blue)
   - A permissions dialog will appear

   `[SCREENSHOT: App permissions dialog showing what access the app requires]`

5. **Accept permissions**
   - Review the permissions the app needs (these are standard for search apps)
   - Click **"Confirm"** or **"Accept & Install"**
   - Wait for the installation to complete (usually 10-30 seconds)

   `[SCREENSHOT: Installation progress screen or success message]`

### 1.3 Access the Installed App

1. **Find the app in your Apps list**
   - Go to **Apps → My Apps** in your BigCommerce admin
   - Look for the Semantic Search app in your installed apps list

   `[SCREENSHOT: My Apps page showing the installed Semantic Search app]`

2. **Launch the app**
   - Click **"Launch"** next to the app name
   - The app will open in a new tab or iframe within BigCommerce

   `[SCREENSHOT: App launch button highlighted]`

---

## Step 2: Initial App Setup and Configuration

### 2.1 First Time Launch

When you first launch the app, you'll see the **Dashboard** with several setup options.

`[SCREENSHOT: Dashboard on first launch showing setup wizard or initial state]`

### 2.2 Store Verification

1. **Automatic store verification**
   - The app will automatically verify your store connection
   - You should see a green checkmark or "Connected" status
   - Your store information will be displayed

   `[SCREENSHOT: Store verification section showing connected status and store details]`

2. **If verification fails**
   - Check your internet connection
   - Refresh the page
   - Contact support if the issue persists

### 2.3 Channel Selection

1. **Select your storefront channel**
   - If you have multiple channels, select the one you want to enable search for
   - Most stores only have one channel (your main storefront)
   - Click the dropdown to see available channels

   `[SCREENSHOT: Channel selection dropdown showing available channels]`

2. **Confirm channel selection**
   - Choose your primary sales channel
   - Click **"Select"** or **"Confirm"**

---

## Step 3: Install the Frontend Script

This is the most important step - installing the script that powers the search functionality on your actual storefront.

### 3.1 Understanding the Script

The frontend script enables:
- Enhanced search functionality in your theme
- Product filtering capabilities
- Real-time search suggestions
- Improved search results display

### 3.2 Automatic Script Installation

1. **Locate the Install Script button**
   - On the Dashboard, look for a button labeled **"Install Script"**
   - This button has a wrench (🔧) icon and is usually blue

   `[SCREENSHOT: Dashboard with Install Script button highlighted]`

2. **Click Install Script**
   - A modal dialog will appear
   - This dialog shows script installation options

   `[SCREENSHOT: Install Script modal dialog showing options]`

3. **Select installation target**
   - Choose the **channel/storefront** where you want to install the script
   - Most users should select their main storefront
   - Click **"Install"**

   `[SCREENSHOT: Script installation dialog with channel selection and install button]`

4. **Wait for installation**
   - The installation process takes 5-15 seconds
   - You'll see a progress indicator
   - A success message will appear when complete

   `[SCREENSHOT: Script installation success message]`

### 3.3 Manual Script Installation (Advanced Users Only)

If automatic installation doesn't work with your theme, you may need manual installation:

1. **Get the script code**
   - Go to **Settings** in the app
   - Scroll to **"Theme Integration"** section
   - Copy the provided script code

   `[SCREENSHOT: Settings page showing script code to copy]`

2. **Add to theme manually**
   - Go to **Storefront → Script Manager** in BigCommerce
   - Click **"Create a Script"**
   - Paste the code and save

   `[SCREENSHOT: BigCommerce Script Manager with create script interface]`

---

## Step 4: Verify Installation

### 4.1 Check Script Status

1. **Verify in the app**
   - Return to the app Dashboard
   - Look for **"Script Status"** section
   - You should see a green checkmark and "Installed" status

   `[SCREENSHOT: Dashboard showing script status as installed]`

2. **Check BigCommerce Script Manager**
   - Go to **Storefront → Script Manager** in BigCommerce admin
   - Look for **"PapaThemes Semantic Search"** script
   - Status should be **"Active"**

   `[SCREENSHOT: BigCommerce Script Manager showing the active semantic search script]`

### 4.2 Test on Your Storefront

1. **Visit your store**
   - Open your storefront in a new browser tab
   - Go to any product category page

   `[SCREENSHOT: Storefront category page with enhanced search and filters visible]`

2. **Test search functionality**
   - Use the search bar to search for a product
   - You should see enhanced search results
   - Look for improved filtering options

   `[SCREENSHOT: Search results page showing enhanced layout and filters]`

3. **Test filters**
   - On a category page, look for filter options in the sidebar
   - Try selecting different filters
   - Products should update automatically

   `[SCREENSHOT: Category page with filters highlighted and product results showing]`

---

## Step 5: Initial Product Indexing

### 5.1 Start First Sync

1. **Access the sync function**
   - In the app Dashboard, look for **"Sync Products"** or **"Start Indexing"** button
   - This button may have a sync (⟲) icon

   `[SCREENSHOT: Dashboard with sync button highlighted]`

2. **Begin product sync**
   - Click the sync button
   - Choose **"Full Sync"** for the first time
   - This will index all your products for search

   `[SCREENSHOT: Sync options dialog showing full sync selected]`

3. **Monitor sync progress**
   - You'll see a progress bar showing indexing status
   - Depending on your catalog size, this may take 5-30 minutes
   - You can leave the page and return later

   `[SCREENSHOT: Sync progress bar showing percentage and estimated time]`

### 5.2 Verify Sync Completion

1. **Check sync status**
   - When complete, you'll see **"Sync Complete"** message
   - The Dashboard will show total indexed products

   `[SCREENSHOT: Dashboard showing sync complete status with product count]`

2. **Test search with your products**
   - Go to your storefront
   - Search for specific products from your catalog
   - Results should appear quickly and accurately

   `[SCREENSHOT: Search results showing your actual products with enhanced display]`

---

## Troubleshooting Installation Issues

### Script Installation Problems

**Problem**: Script installation fails
- **Solution**: Try refreshing the page and installing again
- **Alternative**: Use manual script installation method
- **Contact Support**: If issues persist

**Problem**: Search doesn't work on storefront
- **Solution**: Check that script is active in BigCommerce Script Manager
- **Solution**: Clear your browser cache and try again
- **Solution**: Verify your theme is compatible

### Sync Issues

**Problem**: Product sync fails or takes too long
- **Solution**: Try syncing in smaller batches
- **Solution**: Check your internet connection
- **Solution**: Contact support for large catalogs (>10,000 products)

**Problem**: Some products don't appear in search
- **Solution**: Wait for sync to complete fully
- **Solution**: Check product visibility settings in BigCommerce
- **Solution**: Re-run the sync process

---

## Next Steps

Once installation is complete, you should:

1. **Explore the Dashboard** - [Chapter 2: Dashboard Overview](./02-dashboard.md)
2. **Customize your filters** - [Chapter 4: Filter Customization](./04-customize-filters.md)
3. **Configure app settings** - [Chapter 9: App Settings](./09-settings.md)

---

**Installation Complete!** 🎉

Your BigCommerce Semantic Search & Filters App is now installed and ready to enhance your customers' shopping experience.

---

[← Back to Table of Contents](./index.md) | [Next: Dashboard Overview →](./02-dashboard.md)