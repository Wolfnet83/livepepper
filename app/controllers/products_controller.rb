class ProductsController < ApplicationController
  def index
    @products = Product.where(category_id: params[:category_id])
    render json: @products
  end

  def create
    @product = Product.new
    @product.category_id = params[:category_id]
    @product.name = params[:name]
    @product.description = params[:description]
    @product.price = params[:price]
    @product.save
    redirect_to :back
  end

  def update
    product = Product.find(params[:product_id])
    product.category_id = params[:category_id]
    product.save
    render nothing: true
  end
end
