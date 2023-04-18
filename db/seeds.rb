user1 = User.where(email: 'test@testing.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')
user2 = User.where(email: 'test2@testing.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')

user1_collections = [{
    name: 'Cpt. Rex',
    category: 'Action Figure', 
    description: 'Clone Trooper from Star Wars', 
    condition: 'Like New', 
    image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g'
    },      
    {
        name: 'Cpt. Rex',
        category: 'Action Figure', 
        description: 'Clone Trooper from Star Wars', 
        condition: 'Like New', 
        image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g'
    },
    {
        name: 'Cpt. Rex',
        category: 'Action Figure', 
        description: 'Clone Trooper from Star Wars', 
        condition: 'Like New', 
        image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g'
    }
]

user2_collections = [{
    name: 'Cpt. Rex',
    category: 'Action Figure', 
    description: 'Clone Trooper from Star Wars', 
    condition: 'Like New', 
    image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g'
    },      
    {
        name: 'Cpt. Rex',
        category: 'Action Figure', 
        description: 'Clone Trooper from Star Wars', 
        condition: 'Like New', 
        image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g'
    },
    {
        name: 'Cpt. Rex',
        category: 'Action Figure', 
        description: 'Clone Trooper from Star Wars', 
        condition: 'Like New', 
        image: 'https://static.wikia.nocookie.net/heathcliff/images/b/b8/Heathcliff_promotional.png/revision/latest?cb=20210522181311g'
    }
]

user1_collections.each do |collection|
    user1.collections.create(collection)
    p "Created: #{collection}"
end

user2_collections.each do |collection|
    user2.collections.create(collection)
    p "Created: #{collection}"
end