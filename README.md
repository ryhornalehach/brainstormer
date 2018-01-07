[ ![Codeship Status for ryhornalehach/brainstormer](https://app.codeship.com/projects/0cf459b0-d572-0135-e8d1-2aadb9628cc1/status?branch=master)](https://app.codeship.com/projects/263121)
[![Maintainability](https://api.codeclimate.com/v1/badges/39d234c70c35c66b0ce6/maintainability)](https://codeclimate.com/github/ryhornalehach/brainstormer/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/39d234c70c35c66b0ce6/test_coverage)](https://codeclimate.com/github/ryhornalehach/brainstormer/test_coverage)
[![Coverage Status](https://coveralls.io/repos/github/ryhornalehach/brainstormer/badge.svg?branch=master)](https://coveralls.io/github/ryhornalehach/brainstormer?branch=master)


# Developed by: Ryhor (Greg) Nalehach
Brainstormer

# Technologies used in the app:
  1. Ruby on Rails
  2. React.js
  3. PostgreSQL database
  4. Materialize Framework
  5. Application deployed in production using Heroku
  6. Amazon Web Services (S3) with Carrierwave gem for photo uploads
  7. Devise gem for user authentication

# To start the application:
  1. Bundle install ruby gems:
    $ bundle
  2. Install nmp packages:
    $ npm install
  3. Create and migrate the database:
    $ rake db:create
    $ rake db:migrate
  4. Start the server:
    $ rails s
    $ npm start
  5. Test with Rspec:
    $ rake db:test:prepare
    $ rake
