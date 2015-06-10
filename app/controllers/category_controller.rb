class CategoryController < ApplicationController
  def index
    @categories = Category.all
    render json: @categories
  end

  def new
    #@category = Category.new
  end

  def show
    @category = Category.find(params[:id])
  end

  def edit
    @category = Category.find(params[:id])
  end

  def create
    @category = Category.new
    @category.name = params[:name]
    @category.save
    redirect_to category_index_path
  end

  def update
  end

  def destroy
  end
end
