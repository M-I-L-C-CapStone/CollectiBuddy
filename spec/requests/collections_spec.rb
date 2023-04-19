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
  describe "PATCH /update" do
    it "updates a collection" do
      collection_params = {
        collection: {
          name: "Captain Rex",
          category: "Action Figure",
          description: "Star Wars Clone Trooper",
          condition: "Like New",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      post "/collections", params: collection_params
      collection = Collection.first
      updated_collection_params = {
        collection: {
          name: "Clone Captain Rex",
          category: "Toy",
          description: "Clone trooper from star wars",
          condition: "In Box",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      patch "/collections/#{collection.id}", params: updated_collection_params
      updated_collection = Collection.find(collection.id)
      expect(response).to have_http_status(200)
      expect(updated_collection.name).to eq "Clone Captain Rex"
      expect(updated_collection.category).to eq "Toy"
      expect(updated_collection.description).to eq "Clone trooper from star wars"
      expect(updated_collection.condition).to eq "In Box"
      expect(updated_collection.image).to eq "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg"
      expect(updated_collection.user_id).to eq user.id
    end
    it "doesn't update a collection without a name" do
      collection_params = {
        collection: {
          name: "Captain Rex",
          category: "Action Figure",
          description: "Star Wars Clone Trooper",
          condition: "Like New",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      post "/collections", params: collection_params
      collection = Collection.first
      updated_collection_params = {
        collection: {
          name: "",
          category: "Toy",
          description: "Clone trooper from star wars",
          condition: "In Box",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      patch "/collections/#{collection.id}", params: updated_collection_params
      updated_collection = Collection.find(collection.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['name']).to include "can't be blank"
    end
    it "doesn't update a collection without a category" do
      collection_params = {
        collection: {
          name: "Captain Rex",
          category: "Action Figure",
          description: "Star Wars Clone Trooper",
          condition: "Like New",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      post "/collections", params: collection_params
      collection = Collection.first
      updated_collection_params = {
        collection: {
          name: "Clone Captain Rex",
          category: "",
          description: "Clone trooper from star wars",
          condition: "In Box",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      patch "/collections/#{collection.id}", params: updated_collection_params
      updated_collection = Collection.find(collection.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['category']).to include "can't be blank"
    end
    it "doesn't update a collection without a description" do
      collection_params = {
        collection: {
          name: "Captain Rex",
          category: "Action Figure",
          description: "Star Wars Clone Trooper",
          condition: "Like New",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      post "/collections", params: collection_params
      collection = Collection.first
      updated_collection_params = {
        collection: {
          name: "Clone Captain Rex",
          category: "Toy",
          description: "",
          condition: "In Box",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      patch "/collections/#{collection.id}", params: updated_collection_params
      updated_collection = Collection.find(collection.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['description']).to include "can't be blank"
    end
    it "doesn't update a collection without a condition" do
      collection_params = {
        collection: {
          name: "Captain Rex",
          category: "Action Figure",
          description: "Star Wars Clone Trooper",
          condition: "Like New",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      post "/collections", params: collection_params
      collection = Collection.first
      updated_collection_params = {
        collection: {
          name: "Clone Captain Rex",
          category: "Toy",
          description: "Clone trooper from star wars",
          condition: "",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      patch "/collections/#{collection.id}", params: updated_collection_params
      updated_collection = Collection.find(collection.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['condition']).to include "can't be blank"
    end
    it "doesn't update a collection without an image" do
      collection_params = {
        collection: {
          name: "Captain Rex",
          category: "Action Figure",
          description: "Star Wars Clone Trooper",
          condition: "Like New",
          image: "https://live.staticflickr.com/8048/8349271749_bce9163bcc_b.jpg",
          user_id: user.id
        }
      }
      post "/collections", params: collection_params
      collection = Collection.first
      updated_collection_params = {
        collection: {
          name: "Clone Captain Rex",
          category: "Toy",
          description: "Clone trooper from star wars",
          condition: "In Box",
          image: "",
          user_id: user.id
        }
      }
      patch "/collections/#{collection.id}", params: updated_collection_params
      updated_collection = Collection.find(collection.id)
      expect(response.status).to eq 422
      json = JSON.parse(response.body)
      expect(json['image']).to include "can't be blank"
    end
  end
end
