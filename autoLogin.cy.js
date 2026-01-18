describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio'); // зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
         cy.get('#mail').type('user_name'); // ввели верный логин
         cy.get('#pass').type('user_password'); // верный пароль
         cy.get('#loginButton').click(); // нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверю что после автотеста вижу текст
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя

           });
           it('Неверный пароль и верный логин', function () {
            cy.visit('https://login.qa.studio'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
            cy.get('#mail').type('user_name'); // ввели верный логин
            cy.get('#pass').type('user_password1'); // Неверный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверю что после автотеста вижу текст
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя


        });

         it('Восстановление пароля', function () {
            cy.visit('https://login.qa.studio'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
            cy.get('#forgotEmailButton').click(); // нажали кнопку восстановления 
            cy.get('#mailForgot').type('user_mail'); // вписал почту
            cy.get('#restoreEmailButton').click(); // нажал кнопку отправки
            cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
            cy.get('#messageHeader').should('be.visible');
         });

         it('Верный пароль и неверный логин', function () {
            cy.visit('https://login.qa.studio'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
            cy.get('#mail').type('user_name1'); // ввели неверный логин
            cy.get('#pass').type('user_password'); // вверный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверю что после автотеста вижу текст
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя

        });
        it('Некорректная валидация и верный пароль', function () {
            cy.visit('https://login.qa.studio'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
            cy.get('#mail').type('user_name_without_@'); // ввели некорректный логин
            cy.get('#pass').type('user_password'); // вверный корректный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверю что после автотеста вижу текст
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя

         });

        it('Проверка на приведение к строчным буквам в логине', function () {
            cy.visit('https://login.qa.studio'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки
            cy.get('#mail').type('usEr_nAmE'); // ввели  логин некорректным регистром
            cy.get('#pass').type('user_password'); // вверный корректный пароль
            cy.get('#loginButton').click(); // нажал войти
            cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверю что после автотеста вижу текст
            cy.get('#messageHeader').should('be.visible');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя

         });


     })
