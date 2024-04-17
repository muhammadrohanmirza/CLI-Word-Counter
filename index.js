#! /usr/bin/env node
// import the `inquirer` modules, which is a command line interface for Node.js.
import inquirer from "inquirer";
// Declare a constant 'answer' and assign it to the result of inquirer.prompt function.
let name = "Wellcome to Word counter ";
console.log(name);
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "To count the words, type your statement here:"
    }
]);
const words = answer.sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the word count of the sentence to the console
console.log(`The word count of your sentence is: ${words.length}`);
