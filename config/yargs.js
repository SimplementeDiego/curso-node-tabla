const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                default: 5,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe: 'Muestra la tabla en consola'
            })
            .option('c', {
                alias: 'cantidad',
                type: 'number',
                default: 5,
                describe: 'Es la cantidad de la tabla de multiplicar'
            })
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw 'La base tiene que ser un numero'
                }
                if(isNaN(argv.c)){
                    throw 'La cantidad tiene que ser un numero'
                }
                return true;
            })
            .argv

module.exports = argv;