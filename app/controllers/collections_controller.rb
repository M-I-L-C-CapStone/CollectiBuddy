class CollectionsController < ApplicationController
    def index 
        collections = Collection.all 
        render json: collections
    end 
    def destroy
        collections = Collection.find(parms[:id])
        collections.destroy
        render json: collections
    end
end
