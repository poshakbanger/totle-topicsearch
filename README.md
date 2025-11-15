TOTLE — TopicSearch

Frontend Developer Intern — Round 1 (Coding Submission)

This project implements the TopicSearch component required for TOTLE’s Catalogue Management System test.
It includes a search input, topic cards, filtering functionality, clean UI, accessibility support, and a short explanation video.

### Features

# Search & Filter

Real-time search filtering (case-insensitive).
Debounced input for smoother performance.
Shows “No topics found” when there are no matches.

# UI

Clean responsive layout using CSS Grid.
Highlighted matched text in topic names.
Clear “X” button to reset search.
Topic count indicator.

# Code Quality

Separated components.
Debounce hook.
Memoized filtering using useMemo.

# Project Structure

totle-topicsearch/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  └─ TopicSearch/
│  │      ├─ TopicSearch.jsx
│  │      ├─ TopicCard.jsx
│  │      └─ topic-search.css
│  ├─ data/
│  │  └─ topics.js
│  ├─ App.js
│  ├─ index.js
│  ├─ index.css
│  └─ setupTests.js
├─ video-explanation.mp4
└─ README.md

### Setup Instuctions

1. Make a folder name "totleapp"
2. Open folder in vs code using "cd totleapp".
3. Create react app Run "npx create-react-app totleapp"
4. Make components folder and data folder under src folder.
5. In components folder made "TopicSearch" directory and under this directory make "topic-search.css" for css code, "TopicCard.jsx" for topics cards (each with name and category) and "TopicSearch.jsx" file for topics filteration.
6. Make "data" folder under this make "topics.js", under this make list of Topics.
7. Use "npm start" to run the code.

Github Repository Link-
https://github.com/poshakbanger/totle-topicsearch
