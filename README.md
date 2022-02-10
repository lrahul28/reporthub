# nc-fintech-ui


To run this app,

1. Clone this repo.
2. Install yarn, `yarn install`
3. To run the project,  `yarn start`. It will runs the app in the development mode. Open http://localhost:3000 to view it in your browser.
4. To generate production build,  `yarn build`


 We are using husky to check code formatting, install husky, `yarn husky-install`

Add script to check code formatting before commit, `npx husky add .husky/pre-commit "yarn lint-staged"`


To apply prettier formatting on all the files, `yarn run-prettier`


To check prettier format errors, `yarn check-prettier`



For VS code setting,
Eslint extension: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

Prettier Extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Tailwind CSS IntelliSense: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

## How to call api using redux saga


1.  import these package 

    `import { useDispatch, useSelector } from "react-redux";`
 
 2) init on 
    
    `const dispatch = useDispatch();`
    

    `// name of reducer`

    `const Reducer = useSelector((state) => state.Reducer);`    


3. Calling api by `dispatch(checkVersion());`

4) Handle response


    
        useEffect(() => {
            if (Reducer.action) {
                if (Reducer.action === types.SEND_REQUEST_CHECKVERSION_SUCCESS) {
                    // success goes here
                } else if (Reducer.action === types.SEND_REQUEST_CHECKVERSION_FAILURE) {
                    // fail goes here
                }
            }
        }, [Reducer.action]);`


## Local storage 

To get the item,
`getItem(keys.testKey, window.localStorage);`

To set the item,
`setItem(keys.testKey, "Hello test storage", window.localStorage)`