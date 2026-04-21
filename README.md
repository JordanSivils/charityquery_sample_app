# Charity API Sample App

See the Docs at https://www.charityquery.com/

This is a fully working example frontend for the Charity API.

It demonstrates:
- Filtering across all supported fields
- Multi-select and multi-value queries
- Dynamic field selection (`fields` parameter)
- Pagination and sorting
- A complete request → response → table workflow

This project is intended to be cloned and used as a starting point.

---

## 🚀 Getting Started

### 1. Clone the repo

```bash 
git clone https://github.com/your-username/your-repo.git

cd your-repo

npm install
```

### 2. Add .env.local file to the root of the project, and add these two variables: 
- BASE_URL=https://api.charityquery.com
- API_KEY=your_api_key_here

### 3. Run the app

```bash
npm run dev
```
open your browser to http://localhost:3000

## How it works

1. draftFilters hold the query in state but do not call the api
2. appliedFilters are what calls the API when you click Apply Filters

### Query builder

Filters are converted into query parameters:
1. Multi-value filters convert an array of similar filters into repeated params for the api to handle
    - ntee_code: ['W30', 'D20'] => ntee_code=W30&ntee_code=D20

2. Fields are the SQL SELECT wrapper. The are submitted in a CSV format
    - fields=ein,name,city,state,ntee_code
    - The data table renders based on the fields query. 

## Data Fetching

- All data is fetched with a server action.
    - These files are denoted with a "use server" directive at the top of the file.
    - This keeps your API key secure and avoids needing a proxy route.

## Features
- Multi-select filters (NTEE, status, etc.)
- Multi-input filters (city, zip)
- Numeric range filters (assets, income, revenue)
- Combined filters (subsection + classification)
- Dynamic column rendering based on fields
- Sorting + pagination
- Server-side API requests

## Notes
- This is a reference implementation, not production-ready
- UI is intentionally simple to keep focus on API usage
- Error handling is minimal!