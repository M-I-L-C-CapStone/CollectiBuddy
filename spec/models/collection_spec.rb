require 'rails_helper'

RSpec.describe Collection, type: :model do
  let (:user) {User.create email: "test@testing.com", password: "test123", password_confirmation: "test123"}
    it "is not valid without a user" do
      collection = Collection.create(name: "Cpt. Rex", category: 'Action Figure', description: 'Clone Trooper from Star Wars', condition: 'Like New', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g')
      expect(collection.errors[:user_id]).to include "can't be blank"
    end
    it "should validate name" do 
      collection = user.collections.create(category: 'Action Figure', description: 'Clone Trooper from Star Wars', condition: 'Like New', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g')
      expect(collection.errors[:name]).to include "can't be blank"
    end
    
    it "should validate category" do 
      collection = user.collections.create(name: 'Cpt. Rex', description: 'Clone Trooper from Star Wars', condition: 'Like New', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g')
      expect(collection.errors[:category]).to include "can't be blank"
    end
     
    it "should validate description" do 
      collection = user.collections.create(name: 'Cpt. Rex', category: 'Action Figure', condition: 'Like New', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g')
      expect(collection.errors[:description]).to include "can't be blank"
    end
     
    it "should validate condition" do 
      collection = user.collections.create(name: 'Cpt. Rex', category: 'Action Figure', description: 'Clone Trooper from Star Wars', image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g')
      expect(collection.errors[:condition]).to include "can't be blank"
    end

    it "should validate image" do 
      collection = user.collections.create(name: 'Cpt. Rex', category: 'Action Figure', description: 'Clone Trooper from Star Wars', condition: 'Like New')
      expect(collection.errors[:image]).to include "can't be blank"
    end
end