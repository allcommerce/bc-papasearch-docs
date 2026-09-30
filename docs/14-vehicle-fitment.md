# Chapter 14: Vehicle Fitment

Let shoppers pick their vehicle and instantly see only the parts and accessories that fit it. Vehicle Fitment adds a Year/Make/Model-style vehicle selector to your storefront and filters search results to match the vehicle a shopper has selected.

---

## What Vehicle Fitment Does

- Shoppers select their vehicle (for example, Year, Make, and Model) from a selector you place anywhere on your site.
- Search results and category/filter pages are narrowed to products that fit the selected vehicle.
- Shoppers can save up to **5 vehicles** in their personal "garage" and switch between them without re-selecting every time.
- You control whether products with no fitment data at all should be hidden or still shown alongside vehicle-specific products.

Vehicle Fitment has two parts you'll set up:

1. **Import your fitment data** — a CSV file mapping your SKUs to the vehicles they fit (Vehicle Fitment page).
2. **Turn it on and configure it** — the **Vehicle fitment** panel on the Settings page, plus placing the vehicle selector widget where you want it.

---

## Step 1: Import Your Fitment Data

1. From your Dashboard, click the **Vehicle Fitment** button.
2. On the Vehicle Fitment page, download the sample file using the **Download sample CSV** link to see the exact format expected.
3. Prepare your own CSV following the [CSV File Format](#csv-file-format) below.
4. Drag and drop your file (or click to browse) into the upload area, then click **Import**.
5. The page shows progress (Queued → Parsing → Comparing → Saving → Updating index → Finalizing) and, once finished, a report with rows processed, vehicles found, matched/unmatched SKUs, products updated, and how long it took. On a routine re-import, the matched/unmatched counts cover only SKUs that are new or changed since the previous import.

!!! warning "⚠️ Each import replaces your entire fitment catalog"
    Importing a new file does **not** merge with the previous one — it fully replaces it. Any SKU that
    was in a previous file but is missing from the new one will no longer have vehicle fitment applied.
    Always include every SKU you want fitment data for in the file you upload.

If some rows in your file are invalid (for example, a typo in a year), they're listed in a **File errors** table with the line number and the reason, and the rest of the valid file is still imported — see [Upload Limits & Error Handling](#upload-limits--error-handling) for when a file is rejected entirely.

---

## CSV File Format

Your file must have a header row. The **first column is always `sku`**, followed by **2 to 5 columns** describing your vehicle, most commonly `Year`, `Make`, and `Model` — you can add more (like `Submodel` or `Engine`) if you need finer matching.

| Column | Example value | Notes |
|---|---|---|
| `sku` | `ABC-123` | Required, first column. Must match a SKU on a product or variant in your store — SKUs that don't match anything are reported as "unmatched" in the import report. |
| `Year` | `2019` or `2015-2017` | A single year, or a **range** written as `first-last` (a range expands to every year in it). |
| `Make` | `Ford` | Any text value. |
| `Model` | `F-150` | Any text value. |
| *(optional extra levels)* | e.g. `Submodel`, `Trim` | Up to 5 vehicle columns total, in the order you want shoppers to choose them. |

**A SKU can have as many rows as it needs** — add one row per vehicle it fits. All rows for the same SKU are combined.

### Universal fit (`*`)

To mark a SKU as fitting **every** vehicle, put `*` in the first vehicle column and leave the rest of that row blank:

```csv
sku,Year,Make,Model
UNIVERSAL-OIL-FILTER,*,,
```

### Fitting a whole line (blank trailing cells)

Leave the **last** cell(s) of a row blank to mean "fits everything at that level and below." For example, this row means the product fits **every 2019 Ford model**, not just one:

```csv
sku,Year,Make,Model
BRAKE-KIT-01,2019,Ford,
```

A blank cell followed by a filled-in cell (a gap in the **middle** of a row) is not allowed and that row is rejected — only trailing cells can be left blank.

---

## Upload Limits & Error Handling

- **File size:** up to **20MB**, whether uploaded manually or pulled automatically from a URL (see below).
- **Rows:** up to **500,000** vehicle rows per file.
- **Error tolerance:** up to **5%** of rows in the file may be invalid (bad year, missing SKU, malformed row, etc.) — those rows are skipped and listed as errors, while the rest of the file still imports normally.
- **If more than 5% of rows are invalid, the entire file is rejected** — nothing is imported, so you never end up with a half-applied file. Fix the reported rows and re-upload.

---

## Step 2: Turn On Vehicle Fitment

Go to **Settings** and open the **Vehicle fitment** panel:

- **Enable vehicle fitment** — turns on the vehicle selector and vehicle-based search filtering for your storefront. Turn this on once you've imported your fitment file.
- **Fitment levels** — read-only, shows the vehicle columns from your last import (for example "Year › Make › Model"). It updates automatically the next time you import; there's nothing to configure here directly.
- **Landing page** — the page shoppers are sent to after picking a vehicle in the selector widget (see below). Defaults to your search results page (`/search.php`).
- **Products without fitment data** — see [Hide or Show Unfitted Products](#hide-or-show-unfitted-products).
- **Vehicle selector placement** — where the vehicle selector appears on search and category pages:
    - **Above product list** (default) — a vehicle bar above the sort and view controls.
    - **Top of filter sidebar** — a vehicle block at the top of the filters, styled like a filter group. On phones the filter sidebar lives in the filter drawer, so a vehicle bar is still shown above the product list.
    - **Both** — the bar above the product list and the block in the filter sidebar.
- **Source URL** — see [Keeping Fitment Data Up To Date Automatically](#keeping-fitment-data-up-to-date-automatically).
- **Storefront text** — customize the wording shoppers see (selector prompt, "Find parts" button, garage label, and so on).

---

## Keeping Fitment Data Up To Date Automatically

Instead of (or in addition to) manually uploading a file, you can point Vehicle Fitment at a **Source URL** — a link to a CSV file in the same format, hosted wherever you maintain your fitment data:

- The URL **must start with `https://`** — plain `http://` links are not accepted, for your data's security.
- The file is fetched automatically **once a day (around 07:00 UTC)** and imported the same way a manual upload is, replacing the previous fitment catalog.
- If the file at that URL hasn't changed since the last fetch, the daily check is a no-op — your server isn't re-downloaded or re-processed unless the content actually changed.
- The same [size and row limits](#upload-limits--error-handling) apply to files pulled from a URL.
- Leave **Source URL** empty to manage fitment data only through manual uploads on the Vehicle Fitment page.

---

## Hide or Show Unfitted Products

Once a shopper has selected a vehicle, what should happen to products that have **no fitment data at all** (never included in any fitment file)? Set this with **Products without fitment data** in the Vehicle fitment settings panel:

- **Hide** (default) — only products that fit the selected vehicle are shown. Choose this if your whole catalog is vehicle-specific.
- **Show** — products with no fitment data are always shown alongside vehicle-fitted products. Choose this if only part of your catalog is vehicle-specific (for example, universal accessories you never added to the fitment file) and you don't want them to disappear when a vehicle is selected.

---

## Adding the Vehicle Selector Widget to a Page

The vehicle selector doesn't appear automatically everywhere — you choose where to place it (home page, a landing page, a category page, and so on) using BigCommerce's Page Builder:

1. Open **Page Builder** on the page where you want the selector (for example, your home page).
2. Add an **HTML** widget where you want the selector to appear.
3. Paste the following into the widget's HTML content:

    ```html
    <div data-papasearch-vehicle-selector></div>
    ```

4. Save and publish the page.

The widget renders a vehicle selector using your configured fitment levels (Year, Make, Model, etc.). When a shopper picks a vehicle, it's saved to their garage and they're taken to your configured **Landing page** with that vehicle already applied.

You can add this widget to more than one page — every instance shares the same shopper garage.

---

## The "Garage" — Saved Vehicles

Shoppers can save up to **5 vehicles** in their garage (labeled "My vehicles" by default — customizable in **Storefront text**). This lets returning shoppers, or shoppers managing more than one vehicle, switch their active vehicle without re-entering it from scratch. The active vehicle stays selected as they browse your store until they change or clear it — search and category pages are filtered by it automatically, and the page address includes the vehicle, so a shared link opens with the same vehicle selected.

The garage is saved in the shopper's browser. It is not tied to their customer account, so it does not follow them to another device or browser.

---

## Troubleshooting

**Vehicle selector isn't showing up on a page**

- Confirm **Enable vehicle fitment** is turned on in Settings.
- If you see a message that the PapaSearch script isn't installed, the selector will appear automatically once it is — no action needed on your end beyond waiting for the next sync.
- Confirm you've added the `<div data-papasearch-vehicle-selector></div>` widget to that page (it doesn't appear on pages without it).

**Search results aren't filtering by vehicle**

- Make sure you've imported a fitment file — until you do, **Fitment levels** in Settings shows "Upload a fitment file first."
- Check the **Products without fitment data** setting — with **Show** selected, unfitted products will keep appearing even with a vehicle selected, which is expected.

**Products I expect to match are missing**

- Check the **Unmatched SKUs** sample in your last import report — those SKUs didn't match any product or variant in your store at the time of import.
- Remember that importing a new file **replaces** the previous one; confirm the SKU is included in your most recent file.

**Automatic daily updates from my Source URL aren't applying**

- Confirm the URL starts with `https://` and is publicly reachable.
- Confirm the file is within the [size and row limits](#upload-limits--error-handling).
- Check the Vehicle Fitment page for the report of the most recent import, whether triggered manually or automatically.

---

**Related:** [Customize Filters](./04-customize-filters.md) for general filter behavior, and [Settings](./09-settings.md) for the rest of your store's search configuration.
