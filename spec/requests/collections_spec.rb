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

  describe "POST /create" do
    it "creates a collection" do
      collection_params = {
        collection: {
          name: 'Cpt. Rex', category: 'Action Figure', description: 'Clone Trooper from Star Wars', condition: 'Like New', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g', user_id: user.id
        }
      }

      post '/collections', params: collection_params
      expect(response).to have_http_status(200)

      collection = Collection.first
      expect(collection.name).to eq 'Cpt. Rex'
      expect(collection.category).to eq 'Action Figure'
      expect(collection.description).to eq 'Clone Trooper from Star Wars'
      expect(collection.condition).to eq 'Like New'
      expect(collection.image).to eq 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g'
    end
  end

  describe "does not create a collection without valid attributes" do
    it "does not create a collection without a name" do
      collection_params = {
        collection: {
          category: 'Action Figure', description: 'Clone Trooper from Star Wars', condition: 'Like New', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g', user_id: user.id
        }
      }
      post '/collections', params: collection_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['name']).to include("can't be blank")
    end

    it "does not create a collection without a category" do
      collection_params = {
        collection: {
          name: 'Cpt. Rex', description: 'Clone Trooper from Star Wars', condition: 'Like New', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g', user_id: user.id
        }
      }
      post '/collections', params: collection_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['category']).to include("can't be blank")
    end

    it "does not create a collection without a description" do
      collection_params = {
        collection: {
          name: 'Cpt. Rex', category: 'Action Figure', condition: 'Like New', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g', user_id: user.id
        }
      }
      post '/collections', params: collection_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['description']).to include("can't be blank")
    end

    it "does not create a collection without a condition" do
      collection_params = {
        collection: {
          name: 'Cpt. Rex', category: 'Action Figure', description: 'Clone Trooper from Star Wars', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g', user_id: user.id
        }
      }
      post '/collections', params: collection_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['condition']).to include("can't be blank")
    end

    it "does not create a collection without an image" do
      collection_params = {
        collection: {
          name: 'Cpt. Rex', category: 'Action Figure', description: 'Clone Trooper from Star Wars', condition: 'Like New', user_id: user.id
        }
      }
      post '/collections', params: collection_params
      expect(response).to have_http_status(422)
      json = JSON.parse(response.body)
      expect(json['image']).to include("can't be blank")
    end
  end
end