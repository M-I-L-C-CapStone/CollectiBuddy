class CollectionsController < ApplicationController
    def index 
        collections = Collection.all 
        render json: collections
    end

    def create
        collection = Collection.create(collection_params)
         if collection.valid?
            render json: collection
         else 
    def update
        collection = Collection.find(params[:id])
        collection.update(collection_params)
        if collection.valid?
            render json: collection
        else
            render json: collection.errors, status: 422
        end
    end

    private
    def collection_params
        params.require(:collection).permit(:name, :category, :description, :condition, :image, :user_id)
    end
end
