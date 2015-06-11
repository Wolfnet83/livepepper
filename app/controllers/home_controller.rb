class HomeController < ApplicationController
  def index
  end

  def load_all
    categories = Category.all
  end
end
