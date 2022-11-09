# Education Business
Education business management with React, Ant design, Node (Express js) and MySQL

## SETUP INSTRUCTIONS
1. Clone the repository and install the dependencies.
2. Setup the database configuration in server/config/config.js


    ```javascript
    module.exports = {
        development: {
            username: 'root',
            password: '123456',
            database: 'education_business',
            host: '127.0.0.1',
            dialect: 'mysql'
        }
    }
    ```
3. Run the database migrations
    ```javascript 
    npx sequelize-cli db:migrate
    ```
4. Run the seeds
     ```javascript 
    npx sequelize-cli db:seed:all
    ```
5. Start the client app
    ```javascript 
    npm start
    ```
6. Start the server
    ```javascript 
    npm run dev
    ```

## Sample Images

![alt text](https://github.com/kadm0128/education-business/blob/main/assets/Screenshot_1.png?raw=true)

![alt text](https://github.com/kadm0128/education-business/blob/main/assets/Screenshot_2.png?raw=true)

![alt text](https://github.com/kadm0128/education-business/blob/main/assets/Screenshot_3.png?raw=true)

![alt text](https://github.com/kadm0128/education-business/blob/main/assets/Screenshot_4.png?raw=true)