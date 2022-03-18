If the large "node_modules" folder isn't inside your G27React folder, 
add it by typing in the terminal:
npm install

To run the website locally: open 3 terminals and execute the following:

Terminal 1:
npm run start

Terminal 2:
npx json-server --watch data/db.json --port 8000

Terminal 3:
npm install react-router-dom@5