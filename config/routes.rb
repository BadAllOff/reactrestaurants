Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :restaurants do
    resources :comments do
      put 'upvote', to: 'comments#upvote'
      put 'downvote', to: 'comments#downvote'
    end
  end

  root 'restaurants#index'
end
