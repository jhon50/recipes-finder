class HomeController < ApplicationController

  def index
  end

  private

  def ingredients
    params[:ingredients]
  end
end
