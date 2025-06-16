# Chapter 2: Dashboard Overview

The Dashboard is the main control center of your Semantic Search & Filters App. This chapter will explain every element, button, and feature you'll find on the Dashboard.

## Dashboard Layout

When you first open the app, you'll see the Dashboard with several key sections:

`[SCREENSHOT: Full dashboard view showing all sections and buttons]`

---

## Header Section

### Store Information Display

At the top of the Dashboard, you'll see:

1. **App Title**: "PapaSearch" with the home icon
2. **Navigation Links**: Documentation and Support links
3. **Subscription Info**: Your current plan and wallet balance

`[SCREENSHOT: Header section showing app title, navigation links, and subscription info]`

#### Subscription Information Panel
This section shows:
- **Current Plan**: Your active subscription plan name
- **Next Billing**: Date of your next payment
- **Wallet Balance**: Available credits (shown in green if sufficient, red if low)
- **Plans & Pricing**: Button to manage your subscription

`[SCREENSHOT: Subscription panel with plan details and wallet balance highlighted]`

---

## Channel Selection

### Channel Dropdown

Right below the header, you'll find the **Channel Selection** dropdown:

1. **Purpose**: Choose which storefront/channel to manage
2. **Location**: Center of the page, below the title
3. **Default**: Usually set to your main storefront

`[SCREENSHOT: Channel selection dropdown showing available channels]`

#### How to Change Channels:
1. Click the dropdown arrow
2. Select the desired channel from the list
3. The page will refresh to show data for that channel

---

## Main Action Buttons

The Dashboard contains several large, colorful buttons for core functions:

### Top Row - Core Product Management

#### 1. Customize Filters Button
- **Icon**: Filter list icon
- **Color**: Blue
- **Function**: Opens the filter customization page
- **When to use**: To modify which filters appear on your storefront

`[SCREENSHOT: Customize Filters button highlighted]`

#### 2. Manage Indexes Button
- **Icon**: Database icon
- **Color**: Green
- **Function**: Opens the product index management page
- **When to use**: To sync products and manage your search database

`[SCREENSHOT: Manage Indexes button highlighted]`

#### 3. Suggested Keywords Button
- **Icon**: Hashtag icon
- **Color**: Orange
- **Function**: Opens keyword management for search suggestions
- **When to use**: To add, remove, or manage search keywords

`[SCREENSHOT: Suggested Keywords button highlighted]`

### Second Row - Analytics and User Data

#### 4. User Search Keywords Button
- **Icon**: User with hashtag icon
- **Color**: Purple
- **Function**: Shows what customers are actually searching for
- **When to use**: To analyze customer search behavior

`[SCREENSHOT: User Search Keywords button highlighted]`

#### 5. Cache Manager Button
- **Icon**: Gauge/speedometer icon
- **Color**: Teal
- **Function**: Opens cache management for performance optimization
- **When to use**: To clear cache or monitor performance

`[SCREENSHOT: Cache Manager button highlighted]`

### Bottom Row - Configuration and Account

#### 6. Settings Button
- **Icon**: Gear icon
- **Color**: Gray
- **Function**: Opens app configuration settings
- **When to use**: To configure search behavior and theme integration

`[SCREENSHOT: Settings button highlighted]`

#### 7. Plans & Pricing Button
- **Icon**: Receipt icon
- **Color**: Yellow
- **Function**: Opens subscription and billing management
- **When to use**: To upgrade plans or manage billing

`[SCREENSHOT: Plans & Pricing button highlighted]`

#### 8. Billing Info Button
- **Icon**: User icon
- **Color**: Blue
- **Function**: Opens billing information form
- **When to use**: To update payment and contact details

`[SCREENSHOT: Billing Info button highlighted]`

#### 9. Order History Button
- **Icon**: Receipt icon
- **Color**: Green
- **Function**: Shows past transactions and invoices
- **When to use**: To review payment history

`[SCREENSHOT: Order History button highlighted]`

---

## Status Indicators and Information Panels

### Sync Status Section

Below the main buttons, you'll see a sync status area:

`[SCREENSHOT: Sync status section showing current sync state]`

#### Elements in Sync Status:
1. **Last Sync Information**: When your products were last indexed
2. **Sync Progress Bar**: Shows current sync status if running
3. **Product Count**: Total products indexed vs. total in store
4. **Sync Actions**: Buttons to start new sync operations

#### Sync Action Buttons:

**Start Full Sync Button**
- **Purpose**: Indexes all products from scratch
- **When to use**: First setup or major catalog changes
- **Time**: Can take 10-60 minutes depending on catalog size

`[SCREENSHOT: Start Full Sync button]`

