let client = { // object in JSON with attributes
    name:           'gary',
    address:        {address: '1015 oak hill park', city: 'kennedale', state: 'tx', zip: '76000'},
    networth:        15.00,
    riskTolerance:  'medium',
    nextVisit:      "July 1, 2020",
    children:       ['shiloh', 'jared', 'christiaan', 'nathan', 'casey', 'chauncey']
}
client.email= 'julius@yahoo.com';

let searchChild = 'christiaan';
console.log(`${client.name} lives in ${client.address.city} and is worth ${client.networth}`);
for (const child of client.children) {
    console.log(`--> ${child}`)
    if (child === searchChild)
        console.log(`How is your ${child}`)
}
console.table(client.children)
client.children.push('henry');
client.children.push('sam');
let firstChild = client.children.shift();
console.log(client.children[4].length)