require 'rails_helper'

RSpec.describe "Collections", type: :request do
  
  let (:user) {User.create email: "test@testing.com", password: "test123", password_confirmation: "test123"}
  describe "GET /index" do
    it "list of collections" do
      user.collections.create(name: 'Cpt. Rex', category: 'Action Figure', description: 'Clone Trooper from Star Wars', condition: 'Like New', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g')

      get '/collections'
      collection = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(collection.length).to eq 1 
    end
  end
end
