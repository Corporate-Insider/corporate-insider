# Corporate Insider App

## Project Description

Corporate Insider is an app where past and present employees of different companies can give insights about what a regular ‘day in the life’ is like and give their ratings on the company in order to help job searchers know what to expect and have more knowledge about companies they hope to work at. This app would also be of great help to companies to know how satisfied their employees are about the jobs they offer.

## Corporate Insider View
### Dashboard
![Dashboard](https://user-images.githubusercontent.com/64725210/92314175-16846980-ef9a-11ea-9b35-2565c670d845.png)
### Company Insight View
![Insight page](https://user-images.githubusercontent.com/64725210/92314185-2ef48400-ef9a-11ea-827d-082ae2d250d5.png)

### User Stories

- As a user I would like to be able to see reviews of some companies without signing up just so I can first know what the app is like before creating an account.
- As a user, I  would like to be able to give my review on a company so I can give other job searchers insights on what the company is like
- As a user I would like to login before having the authorization to create or edit a review so I am certain that other people won’t be able uther my personal reviews.

### Stretch Goals

- As a user I would like to give a company a five star rating incase I don’t have the words to describe my experience working with that company.
- As a user I would like to be able to chat with other users on the app to get more insights from a user about a company that user gave a review on.

## Component Hierarchy
![Screen Shot 2020-09-05 at 5 03 37 PM](https://user-images.githubusercontent.com/64725210/92314171-0a98a780-ef9a-11ea-86c6-359f35e13c0a.png)

## API Result for a Company
```json
{
    "id": 2,
    "name": "Amazon",
    "domain": "amazon.com",
    "logo": "https://logo.clearbit.com/amazon.com",
    "reviews": [
        {
            "id": 5,
            "review": "Great Company, Awesome Employees",
            "rating": 5,
            "rated": true,
            "review_url": "http://localhost:8000/reviews/5",
            "user_id": 1,
            "company": "http://localhost:8000/companies/2",
            "company_id": 2
        }
    ],
    "url": "http://localhost:8000/companies/2"