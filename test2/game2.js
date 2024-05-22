function navigate(screen) {
    const screens = document.querySelectorAll('.content');
    screens.forEach(s => s.style.display = 'none');
    document.getElementById(`${screen}-screen`).style.display = 'block';
}

function startBattle() {
    alert('Battle started!');
    const enemies = [
        { agility: 3, name: 'enemy1', hp: 100 },
        { agility: 2, name: 'enemy2', hp: 80 }
    ];
    const player = { agility: 1, attackPower: 10, hp: 150 };

    let turn = 0;
    const interval = setInterval(() => {
        console.clear();
        console.log('turn ' + turn);
        // Player attacks every turn
        regPlayerAttack();
        
        // Check if all enemies are dead, end the interval
        if (enemies.every(({ hp }) => hp <= 0)) {
            clearInterval(interval);
            console.log('All enemies defeated! Battle won.');
        } else if (player.hp <= 0) {
            clearInterval(interval);
            console.log('Player is defeated. Game over.');
        }

        // Enemies attack based on their agility
        enemies
            .filter(({ agility }) => turn % agility === 0)
            .forEach(enemy => enemyAttack(enemy));
        
        turn++;
    }, 1000);

    function regPlayerAttack() {
        console.log('Player attacking...');
        const target = enemies.find(enemy => enemy.hp > 0);
        if (target) {
            target.hp -= player.attackPower;
            console.log(`Player attacked ${target.name} for ${player.attackPower} damage. ${target.name} has ${target.hp} HP left.`);
        }
    }

    function enemyAttack(enemy) {
        const enemyAttackPower = 5; // Define enemy attack power
        console.log(`${enemy.name} attacking...`);
        player.hp -= enemyAttackPower;
        console.log(`${enemy.name} attacked Player for ${enemyAttackPower} damage. Player has ${player.hp} HP left.`);
    }
}

function exploreDungeon() {
    alert('Exploring dungeon...');
    // Implement dungeon exploration logic here


    if (Math.random() > 0.5) {
        initiateNpcEncounter();
    } else {
        alert("Nothing happened this time. Keep exploring!");
    }
}

function collectResources() {
  const currentLocation = "forest"; // Get the player's current location dynamically in your game

  // Filter available resources based on location
  const availableResources = resourceLocations[currentLocation];

  if (availableResources.length === 0) {
    alert("No resources available in this area.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * availableResources.length);
  const resourceType = availableResources[randomIndex];
  const quantityCollected = Math.ceil(Math.random() * 5); // Random quantity

  resources[resourceType].quantity += quantityCollected;

  alert(
    `You collected ${quantityCollected} ${resources[resourceType].name} in the ${currentLocation}!`
  );

function manageSkills() {
  const skills = {
    swordfighting: { name: "Swordfighting", level: 1, experience: 0 },
    archery: { name: "Archery", level: 1, experience: 0 },
    defense: { name: "Defense", level: 1, experience: 0 },
    magic: { name: "Magic", level: 1, experience: 0 },
    alchemy: { name: "Alchemy", level: 1, experience: 0 },
    lockpicking: { name: "Lockpicking", level: 1, experience: 0 },
    stealth: { name: "Stealth", level: 1, experience: 0 }
    // ... Add more skills as needed
  };

  const skillExperienceThresholds = {
    1: 100,
    2: 250,
    3: 500,
    4: 850,
    5: 1300,
    6: 1850,
    7: 2500,
    8: 3250,
    9: 4100,
    10: 5000 // Example max level
    // ... Add more thresholds if you have more levels
  };

  // Check for level-ups and update skill levels
  for (const skill in skills) {
    while (
      skills[skill].experience >=
      skillExperienceThresholds[skills[skill].level]
    ) {
      skills[skill].level++;
      alert(`Your ${skills[skill].name} skill has reached level ${skills[skill].level}!`);

      // Optional: provide bonuses for leveling up a skill
      if (skills[skill].name === "Swordfighting") {
        player.attackPower += 5; // Increase player's attack power if Swordfighting levels up
      }
    }
  }

  // Display skills in a more organized way
  let skillDisplay = "Your Skills:\n";
  for (const skill in skills) {
    skillDisplay += `- ${skills[skill].name}: Level ${skills[skill].level} (Experience: ${skills[skill].experience}/${skillExperienceThresholds[skills[skill].level]})\n`;
  }
  alert(skillDisplay);

    // Optionally, allow the player to choose a skill to upgrade if they have enough experience
    // ... 
    }

// (Example: Increasing Experience based on actions)
function enemyDefeated() {
  skills.swordfighting.experience += 50; // Example: Gain 50 swordfighting experience
  // Check for level up and call manageSkills() to update UI if needed
}



}

function interactButton(id) {
    const adjacentButtons = getAdjacentButtons(id);
    adjacentButtons.forEach(buttonId => {
        document.getElementById(`pentagon${buttonId}`).style.backgroundColor = '#FFD700';
    });
    document.getElementById('reward-box').classList.remove('hidden');
    document.getElementById('reward-box').style.display = 'block';
}

function getAdjacentButtons(id) {
    // Define adjacency relationships
    const adjacencyMap = {
        1: [2, 4],
        2: [1, 3, 5],
        3: [2, 4],
        4: [1, 3, 5],
        5: [2, 4]
    };
    return adjacencyMap[id];
}

function initiateNpcEncounter() {
    document.getElementById('npc-encounter').classList.remove('hidden');
    document.getElementById('npc-dialogue').innerText = "You encounter a mysterious NPC. What do you do?";
}

function npcResponse(responseId) {
    let dialogue;
    switch (responseId) {
        case 1:
            dialogue = "The NPC gives you a valuable item!";
            break;
        case 2:
            dialogue = "The NPC shares some useful information.";
            break;
        default:
            dialogue = "The NPC ignores you.";
    }
    document.getElementById('npc-dialogue').innerText = dialogue;
    setTimeout(() => {
        document.getElementById('npc-encounter').classList.add('hidden');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('reward-box').style.display = 'none';
});

