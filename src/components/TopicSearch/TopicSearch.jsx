import React, { useEffect, useMemo, useState } from 'react';
import TOPICS from '../../data/topics';
import TopicCard from './TopicCard';
import './topic-search.css';


function useDebouncedValue(value, delay = 250){
const [debounced, setDebounced] = useState(value);
useEffect(() => {
const id = setTimeout(() => setDebounced(value), delay);
return () => clearTimeout(id);
}, [value, delay]);
return debounced;
}


export default function TopicSearch() {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebouncedValue(query, 200);


    const filtered = useMemo(() => {
        const q = debouncedQuery.trim().toLowerCase();
        if (!q) return TOPICS;
        return TOPICS.filter(t => t.name.toLowerCase().includes(q));
    }, [debouncedQuery]);


    return (
        <main className="ts-container">
            <h1 className="ts-title">TOTLE — Topic Catalogue</h1>


            <div className="ts-toolbar">
                <label htmlFor="topic-search" className="sr-only">Search topics</label>
                <input
                    id="topic-search"
                    className="ts-input"
                    placeholder="Search topics (e.g. thermo)"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    aria-label="Search topics by name"
                    type="search"
                    autoComplete="off"
                />
                {query && (
                    <button
                        className="ts-clear"
                        aria-label="Clear search"
                        onClick={() => setQuery('')}
                        title="Clear"
                    >
                        ✕
                    </button>
                )}
                <div className="ts-count" aria-hidden>{filtered.length} topics</div>
            </div>


            <section className="ts-grid" aria-live="polite">
                {filtered.length > 0 ? (
                    filtered.map(t => (
                        <TopicCard key={t.id} topic={t} query={debouncedQuery} />
                    ))
                ) : (
                    <div className="ts-empty">
                        <strong>No topics found</strong>
                        <div style={{ marginTop: 8 }}>Try another keyword or clear the search.</div>
                    </div>
                )}
            </section>
        </main>
    );
}