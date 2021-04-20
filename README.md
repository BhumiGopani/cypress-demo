# cypress-demo

# git commands
`git clone branch_url`
`git checkout -b [name_of_your_new_branch]`
`git push origin [name_of_your_new_branch]`
`git branch -a`
`git add <files>`
`git commit -m "message"`
`git push -u origin <branch>`

# generate package.json
`npm init`

# to install package.json
`npm install`

# Install Cypress
`npm install cypress --save-dev`

# To install iframes support
`npm install -D cypress-iframe`

# Open Cypress in terminal by
`node_modules/.bin/cypress open`

# Testing Framework supported by default with Cypress, it has added in dependency
Mocha and Chai

# Browser supported
Cypress has support for Chrome-family browsers (including Electron and Chromium-based Microsoft Edge), and Firefox.

# Run tests form terminal and by default its electron browser
`node_modules/.bin/cypress run``
`node_modules/.bin/cypress run --headed`
`node_modules/.bin/cypress run --browser chrome`
`node_modules/.bin/cypress run --browser firefox`
`node_modules/.bin/cypress run --browser edge`
`npx cypress run`
`npx cypress run --spec "cypress/integration/examples/Test1.js"`

# Imp folder info
- Put all testdata in fixtures folder
- All tests cases are written in integration folder
- Listners are put in plugins folder like pre-req, after tests etc
- Reusable methods are written in support folder
- Test case excution video is stored in videos folder
- cypress.json overide all the basic configuration in test runner settings
- cypress supports only css selectors
- .text() is a JQeury command, need to resolve promise before attaching it to cy commands


# css selectors helpers (Use cro path plugin to find better selectors)
id              #idname
classname       .classname
                tagname.classname
                tagname[attribute=value]
                go from parent to child like -> form input

# Chai assertion
behaviour validations - should("be.XXXX")
value comparions - should("have.xxxx",   ss)
assertions with should - be, have, include
string comparision - expect(str).to.equal("Hello , Are you sure you want to confirm?")

