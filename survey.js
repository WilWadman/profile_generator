const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your favourite animal? ', (answer) => {
  const animal = answer;
  rl.question('What is your favourite city? ', (answer) => {
    const city = answer;
    rl.question('What is your favourite food? ', (answer) => {
      const food = answer;
      rl.question('What genre of music do you prefer? ', (answer) => {
        const music = answer;
        rl.question('What do you do for work?', (answer) => {
          const work = answer;
          rl.question('What is your name? ', (answer) => {
            const name = answer;
            console.log(`Good day to you! Welcome to my profile, my name is ${name}!! For work I ${work}, and I enjoy listening to ${music} while I do it! I wish that I could turn into ${animal}, and move to ${city}, so I could eat as much ${food} as I want! If you want to reach out, don't forget the name is ${name} `);
                         rl.close();
                        });
        });
      });
    });
  });
});