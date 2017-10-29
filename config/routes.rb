Rails.application.routes.draw do
  root 'record#index'

  get 'api/record/order'

  namespace :api do
    resources :record, only: [:index, :create]
  end
end
