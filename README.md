# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

https://monosnap.com/file/lWgb5Pu4JTigwD8eUqhNYRArvvI60M

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://monosnap.com/file/xiziua61bu2Zh3LC4u48r6cdBQygTj

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

https://monosnap.com/file/K2p8u7HPm2474cbwQZzQBodjmcz3CM

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://monosnap.com/file/6rEvVkDUB9si7Cz0YzCcoW3YiHXtNS
