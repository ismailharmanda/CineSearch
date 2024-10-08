# React Native Movie Search App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Introduction

This is a simple Movie Search App built using React Native. The app allows users to search, filter, and toggle favorite status of movies. It demonstrates the use of React Native components, state management, and basic styling.

## Features

- Search movies
- Filter movies By genre
- Toggle movies' favorite status
- Infinite scroll

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:ismailharmanda/CineSearch.git
   cd CineSearch
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Install CocoaPods dependencies (iOS only):

   ```bash
   cd ios
   pod install
   cd ..
   ```

4. Start the Metro bundler:

   ```bash
   npx react-native start
   ```

5. Run the app on your desired platform (Android/iOS):
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

## Usage

Once the app is running, you can:

- Search movies by typing in the input field.
- Toggle a movie's favorite status by pressing the "Favorite" button.
- Filter movies by genres by pressing the "Genre" buttons.
- Go to detail of a movie by pressing the Movie card.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch: git checkout -b my-feature-branch.
Make your changes and commit them: git commit -m 'Add some feature'.
Push to the branch: git push origin my-feature-branch.
Submit a pull request.
