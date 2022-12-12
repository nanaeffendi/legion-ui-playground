## Prerequisite
Run legion-ui application in your local environment, and run `yarn link` in legion-ui folder to symlink in to another app. 

## Getting Started

* Clone this repo, and get in to the folder
* Update link on package.json dependencies in to related legion-ui folder path, and so on to another theme. For example:
    ```bash
    "legion-ui": "link:../../Telkom/legion-ui",
    "@legion-theme/agree": "link:../../Telkom/Theme-Agree-Website",
    ```
* Run `yarn link "legion-ui"`, and also for another theme.

* Then, run the playground development server:

    ```bash
    yarn
    # then
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

![](https://images2.imgbox.com/95/50/rbu9bJGl_o.png)
