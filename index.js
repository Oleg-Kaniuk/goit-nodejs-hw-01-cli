const contacts = require("./contacts");

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
      
    case "list":
      const allContacts = await contacts.listContacts();
      console.log("Список контактів:");
            return console.table(allContacts);
        
    case "get":
      const contact = await contacts.getContactById(id);
            return console.table(contact);
        
    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(`Контакт з ім'ям: ${name}, поштою: ${email}, номером: ${phone} додано!`);
            return console.table(newContact);
        
    case "remove":
      const removeContact = await contacts.removeContact(id);
      console.log(`Контакт з ID: ${id} видалено`);
      return console.table(removeContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);