**Sync New & Modified Button**
- **Purpose**: Only syncs products that have changed
- **When to use**: Regular updates after initial sync
- **Time**: Usually takes 1-10 minutes

`[SCREENSHOT: Sync New & Modified button]`

### Script Installation Status

This section shows whether the frontend script is properly installed:

`[SCREENSHOT: Script status section showing installed/not installed state]`

#### Script Status Indicators:
- **Green checkmark**: Script is installed and active
- **Red X**: Script is not installed or inactive
- **Install Script button**: Appears when script needs installation
- **Remove Script button**: Appears when script is installed

#### Install Script Process:
1. Click the **"Install Script"** button
2. A modal will appear asking which channel to install to
3. Click **"Install"** in the modal
4. Wait for confirmation message
5. Status should change to "Installed"

`[SCREENSHOT: Install script modal dialog]`

---

## Understanding Button States

### Active vs. Disabled Buttons

Some buttons may appear disabled (grayed out) under certain conditions:

#### When Buttons are Disabled:
- **No products synced yet**: Some features require initial sync
- **Sync in progress**: Certain actions blocked during sync
- **Plan limitations**: Some features require higher-tier plans

`[SCREENSHOT: Example of disabled buttons with tooltip explanations]`

#### How to Enable Disabled Buttons:
1. Complete required setup steps (like initial sync)
2. Wait for current operations to finish
3. Upgrade plan if features are plan-restricted

---

## Quick Actions and Shortcuts

### Keyboard Shortcuts (if available)
- **Ctrl/Cmd + R**: Refresh dashboard data
- **Esc**: Close any open modals

### Quick Status Checks
- **Green indicators**: Everything working properly
- **Yellow indicators**: Attention needed but not critical
- **Red indicators**: Action required for proper function

---

## Real-time Updates

The Dashboard automatically updates:
- **Sync progress**: Updates every few seconds during sync
- **Product counts**: Refreshes when sync completes
- **Status indicators**: Update in real-time

### Manual Refresh
If data seems outdated:
1. Refresh your browser page
2. Check internet connection
3. Look for any error messages

---

## Common Dashboard Tasks

### Daily Tasks
1. **Check sync status**: Ensure products are up to date
2. **Review any alerts**: Look for red or yellow indicators
3. **Monitor performance**: Check if cache needs clearing

### Weekly Tasks
1. **Run incremental sync**: Update changed products
2. **Review user search data**: Check what customers are searching for
3. **Update keywords**: Add new suggested keywords if needed

### Monthly Tasks
1. **Full product sync**: Complete reindex of all products
2. **Review analytics**: Analyze search trends
3. **Plan evaluation**: Consider if current plan meets needs

---

## Troubleshooting Dashboard Issues

### Common Problems and Solutions

**Problem**: Dashboard won't load
- **Solution**: Check internet connection and refresh page
- **Solution**: Clear browser cache and cookies
- **Solution**: Try different browser

**Problem**: Buttons don't respond
- **Solution**: Wait for current operations to complete
- **Solution**: Check if sync is running in background
- **Solution**: Refresh the page

**Problem**: Data looks outdated
- **Solution**: Manually refresh the browser
- **Solution**: Check if sync is needed
- **Solution**: Verify store connection

**Problem**: Can't see all features
- **Solution**: Complete initial setup steps
- **Solution**: Check plan limitations
- **Solution**: Ensure script is installed

---

## Dashboard Best Practices

### For New Users
1. **Complete setup wizard**: Follow all initial setup steps
2. **Install script first**: This enables frontend functionality
3. **Run initial sync**: Index your products before testing
4. **Test on storefront**: Verify everything works on your live store

### For Regular Use
1. **Monitor sync status**: Keep products updated
2. **Check user searches**: Understand customer behavior
3. **Maintain keywords**: Keep search suggestions relevant
4. **Clear cache periodically**: Maintain performance

### For Troubleshooting
1. **Check status indicators**: Look for red or yellow warnings
2. **Review sync logs**: Understand any sync issues
3. **Test storefront**: Verify customer-facing functionality
4. **Contact support**: Use in-app support for complex issues

---

## Next Steps from Dashboard

From the Dashboard, you can navigate to:

1. **[Product Index Management](./03-product-indexes.md)** - Manage your product database
2. **[Filter Customization](./04-customize-filters.md)** - Configure product filters
3. **[App Settings](./09-settings.md)** - Configure app behavior
4. **[Keyword Management](./06-keywords.md)** - Manage search suggestions

---

**Dashboard Mastery Complete!** 🎯

You now understand every element of the Dashboard and how to use it effectively to manage your search functionality.

---

[← Back to Installation](./01-installation-setup.md) | [Next: Product Index Management →](./03-product-indexes.md)