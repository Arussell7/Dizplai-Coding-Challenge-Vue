import express from 'express';
import { polls as pollsRaw } from '../temp-data';
import { pollItems as pollItemsRaw } from '../temp-data';
import { pollResults as pollResultsRaw } from '../temp-data';
import cors from 'cors';

let polls = pollsRaw;
let pollItems = pollItemsRaw;
let pollResults = pollResultsRaw;

const app = express();

app.use(express.json());
app.use (cors());

app.get('/api/polls', (request, response) => {
    response.json(polls);
});

app.get('/api/activePoll', (request, response) => {
    const activePoll = polls.find(poll => poll.active === true);
    const pollId = activePoll.id;
    const filteredPollResults = pollResults.filter(pollResults => pollResults.pollId === pollId);
    const filteredPollItems = pollItems.filter(pollItems => pollItems.pollId === pollId);
    activePoll.pollItems = filteredPollItems;
    activePoll.results = filteredPollResults;
    response.json(activePoll);
});

function countVotes(pollResults, value){
    var count = 0;
    pollResults.forEach(element => {
        if(element.choice === value){
            count++;
        }
    });
    return count
}

app.get('/api/activePollResults', (request, response) => {
    const activePoll = polls.find(poll => poll.active === true);
    const pollId = activePoll.id;
    const filteredPollResults = pollResults.filter(pollResults => pollResults.pollId === pollId);
    const filteredPollItems = pollItems.filter(pollItems => pollItems.pollId === pollId);
    activePoll.pollItems = filteredPollItems;
    activePoll.results = filteredPollResults;
    var total = 0;
    activePoll.pollItems.forEach(element => {
        const count = countVotes(filteredPollResults, element.id);
        element.count = count;
        total = total + count;
    });
    activePoll.pollItems.forEach(element => {
        const percent = (element.count/total*100).toFixed(2);
        element.percentage = percent;
    });
    response.json(activePoll);
});

app.get('/api/poll/:pollId', (request, response) => {
    const pollId = request.params.pollId;
    const filteredPollResults = pollResults.filter(pollResults => pollResults.pollId === pollId);
    const filteredPollItems = pollItems.filter(pollItems => pollItems.pollId === pollId);
    const poll = polls.find(poll => poll.id === pollId);
    poll.pollItems = filteredPollItems;
    poll.results = filteredPollResults;
    response.json(poll);
});

function createPollId(){
    const oldId = polls[polls.length -1].id;
    const newId = (Number(oldId) + 1).toString();
    return newId;
};

app.post('/api/createPoll', (request, response) => {
    const event = request.body.event;
    const question = request.body.question;
    const active = false;
    const newPollItems = request.body.pollItems;
    const id = createPollId();
    newPollItems.forEach(element => {
        element.pollId = id;
        element.count = null;
        element.percentage = null;
        pollItems.push(element);
    });
    const poll = { id: id , event: event , question: question, active: active,  results: null, pollItems: null};
    polls.push(poll);
    response.json(pollItems);
});

app.post('/api/castVote', (request, response) => {
    const pollItem = request.body.pollItem;
    const pollId = pollItem.pollId;
    const choiceId = pollItem.id;
    const timestamp = request.body.timestamp;
    pollResults.push({ pollId: pollId, choice: choiceId, timestamp: timestamp});
    console.log(pollResults);
});


app.listen(8000, () => {
    console.log('Server is listening on port 8000')
});