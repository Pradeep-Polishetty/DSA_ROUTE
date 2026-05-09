'use client';

import { useState } from 'react';

const phases = [
  {
    id: 1, label: 'Phase 1', title: 'Phase 1 — Foundations',
    desc: 'Master the core building blocks. Arrays, hashing, and binary search cover ~40% of all interview problems.',
    duration: '3–4 weeks',
    topics: [
      { icon: '[ ]', name: 'Arrays & Two Pointers', desc: '// scan from both ends',
        problems: [
          { name: 'Two Sum', url: 'https://leetcode.com/problems/two-sum/', diff: 'easy' },
          { name: 'Best Time to Buy Stock', url: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', diff: 'easy' },
          { name: 'Container With Most Water', url: 'https://leetcode.com/problems/container-with-most-water/', diff: 'med' },
          { name: 'Trapping Rain Water', url: 'https://leetcode.com/problems/trapping-rain-water/', diff: 'hard' },
          { name: '3Sum', url: 'https://leetcode.com/problems/3sum/', diff: 'med' },
        ]},
      { icon: '#', name: 'Hash Maps & Sets', desc: '// O(1) lookups',
        problems: [
          { name: 'Valid Anagram', url: 'https://leetcode.com/problems/valid-anagram/', diff: 'easy' },
          { name: 'Group Anagrams', url: 'https://leetcode.com/problems/group-anagrams/', diff: 'med' },
          { name: 'Longest Consecutive Sequence', url: 'https://leetcode.com/problems/longest-consecutive-sequence/', diff: 'med' },
          { name: 'Top K Frequent Elements', url: 'https://leetcode.com/problems/top-k-frequent-elements/', diff: 'med' },
        ]},
      { icon: '⌇', name: 'Sliding Window', desc: '// expand / shrink',
        problems: [
          { name: 'Longest Substring No Repeat', url: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', diff: 'med' },
          { name: 'Minimum Window Substring', url: 'https://leetcode.com/problems/minimum-window-substring/', diff: 'hard' },
          { name: 'Permutation in String', url: 'https://leetcode.com/problems/permutation-in-string/', diff: 'med' },
          { name: 'Max Subarray (Kadane)', url: 'https://leetcode.com/problems/maximum-subarray/', diff: 'med' },
        ]},
      { icon: '∑', name: 'Prefix Sums', desc: '// cumulative totals',
        problems: [
          { name: 'Range Sum Query', url: 'https://leetcode.com/problems/range-sum-query-immutable/', diff: 'easy' },
          { name: 'Subarray Sum Equals K', url: 'https://leetcode.com/problems/subarray-sum-equals-k/', diff: 'med' },
          { name: 'Product of Array Except Self', url: 'https://leetcode.com/problems/product-of-array-except-self/', diff: 'med' },
        ]},
      { icon: '⬡', name: 'Binary Search', desc: '// O(log n) everywhere',
        problems: [
          { name: 'Binary Search', url: 'https://leetcode.com/problems/binary-search/', diff: 'easy' },
          { name: 'Search in Rotated Array', url: 'https://leetcode.com/problems/search-in-rotated-sorted-array/', diff: 'med' },
          { name: 'Find Minimum in Rotated Array', url: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', diff: 'med' },
          { name: 'Koko Eating Bananas', url: 'https://leetcode.com/problems/koko-eating-bananas/', diff: 'med' },
          { name: 'Median of Two Sorted Arrays', url: 'https://leetcode.com/problems/median-of-two-sorted-arrays/', diff: 'hard' },
        ]},
      { icon: '"', name: 'Strings & Patterns', desc: '// manipulation & search',
        problems: [
          { name: 'Valid Palindrome', url: 'https://leetcode.com/problems/valid-palindrome/', diff: 'easy' },
          { name: 'Longest Palindromic Substring', url: 'https://leetcode.com/problems/longest-palindromic-substring/', diff: 'med' },
          { name: 'Encode / Decode Strings', url: 'https://leetcode.com/problems/encode-and-decode-strings/', diff: 'med' },
        ]},
    ]
  },
  {
    id: 2, label: 'Phase 2', title: 'Phase 2 — Core Data Structures',
    desc: 'Stacks, queues, linked lists, trees, and heaps. These form the skeleton of 60% of medium-level problems.',
    duration: '4–5 weeks',
    topics: [
      { icon: '↕', name: 'Stack & Queue', desc: '// LIFO / FIFO patterns',
        problems: [
          { name: 'Valid Parentheses', url: 'https://leetcode.com/problems/valid-parentheses/', diff: 'easy' },
          { name: 'Min Stack', url: 'https://leetcode.com/problems/min-stack/', diff: 'med' },
          { name: 'Daily Temperatures', url: 'https://leetcode.com/problems/daily-temperatures/', diff: 'med' },
          { name: 'Evaluate RPN', url: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/', diff: 'med' },
        ]},
      { icon: '→', name: 'Linked Lists', desc: '// pointers & reversals',
        problems: [
          { name: 'Reverse Linked List', url: 'https://leetcode.com/problems/reverse-linked-list/', diff: 'easy' },
          { name: 'Linked List Cycle', url: 'https://leetcode.com/problems/linked-list-cycle/', diff: 'easy' },
          { name: 'Merge Two Sorted Lists', url: 'https://leetcode.com/problems/merge-two-sorted-lists/', diff: 'easy' },
          { name: 'Remove Nth From End', url: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', diff: 'med' },
          { name: 'Reorder List', url: 'https://leetcode.com/problems/reorder-list/', diff: 'med' },
          { name: 'Merge K Sorted Lists', url: 'https://leetcode.com/problems/merge-k-sorted-lists/', diff: 'hard' },
        ]},
      { icon: 'T', name: 'Binary Trees', desc: '// DFS & BFS traversals',
        problems: [
          { name: 'Invert Binary Tree', url: 'https://leetcode.com/problems/invert-binary-tree/', diff: 'easy' },
          { name: 'Max Depth of Binary Tree', url: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/', diff: 'easy' },
          { name: 'Level Order Traversal', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/', diff: 'med' },
          { name: 'Lowest Common Ancestor', url: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/', diff: 'med' },
          { name: 'Binary Tree Max Path Sum', url: 'https://leetcode.com/problems/binary-tree-maximum-path-sum/', diff: 'hard' },
          { name: 'Serialize & Deserialize BT', url: 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/', diff: 'hard' },
        ]},
      { icon: 'B', name: 'BST & Tries', desc: '// ordered search trees',
        problems: [
          { name: 'Validate BST', url: 'https://leetcode.com/problems/validate-binary-search-tree/', diff: 'med' },
          { name: 'Kth Smallest in BST', url: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/', diff: 'med' },
          { name: 'Implement Trie', url: 'https://leetcode.com/problems/implement-trie-prefix-tree/', diff: 'med' },
          { name: 'Word Search II', url: 'https://leetcode.com/problems/word-search-ii/', diff: 'hard' },
        ]},
      { icon: '△', name: 'Heaps & Priority Queue', desc: '// min/max ordering',
        problems: [
          { name: 'Kth Largest Element', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/', diff: 'med' },
          { name: 'K Closest Points to Origin', url: 'https://leetcode.com/problems/k-closest-points-to-origin/', diff: 'med' },
          { name: 'Find Median from Data Stream', url: 'https://leetcode.com/problems/find-median-from-data-stream/', diff: 'hard' },
          { name: 'Task Scheduler', url: 'https://leetcode.com/problems/task-scheduler/', diff: 'med' },
        ]},
    ]
  },
  {
    id: 3, label: 'Phase 3', title: 'Phase 3 — Graphs & Dynamic Programming',
    desc: 'The hardest conceptual leap. Graphs and DP together account for 40–50% of hard-level interview questions.',
    duration: '5–6 weeks',
    topics: [
      { icon: 'G', name: 'Graph BFS / DFS', desc: '// traversal & exploration',
        problems: [
          { name: 'Number of Islands', url: 'https://leetcode.com/problems/number-of-islands/', diff: 'med' },
          { name: 'Clone Graph', url: 'https://leetcode.com/problems/clone-graph/', diff: 'med' },
          { name: 'Pacific Atlantic Water Flow', url: 'https://leetcode.com/problems/pacific-atlantic-water-flow/', diff: 'med' },
          { name: 'Word Ladder', url: 'https://leetcode.com/problems/word-ladder/', diff: 'hard' },
        ]},
      { icon: '↻', name: 'Topological Sort', desc: '// dependency ordering',
        problems: [
          { name: 'Course Schedule', url: 'https://leetcode.com/problems/course-schedule/', diff: 'med' },
          { name: 'Course Schedule II', url: 'https://leetcode.com/problems/course-schedule-ii/', diff: 'med' },
          { name: 'Alien Dictionary', url: 'https://leetcode.com/problems/alien-dictionary/', diff: 'hard' },
        ]},
      { icon: '◻', name: '1D Dynamic Programming', desc: '// linear subproblems',
        problems: [
          { name: 'Climbing Stairs', url: 'https://leetcode.com/problems/climbing-stairs/', diff: 'easy' },
          { name: 'House Robber', url: 'https://leetcode.com/problems/house-robber/', diff: 'med' },
          { name: 'Coin Change', url: 'https://leetcode.com/problems/coin-change/', diff: 'med' },
          { name: 'Longest Increasing Subsequence', url: 'https://leetcode.com/problems/longest-increasing-subsequence/', diff: 'med' },
          { name: 'Word Break', url: 'https://leetcode.com/problems/word-break/', diff: 'med' },
          { name: 'Jump Game II', url: 'https://leetcode.com/problems/jump-game-ii/', diff: 'med' },
        ]},
      { icon: '⊞', name: '2D Dynamic Programming', desc: '// grid subproblems',
        problems: [
          { name: 'Unique Paths', url: 'https://leetcode.com/problems/unique-paths/', diff: 'med' },
          { name: 'Longest Common Subsequence', url: 'https://leetcode.com/problems/longest-common-subsequence/', diff: 'med' },
          { name: '0/1 Knapsack (Classic)', url: 'https://leetcode.com/problems/partition-equal-subset-sum/', diff: 'med' },
          { name: 'Edit Distance', url: 'https://leetcode.com/problems/edit-distance/', diff: 'med' },
          { name: 'Burst Balloons', url: 'https://leetcode.com/problems/burst-balloons/', diff: 'hard' },
        ]},
      { icon: '↩', name: 'Backtracking', desc: '// explore all branches',
        problems: [
          { name: 'Subsets', url: 'https://leetcode.com/problems/subsets/', diff: 'med' },
          { name: 'Combination Sum', url: 'https://leetcode.com/problems/combination-sum/', diff: 'med' },
          { name: 'Permutations', url: 'https://leetcode.com/problems/permutations/', diff: 'med' },
          { name: 'N-Queens', url: 'https://leetcode.com/problems/n-queens/', diff: 'hard' },
          { name: 'Word Search', url: 'https://leetcode.com/problems/word-search/', diff: 'med' },
        ]},
    ]
  },
  {
    id: 4, label: 'Phase 4', title: 'Phase 4 — Advanced Patterns',
    desc: 'Segment trees, Bitmask DP, Dijkstra, Union Find. These differentiate candidates who pass hard rounds.',
    duration: '6–8 weeks',
    topics: [
      { icon: '⊕', name: 'Bitmask DP', desc: '// states as binary masks',
        problems: [
          { name: 'Partition K Equal Subsets', url: 'https://leetcode.com/problems/partition-to-k-equal-sum-subsets/', diff: 'med' },
          { name: 'Shortest Path All Nodes', url: 'https://leetcode.com/problems/shortest-path-visiting-all-nodes/', diff: 'hard' },
          { name: 'Ways to Wear Hats', url: 'https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/', diff: 'hard' },
        ]},
      { icon: 'D', name: 'Dijkstra / Bellman-Ford', desc: '// weighted shortest paths',
        problems: [
          { name: 'Network Delay Time', url: 'https://leetcode.com/problems/network-delay-time/', diff: 'med' },
          { name: 'Cheapest Flights K Stops', url: 'https://leetcode.com/problems/cheapest-flights-within-k-stops/', diff: 'med' },
          { name: 'Swim in Rising Water', url: 'https://leetcode.com/problems/swim-in-rising-water/', diff: 'hard' },
        ]},
      { icon: '⟨⟩', name: 'Monotonic Stack / Queue', desc: '// next greater, sliding max',
        problems: [
          { name: 'Next Greater Element', url: 'https://leetcode.com/problems/next-greater-element-i/', diff: 'easy' },
          { name: 'Sliding Window Maximum', url: 'https://leetcode.com/problems/sliding-window-maximum/', diff: 'hard' },
          { name: 'Largest Rectangle Histogram', url: 'https://leetcode.com/problems/largest-rectangle-in-histogram/', diff: 'hard' },
        ]},
      { icon: '∪', name: 'Union Find (DSU)', desc: '// group connectivity',
        problems: [
          { name: 'Redundant Connection', url: 'https://leetcode.com/problems/redundant-connection/', diff: 'med' },
          { name: 'Accounts Merge', url: 'https://leetcode.com/problems/accounts-merge/', diff: 'med' },
          { name: 'Number of Islands II', url: 'https://leetcode.com/problems/number-of-islands-ii/', diff: 'hard' },
        ]},
      { icon: '⊂', name: 'Interval Merge / Sweep', desc: '// overlapping ranges',
        problems: [
          { name: 'Merge Intervals', url: 'https://leetcode.com/problems/merge-intervals/', diff: 'med' },
          { name: 'Non-Overlapping Intervals', url: 'https://leetcode.com/problems/non-overlapping-intervals/', diff: 'med' },
          { name: 'Insert Interval', url: 'https://leetcode.com/problems/insert-interval/', diff: 'med' },
          { name: 'Meeting Rooms II', url: 'https://leetcode.com/problems/meeting-rooms-ii/', diff: 'med' },
        ]},
      { icon: '⊻', name: 'Bit Manipulation', desc: '// XOR tricks & masks',
        problems: [
          { name: 'Single Number (XOR)', url: 'https://leetcode.com/problems/single-number/', diff: 'easy' },
          { name: 'Number of 1 Bits', url: 'https://leetcode.com/problems/number-of-1-bits/', diff: 'easy' },
          { name: 'Counting Bits', url: 'https://leetcode.com/problems/counting-bits/', diff: 'easy' },
          { name: 'Sum Without + Operator', url: 'https://leetcode.com/problems/sum-of-two-integers/', diff: 'med' },
        ]},
    ]
  },
];

function NoteModal({ problemKey, note, onSave, onClose }) {
  const [text, setText] = useState(note || '');
  return (
    <div className="note-overlay" onClick={onClose}>
      <div className="note-modal" onClick={e => e.stopPropagation()}>
        <div className="note-modal-header">
          <span className="note-modal-title">// note</span>
          <button className="note-close" onClick={onClose}>✕</button>
        </div>
        <textarea
          className="note-textarea"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="My approach, time complexity, key insight, complexity..."
          autoFocus
        />
        <div className="note-actions">
          <button className="note-cancel" onClick={onClose}>Cancel</button>
          <button className="note-save" onClick={() => { onSave(text); onClose(); }}>Save Note</button>
        </div>
      </div>
    </div>
  );
}

export default function PhaseRoadmap() {
  const [active, setActive] = useState(1);
  const [completed, setCompleted] = useState({});
  const [notes, setNotes] = useState({});
  const [noteModal, setNoteModal] = useState(null);

  const phase = phases.find((p) => p.id === active);

  const allProblems = phases.flatMap(p => p.topics.flatMap(t => t.problems.map(pr => `${p.id}-${t.name}-${pr.name}`)));
  const totalCompleted = Object.values(completed).filter(Boolean).length;
  const totalProblems = allProblems.length;

  const toggleComplete = (key, e) => {
    e.preventDefault();
    e.stopPropagation();
    setCompleted(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const openNote = (key, e) => {
    e.preventDefault();
    e.stopPropagation();
    setNoteModal(key);
  };

  const saveNote = (key, text) => setNotes(prev => ({ ...prev, [key]: text }));

  const phaseCompletedCount = (phaseId) => {
    const p = phases.find(ph => ph.id === phaseId);
    return p.topics.flatMap(t => t.problems.map(pr => `${phaseId}-${t.name}-${pr.name}`))
      .filter(k => completed[k]).length;
  };

  const phaseTotalCount = (phaseId) => {
    const p = phases.find(ph => ph.id === phaseId);
    return p.topics.reduce((acc, t) => acc + t.problems.length, 0);
  };

  return (
    <>
      {noteModal && (
        <NoteModal
          problemKey={noteModal}
          note={notes[noteModal]}
          onSave={(text) => saveNote(noteModal, text)}
          onClose={() => setNoteModal(null)}
        />
      )}

      <div className="progress-bar-wrap">
        <div className="progress-label">
          <span className="progress-text">Overall Progress</span>
          <span className="progress-count">{totalCompleted} / {totalProblems} solved</span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${(totalCompleted / totalProblems) * 100}%` }} />
        </div>
      </div>

      <div className="phase-nav">
        {phases.map((p) => {
          const done = phaseCompletedCount(p.id);
          const total = phaseTotalCount(p.id);
          return (
            <button key={p.id} className={`phase-btn${active === p.id ? ' active' : ''}`} onClick={() => setActive(p.id)}>
              {p.label}
              <span className="phase-btn-count">{done}/{total}</span>
            </button>
          );
        })}
      </div>

      <div className="phase-header">
        <div className="phase-info">
          <h3>{phase.title}</h3>
          <p>{phase.desc}</p>
        </div>
        <div className="phase-meta">
          <span className="phase-duration">⏱ {phase.duration}</span>
          <span className="phase-solved">{phaseCompletedCount(active)}/{phaseTotalCount(active)} solved</span>
        </div>
      </div>

      <div className="topics-grid">
        {phase.topics.map((topic) => {
          const topicKeys = topic.problems.map(p => `${active}-${topic.name}-${p.name}`);
          const topicDone = topicKeys.filter(k => completed[k]).length;
          const allDone = topicDone === topic.problems.length;
          return (
            <div className={`topic-card${allDone ? ' topic-all-done' : ''}`} key={topic.name}>
              <div className="topic-head">
                <div className="topic-icon">{topic.icon}</div>
                <div style={{ flex: 1 }}>
                  <div className="topic-name">{topic.name}</div>
                  <div className="topic-desc">{topic.desc}</div>
                </div>
                <div className={`topic-progress-mini${allDone ? ' all-done' : ''}`}>{topicDone}/{topic.problems.length}</div>
              </div>
              <div className="prob-list">
                {topic.problems.map((p) => {
                  const key = `${active}-${topic.name}-${p.name}`;
                  const isDone = !!completed[key];
                  const hasNote = !!(notes[key] && notes[key].trim());
                  return (
                    <div key={p.name} className={`prob-item${isDone ? ' done' : ''}`}>
                      <button className={`prob-check${isDone ? ' checked' : ''}`} onClick={(e) => toggleComplete(key, e)} title={isDone ? 'Mark incomplete' : 'Mark complete'}>
                        {isDone ? '✓' : ''}
                      </button>
                      <a className="prob-link" href={p.url} target="_blank" rel="noopener noreferrer">
                        <span className={`prob-name${isDone ? ' struck' : ''}`}>{p.name}</span>
                      </a>
                      <span className={`badge ${p.diff}`}>{p.diff === 'easy' ? 'Easy' : p.diff === 'med' ? 'Med' : 'Hard'}</span>
                      <button className={`note-btn${hasNote ? ' has-note' : ''}`} onClick={(e) => openNote(key, e)} title={hasNote ? 'Edit note' : 'Add note'}>
                        {hasNote ? '✎●' : '✎'}
                      </button>
                      <a className="ext-icon" href={p.url} target="_blank" rel="noopener noreferrer">↗</a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
