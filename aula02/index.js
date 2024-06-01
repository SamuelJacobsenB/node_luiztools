const fs = require('fs');

const x = 0;

async function funcaoAssinc(){
    try {
        const teste = await fs.writeFile('teste.txt',`${x}`);
        await fs.writeFile('teste2.txt',`${x}`);
    } catch {
        console.log('ERRO');
    };
};

funcaoAssinc();