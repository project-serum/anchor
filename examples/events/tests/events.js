//const anchor = require('@project-serum/anchor');
const anchor = require('/home/armaniferrante/Documents/code/src/github.com/project-serum/anchor/ts');

describe('events', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  it('Is initialized!', async () => {
			const program = anchor.workspace.Events;

			let listener = null;

			let prom = new Promise(async (resolve, _reject) => {
					listener = program.addEventListener('MyEvent', (event) => {
							resolve(event);
					});
					const tx = await program.rpc.initialize();
			});
			let event = await prom;

			console.log('event yay', event);

			await program.removeEventListener(listener);
  });
});
