const express = require('express');
const router = express.Router();

// Updated Cricket Players (Sorted by Centuries)
const cricketPlayers = [
  { id: 1, name: 'Sachin Tendulkar', runs: 15921, centuries: 100, country: 'India' },
  { id: 2, name: 'Virat Kohli', runs: 12169, centuries: 81, country: 'India' },
  { id: 3, name: 'Ricky Ponting', runs: 13378, centuries: 71, country: 'Australia' },
  { id: 4, name: 'Kumar Sangakkara', runs: 12400, centuries: 63, country: 'Sri Lanka' },
  { id: 5, name: 'Jacques Kallis', runs: 13289, centuries: 62, country: 'South Africa' },
  { id: 6, name: 'Hashim Amla', runs: 9287, centuries: 55, country: 'South Africa' },
  { id: 7, name: 'Mahela Jayawardene', runs: 11814, centuries: 54, country: 'Sri Lanka' },
  { id: 8, name: 'Brian Lara', runs: 11953, centuries: 53, country: 'West Indies' },
  { id: 9, name: 'Joe Root', runs: 10198, centuries: 52, country: 'England' },
  { id: 10, name: 'Rohit Sharma', runs: 9115, centuries: 49, country: 'India' }
].sort((a, b) => b.centuries - a.centuries);

// Updated Football Players (Sorted by Goals)
const footballPlayers = [
  { id: 1, name: 'Cristiano Ronaldo', goals: 924, assists: 234, country: 'Portugal' },
  { id: 2, name: 'Lionel Messi', goals: 850, assists: 350, country: 'Argentina' },
  { id: 3, name: 'Pelé', goals: 762, assists: 0, country: 'Brazil' },
  { id: 4, name: 'Romário', goals: 756, assists: 119, country: 'Brazil' },
  { id: 5, name: 'Ferenc Puskás', goals: 725, assists: 0, country: 'Hungary' },
  { id: 6, name: 'Robert Lewandowski', goals: 600, assists: 150, country: 'Poland' },
  { id: 7, name: 'Gerd Müller', goals: 634, assists: 103, country: 'Germany' },
  { id: 8, name: 'Luis Suárez', goals: 583, assists: 220, country: 'Uruguay' },
  { id: 9, name: 'Zlatan Ibrahimović', goals: 561, assists: 201, country: 'Sweden' },
  { id: 10, name: 'Hugo Sánchez', goals: 507, assists: 0, country: 'Mexico' }
].sort((a, b) => b.goals - a.goals);

router.get('/route1', (req, res) => {
  res.json({
    success: true,
    message: 'Top 10 Cricket GOATs',
    timestamp: new Date().toISOString(),
    data: {
      sport: 'Cricket',
      sort_by: 'centuries',
      players: cricketPlayers
    }
  });
});

router.get('/route2', (req, res) => {
  res.json({
    success: true,
    message: 'Top 10 Football GOATs',
    timestamp: new Date().toISOString(),
    data: {
      sport: 'Football',
      sort_by: 'goals',
      players: footballPlayers
    }
  });
});

module.exports = router;