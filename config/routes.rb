Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :puzzles
  
  root to: 'welcome#hello'

  get 'fooo', to: 'fones_test#test'
end
