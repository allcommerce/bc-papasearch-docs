---
title: Schedule Black Friday Merchandising in BigCommerce
description: A BFCM 2026 checklist for BigCommerce with PapaSearch. Schedule boost and pin rules for Black Friday (Nov 27) and Cyber Monday (Nov 30) in advance.
---

# Schedule Black Friday Merchandising in BigCommerce

Black Friday 2026 is **Friday, November 27**, and Cyber Monday is **Monday, November 30**. With PapaSearch, you can build your sale rules now, give them a start and end time, and let them switch on and off by themselves.

This checklist uses the rule **Schedule** in [Chapter 15: Merchandising](../15-merchandising.md#schedule-a-rule) together with a few store settings worth checking before the weekend.

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1rem 0;">
  <iframe src="https://www.youtube.com/embed/UpPdfLjTL-I" title="Merchandising for BigCommerce: Boost, Bury or Hide Products" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
</div>

## How a scheduled rule works

Every merchandising rule has an optional **Schedule** card with two fields:

| Field | What it does |
|---|---|
| **Start** | The rule turns on at this date and time. Leave it empty to start right away. |
| **End** | The rule turns off at this date and time. Leave it empty to keep it running until you pause it. |

The details that matter for a sale:

- **Times are in your store's time zone**, shown under the fields, for example *Times are in your time zone (America/New_York)*.
- **End must be after Start.** A time that does not exist, or happens twice, on the day clocks change for daylight saving is not accepted; pick a time an hour earlier or later.
- **It runs on time without you.** The rule starts and stops on your storefront by itself. There is no need to save again or clear the cache.
- **The Active switch still counts.** A rule runs only while it is switched on **and** the current time is between Start and End. A paused rule does not start on its start date, and the editor warns you, for example *This rule is paused. It won’t start on Nov 20, 2026, 9:00 AM unless you turn it on.*
- **You can preview it early.** The **Preview** shows a rule that is not running yet as if it were, with the note *This rule isn’t running right now (see Schedule)*.

## BFCM 2026 setup checklist

Work through these steps early enough to preview every rule, then check the store settings in the next section.

1. **List your sale products** and the searches and category pages shoppers will use to find them.
2. **Create a Boost rule for each key search.** In **Merchandising → Add rule**, choose **Search keyword**, enter the keyword (for example `gift`), choose **Boost** with strength **High**, and add the sale products. Tick **Keep this order** if you want them in a set order.
3. **Pin your hero products.** For a product that must be #1 on a search or category page, use a **Pin** rule with up to 20 products and a position for each.
4. **Bury or hide what should not compete.** Use **Bury** for items you do not want on top that weekend, or **Hide** for products that should not appear at all.
5. **Set the Schedule.** For a rule covering the whole weekend, set **Start** to Friday, November 27, 2026 and **End** after Cyber Monday, November 30, 2026, at the times you choose in your store's time zone. For separate Black Friday and Cyber Monday offers, make two rules with their own dates; **Duplicate** in the **⋯** menu saves time.
6. **Check that each rule is switched on.** A scheduled rule that is paused will not start.
7. **Preview every rule.** Open each rule and read the Preview with the not-running note. Confirm pinned products show **Pinned at #N**, or read the reason they are not shown.
8. **Check the rules list.** Scheduled rules show **Starts Nov 27** next to their name. Use the **Status** filter (**Active**, **Scheduled**, **Ended**, **Paused**) to review them together.
9. **After the sale**, ended rules show **Ended** in the list and do not run again. Change or clear **End** to reuse one next year, or delete it.

## Store settings to check before the weekend

### Show out-of-stock products last

Popular sale items sell out. In **Settings → Products → Stock**, **Show out-of-stock products last** lists in-stock products first and out-of-stock products after them, each group in the sort order the shopper chose. It is off by default, and it has no effect while **Hide out-of-stock products from search results** is on.

It also interacts with your rules: out-of-stock products stay at the end even when boosted, and an out-of-stock pinned product is not pinned. So a sold-out hero product does not keep the top spot.

### Best Selling and Top Rated sorting

Shoppers can choose **Best Selling** or **Top Rated** in the **Sort by** menu. You can also make either one the default in **Settings → Search**, with separate settings for category browsing and for search results.

- **Best Selling** uses each product's lifetime total sold, refreshed periodically. It may lag very recent orders.
- **Top Rated** puts the highest average star rating first; products without reviews come last.

When a shopper picks one of these sorts, that sort comes first: boosts only break ties, and pins apply only to the default **Relevance** sort. If your sale relies on pins, keep **Relevance** as the default for search results.

### Ad and email traffic lands on real results

Since version 1.14.0, tracking parameters added to links, such as `gclid`, `fbclid` and `utm_` parameters, are ignored by PapaSearch, so shoppers arriving from Google, Facebook or an email campaign no longer see **No products found**. The parameters stay in the address bar for your analytics. If your links carry other parameters that are not filters, list them under **Excluded query parameters** in Settings.

## FAQ

### What time zone does the Schedule use?

Your store's time zone. It is shown under the Start and End fields in the rule editor.

### Do I need to be online when the sale starts?

No. A scheduled rule starts and stops on your storefront on time by itself, with no save or cache clear needed.

### Can I check a Black Friday rule before it starts?

Yes. The Preview shows a not-yet-running rule as if it were running, with a note pointing to the Schedule.

### I set a Start date but the rule did not run. Why?

The rule was probably paused. A rule runs only when its **Active** switch is on and the current time is between Start and End.

### Will a sold-out product stay pinned at #1?

Not if **Show out-of-stock products last** is on. In that case an out-of-stock pinned product is not pinned, and boosted out-of-stock products stay at the end.

**Read next:** [Pin, boost, bury and hide products](bigcommerce-merchandising-pin-boost-hide.md) for how each action works, and [Chapter 9: Settings](../09-settings.md) for the stock and sort options.
