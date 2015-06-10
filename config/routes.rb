Rails.application.routes.draw do
  resources 'category' do
    resource 'product'
  end
  get 'home/index'
  get 'products/index'

  root 'home#index'
end
