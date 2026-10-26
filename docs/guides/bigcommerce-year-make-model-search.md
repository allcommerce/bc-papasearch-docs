---
title: Year / Make / Model Parts Finder for BigCommerce
description: Add a Year / Make / Model parts finder to BigCommerce with PapaSearch. CSV format, daily Source URL import, 5-vehicle garage and selector placement.
---

# Year / Make / Model Parts Finder for BigCommerce

PapaSearch Vehicle Fitment adds a Year / Make / Model selector to your BigCommerce storefront and narrows search results, category pages and filter counts to the products that fit the vehicle the shopper picked.

This guide covers who it suits, the CSV format and the setup. For every setting in detail, see [Chapter 14: Vehicle Fitment](../14-vehicle-fitment.md).

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1rem 0;">
  <iframe src="https://www.youtube.com/embed/DO_bBfWWrbI" title="Vehicle Fitment for BigCommerce: step-by-step" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
</div>

## Who a Year / Make / Model finder is for

The vehicle levels are simply the columns of your CSV file, 2 to 5 of them, in the order shoppers choose them. So the same feature works for:

- **Auto and truck parts** — the classic `Year`, `Make`, `Model`, with an optional `Submodel` or `Engine` column for finer matching.
- **Powersports and marine parts** — the same idea for motorcycles, ATVs, boats and engines.
- **Equipment and machinery parts** — levels such as `Brand`, `Machine`, `Model` instead of a year.

The read-only **Fitment levels** line in Settings shows the columns from your last import, for example "Year › Make › Model".

## How the fitment CSV works

Your file needs a header row. The rules are short but strict:

- **The first column is always `sku`.** It must match the SKU of a product or a variant in your store. SKUs that match nothing are reported as "unmatched" in the import report.
- **Then 2 to 5 vehicle columns**, in the order shoppers pick them.
- **One row per vehicle a SKU fits.** A SKU can have as many rows as it needs; all rows for the same SKU are combined.
- **Year ranges.** A year can be a single value (`2019`) or a range written `first-last` (`2015-2017`). A range expands to every year in it.
- **Universal fit.** Put `*` in the first vehicle column and leave the rest of the row blank to say a SKU fits every vehicle.
- **Blank trailing cells.** Leaving the last cell(s) blank means "fits everything at that level and below". A gap in the middle of a row is not allowed, and that row is rejected.

```csv
sku,Year,Make,Model
BRAKE-KIT-01,2015-2017,Ford,F-150
BRAKE-KIT-02,2019,Ford,
UNIVERSAL-OIL-FILTER,*,,
```

In this example, `BRAKE-KIT-01` fits the Ford F-150 from 2015 to 2017, `BRAKE-KIT-02` fits every 2019 Ford model, and the oil filter fits every vehicle.

### Limits and errors

- Up to **500,000** vehicle rows per file, and up to **20 MB**.
- Up to **5%** of rows may be invalid (a bad year, a missing SKU, a malformed row). They are skipped and listed under **File errors** with the line number and reason; the rest imports.
- If more than 5% of rows are invalid, **the whole file is rejected** and nothing is imported, so you never end up with a half-applied file.

!!! warning "Each import replaces your whole fitment catalog"
    A new file does not merge with the previous one. A SKU that is missing from the new file no longer has fitment applied. Always upload the complete list.

## Set up the parts finder

1. From the PapaSearch Dashboard, click **Vehicle Fitment**.
2. Click **Download sample CSV** to see the exact format, then prepare your file with the rules above.
3. Drag your file into the upload area and click **Import**. When it finishes, a report shows rows processed, vehicles found, matched and unmatched SKUs and products updated.
4. Open **Settings → Vehicle fitment** and turn on **Enable vehicle fitment**.
5. Choose **Vehicle selector placement**: **Above product list** (the default), **Top of filter sidebar**, or **Both**. On phones, the sidebar lives in the filter drawer, so a vehicle bar still shows above the product list.
6. Choose **Products without fitment data**: **Hide** (the default) shows only products that fit the selected vehicle; **Show** keeps products with no fitment data visible, which suits stores where only part of the catalog is vehicle-specific.
7. Set the **Landing page** shoppers go to after picking a vehicle. It defaults to your search results page (`/search.php`).
8. Optionally, rename what shoppers read in **Storefront text**: the selector prompt, the "Find parts" button, the garage label and so on.
9. To show the selector on your home page or a landing page, open BigCommerce **Page Builder**, add an **HTML** widget and paste:

    ```html
    <div data-papasearch-vehicle-selector></div>
    ```

    Save and publish. You can add it to more than one page; every copy shares the same garage.

## Keep fitment data current with a Source URL

Instead of uploading by hand, set a **Source URL** in the Vehicle fitment settings. PapaSearch fetches the file **once a day, around 07:00 UTC**, and imports it like a manual upload, replacing the previous catalog.

- The URL must start with `https://`.
- If the file has not changed since the last fetch, nothing is re-processed.
- The same 500,000-row and 20 MB limits apply.
- Leave the field empty to manage fitment only through manual uploads.

## The garage: up to 5 saved vehicles

Shoppers can save up to **5 vehicles** in their garage, labeled "My vehicles" by default (you can rename it in **Storefront text**). The active vehicle stays applied as they browse, and the page address includes it, so a shared link opens with the same vehicle selected.

The garage is stored in the shopper's browser. It is not tied to a customer account, so it does not follow the shopper to another device or browser.

## FAQ

### Can I use columns other than Year, Make and Model?

Yes. After `sku` you can have 2 to 5 vehicle columns, named by your header row, for example `Brand`, `Machine`, `Model`.

### What happens to products I never put in the fitment file?

That depends on **Products without fitment data**. With **Hide**, they disappear once a shopper selects a vehicle. With **Show**, they stay visible alongside the fitted products.

### Does a new import add to my existing fitment data?

No. Every import, manual or from the Source URL, replaces the whole fitment catalog. Include every SKU you want fitment for in each file.

### Why are some of my SKUs listed as unmatched?

They matched no product or variant SKU in your store at import time. Check the **Unmatched SKUs** sample in the import report.

### Why is the vehicle selector not showing on my home page?

Check that **Enable vehicle fitment** is on and that the page has the `data-papasearch-vehicle-selector` HTML widget. The selector does not appear on pages without it.

**Read next:** [Chapter 14: Vehicle Fitment](../14-vehicle-fitment.md) for the full reference, and [Pin, boost, bury and hide products](bigcommerce-merchandising-pin-boost-hide.md) to control which parts show first.
