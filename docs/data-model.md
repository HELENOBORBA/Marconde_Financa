# Data Model

### Transaction
Table: `transactions`
- `id` (uuid)
- `type` (enum: income, expense)
- `amount` (numeric)
- `description` (text)
- `category_id` (uuid)
- `date` (date)
- `created_at` (timestamp)

### Category
Table: `categories`
- `id` (uuid)
- `name` (text)
- `icon` (text)
- `color` (text)
- `is_default` (boolean)
