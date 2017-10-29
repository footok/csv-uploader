Rails.application.routes.draw do
  root 'index#index'

  get 'api/record/list'

  namespace :api do
    resources :record, only: [:index, :create]
  end
end
