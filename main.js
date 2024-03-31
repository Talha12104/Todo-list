#! /usr/bin/env node
// Import dependencies
import inquirer from 'inquirer';
import chalk from 'chalk';
// Initialize an empty array to store tasks
const tasks = [];
// Define the main function
async function main() {
    while (true) {
        const { action } = await inquirer.prompt({
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['Add a task', 'Delete a task', 'View tasks', 'Exit'],
        });
        switch (action) {
            case 'Add a task':
                const { task } = await inquirer.prompt({
                    type: 'input',
                    name: 'task',
                    message: 'Enter the task:',
                });
                tasks.push(task);
                console.log(chalk.green('Task added successfully!'));
                break;
            case 'Delete a task':
                const { taskIndex } = await inquirer.prompt({
                    type: 'list',
                    name: 'taskIndex',
                    message: 'Select a task to delete:',
                    choices: tasks,
                });
                tasks.splice(tasks.indexOf(taskIndex), 1);
                console.log(chalk.red('Task deleted successfully!'));
                break;
            case 'View tasks':
                console.log(chalk.yellow('Your tasks:'));
                tasks.forEach((task, index) => {
                    console.log(`${index + 1}. ${task}`);
                });
                break;
            case 'Exit':
                console.log(chalk.blue('Goodbye!'));
                process.exit(0);
            default:
                console.log(chalk.red('Invalid choice!'));
        }
    }
}
// Call the main function
main();
