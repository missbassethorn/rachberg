Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :puzzles, only: [:index, :show, :new, :edit]
  resources :games, only: [:new]

  get 'finish', to: 'games#finish', as: :finish_game
  
  root to: 'welcome#hello'

  get 'fooo', to: 'fones_test#test'
end
