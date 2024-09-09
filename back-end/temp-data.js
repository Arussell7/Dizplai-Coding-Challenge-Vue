export const polls = [
    { id:'1', event:'Premier League 2024/25', question: 'Who will win the premier league?', active: true, results: null, pollItems: null},
    { id:'2', event:'Boxing 23rd May 2025', question: 'Who will win this weekend\'s bout?', active: false, results: null, pollItems: null},
    { id:'3', event:'Wimbledon 2025', question: 'Who will be Wimbledon Champion?', active: false, results: null, pollItems: null}
];

export const pollItems = [
    { pollId: '1', id:'1', name: 'Liverpool', count: null, percentage: null},
    { pollId: '1', id:'2', name: 'Arsenal', count: null, percentage: null},
    { pollId: '1', id:'3', name: 'Manchester City', count: null, percentage: null},
    { pollId: '2', id:'1', name: 'Mayweather Jr.', count: null, percentage: null},
    { pollId: '2', id:'2', name: 'Gotti', count: null, percentage: null},
    { pollId: '3', id:'1', name: 'Novak Djokovic', count: null, percentage: null},
    { pollId: '3', id:'2', name: 'Carlos Alcaraz', count: null, percentage: null},
    { pollId: '3', id:'3', name: 'Alexander Zverev', count: null, percentage: null},
    { pollId: '3', id:'4', name: 'Danill Medvev', count: null, percentage: null},
    { pollId: '3', id:'5', name: 'Jannik Sinner', count: null, percentage: null},
    { pollId: '3', id:'6', name: 'Grigor Dimitrov', count: null, percentage: null}
];

export const pollResults = [
    {pollId:'1', choice: '1', timestamp: '12/08/2024, 12:12:23'},
    {pollId:'1', choice: '2', timestamp: '13/08/2024, 14:45:45'},
    {pollId:'1', choice: '3', timestamp: '14/08/2024, 15:23:29'},
    {pollId:'2', choice: '1', timestamp: '10/07/2024, 10:30:28'},
    {pollId:'2', choice: '2', timestamp: '12/07/2024, 19:34:37'},
    {pollId:'2', choice: '2', timestamp: '16/07/2024, 21:12:49'},
    {pollId:'3', choice: '5', timestamp: '18/06/2024, 06:23:44'},
    {pollId:'3', choice: '6', timestamp: '27/06/2024, 11:21:12'},
    {pollId:'3', choice: '1', timestamp: '29/06/2024, 12:45:32'}
];

