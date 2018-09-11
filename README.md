# MESSAGE BOARD

## About
A web app where anyone can leave a message, anonymous or not, specifying recipient or not. A collection of fun, informative, or inspirational messages.

## Demo

[Video demo](https://youtu.be/sM-DV2bRgGY)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
What things you need to install the application

Make sure Ruby is installed

```
ruby -v
```

Make sure Rails is installed

```
rails -v
```

## Installing:
A step by step guide how to get a development env running

Clone this repo

```
git clone git@github.com:marynavoitenko/message-board.git
```

Install all gem dependencies from api folder

```
bundle install
```

Install all js dependencies from client folder

```
npm install
```

Create db and migrate schema from api folder

```
rake db:create
rake db:migrate
```

Now run the application from api folder

```
rake start
```

## CONTRIBUTING
Bug reports and pull requests are welcome on GitHub at https://github.com/marynavoitenko/message-board. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## LICENSE

[The MIT License (MIT)](https://github.com/marynavoitenko/message-board/blob/master/LICENSE.md)
