class CategoryController < ApplicationController
  def index
    @categories = Category.all
    respond_to do |format|
      format.html
      format.json { render json: @categories }
    end
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
    respond_to do |format|
      format.html {redirect_to category_index_path} 
      format.json { render json: @category }
    end
  end

  def update
  end

  def destroy
    @category = Category.find(params[:id])
    @category.destroy
    respond_to do |format|
      format.html {redirect_to category_index_path} 
      format.json { render nothing: true }
    end
  end
end
