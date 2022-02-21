# Recipes Finder

Type your ingredients and the recipes will pop up.

Ruby Version: 3.0.3
Rails Version: 6.1.4.6

Features:
* Seed recipes from json file
* Load recipes via AJAX
* Input with tag support

### How to run
```bash
# install yarn dependencies
yarn install

# install gems
bundle install

# setup database
bundle exec rake db:setup

# run migrations
bundle exec rake db:migrate

# seed data
bundle exec rake db:seed
```

### Heroku
```bash
https://quiet-stream-68426.herokuapp.com/
```

## Future Improvements
No specs were added due to not having enough time, focus was more on delivering and deploying to heroku.
More filters could be added when searching for recipes.
