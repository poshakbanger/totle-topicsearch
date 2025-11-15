import React from 'react';

export default function TopicCard({ topic, query = '' }) {
    // optional: highlight matched substring in name
    const name = topic.name;
    const q = query.trim();
    if (!q) {
        return (
            <article className="ts-card" tabIndex={0} aria-label={`${name}, ${topic.category}`}>
                <div className="ts-name">{name}</div>
                <div className="ts-cat">{topic.category}</div>
            </article>
        );
    }


    // case-insensitive highlight
    const idx = name.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) {
        return (
            <article className="ts-card" tabIndex={0} aria-label={`${name}, ${topic.category}`}>
                <div className="ts-name">{name}</div>
                <div className="ts-cat">{topic.category}</div>
            </article>
        );
    }


    const before = name.slice(0, idx);
    const match = name.slice(idx, idx + q.length);
    const after = name.slice(idx + q.length);


    return (
        <article className="ts-card" tabIndex={0} aria-label={`${name}, ${topic.category}`}>
            <div className="ts-name">
                {before}<span className="ts-highlight">{match}</span>{after}
            </div>
            <div className="ts-cat">{topic.category}</div>
        </article>
    );
}