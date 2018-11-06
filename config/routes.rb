Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
scope :api do
    resources :students do
    resources :tests, except: %i(destroy update show), controller: 'student_tests'
  end
    resources :tests, only: %i(destroy update show)
end
resources :users
# get '/student/tests/:id', to: "tests#student_tests"

end
