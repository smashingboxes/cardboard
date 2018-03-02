Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "application#frontend"

  namespace :api do
    namespace :v1 do
      resources :projects, only: %i(index show)
      resources :stories, only: %i(create show)
    end
  end
end
