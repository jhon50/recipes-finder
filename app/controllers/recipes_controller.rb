class RecipesController < ApplicationController

  def index
    @recipes = Queries::Recipe.with_ingredients(ingredients).limit(50)

    render layout: false
  end

  private

  def ingredients
    params[:ingredients]
  end
end
