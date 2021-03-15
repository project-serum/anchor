//const anchor = require('@project-serum/anchor');
const anchor = require('/home/armaniferrante/Documents/code/src/github.com/project-serum/anchor/ts');

describe('events', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  it('Is initialized!', async () => {
			const program = anchor.workspace.Events;

			let prom = new Promise((resolve, _reject) => {
					program.addEventListener('MyEvent', (event) => {
							resolve(event);
					});
			});

			const tx = await program.rpc.initialize();
			let event = await prom;

			console.log('event', event);
  });
});
