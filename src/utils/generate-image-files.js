// this file doesn't actually generate images it just outputs what to be imported

const array = [['blue', 'purple', 'yellow'], ['open', 'solid', 'striped'], ['moon', 'planet', 'star']];

const upperCaseFirst = word => word.charAt(0).toUpperCase() + word.substring(1);

const variables = [];
for (let i = 0; i < 3; i += 1) {
    const color = array[0][i];
    for (let j = 0; j < 3; j += 1) {
        const fill = array[1][j];
        for (let k = 0; k < 3; k += 1) {
            const shape = array[2][k];
            const filePath = `'../../images/cards/${color}_${fill}_${shape}.png'`;
            const variable = color + upperCaseFirst(fill) + upperCaseFirst(shape);
            console.log(`import ${variable} from ${filePath};`);
            variables.push(variable);
        }
    }
}

const exportStr = `export default { ${variables.join(',\n')}  };`;
console.log(exportStr);

