Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
resources :students
resources :tests
resources :users
get '/student/tests/:id', to: "tests#student_tests"
end
