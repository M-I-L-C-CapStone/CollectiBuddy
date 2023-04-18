class CreateCollections < ActiveRecord::Migration[7.0]
  def change
    create_table :collections do |t|
      t.string :name
      t.string :category
      t.text :description
      t.string :condition
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
