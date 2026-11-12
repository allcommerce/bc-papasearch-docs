# AI Shopping Assistant

The AI Shopping Assistant adds an **Ask AI** button to the search box on your storefront. Shoppers can ask questions in their own words, such as *"gears under $10"* or *"which one is cheaper?"*, and get a short answer with product cards from your catalog. They can compare products, ask follow-up questions, and add a product to the cart from the chat.

The assistant is available on AI plans (Starter AI, Growth AI, Scale AI and Ultra AI).

To open it, click **AI Shopping Assistant** on the [Dashboard](02-dashboard.md).

---

## Turn It On or Off

Use the **Enable AI Shopping Assistant** switch at the top of the page, then click **Save**. The setting applies to the channel selected at the top of the app. Turn it off at any time to remove the **Ask AI** button from your storefront.

The assistant also pauses on its own when your plan is no longer active, or when your monthly tokens run out and pay-as-you-go is off or has reached its Monthly Limit.

**Cancel** restores the last saved settings; **Back to Dashboard** returns to the Dashboard.

---

## Usage This Cycle

| Field | What it shows |
|---|---|
| **Tokens used this cycle** | AI tokens included in your plan that the assistant has used in the current billing cycle |
| **Token allowance** | Monthly tokens included in your plan |
| **Tokens remaining** | Monthly tokens left this cycle |
| **Estimated messages left** | About how many more messages your monthly tokens cover (one message uses about 2,700 tokens) |
| **Pay-as-you-go this cycle** | Tokens used after your monthly tokens ran out, and what they cost |
| **Resets on** | When your monthly tokens start again |

Monthly tokens included in each plan:

| Plan | Monthly AI tokens | About |
|---|---|---|
| Starter AI | 5,400,000 | 2,000 messages |
| Growth AI | 16,000,000 | 5,900 messages |
| Scale AI | 40,000,000 | 14,800 messages |
| Ultra AI | 80,000,000 | 29,600 messages |

---

## Pay-as-you-go: AI Token Add-on

When your monthly tokens run out, the assistant can keep answering through the **AI Token Add-on**. It works like the other add-ons on the [Plans & Pricing](10-plans-pricing.md#add-ons-management) page:

- Turn it on with the switch in **Plans & Pricing › Add-ons**. Click **Manage in Pricing › Add-ons** on the AI page to get there.
- **Price:** $0.75 per 1M tokens, charged to your wallet in blocks of 1M tokens as they are used.
- **Monthly Limit:** the most the add-on can cost in one billing cycle (default $10). When the next block would go over the limit, the assistant stops answering until your next cycle or until you raise the limit. Set it to 0 to stop pay-as-you-go without turning the add-on off.
- If your wallet balance is too low for a block, the charge is tried again the next hour. [Top up your wallet](10-plans-pricing.md#wallet-management) to keep it going.
- Usage and cost start again at 0 each billing cycle.

---

## Monthly Usage

The **Monthly usage** table lists, per calendar month (UTC), the messages the assistant answered, the tokens it used and the AI Token Add-on charges. Statistics start from November 2026; earlier usage was not recorded.

The same figures also appear as **AI messages** and **AI tokens** in **Usage Statistics** on the Plans & Pricing page, and as **AI tokens** in **This month's usage** on the Dashboard.

---

## Chat Experience

- **Greeting message**: the first message shoppers see. Leave it empty to use *"Hi! What are you looking for today?"*.
- **Suggested prompts 1–3**: example questions shown when a shopper opens the chat. Shoppers see only the prompts you fill in; leave all three empty to use the defaults shown in grey.

The **Shopper preview** next to the settings shows the chat as shoppers will see it.

---

## Message Limits

Optionally lower how many messages the assistant accepts on this channel:

- **Messages per shopper per 10 minutes** (system maximum 60)
- **Messages per store per hour** (system maximum 600)

You can only go below the limits set by the app.

---

## Good to Know

- Answers are written by AI and can be wrong. The chat window always shows *"AI-generated answers may be inaccurate. Please check the product page before buying."*
- The assistant only answers from your catalog: product names, prices, descriptions, SKUs and stock status. It does not see orders, carts or customer accounts.
- See our [Privacy Policy](https://papathemes.com/privacy-policy/) for what the assistant processes and how long it is kept.
