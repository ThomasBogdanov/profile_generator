const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? Nicknames are also acceptable :) ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('Whats an activity you like doing?', (answer) => {
		console.log(`${answer} is really cool!`);
		rl.question('What do you listen to while doing that?', (anwer) => {
			console.log("Fascinating!");
			rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
				console.log("The best meal of the day!");
				rl.question('Whats your favourite thing to eat for that meal?', (answer) => {
					console.log('Sounds yummy! :)');
					rl.question('Which sport is your absolute favourite?', (answer) => {
						console.log("Thats a fun sport!");
						rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
							console.log('Thats an awesome superpower!!!');
							rl.close();
						});
					});
				});
			});
		});
  });
});

