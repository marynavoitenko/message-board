Rails.application.routes.draw do
  
  get 'messages/most_recent', to: 'messages#most_recent'

  resources :users, only: [:index, :create, :show, :update, :destroy]
  
  resources :messages, only: [:index, :create, :show, :update, :destroy]
end
