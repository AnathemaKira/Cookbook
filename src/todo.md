## Tables
recipe(ID, name, description, imageName, favorite)
user(ID, name)
userPreferences(ID, recipe_ID, user_ID)
recipe_rating(ID, recipe_ID, user_ID, rating)
recipe_tags(recipe_ID, tag_ID)
tags(ID, category_ID, name)
category(ID, name)