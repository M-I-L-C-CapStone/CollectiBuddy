# Collecti🤖Buddy

This app was created for users who need a way to keep track of their collectibles in an online database. This app currently does not support any external APIs.

## Front-End Features

- A user must have an account in order to start or view their collection.

- A user can create an account in the app.

- On the header of the app, a user can click "Add an Item" which takes them to a page with a form to create a new item in their collection. The form has a default image in the event a user does not have an image for the item.

- A user can view a page containing all of the items they've added to their collection.

- A user can see more detailed information about an item in their collection my clicking the "See More Info" button.

- On a specific item's page, a user can click a button to "Edit" an existing item, taking them to a new form to update the item. The edit form will have the information of the existing item prefilled in the form's input fields.

- On a specific item's page, a user can also see a "Delete" button that can be clicked to remove that item from their collection.

- The app includes a home page with an image carousel.

- The app includes an "About Us" page detailing information about the apps developers.

- The app includes a unique not found page that a user is redirected to in the event of a client 404.

- Testing for the Front-End is currently at 83%.

### Front-End To-Do

- Toast popups whenever a user creates, updates, or deletes an item in their collection.

- Modal dropdown with an edit form instead of navigating to a new page.

- Popover/tooltip to explain what information is required when creating or editing an item.

- Search bar in the app header to allow users to search for specific items in their collection.

- Filter functionality on index page

- A 'drag and drop' or 'choose file from computer' type image import when creating or updating an item

## Back-End Features

- Back-end contains two tables, 'Collection' and 'User'.

- Many collections belong to one user with a user_id as a foreign key.

- The Collection table validates the presence of the following:

  - name: string
  - category: string (this is handled in the create/edit forms by using dropdown selections)
  - description: string
  - condition: string (also handled by dropdowns)
  - image: text
  - user_id: integer (a user is logged in when creating instances on this table)

- The User table is imported through devise.

- Controller methods for index, new, update, and delete for Collection, with request specs for each. Create and update throw 422 errors if an invalid instance of Collection is initialized.

### Back-End To-Do

- Set up fetch requests to an external API (TBD)

## App Live Version

- (hosting on render soon)

## Running This App Locally

- Clone the app onto local

- $cd CollectiBuddy

- $bundle

- $yarn

- $yarn add jest

- $rails db:reset (creates, seeds, and migrates a fresh database for the app)

- $rails s (starts server)

- localhost:3000 in browser URL

## Dev Dependencies

- Babel

- Webpack

- React

- React-DOM

- [endwise](https://github.com/kaiwood/vscode-endwise)

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Contributors

- [Michael Rogers](https://github.com/mikerogers04)

-[Ira Holmes](https://github.com/iraholmes)

-[Leopoldo Cuero](https://github.com/Melaza6)

-[CJ Norris](https://github.com/cmnorrisii)
