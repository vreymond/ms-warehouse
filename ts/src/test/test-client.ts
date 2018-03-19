
import client = require('../wh-client')
import * as types from '../types/index';
import win = require('../lib/logger');
import program = require('commander');


program
  .option('-v, --verbose <level>', 'Specified the verbose level (debug, info, success, warning, error, critical)') 
  .parse(process.argv);


if (program.verbose){
	let upper: string = program.verbose.toUpperCase();		// change loglevel string into upper case (to match logger specifications)
	if (win.levels.hasOwnProperty(upper)){
		win.logger.level = upper;
	}
	else {
		win.logger.log('WARNING', `No key ${upper} found in logger.levels. Using the default INFO level`);
	}
} 


let constraints: types.jobConstr = {
	"script": null, "coreScript": "7b8459fdb1eee409262251c429c48814",
	"inputs": {
		"file1.inp": "7726e41aaafd85054aa6c9d4747dec7b"
	}
}

function createJobBySocket(constraints: types.jobConstr){
	client.push(constraints)
}


    


function onJobComp(data: any) {

}

createJobBySocket(constraints);
