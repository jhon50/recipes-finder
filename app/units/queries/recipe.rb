module Queries
  class Recipe

    class << self
      OPERATOR = 'AND'.freeze

      def with_ingredients(ingredients)
        return [] if ingredients.blank?

        ::Recipe.where(ingredients_clause(ingredients))
      end

      private

      def ingredients_clause(ingredients)
        ingredients.each_with_index.map do |ingredient, index|
          clause = "ingredients LIKE '%#{ingredient}%'"
          clause.concat(" #{OPERATOR} ") unless index == ingredients.size - 1

          clause
        end.join
      end

    end
  end
end
